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
require.memoize(bravojs.realpath(bravojs.mainModuleDir + '/87749d9714f1925e26afa48a0d592eaa39403858@/lib/ace/theme/vibrant_ink'), ['pilot/dom'], function (require, exports, module) {


    var dom = require("pilot/dom");

    var cssText = ".ace-vibrant-ink .ace_editor {\
  border: 2px solid rgb(159, 159, 159);\
}\
\
.ace-vibrant-ink .ace_editor.ace_focus {\
  border: 2px solid #327fbd;\
}\
\
.ace-vibrant-ink .ace_gutter {\
  width: 50px;\
  background: #e8e8e8;\
  color: #333;\
  overflow : hidden;\
}\
\
.ace-vibrant-ink .ace_gutter-layer {\
  width: 100%;\
  text-align: right;\
}\
\
.ace-vibrant-ink .ace_gutter-layer .ace_gutter-cell {\
  padding-right: 6px;\
}\
\
.ace-vibrant-ink .ace_print_margin {\
  width: 1px;\
  background: #e8e8e8;\
}\
\
.ace-vibrant-ink .ace_scroller {\
  background-color: #0F0F0F;\
}\
\
.ace-vibrant-ink .ace_text-layer {\
  cursor: text;\
  color: #FFFFFF;\
}\
\
.ace-vibrant-ink .ace_cursor {\
  border-left: 2px solid #FFFFFF;\
}\
\
.ace-vibrant-ink .ace_cursor.ace_overwrite {\
  border-left: 0px;\
  border-bottom: 1px solid #FFFFFF;\
}\
 \
.ace-vibrant-ink .ace_marker-layer .ace_selection {\
  background: #6699CC;\
}\
\
.ace-vibrant-ink .ace_marker-layer .ace_step {\
  background: rgb(198, 219, 174);\
}\
\
.ace-vibrant-ink .ace_marker-layer .ace_bracket {\
  margin: -1px 0 0 -1px;\
  border: 1px solid #99CC99;\
}\
\
.ace-vibrant-ink .ace_marker-layer .ace_active_line {\
  background: #333333;\
}\
\
       \
.ace-vibrant-ink .ace_invisible {\
  color: #404040;\
}\
\
.ace-vibrant-ink .ace_keyword {\
  color:#FF6600;\
}\
\
.ace-vibrant-ink .ace_keyword.ace_operator {\
  \
}\
\
.ace-vibrant-ink .ace_constant {\
  \
}\
\
.ace-vibrant-ink .ace_constant.ace_language {\
  color:#339999;\
}\
\
.ace-vibrant-ink .ace_constant.ace_library {\
  \
}\
\
.ace-vibrant-ink .ace_constant.ace_numeric {\
  color:#99CC99;\
}\
\
.ace-vibrant-ink .ace_invalid {\
  color:#CCFF33;\
  background-color:#000000;\
}\
\
.ace-vibrant-ink .ace_invalid.ace_illegal {\
  \
}\
\
.ace-vibrant-ink .ace_invalid.ace_deprecated {\
  color:#CCFF33;\
  background-color:#000000;\
}\
\
.ace-vibrant-ink .ace_support {\
  \
}\
\
.ace-vibrant-ink .ace_support.ace_function {\
  color:#FFCC00;\
}\
\
.ace-vibrant-ink .ace_function.ace_buildin {\
  \
}\
\
.ace-vibrant-ink .ace_string {\
  color:#66FF00;\
}\
\
.ace-vibrant-ink .ace_string.ace_regexp {\
  \
}\
\
.ace-vibrant-ink .ace_comment {\
  color:#9933CC;\
}\
\
.ace-vibrant-ink .ace_comment.ace_doc {\
  \
}\
\
.ace-vibrant-ink .ace_comment.ace_doc.ace_tag {\
  \
}\
\
.ace-vibrant-ink .ace_variable {\
  \
}\
\
.ace-vibrant-ink .ace_variable.ace_language {\
  \
}\
\
.ace-vibrant-ink .ace_xml_pe {\
  \
}";

    // import CSS once
    dom.importCssString(cssText);

    exports.cssClass = "ace-vibrant-ink";
});
__bravojs_loaded_moduleIdentifier = bravojs.realpath(bravojs.mainModuleDir + '/87749d9714f1925e26afa48a0d592eaa39403858@/lib/ace/theme/vibrant_ink');