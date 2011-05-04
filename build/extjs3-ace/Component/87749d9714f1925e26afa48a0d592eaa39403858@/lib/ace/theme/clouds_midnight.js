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
require.memoize(bravojs.realpath(bravojs.mainModuleDir + '/87749d9714f1925e26afa48a0d592eaa39403858@/lib/ace/theme/clouds_midnight'), ['pilot/dom'], function (require, exports, module) {


    var dom = require("pilot/dom");

    var cssText = ".ace-clouds-midnight .ace_editor {\
  border: 2px solid rgb(159, 159, 159);\
}\
\
.ace-clouds-midnight .ace_editor.ace_focus {\
  border: 2px solid #327fbd;\
}\
\
.ace-clouds-midnight .ace_gutter {\
  width: 50px;\
  background: #e8e8e8;\
  color: #333;\
  overflow : hidden;\
}\
\
.ace-clouds-midnight .ace_gutter-layer {\
  width: 100%;\
  text-align: right;\
}\
\
.ace-clouds-midnight .ace_gutter-layer .ace_gutter-cell {\
  padding-right: 6px;\
}\
\
.ace-clouds-midnight .ace_print_margin {\
  width: 1px;\
  background: #e8e8e8;\
}\
\
.ace-clouds-midnight .ace_scroller {\
  background-color: #191919;\
}\
\
.ace-clouds-midnight .ace_text-layer {\
  cursor: text;\
  color: #929292;\
}\
\
.ace-clouds-midnight .ace_cursor {\
  border-left: 2px solid #7DA5DC;\
}\
\
.ace-clouds-midnight .ace_cursor.ace_overwrite {\
  border-left: 0px;\
  border-bottom: 1px solid #7DA5DC;\
}\
 \
.ace-clouds-midnight .ace_marker-layer .ace_selection {\
  background: #000000;\
}\
\
.ace-clouds-midnight .ace_marker-layer .ace_step {\
  background: rgb(198, 219, 174);\
}\
\
.ace-clouds-midnight .ace_marker-layer .ace_bracket {\
  margin: -1px 0 0 -1px;\
  border: 1px solid #BFBFBF;\
}\
\
.ace-clouds-midnight .ace_marker-layer .ace_active_line {\
  background: rgba(215, 215, 215, 0.031);\
}\
\
       \
.ace-clouds-midnight .ace_invisible {\
  color: #BFBFBF;\
}\
\
.ace-clouds-midnight .ace_keyword {\
  color:#927C5D;\
}\
\
.ace-clouds-midnight .ace_keyword.ace_operator {\
  color:#4B4B4B;\
}\
\
.ace-clouds-midnight .ace_constant {\
  \
}\
\
.ace-clouds-midnight .ace_constant.ace_language {\
  color:#39946A;\
}\
\
.ace-clouds-midnight .ace_constant.ace_library {\
  \
}\
\
.ace-clouds-midnight .ace_constant.ace_numeric {\
  color:#46A609;\
}\
\
.ace-clouds-midnight .ace_invalid {\
  color:#FFFFFF;\
background-color:#E92E2E;\
}\
\
.ace-clouds-midnight .ace_invalid.ace_illegal {\
  \
}\
\
.ace-clouds-midnight .ace_invalid.ace_deprecated {\
  \
}\
\
.ace-clouds-midnight .ace_support {\
  \
}\
\
.ace-clouds-midnight .ace_support.ace_function {\
  color:#E92E2E;\
}\
\
.ace-clouds-midnight .ace_function.ace_buildin {\
  \
}\
\
.ace-clouds-midnight .ace_string {\
  color:#5D90CD;\
}\
\
.ace-clouds-midnight .ace_string.ace_regexp {\
  \
}\
\
.ace-clouds-midnight .ace_comment {\
  color:#3C403B;\
}\
\
.ace-clouds-midnight .ace_comment.ace_doc {\
  \
}\
\
.ace-clouds-midnight .ace_comment.ace_doc.ace_tag {\
  \
}\
\
.ace-clouds-midnight .ace_variable {\
  \
}\
\
.ace-clouds-midnight .ace_variable.ace_language {\
  \
}\
\
.ace-clouds-midnight .ace_xml_pe {\
  \
}";

    // import CSS once
    dom.importCssString(cssText);

    exports.cssClass = "ace-clouds-midnight";
});
__bravojs_loaded_moduleIdentifier = bravojs.realpath(bravojs.mainModuleDir + '/87749d9714f1925e26afa48a0d592eaa39403858@/lib/ace/theme/clouds_midnight');