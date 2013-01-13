test/built.js: src/index.js test/*.test.js
	@./node_modules/.bin/bigfile --entry=test/browser.js --write=test/built.js -lb

Readme.md: docs/*.md src/*
	@cat docs/head.md > Readme.md
	# @dox --api < src/index.js >> Readme.md
	@cat docs/tail.md >> Readme.md

.PHONY: docs test
