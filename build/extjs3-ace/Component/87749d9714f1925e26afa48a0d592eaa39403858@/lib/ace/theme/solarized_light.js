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
require.memoize(bravojs.realpath(bravojs.mainModuleDir + '/87749d9714f1925e26afa48a0d592eaa39403858@/lib/ace/theme/solarized_light'), ['pilot/dom'], function (require, exports, module) {


    var dom = require("pilot/dom");

    var cssText = ".ace-solarized-light .ace_editor {\
  border: 2px solid rgb(159, 159, 159);\
}\
\
.ace-solarized-light .ace_editor.ace_focus {\
  border: 2px solid #327fbd;\
}\
\
.ace-solarized-light .ace_gutter {\
  width: 50px;\
  background: #e8e8e8;\
  color: #333;\
  overflow : hidden;\
}\
\
.ace-solarized-light .ace_gutter-layer {\
  width: 100%;\
  text-align: right;\
}\
\
.ace-solarized-light .ace_gutter-layer .ace_gutter-cell {\
  padding-right: 6px;\
}\
\
.ace-solarized-light .ace_print_margin {\
  width: 1px;\
  background: #e8e8e8;\
}\
\
.ace-solarized-light .ace_scroller {\
  background-color: #FDF6E3;\
}\
\
.ace-solarized-light .ace_text-layer {\
  cursor: text;\
  color: #586E75;\
}\
\
.ace-solarized-light .ace_cursor {\
  border-left: 2px solid #000000;\
}\
\
.ace-solarized-light .ace_cursor.ace_overwrite {\
  border-left: 0px;\
  border-bottom: 1px solid #000000;\
}\
 \
.ace-solarized-light .ace_marker-layer .ace_selection {\
  background: #073642;\
}\
\
.ace-solarized-light .ace_marker-layer .ace_step {\
  background: rgb(198, 219, 174);\
}\
\
.ace-solarized-light .ace_marker-layer .ace_bracket {\
  margin: -1px 0 0 -1px;\
  border: 1px solid rgba(147, 161, 161, 0.50);\
}\
\
.ace-solarized-light .ace_marker-layer .ace_active_line {\
  background: #EEE8D5;\
}\
\
       \
.ace-solarized-light .ace_invisible {\
  color: rgba(147, 161, 161, 0.50);\
}\
\
.ace-solarized-light .ace_keyword {\
  color:#859900;\
}\
\
.ace-solarized-light .ace_keyword.ace_operator {\
  \
}\
\
.ace-solarized-light .ace_constant {\
  \
}\
\
.ace-solarized-light .ace_constant.ace_language {\
  color:#B58900;\
}\
\
.ace-solarized-light .ace_constant.ace_library {\
  \
}\
\
.ace-solarized-light .ace_constant.ace_numeric {\
  color:#D33682;\
}\
\
.ace-solarized-light .ace_invalid {\
  \
}\
\
.ace-solarized-light .ace_invalid.ace_illegal {\
  \
}\
\
.ace-solarized-light .ace_invalid.ace_deprecated {\
  \
}\
\
.ace-solarized-light .ace_support {\
  \
}\
\
.ace-solarized-light .ace_support.ace_function {\
  color:#268BD2;\
}\
\
.ace-solarized-light .ace_function.ace_buildin {\
  \
}\
\
.ace-solarized-light .ace_string {\
  color:#2AA198;\
}\
\
.ace-solarized-light .ace_string.ace_regexp {\
  color:#D30102;\
}\
\
.ace-solarized-light .ace_comment {\
  color:#93A1A1;\
}\
\
.ace-solarized-light .ace_comment.ace_doc {\
  \
}\
\
.ace-solarized-light .ace_comment.ace_doc.ace_tag {\
  \
}\
\
.ace-solarized-light .ace_variable {\
  \
}\
\
.ace-solarized-light .ace_variable.ace_language {\
  color:#268BD2;\
}\
\
.ace-solarized-light .ace_xml_pe {\
  \
}\
\
.ace-solarized-light .ace_collab.ace_user1 {\
     \
}";

    // import CSS once
    dom.importCssString(cssText);

    exports.cssClass = "ace-solarized-light";
});
__bravojs_loaded_moduleIdentifier = bravojs.realpath(bravojs.mainModuleDir + '/87749d9714f1925e26afa48a0d592eaa39403858@/lib/ace/theme/solarized_light');