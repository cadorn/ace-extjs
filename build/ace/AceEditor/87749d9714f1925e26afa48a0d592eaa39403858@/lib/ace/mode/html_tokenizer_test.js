require.memoize(bravojs.realpath(bravojs.mainModuleDir + '/87749d9714f1925e26afa48a0d592eaa39403858@/lib/ace/mode/html_tokenizer_test'), ['ace/mode/html','ace/test/assertions','asyncjs'], function (require, exports, module) {


var HtmlMode = require("ace/mode/html").Mode;
var assert = require("ace/test/assertions");

module.exports = {
    setUp : function() {
        this.tokenizer = new HtmlMode().getTokenizer();
    },

    "test: tokenize embedded script" : function() {

        var line = "<script a='a'>var</script>'123'";
        var tokens = this.tokenizer.getLineTokens(line, "start").tokens;

        //assert.equal(10, tokens.length);
        assert.equal("text", tokens[0].type);
        assert.equal("keyword", tokens[1].type);
        assert.equal("text", tokens[2].type);
        assert.equal("keyword", tokens[3].type);
        assert.equal("text", tokens[4].type);
        assert.equal("string", tokens[5].type);
        assert.equal("text", tokens[6].type);
        assert.equal("keyword", tokens[7].type);
        assert.equal("text", tokens[8].type);
        assert.equal("keyword", tokens[9].type);
        assert.equal("text", tokens[10].type);
    },
    
    "test: tokenize multiline attribute value with double quotes": function() {
        var line1 = this.tokenizer.getLineTokens('<a href="abc', "start");
        var t1 = line1.tokens;
        var t2 = this.tokenizer.getLineTokens('def">', line1.state).tokens;
        assert.equal(t1[t1.length-1].type, "string");
        assert.equal(t2[0].type, "string");
    },
    
    "test: tokenize multiline attribute value with single quotes": function() {
        var line1 = this.tokenizer.getLineTokens('<a href=\'abc', "start");
        var t1 = line1.tokens;
        var t2 = this.tokenizer.getLineTokens('def\'>', line1.state).tokens;
        assert.equal(t1[t1.length-1].type, "string");
        assert.equal(t2[0].type, "string");
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
__bravojs_loaded_moduleIdentifier = bravojs.realpath(bravojs.mainModuleDir + '/87749d9714f1925e26afa48a0d592eaa39403858@/lib/ace/mode/html_tokenizer_test');