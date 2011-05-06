require.memoize(bravojs.realpath(bravojs.mainModuleDir + '/87749d9714f1925e26afa48a0d592eaa39403858@/lib/ace/mode/javascript_test'), ['ace/edit_session','ace/tokenizer','ace/mode/javascript','ace/test/assertions','asyncjs'], function (require, exports, module) {


var EditSession = require("ace/edit_session").EditSession;
var Tokenizer = require("ace/tokenizer").Tokenizer;
var JavaScriptMode = require("ace/mode/javascript").Mode;
var assert = require("ace/test/assertions");

module.exports = {
    setUp : function() {    
        this.mode = new JavaScriptMode();
    },

    "test: getTokenizer() (smoke test)" : function() {
        var tokenizer = this.mode.getTokenizer();

        assert.ok(tokenizer instanceof Tokenizer);

        var tokens = tokenizer.getLineTokens("'juhu'", "start").tokens;
        assert.equal("string", tokens[0].type);
    },

    "test: toggle comment lines should prepend '//' to each line" : function() {
        var session = new EditSession(["  abc", "cde", "fg"]);

        var comment = this.mode.toggleCommentLines("start", session, 0, 1);
        assert.equal(["//  abc", "//cde", "fg"].join("\n"), session.toString());
    },

    "test: toggle comment on commented lines should remove leading '//' chars" : function() {
        var session = new EditSession(["//  abc", "//cde", "fg"]);

        var comment = this.mode.toggleCommentLines("start", session, 0, 1);
        assert.equal(["  abc", "cde", "fg"].join("\n"), session.toString());
    },

    "test: toggle comment lines twice should return the original text" : function() {
	    var session = new EditSession(["  abc", "cde", "fg"]);
	
	    this.mode.toggleCommentLines("start", session, 0, 2);
	    this.mode.toggleCommentLines("start", session, 0, 2);
	    assert.equal(["  abc", "cde", "fg"].join("\n"), session.toString());
	},

    "test: toggle comment on multiple lines with one commented line prepend '//' to each line" : function() {
        var session = new EditSession(["//  abc", "//cde", "fg"]);

        var comment = this.mode.toggleCommentLines("start", session, 0, 2);
        assert.equal(["////  abc", "////cde", "//fg"].join("\n"), session.toString());
    },

    "test: toggle comment on a comment line with leading white space": function() {
        var session = new EditSession(["//cde", "  //fg"]);

        var comment = this.mode.toggleCommentLines("start", session, 0, 1);
        assert.equal(["cde", "  fg"].join("\n"), session.toString());
    },

    "test: auto indent after opening brace" : function() {
        assert.equal("  ", this.mode.getNextLineIndent("start", "if () {", "  "));
    },

    "test: no auto indent after opening brace in multi line comment" : function() {
        assert.equal("", this.mode.getNextLineIndent("start", "/*if () {", "  "));
        assert.equal("  ", this.mode.getNextLineIndent("comment", "  abcd", "  "));
    },

    "test: no auto indent after opening brace in single line comment" : function() {
        assert.equal("", this.mode.getNextLineIndent("start", "//if () {", "  "));
        assert.equal("  ", this.mode.getNextLineIndent("start", "  //if () {", "  "));
    },

    "test: no auto indent should add to existing indent" : function() {
        assert.equal("      ", this.mode.getNextLineIndent("start", "    if () {", "  "));
        assert.equal("    ", this.mode.getNextLineIndent("start", "    cde", "  "));
    },

    "test: special indent in doc comments" : function() {
        assert.equal(" * ", this.mode.getNextLineIndent("doc-start", "/**", " "));
        assert.equal("   * ", this.mode.getNextLineIndent("doc-start", "  /**", " "));
        assert.equal(" * ", this.mode.getNextLineIndent("doc-start", " *", " "));
        assert.equal("    * ", this.mode.getNextLineIndent("doc-start", "    *", " "));
        assert.equal("  ", this.mode.getNextLineIndent("doc-start", "  abc", " "));
    },

    "test: no indent after doc comments" : function() {
        assert.equal("", this.mode.getNextLineIndent("doc-start", "   */", "  "));
    },

    "test: trigger outdent if line is space and new text starts with closing brace" : function() {
        assert.ok(this.mode.checkOutdent("start", "   ", " }"));
        assert.ok(!this.mode.checkOutdent("start", " a  ", " }"));
        assert.ok(!this.mode.checkOutdent("start", "", "}"));
        assert.ok(!this.mode.checkOutdent("start", "   ", "a }"));
        assert.ok(!this.mode.checkOutdent("start", "   }", "}"));
    },

    "test: auto outdent should indent the line with the same indent as the line with the matching opening brace" : function() {
        var session = new EditSession(["  function foo() {", "    bla", "    }"]);
        this.mode.autoOutdent("start", session, 2);
        assert.equal("  }", session.getLine(2));
    },

    "test: no auto outdent if no matching brace is found" : function() {
        var session = new EditSession(["  function foo()", "    bla", "    }"]);
        this.mode.autoOutdent("start", session, 2);
        assert.equal("    }", session.getLine(2));
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
__bravojs_loaded_moduleIdentifier = bravojs.realpath(bravojs.mainModuleDir + '/87749d9714f1925e26afa48a0d592eaa39403858@/lib/ace/mode/javascript_test');