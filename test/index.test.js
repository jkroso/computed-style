var should = require('chai').should()
  , style = require('../src')

var target = document.getElementById('target')

describe('computed-style', function () {
	it('should return the correct values', function () {
		var comp = style(target)
		comp.should.have.property('width', '100px')   	
		comp.should.have.property('height', '50px')   	
		comp.should.have.property('borderWidth', '1px')   	
	})
})