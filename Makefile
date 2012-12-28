all: clean build test docs

install:
	@component install -d

build:
	@component build -dv

test:
	@bigfile --entry=test/browser.js --write=test/browser-built.js -lb

clean:
	@rm -rf build components

docs:
	@cat docs/head.md > Readme.md
	# @dox --api < src/index.js >> Readme.md
	@cat docs/tail.md >> Readme.md

.PHONY: all build clean docs install test
