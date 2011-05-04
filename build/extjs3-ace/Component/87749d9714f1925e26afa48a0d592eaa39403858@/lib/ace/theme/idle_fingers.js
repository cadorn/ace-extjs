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
require.memoize(bravojs.realpath(bravojs.mainModuleDir + '/87749d9714f1925e26afa48a0d592eaa39403858@/lib/ace/theme/idle_fingers'), ['pilot/dom'], function (require, exports, module) {


    var dom = require("pilot/dom");

    var cssText = ".ace-idle-fingers .ace_editor {\
  border: 2px solid rgb(159, 159, 159);\
}\
\
.ace-idle-fingers .ace_editor.ace_focus {\
  border: 2px solid #327fbd;\
}\
\
.ace-idle-fingers .ace_gutter {\
  width: 50px;\
  background: #e8e8e8;\
  color: #333;\
  overflow : hidden;\
}\
\
.ace-idle-fingers .ace_gutter-layer {\
  width: 100%;\
  text-align: right;\
}\
\
.ace-idle-fingers .ace_gutter-layer .ace_gutter-cell {\
  padding-right: 6px;\
}\
\
.ace-idle-fingers .ace_print_margin {\
  width: 1px;\
  background: #e8e8e8;\
}\
\
.ace-idle-fingers .ace_scroller {\
  background-color: #323232;\
}\
\
.ace-idle-fingers .ace_text-layer {\
  cursor: text;\
  color: #FFFFFF;\
}\
\
.ace-idle-fingers .ace_cursor {\
  border-left: 2px solid #91FF00;\
}\
\
.ace-idle-fingers .ace_cursor.ace_overwrite {\
  border-left: 0px;\
  border-bottom: 1px solid #91FF00;\
}\
 \
.ace-idle-fingers .ace_marker-layer .ace_selection {\
  background: rgba(90, 100, 126, 0.88);\
}\
\
.ace-idle-fingers .ace_marker-layer .ace_step {\
  background: rgb(198, 219, 174);\
}\
\
.ace-idle-fingers .ace_marker-layer .ace_bracket {\
  margin: -1px 0 0 -1px;\
  border: 1px solid #404040;\
}\
\
.ace-idle-fingers .ace_marker-layer .ace_active_line {\
  background: #353637;\
}\
\
       \
.ace-idle-fingers .ace_invisible {\
  color: #404040;\
}\
\
.ace-idle-fingers .ace_keyword {\
  color:#CC7833;\
}\
\
.ace-idle-fingers .ace_keyword.ace_operator {\
  \
}\
\
.ace-idle-fingers .ace_constant {\
  color:#6C99BB;\
}\
\
.ace-idle-fingers .ace_constant.ace_language {\
  \
}\
\
.ace-idle-fingers .ace_constant.ace_library {\
  \
}\
\
.ace-idle-fingers .ace_constant.ace_numeric {\
  \
}\
\
.ace-idle-fingers .ace_invalid {\
  color:#FFFFFF;\
background-color:#FF0000;\
}\
\
.ace-idle-fingers .ace_invalid.ace_illegal {\
  \
}\
\
.ace-idle-fingers .ace_invalid.ace_deprecated {\
  \
}\
\
.ace-idle-fingers .ace_support {\
  \
}\
\
.ace-idle-fingers .ace_support.ace_function {\
  color:#B83426;\
}\
\
.ace-idle-fingers .ace_function.ace_buildin {\
  \
}\
\
.ace-idle-fingers .ace_string {\
  color:#A5C261;\
}\
\
.ace-idle-fingers .ace_string.ace_regexp {\
  color:#CCCC33;\
}\
\
.ace-idle-fingers .ace_comment {\
  font-style:italic;\
color:#BC9458;\
}\
\
.ace-idle-fingers .ace_comment.ace_doc {\
  \
}\
\
.ace-idle-fingers .ace_comment.ace_doc.ace_tag {\
  \
}\
\
.ace-idle-fingers .ace_variable {\
  \
}\
\
.ace-idle-fingers .ace_variable.ace_language {\
  \
}\
\
.ace-idle-fingers .ace_xml_pe {\
  \
}\
\
.ace-idle-fingers .ace_collab.ace_user1 {\
  color:#323232;\
background-color:#FFF980;   \
}";

    // import CSS once
    dom.importCssString(cssText);

    exports.cssClass = "ace-idle-fingers";
});
__bravojs_loaded_moduleIdentifier = bravojs.realpath(bravojs.mainModuleDir + '/87749d9714f1925e26afa48a0d592eaa39403858@/lib/ace/theme/idle_fingers');