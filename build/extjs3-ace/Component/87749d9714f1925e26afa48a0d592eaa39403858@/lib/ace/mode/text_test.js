require.memoize(bravojs.realpath(bravojs.mainModuleDir + '/75facf7e3e2e534c307f54f259c3e920b1dc6965@/package.json'), [], function() { return {"uid":"http://github.com/cadorn/ace-extjs/packages/extjs3-ace/","name":"extjs3-ace","main":"lib/component.js","contexts":{"top":{"/lib/component":{"include":{"github.com/cadorn/ace-extjs/packages/extjs-ace/":{}}}}},"mappings":{"extjs-ace":{"location":"" + bravojs.mainModuleDir + "/aae9e0c4eed45f3c888f8e7824a96a83f5f8f861"},"ace":{"location":"" + bravojs.mainModuleDir + "/87749d9714f1925e26afa48a0d592eaa39403858"},"cockpit":{"location":"" + bravojs.mainModuleDir + "/b5bd9e5093176e86aa6f6c4d581342361d8c923f"},"pilot":{"location":"" + bravojs.mainModuleDir + "/f9a24d6931cb0c0e8264fed132a0ed8c97415c4c"}}}; });
require.memoize(bravojs.realpath(bravojs.mainModuleDir + '/75facf7e3e2e534c307f54f259c3e920b1dc6965@/lib/component'), ['extjs-ace/component'], function (require, exports, module)
{
    var COMPONENT = require("extjs-ace/component");

    exports.main = function()
    {
        COMPONENT.init();
        
        var component = COMPONENT.getComponent();

        Ext.ux.AceEditor = Ext.extend(Ext.BoxComponent, component);
    }
});
require.memoize(bravojs.realpath(bravojs.mainModuleDir + '/87749d9714f1925e26afa48a0d592eaa39403858@/lib/ace/mode/text_test'), ['ace/edit_session','ace/mode/text','ace/test/assertions','asyncjs'], function (require, exports, module) {


var EditSession = require("ace/edit_session").EditSession;
var TextMode = require("ace/mode/text").Mode;
var assert = require("ace/test/assertions");

module.exports = {
    setUp : function() {
        this.mode = new TextMode();
    },

    "test: toggle comment lines should not do anything" : function() {
        var session = new EditSession(["  abc", "cde", "fg"]);

        var comment = this.mode.toggleCommentLines("start", session, 0, 1);
        assert.equal(["  abc", "cde", "fg"].join("\n"), session.toString());
    },


    "text: lines should not be indented" : function() {
        assert.equal("", this.mode.getNextLineIndent("start", "   abc", "  "));
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
__bravojs_loaded_moduleIdentifier = bravojs.realpath(bravojs.mainModuleDir + '/87749d9714f1925e26afa48a0d592eaa39403858@/lib/ace/mode/text_test');