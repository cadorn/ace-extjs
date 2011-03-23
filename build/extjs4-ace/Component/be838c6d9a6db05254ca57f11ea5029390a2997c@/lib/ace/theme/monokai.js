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
require.memoize(bravojs.realpath(bravojs.mainModuleDir + '/be838c6d9a6db05254ca57f11ea5029390a2997c@/lib/ace/theme/monokai'), ['pilot/dom'], function (require, exports, module) {


    var dom = require("pilot/dom");

    var cssText = ".ace-monokai .ace_editor {\
  border: 2px solid rgb(159, 159, 159);\
}\
\
.ace-monokai .ace_editor.ace_focus {\
  border: 2px solid #327fbd;\
}\
\
.ace-monokai .ace_gutter {\
  width: 50px;\
  background: #e8e8e8;\
  color: #333;\
  overflow : hidden;\
}\
\
.ace-monokai .ace_gutter-layer {\
  width: 100%;\
  text-align: right;\
}\
\
.ace-monokai .ace_gutter-layer .ace_gutter-cell {\
  padding-right: 6px;\
}\
\
.ace-monokai .ace_print_margin {\
  width: 1px;\
  background: #e8e8e8;\
}\
\
.ace-monokai .ace_scroller {\
  background-color: #272822;\
}\
\
.ace-monokai .ace_text-layer {\
  cursor: text;\
  color: #F8F8F2;\
}\
\
.ace-monokai .ace_cursor {\
  border-left: 2px solid #F8F8F0;\
}\
\
.ace-monokai .ace_cursor.ace_overwrite {\
  border-left: 0px;\
  border-bottom: 1px solid #F8F8F0;\
}\
 \
.ace-monokai .ace_marker-layer .ace_selection {\
  background: #49483E;\
}\
\
.ace-monokai .ace_marker-layer .ace_step {\
  background: rgb(198, 219, 174);\
}\
\
.ace-monokai .ace_marker-layer .ace_bracket {\
  margin: -1px 0 0 -1px;\
  border: 1px solid #49483E;\
}\
\
.ace-monokai .ace_marker-layer .ace_active_line {\
  background: #49483E;\
}\
\
       \
.ace-monokai .ace_invisible {\
  color: #49483E;\
}\
\
.ace-monokai .ace_keyword {\
  color:#F92672;\
}\
\
.ace-monokai .ace_keyword.ace_operator {\
  \
}\
\
.ace-monokai .ace_constant {\
  \
}\
\
.ace-monokai .ace_constant.ace_language {\
  color:#AE81FF;\
}\
\
.ace-monokai .ace_constant.ace_library {\
  \
}\
\
.ace-monokai .ace_constant.ace_numeric {\
  color:#AE81FF;\
}\
\
.ace-monokai .ace_invalid {\
  color:#F8F8F0;\
background-color:#F92672;\
}\
\
.ace-monokai .ace_invalid.ace_illegal {\
  \
}\
\
.ace-monokai .ace_invalid.ace_deprecated {\
  color:#F8F8F0;\
background-color:#AE81FF;\
}\
\
.ace-monokai .ace_support {\
  \
}\
\
.ace-monokai .ace_support.ace_function {\
  color:#66D9EF;\
}\
\
.ace-monokai .ace_function.ace_buildin {\
  \
}\
\
.ace-monokai .ace_string {\
  color:#E6DB74;\
}\
\
.ace-monokai .ace_string.ace_regexp {\
  \
}\
\
.ace-monokai .ace_comment {\
  color:#75715E;\
}\
\
.ace-monokai .ace_comment.ace_doc {\
  \
}\
\
.ace-monokai .ace_comment.ace_doc.ace_tag {\
  \
}\
\
.ace-monokai .ace_variable {\
  \
}\
\
.ace-monokai .ace_variable.ace_language {\
  \
}\
\
.ace-monokai .ace_xml_pe {\
  \
}";

    // import CSS once
    dom.importCssString(cssText);

    exports.cssClass = "ace-monokai";
});
__bravojs_loaded_moduleIdentifier = bravojs.realpath(bravojs.mainModuleDir + '/be838c6d9a6db05254ca57f11ea5029390a2997c@/lib/ace/theme/monokai');