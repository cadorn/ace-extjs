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
require.memoize(bravojs.realpath(bravojs.mainModuleDir + '/be838c6d9a6db05254ca57f11ea5029390a2997c@/lib/ace/theme/merbivore'), ['pilot/dom'], function (require, exports, module) {


    var dom = require("pilot/dom");

    var cssText = ".ace-merbivore .ace_editor {\
  border: 2px solid rgb(159, 159, 159);\
}\
\
.ace-merbivore .ace_editor.ace_focus {\
  border: 2px solid #327fbd;\
}\
\
.ace-merbivore .ace_gutter {\
  width: 50px;\
  background: #e8e8e8;\
  color: #333;\
  overflow : hidden;\
}\
\
.ace-merbivore .ace_gutter-layer {\
  width: 100%;\
  text-align: right;\
}\
\
.ace-merbivore .ace_gutter-layer .ace_gutter-cell {\
  padding-right: 6px;\
}\
\
.ace-merbivore .ace_print_margin {\
  width: 1px;\
  background: #e8e8e8;\
}\
\
.ace-merbivore .ace_scroller {\
  background-color: #161616;\
}\
\
.ace-merbivore .ace_text-layer {\
  cursor: text;\
  color: #E6E1DC;\
}\
\
.ace-merbivore .ace_cursor {\
  border-left: 2px solid #FFFFFF;\
}\
\
.ace-merbivore .ace_cursor.ace_overwrite {\
  border-left: 0px;\
  border-bottom: 1px solid #FFFFFF;\
}\
 \
.ace-merbivore .ace_marker-layer .ace_selection {\
  background: #454545;\
}\
\
.ace-merbivore .ace_marker-layer .ace_step {\
  background: rgb(198, 219, 174);\
}\
\
.ace-merbivore .ace_marker-layer .ace_bracket {\
  margin: -1px 0 0 -1px;\
  border: 1px solid #FCE94F;\
}\
\
.ace-merbivore .ace_marker-layer .ace_active_line {\
  background: #333435;\
}\
\
       \
.ace-merbivore .ace_invisible {\
  color: #404040;\
}\
\
.ace-merbivore .ace_keyword {\
  color:#FC6F09;\
}\
\
.ace-merbivore .ace_keyword.ace_operator {\
  \
}\
\
.ace-merbivore .ace_constant {\
  color:#1EDAFB;\
}\
\
.ace-merbivore .ace_constant.ace_language {\
  color:#FDC251;\
}\
\
.ace-merbivore .ace_constant.ace_library {\
  color:#8DFF0A;\
}\
\
.ace-merbivore .ace_constant.ace_numeric {\
  color:#58C554;\
}\
\
.ace-merbivore .ace_invalid {\
  color:#FFFFFF;\
  background-color:#990000;\
}\
\
.ace-merbivore .ace_invalid.ace_illegal {\
  \
}\
\
.ace-merbivore .ace_invalid.ace_deprecated {\
  color:#FFFFFF;\
  background-color:#990000;\
}\
\
.ace-merbivore .ace_support {\
  \
}\
\
.ace-merbivore .ace_support.ace_function {\
  color:#FC6F09;\
}\
\
.ace-merbivore .ace_function.ace_buildin {\
  \
}\
\
.ace-merbivore .ace_string {\
  color:#8DFF0A;\
}\
\
.ace-merbivore .ace_string.ace_regexp {\
  \
}\
\
.ace-merbivore .ace_comment {\
  color:#AD2EA4;\
}\
\
.ace-merbivore .ace_comment.ace_doc {\
  \
}\
\
.ace-merbivore .ace_comment.ace_doc.ace_tag {\
  \
}\
\
.ace-merbivore .ace_variable {\
  \
}\
\
.ace-merbivore .ace_variable.ace_language {\
  \
}\
\
.ace-merbivore .ace_xml_pe {\
  \
}";

    // import CSS once
    dom.importCssString(cssText);

    exports.cssClass = "ace-merbivore";
});
__bravojs_loaded_moduleIdentifier = bravojs.realpath(bravojs.mainModuleDir + '/be838c6d9a6db05254ca57f11ea5029390a2997c@/lib/ace/theme/merbivore');