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
require.memoize(bravojs.realpath(bravojs.mainModuleDir + '/87749d9714f1925e26afa48a0d592eaa39403858@/lib/ace/mode/textile'), ['pilot/oop','ace/mode/text','ace/tokenizer','ace/mode/textile_highlight_rules','ace/mode/matching_brace_outdent','ace/range'], function (require, exports, module) {


var oop = require("pilot/oop");
var TextMode = require("ace/mode/text").Mode;
var Tokenizer = require("ace/tokenizer").Tokenizer;
var TextileHighlightRules = require("ace/mode/textile_highlight_rules").TextileHighlightRules;
var MatchingBraceOutdent = require("ace/mode/matching_brace_outdent").MatchingBraceOutdent;
var Range = require("ace/range").Range;

var Mode = function()
{
    this.$tokenizer = new Tokenizer(new TextileHighlightRules().getRules());
    this.$outdent = new MatchingBraceOutdent();
};
oop.inherits(Mode, TextMode);

(function()
{
    this.getNextLineIndent = function(state, line, tab)
    {
        if (state == "intag")
            return tab;
        
        return "";
    };

    this.checkOutdent = function(state, line, input) {
        return this.$outdent.checkOutdent(line, input);
    };

    this.autoOutdent = function(state, doc, row) {
        this.$outdent.autoOutdent(doc, row);
    };
    
}).call(Mode.prototype);

exports.Mode = Mode;

});
require.memoize(bravojs.realpath(bravojs.mainModuleDir + '/87749d9714f1925e26afa48a0d592eaa39403858@/lib/ace/mode/textile_highlight_rules'), ['pilot/oop','ace/mode/text_highlight_rules'], function (require, exports, module) {


var oop = require("pilot/oop");
var TextHighlightRules = require("ace/mode/text_highlight_rules").TextHighlightRules;

var TextileHighlightRules = function()
{
/*
    var phraseModifiers = lang.arrayToMap(
        ("_|*|__|**|??|-|+|^|%|@").split("|")
    );
    
    var blockModifiers = lang.arrayToMap(
        ("h1|h2|h3|h4|h5|h6|bq|p|bc|pre").split("|")
    );
    */
    /*
    var punctuation = lang.arrayToMap(
        ("-|--|(tm)|(r)|(c)").split("|")
    );
    */
    
    this.$rules = {
        "start" : [
            {
                token : "keyword", // start of block
                regex : "h1|h2|h3|h4|h5|h6|bq|p|bc|pre",
                next  : "blocktag"
            },
            {
                token : "keyword",
                regex : "[\\*]+|[#]+"
            },
            {
                token : "text",
                regex : ".+"
            }
        ],
        "blocktag" : [
            {
                token : "keyword",
                regex : "\\. ",
                next  : "start",
            },
            {
                token : "keyword",
                regex : "\\(",
                next  : "blocktagproperties"
            },
        ],
        "blocktagproperties" : [
            {
                token : "keyword",
                regex : "\\)",
                next  : "blocktag"
            },
            {
                token : "string",
                regex : "[a-zA-Z0-9\\-_]+"
            },
            {
                token : "keyword",
                regex : "#"
            },
        ]
    };
};

oop.inherits(TextileHighlightRules, TextHighlightRules);

exports.TextileHighlightRules = TextileHighlightRules;

});
__bravojs_loaded_moduleIdentifier = bravojs.realpath(bravojs.mainModuleDir + '/87749d9714f1925e26afa48a0d592eaa39403858@/lib/ace/mode/textile');