require.memoize(bravojs.realpath(bravojs.mainModuleDir + '/c371cd05c8df40c0af3b1515b808c9d737b98b02@/package.json'), [], function() { return {"uid":"http://github.com/cadorn/ace-extjs/packages/extjs4-ace/","name":"extjs4-ace","main":"lib/component.js","contexts":{"top":{"/lib/component":{"load":{"github.com/cadorn/ace-extjs/packages/extjs-ace/":{"parent":"github.com/cadorn/ace-extjs/packages/extjs4-ace/","load":{"github.com/cadorn/ace-extjs/packages/ace-editor/":{"parent":"github.com/cadorn/ace-extjs/packages/extjs-ace/@/","include":["github.com/ajaxorg/pilot/@/lib/pilot/index","github.com/ajaxorg/ace/@/lib/ace/defaults","github.com/ajaxorg/cockpit/@/lib/cockpit/index","github.com/ajaxorg/ace/@/lib/ace/range","github.com/ajaxorg/ace/@/lib/ace/tokenizer","github.com/ajaxorg/ace/@/lib/ace/mode/text","github.com/ajaxorg/ace/@/lib/ace/mode/matching_brace_outdent","github.com/ajaxorg/ace/@/lib/ace/mode/doc_comment_highlight_rules"],"load":{"github.com/ajaxorg/ace/":{"parent":"github.com/cadorn/ace-extjs/packages/ace-editor/@/main","include":["github.com/ajaxorg/ace/@/lib/ace/range","github.com/ajaxorg/ace/@/lib/ace/tokenizer","github.com/ajaxorg/ace/@/lib/ace/mode/text","github.com/ajaxorg/ace/@/lib/ace/mode/matching_brace_outdent","github.com/ajaxorg/ace/@/lib/ace/mode/doc_comment_highlight_rules"],"load":{"github.com/ajaxorg/ace/@/lib/ace/mode/*":{"parent":"github.com/ajaxorg/ace/@/","parents":{"github.com/ajaxorg/ace/@/":["github.com/ajaxorg/ace/@/lib/ace/range","github.com/ajaxorg/ace/@/lib/ace/tokenizer","github.com/ajaxorg/ace/@/lib/ace/mode/text","github.com/ajaxorg/ace/@/lib/ace/mode/matching_brace_outdent","github.com/ajaxorg/ace/@/lib/ace/mode/doc_comment_highlight_rules"],"github.com/cadorn/ace-extjs/packages/ace-editor/@/main":["github.com/ajaxorg/pilot/@/lib/pilot/index","github.com/ajaxorg/ace/@/lib/ace/defaults","github.com/ajaxorg/cockpit/@/lib/cockpit/index","github.com/ajaxorg/ace/@/lib/ace/range","github.com/ajaxorg/ace/@/lib/ace/tokenizer","github.com/ajaxorg/ace/@/lib/ace/mode/text","github.com/ajaxorg/ace/@/lib/ace/mode/matching_brace_outdent","github.com/ajaxorg/ace/@/lib/ace/mode/doc_comment_highlight_rules"],"github.com/cadorn/ace-extjs/packages/extjs-ace/@/":[],"github.com/cadorn/ace-extjs/packages/extjs4-ace/":[]}},"github.com/ajaxorg/ace/@/lib/ace/theme/*":{"parent":"github.com/ajaxorg/ace/@/","parents":{"github.com/ajaxorg/ace/@/":["github.com/ajaxorg/ace/@/lib/ace/range","github.com/ajaxorg/ace/@/lib/ace/tokenizer","github.com/ajaxorg/ace/@/lib/ace/mode/text","github.com/ajaxorg/ace/@/lib/ace/mode/matching_brace_outdent","github.com/ajaxorg/ace/@/lib/ace/mode/doc_comment_highlight_rules"],"github.com/cadorn/ace-extjs/packages/ace-editor/@/main":["github.com/ajaxorg/pilot/@/lib/pilot/index","github.com/ajaxorg/ace/@/lib/ace/defaults","github.com/ajaxorg/cockpit/@/lib/cockpit/index","github.com/ajaxorg/ace/@/lib/ace/range","github.com/ajaxorg/ace/@/lib/ace/tokenizer","github.com/ajaxorg/ace/@/lib/ace/mode/text","github.com/ajaxorg/ace/@/lib/ace/mode/matching_brace_outdent","github.com/ajaxorg/ace/@/lib/ace/mode/doc_comment_highlight_rules"],"github.com/cadorn/ace-extjs/packages/extjs-ace/@/":[],"github.com/cadorn/ace-extjs/packages/extjs4-ace/":[]}}},"id":"github.com/ajaxorg/ace/@/","ignore":true,"parents":{"github.com/cadorn/ace-extjs/packages/ace-editor/@/main":["github.com/ajaxorg/pilot/@/lib/pilot/index","github.com/ajaxorg/ace/@/lib/ace/defaults","github.com/ajaxorg/cockpit/@/lib/cockpit/index","github.com/ajaxorg/ace/@/lib/ace/range","github.com/ajaxorg/ace/@/lib/ace/tokenizer","github.com/ajaxorg/ace/@/lib/ace/mode/text","github.com/ajaxorg/ace/@/lib/ace/mode/matching_brace_outdent","github.com/ajaxorg/ace/@/lib/ace/mode/doc_comment_highlight_rules"],"github.com/cadorn/ace-extjs/packages/extjs-ace/@/":[],"github.com/cadorn/ace-extjs/packages/extjs4-ace/":[]}}},"id":"github.com/cadorn/ace-extjs/packages/ace-editor/@/main","parents":{"github.com/cadorn/ace-extjs/packages/extjs-ace/@/":[],"github.com/cadorn/ace-extjs/packages/extjs4-ace/":[]}}},"id":"github.com/cadorn/ace-extjs/packages/extjs-ace/@/","ignore":true,"parents":{"github.com/cadorn/ace-extjs/packages/extjs4-ace/":[]}}},"id":"github.com/cadorn/ace-extjs/packages/extjs4-ace/@/lib/component","parents":{}}}},"mappings":{"extjs-ace":{"location":"" + bravojs.mainModuleDir + "/aae9e0c4eed45f3c888f8e7824a96a83f5f8f861"},"ace":{"location":"" + bravojs.mainModuleDir + "/be838c6d9a6db05254ca57f11ea5029390a2997c"},"cockpit":{"location":"" + bravojs.mainModuleDir + "/539c1b401b1ed3c4feb4e16c715a1e9fd4289992"},"pilot":{"location":"" + bravojs.mainModuleDir + "/ebd88462734df1207a34b544b42917b1f1f52813"}}}; });
require.memoize(bravojs.realpath(bravojs.mainModuleDir + '/c371cd05c8df40c0af3b1515b808c9d737b98b02@/lib/component'), ['extjs-ace/component'], function (require, exports, module)
{
    var COMPONENT = require("extjs-ace/component");

    exports.main = function()
    {
        COMPONENT.init();
        
        var component = COMPONENT.getComponent();

        component.extend = "Ext.AbstractComponent";

        Ext.define("Ext.ux.AceEditor", component);
    }
});
require.memoize(bravojs.realpath(bravojs.mainModuleDir + '/be838c6d9a6db05254ca57f11ea5029390a2997c@/lib/ace/mode/coffee'), ['ace/tokenizer','ace/mode/coffee_highlight_rules','ace/mode/matching_brace_outdent','ace/range','ace/mode/text','pilot/oop'], function (require, exports, module) {


var Tokenizer = require("ace/tokenizer").Tokenizer;
var Rules     = require("ace/mode/coffee_highlight_rules").CoffeeHighlightRules;
var Outdent   = require("ace/mode/matching_brace_outdent").MatchingBraceOutdent;
var Range     = require("ace/range").Range;
var TextMode  = require("ace/mode/text").Mode;
var oop       = require("pilot/oop")

function CoffeeMode() {
    this.$tokenizer = new Tokenizer(new Rules().getRules());
    this.$outdent   = new Outdent();
};

oop.inherits(CoffeeMode, TextMode);

var proto = CoffeeMode.prototype;
var indenter = /(?:[({[=:]|[-=]>|\b(?:else|switch|try|catch(?:\s*[$A-Za-z_\x7f-\uffff][$\w\x7f-\uffff]*)?|finally))\s*$/;
var commentLine = /^(\s*)#/;
var hereComment = /^\s*###(?!#)/;
var indentation = /^\s*/;

proto.getNextLineIndent = function(state, line, tab) {
    var indent = this.$getIndent(line);
    var tokens = this.$tokenizer.getLineTokens(line, state).tokens;

    if (!(tokens.length && tokens[tokens.length - 1].type === 'comment') &&
        state === 'start' && indenter.test(line))
        indent += tab;
    return indent;
};

proto.toggleCommentLines = function(state, doc, startRow, endRow){
    console.log("toggle");
    var range = new Range(0, 0, 0, 0);
    for (var i = startRow; i <= endRow; ++i) {
        var line = doc.getLine(i);
        if (hereComment.test(line))
            continue;
            
        if (commentLine.test(line))
            line = line.replace(commentLine, '$1');
        else
            line = line.replace(indentation, '$&#');

        range.end.row = range.start.row = i;
        range.end.column = line.length + 1;
        doc.replace(range, line);
    }
};

proto.checkOutdent = function(state, line, input) {
    return this.$outdent.checkOutdent(line, input);
};

proto.autoOutdent = function(state, doc, row) {
    this.$outdent.autoOutdent(doc, row);
};

exports.Mode = CoffeeMode;

});
require.memoize(bravojs.realpath(bravojs.mainModuleDir + '/be838c6d9a6db05254ca57f11ea5029390a2997c@/lib/ace/mode/coffee_highlight_rules'), ['pilot/oop','ace/mode/text_highlight_rules'], function (require, exports, module) {


require("pilot/oop").inherits(
  CoffeeHighlightRules,
  require("ace/mode/text_highlight_rules").TextHighlightRules);

function CoffeeHighlightRules() {
var identifier = "[$A-Za-z_\\x7f-\\uffff][$\\w\\x7f-\\uffff]*"
  , keywordend = "(?![$\\w]|\\s*:)"
  , stringfill = {token: "string", regex: ".+"}
;
this.$rules =
  { start:
    [ { token: "identifier"
      , regex: "(?:@|(?:\\.|::)\\s*)" + identifier
      }
    , { token: "keyword"
      , regex: "(?:t(?:h(?:is|row|en)|ry|ypeof)|s(?:uper|witch)|return|b(?:reak|y)|c(?:ontinue|atch|lass)|i(?:n(?:stanceof)?|s(?:nt)?|f)|e(?:lse|xtends)|f(?:or (?:own)?|inally|unction)|wh(?:ile|en)|n(?:ew|ot?)|d(?:e(?:lete|bugger)|o)|loop|o(?:ff?|[rn])|un(?:less|til)|and|yes)" + keywordend
      }
    , { token: "constant.language"
      , regex: "(?:true|false|null|undefined)" + keywordend
      }
    , { token: "invalid.illegal"
      , regex: "(?:c(?:ase|onst)|default|function|v(?:ar|oid)|with|e(?:num|xport)|i(?:mplements|nterface)|let|p(?:ackage|r(?:ivate|otected)|ublic)|static|yield|__(?:hasProp|extends|slice|bind|indexOf))" + keywordend
      }
    , { token: "language.support.class"
      , regex: "(?:Array|Boolean|Date|Function|Number|Object|R(?:e(?:gExp|ferenceError)|angeError)|S(?:tring|yntaxError)|E(?:rror|valError)|TypeError|URIError)" + keywordend
      }
    , { token: "language.support.function"
      , regex: "(?:Math|JSON|is(?:NaN|Finite)|parse(?:Int|Float)|encodeURI(?:Component)?|decodeURI(?:Component)?)" + keywordend
      }
    , { token: "identifier"
      , regex: identifier
      }
    , { token: "constant.numeric"
      , regex: "(?:0x[\\da-fA-F]+|(?:\\d+(?:\\.\\d+)?|\\.\\d+)(?:[eE][+-]?\\d+)?)"
      }
    , { token: "string"
      , regex: "'''"
      , next : "qdoc"
      }
    , { token: "string"
      , regex: '"""'
      , next : "qqdoc"
      }
    , { token: "string"
      , regex: "'"
      , next : "qstring"
      }
    , { token: "string"
      , regex: '"'
      , next : "qqstring"
      }
    , { token: "string"
      , regex: "`"
      , next : "js"
      }
    , { token: "string.regex"
      , regex: "///"
      , next : "heregex"
      }
    , { token: "string.regex"
      , regex: "/(?!\\s)[^[/\\n\\\\]*(?: (?:\\\\.|\\[[^\\]\\n\\\\]*(?:\\\\.[^\\]\\n\\\\]*)*\\])[^[/\\n\\\\]*)*/[imgy]{0,4}(?!\\w)"
      }
    , { token: "comment"
      , regex: "###(?!#)"
      , next : "comment"
      }
    , { token: "comment"
      , regex: "#.*"
      }
    , { token: "lparen"
      , regex: "[({[]"
      }
    , { token: "rparen"
      , regex: "[\\]})]"
      }
    , { token: "keyword.operator"
      , regex: "\\S+"
      }
    , { token: "text"
      , regex: "\\s+"
      }
    ]
  , qdoc:
    [ { token: "string"
      , regex: ".*?'''"
      , next : "start"
      }
    , stringfill
    ]
  , qqdoc:
    [ { token: "string"
      , regex: '.*?"""'
      , next : "start"
      }
    , stringfill
    ]
  , qstring:
    [ { token: "string"
      , regex: "[^\\\\']*(?:\\\\.[^\\\\']*)*'"
      , next : "start"
      }
    , stringfill
    ]
  , qqstring:
    [ { token: "string"
      , regex: '[^\\\\"]*(?:\\\\.[^\\\\"]*)*"'
      , next : "start"
      }
    , stringfill
    ]
  , js:
    [ { token: "string"
      , regex: "[^\\\\`]*(?:\\\\.[^\\\\`]*)*`"
      , next : "start"
      }
    , stringfill
    ]
  , heregex:
    [ { token: "string.regex"
      , regex: '.*?///[imgy]{0,4}'
      , next : "start"
      }
    , { token: "comment.regex"
      , regex: "\\s+(?:#.*)?"
      }
    , { token: "string.regex"
      , regex: "\\S+"
      }
    ]
  , comment:
    [ { token: "comment"
      , regex: '.*?###'
      , next : "start"
      }
    , { token: "comment"
      , regex: ".+"
      }
    ]
  };
}

exports.CoffeeHighlightRules = CoffeeHighlightRules;
});
__bravojs_loaded_moduleIdentifier = bravojs.realpath(bravojs.mainModuleDir + '/be838c6d9a6db05254ca57f11ea5029390a2997c@/lib/ace/mode/coffee');