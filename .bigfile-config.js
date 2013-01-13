var Promise = require('laissez-faire')

module.exports = function (config) {
	config.compileTime.handlers.push({
		if: /\/node_modules\/mocha\/index\.js$/,
		do: function (file) {
			var p = new Promise
			var browerVersion = file.path.replace(/index\.js$/, 'mocha.js')
			require('fs').readFile(browerVersion, 'utf-8', function (err, src) {
				if (err) 
					p.reject(new Error('Unable to load the browser version of mocha'))
				console.log('replacing mocha')
				file.text = src +='\nmodule.exports = mocha'
				p.resolve(file)
			})
			return p
		}
	})
	config.resolveTime.fileTypes.unshift({
		if: /\/node_modules\/mocha\/index\.js$/,
		make: function Module (file) {
			var location = file.path
			var path = require('path')
			this.path = location
			this.base = path.dirname(location)
			this.ext = path.extname(location)
			this.name = path.basename(location, this.ext)
			this.text = file.text
			this.lastModified = file['last-modified']
			this.requires = function () {
				return []
			}
		}
	})
}
