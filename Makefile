BIN = ./node_modules/.bin
SRC = $(wildcard src/*.js)
LIB = $(SRC:src/%.js=lib/%.js)

build: babel browser

babel: $(LIB)
browser: lib/browser.min.js

lib/browser.js: $(SRC)
	@$(BIN)/browserify src/browser/require.js -t babelify -o $@

lib/browser.min.js: lib/browser.js
	@$(BIN)/uglifyjs $< -o $@ --comments

lib/%.js: src/%.js
	@mkdir -p $(@D)
	@$(BIN)/babel $< --out-file $@

clean:
	@rm -rf lib

test: build lint
	@$(BIN)/mocha
	@$(BIN)/mocha-phantomjs test/browser/index.html

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
	npm publish --access=public