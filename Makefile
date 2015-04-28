BIN = ./node_modules/.bin
SRC = $(wildcard src/*.js)
LIB = $(SRC:src/%.js=lib/%.js)

build: babel browser

babel: $(LIB)

browser: src/browser/require.js
	@$(BIN)/browserify src/browser/require.js -t babelify --outfile lib/browser.js

lib/%.js: src/%.js
	@mkdir -p $(@D)
	@$(BIN)/babel $< --out-file $@ --source-maps-inline

clean:
	@rm -rf lib

test: build lint
	@$(BIN)/mocha --harmony --require must

lint:
	@$(BIN)/eslint src test

release-major: test
	@$(BIN)/bump --major

release-minor: test
	@$(BIN)/bump --minor

release-patch: test
	@$(BIN)/bump --patch

publish:
	git push --tags origin HEAD:master
	npm publish