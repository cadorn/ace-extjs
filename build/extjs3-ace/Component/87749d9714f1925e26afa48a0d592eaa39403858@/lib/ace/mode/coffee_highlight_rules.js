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
require.memoize(bravojs.realpath(bravojs.mainModuleDir + '/87749d9714f1925e26afa48a0d592eaa39403858@/lib/ace/mode/coffee_highlight_rules'), ['pilot/oop','ace/mode/text_highlight_rules'], function (require, exports, module) {


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
__bravojs_loaded_moduleIdentifier = bravojs.realpath(bravojs.mainModuleDir + '/87749d9714f1925e26afa48a0d592eaa39403858@/lib/ace/mode/coffee_highlight_rules');