require.memoize(bravojs.realpath(bravojs.mainModuleDir + '/87749d9714f1925e26afa48a0d592eaa39403858@/lib/ace/mode/javascript_tokenizer_test'), ['ace/mode/javascript','ace/test/assertions','asyncjs'], function (require, exports, module) {


var JavaScriptMode = require("ace/mode/javascript").Mode;
var assert = require("ace/test/assertions");

module.exports = {
    setUp : function() {
        this.tokenizer = new JavaScriptMode().getTokenizer();
    },

    "test: tokenize1" : function() {
        var line = "foo = function";

        var tokens = this.tokenizer.getLineTokens(line, "start").tokens;

        assert.equal(5, tokens.length);
        assert.equal("identifier", tokens[0].type);
        assert.equal("text", tokens[1].type);
        assert.equal("keyword.operator", tokens[2].type);
        assert.equal("text", tokens[3].type);
        assert.equal("keyword", tokens[4].type);
    },

    "test: tokenize doc comment" : function() {
        var line = "abc /** de */ fg";

        var tokens = this.tokenizer.getLineTokens(line, "start").tokens;

        assert.equal(5, tokens.length);
        assert.equal("identifier", tokens[0].type);
        assert.equal("text", tokens[1].type);
        assert.equal("comment.doc", tokens[2].type);
        assert.equal("text", tokens[3].type);
        assert.equal("identifier", tokens[4].type);
    },

    "test: tokenize doc comment with tag" : function() {
        var line = "/** @param {} */";

        var tokens = this.tokenizer.getLineTokens(line, "start").tokens;

        assert.equal(3, tokens.length);
        assert.equal("comment.doc", tokens[0].type);
        assert.equal("comment.doc.tag", tokens[1].type);
        assert.equal("comment.doc", tokens[2].type);
    },

    "test: tokenize parens" : function() {
        var line = "[{( )}]";

        var tokens = this.tokenizer.getLineTokens(line, "start").tokens;

        assert.equal(3, tokens.length);
        assert.equal("lparen", tokens[0].type);
        assert.equal("text", tokens[1].type);
        assert.equal("rparen", tokens[2].type);
    },
    
    "test for last rule in ruleset to catch capturing group bugs" : function() {
        var tokens = this.tokenizer.getLineTokens("}", "start").tokens;
        
        assert.equal(1, tokens.length);
        assert.equal("rparen", tokens[0].type);
    },
    
    "test tokenize regular expressions": function() {
        var tokens = this.tokenizer.getLineTokens("a/b/c", "start").tokens;
        assert.equal(5, tokens.length);
    }
};

});
require.memoize(bravojs.realpath(bravojs.mainModuleDir + '/87749d9714f1925e26afa48a0d592eaa39403858@/lib/ace/test/assertions'), ['assert'], function (require, exports, module) {


var assert = require("assert");
    
assert.position = function(cursor, row, column) {
    assert.equal(cursor.row, row);
    assert.equal(cursor.column, column);
};

assert.range = function(range, startRow, startColumn, endRow, endColumn) {
    assert.position(range.start, startRow, startColumn);
    assert.position(range.end, endRow, endColumn);
};

assert.notOk = function(value) {
    assert.equal(value, false);   
}

exports.jsonEquals = function(foundJson, expectedJson) {
    assert.equal(JSON.stringify(foundJson), JSON.stringify(expectedJson));
};

module.exports = assert;

});
require.memoize(bravojs.realpath(bravojs.mainModuleDir + '/a3d9ddf257e98144c883cd2dbc03ab62243dbc09@/modules/assert'), [], function (require, exports, module) {

});
__bravojs_loaded_moduleIdentifier = bravojs.realpath(bravojs.mainModuleDir + '/87749d9714f1925e26afa48a0d592eaa39403858@/lib/ace/mode/javascript_tokenizer_test');