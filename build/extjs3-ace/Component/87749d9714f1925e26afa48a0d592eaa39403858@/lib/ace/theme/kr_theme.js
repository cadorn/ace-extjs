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
require.memoize(bravojs.realpath(bravojs.mainModuleDir + '/87749d9714f1925e26afa48a0d592eaa39403858@/lib/ace/theme/kr_theme'), ['pilot/dom'], function (require, exports, module) {


    var dom = require("pilot/dom");

    var cssText = ".ace-kr-theme .ace_editor {\
  border: 2px solid rgb(159, 159, 159);\
}\
\
.ace-kr-theme .ace_editor.ace_focus {\
  border: 2px solid #327fbd;\
}\
\
.ace-kr-theme .ace_gutter {\
  width: 50px;\
  background: #e8e8e8;\
  color: #333;\
  overflow : hidden;\
}\
\
.ace-kr-theme .ace_gutter-layer {\
  width: 100%;\
  text-align: right;\
}\
\
.ace-kr-theme .ace_gutter-layer .ace_gutter-cell {\
  padding-right: 6px;\
}\
\
.ace-kr-theme .ace_print_margin {\
  width: 1px;\
  background: #e8e8e8;\
}\
\
.ace-kr-theme .ace_scroller {\
  background-color: #0B0A09;\
}\
\
.ace-kr-theme .ace_text-layer {\
  cursor: text;\
  color: #FCFFE0;\
}\
\
.ace-kr-theme .ace_cursor {\
  border-left: 2px solid #FF9900;\
}\
\
.ace-kr-theme .ace_cursor.ace_overwrite {\
  border-left: 0px;\
  border-bottom: 1px solid #FF9900;\
}\
 \
.ace-kr-theme .ace_marker-layer .ace_selection {\
  background: rgba(170, 0, 255, 0.45);\
}\
\
.ace-kr-theme .ace_marker-layer .ace_step {\
  background: rgb(198, 219, 174);\
}\
\
.ace-kr-theme .ace_marker-layer .ace_bracket {\
  margin: -1px 0 0 -1px;\
  border: 1px solid rgba(255, 177, 111, 0.32);\
}\
\
.ace-kr-theme .ace_marker-layer .ace_active_line {\
  background: #38403D;\
}\
\
       \
.ace-kr-theme .ace_invisible {\
  color: rgba(255, 177, 111, 0.32);\
}\
\
.ace-kr-theme .ace_keyword {\
  color:#949C8B;\
}\
\
.ace-kr-theme .ace_keyword.ace_operator {\
  \
}\
\
.ace-kr-theme .ace_constant {\
  color:rgba(210, 117, 24, 0.76);\
}\
\
.ace-kr-theme .ace_constant.ace_language {\
  \
}\
\
.ace-kr-theme .ace_constant.ace_library {\
  \
}\
\
.ace-kr-theme .ace_constant.ace_numeric {\
  \
}\
\
.ace-kr-theme .ace_invalid {\
  color:#F8F8F8;\
background-color:#A41300;\
}\
\
.ace-kr-theme .ace_invalid.ace_illegal {\
  \
}\
\
.ace-kr-theme .ace_invalid.ace_deprecated {\
  \
}\
\
.ace-kr-theme .ace_support {\
  color:#9FC28A;\
}\
\
.ace-kr-theme .ace_support.ace_function {\
  color:#85873A;\
}\
\
.ace-kr-theme .ace_function.ace_buildin {\
  \
}\
\
.ace-kr-theme .ace_string {\
  \
}\
\
.ace-kr-theme .ace_string.ace_regexp {\
  color:rgba(125, 255, 192, 0.65);\
}\
\
.ace-kr-theme .ace_comment {\
  font-style:italic;\
color:#706D5B;\
}\
\
.ace-kr-theme .ace_comment.ace_doc {\
  \
}\
\
.ace-kr-theme .ace_comment.ace_doc.ace_tag {\
  \
}\
\
.ace-kr-theme .ace_variable {\
  color:#D1A796;\
}\
\
.ace-kr-theme .ace_variable.ace_language {\
  color:#FF80E1;\
}\
\
.ace-kr-theme .ace_xml_pe {\
  \
}";

    // import CSS once
    dom.importCssString(cssText);

    exports.cssClass = "ace-kr-theme";
});
__bravojs_loaded_moduleIdentifier = bravojs.realpath(bravojs.mainModuleDir + '/87749d9714f1925e26afa48a0d592eaa39403858@/lib/ace/theme/kr_theme');