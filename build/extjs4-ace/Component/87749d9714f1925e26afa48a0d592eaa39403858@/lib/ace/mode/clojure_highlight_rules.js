require.memoize(bravojs.realpath(bravojs.mainModuleDir + '/c371cd05c8df40c0af3b1515b808c9d737b98b02@/package.json'), [], function() { return {"uid":"http://github.com/cadorn/ace-extjs/packages/extjs4-ace/","name":"extjs4-ace","main":"lib/component.js","contexts":{"top":{"/lib/component":{"include":{"github.com/cadorn/ace-extjs/packages/extjs-ace/":{}}}}},"mappings":{"extjs-ace":{"location":"" + bravojs.mainModuleDir + "/aae9e0c4eed45f3c888f8e7824a96a83f5f8f861"},"ace":{"location":"" + bravojs.mainModuleDir + "/87749d9714f1925e26afa48a0d592eaa39403858"},"cockpit":{"location":"" + bravojs.mainModuleDir + "/b5bd9e5093176e86aa6f6c4d581342361d8c923f"},"pilot":{"location":"" + bravojs.mainModuleDir + "/f9a24d6931cb0c0e8264fed132a0ed8c97415c4c"}}}; });
require.memoize(bravojs.realpath(bravojs.mainModuleDir + '/c371cd05c8df40c0af3b1515b808c9d737b98b02@/lib/component'), ['extjs-ace/component'], function (require, exports, module)
{
    var COMPONENT = require("extjs-ace/component");

    exports.main = function()
    {
        COMPONENT.init();
        
        var component = COMPONENT.getComponent();

        component.extend = "Ext.panel.Panel";

        Ext.define("Ext.ux.AceEditor", component);
    }
});
require.memoize(bravojs.realpath(bravojs.mainModuleDir + '/aae9e0c4eed45f3c888f8e7824a96a83f5f8f861@/package.json'), [], function() { return {"uid":"http://github.com/cadorn/ace-extjs/packages/extjs-ace/","name":"extjs-ace","main":"","contexts":{"top":{"/":{"load":{"github.com/cadorn/ace-extjs/packages/ace-editor/":{}}}}},"mappings":{"editor":{"location":"" + bravojs.mainModuleDir + "/a3d9ddf257e98144c883cd2dbc03ab62243dbc09"},"ace":{"location":"" + bravojs.mainModuleDir + "/87749d9714f1925e26afa48a0d592eaa39403858"},"cockpit":{"location":"" + bravojs.mainModuleDir + "/b5bd9e5093176e86aa6f6c4d581342361d8c923f"},"pilot":{"location":"" + bravojs.mainModuleDir + "/f9a24d6931cb0c0e8264fed132a0ed8c97415c4c"}}}; });
require.memoize(bravojs.realpath(bravojs.mainModuleDir + '/aae9e0c4eed45f3c888f8e7824a96a83f5f8f861@/lib/component'), ['pilot/dom','text!./component.css'], function (require, exports, module)
{
    var DOM = require("pilot/dom");

    exports.init = function()
    {
        DOM.importCssString(require("text!./component.css"));
    }

    exports.getComponent = function()
    {
        return {

            baseCls: "x-ux-ace-editor-panel",

            initComponent: function()
            {
                Ext.ux.AceEditor.superclass.initComponent.call(this);
                var self = this;

                self.editorClass = null;
                self.initialized = false;

                self.value = null;
                self.editor = null;
                
                self.session = null;

                // async load editor
                module.load("editor/main", function(id)
                {
                    self.editorClass = require(id);

                    // init the editor
                    self.editorClass.init(function(env)
                    {
                        var CANON = self.editorClass.module("pilot/canon");

                        self.addEvents(
                            "editor-save",
                            "editor-saveas"
                        );

                        CANON.addCommand({
                            name: "save",
                            bindKey: {
                                win: "Ctrl-S",
                                mac: "Command-S",
                                sender: "editor|cli"
                            },
                            exec: function()
                            {
                                self.fireEvent('editor-save', self);
                            }
                        });

                        CANON.addCommand({
                            name: "saveas",
                            bindKey: {
                                win: "Ctrl-Shift-S",
                                mac: "Command-Shift-S",
                                sender: "editor|cli"
                            },
                            exec: function()
                            {
                                self.fireEvent('editor-saveas', self);
                            }
                        });
                        
                        self.firstRender();
                    });
                });
            },

            firstRender: function()
            {
                var self = this;

                var EDITOR = self.editorClass.module("ace/editor").Editor,
                    RENDERER = self.editorClass.module("ace/virtual_renderer").VirtualRenderer,
                    THEME = self.editorClass.module("ace/theme/textmate");  // default
//                    var EVENT = self.editorClass.module("pilot/event");

                self.el.dom.innerHTML = "";
                
                self.renderer = new RENDERER(self.el.dom, THEME);
                self.editor = new EDITOR(self.renderer);
                self.editor.resize();

                self.initialized = true;

                if(self.value!==null)
                {
                    self.setValue(self.value[0], self.value[1]);
                }
            },

            onRender: function()
            {
                Ext.ux.AceEditor.superclass.onRender.apply(this, arguments);

                if (typeof this.el.addCls != "undefined")
                    this.el.addCls(this.baseCls);   // ExtJS 4
                else
                    this.el.addClass(this.baseCls);   // ExtJS 3

                if (!this.initialized)
                {
                    // TODO: Make this look nicer
                    this.el.dom.innerHTML = "Loading Editor ...";
                }
            },

            onResize: function( aw, ah )
            {
                if(this.editor) {
                    this.editor.resize();
                }
            },

            getValue: function()
            {
                return this.editor.getDocument().getValue();
            },

            getEditor: function()
            {
                return this.editor;
            },

            getSession: function()
            {
                return this.session;
            },

            getRenderer: function()
            {
                return this.renderer;
            },

            setValue: function(value, options)
            {
                if (!this.initialized)
                {
                    this.value = [value, options];
                    return;
                }
                this.value = null;

                options = options || {};

                var SESSION = this.editorClass.module("ace/edit_session").EditSession,
                    UNDO_MANAGER = this.editorClass.module("ace/undomanager").UndoManager;

                var session = new SESSION(value);
                session.setUndoManager(new UNDO_MANAGER());

                session.getDocument().addEventListener("changeDelta", function()
                {
                    self.fireEvent('editor-changeDelta', self);
                });

                var mode = "text";
                if (typeof options.mode != "undefined")
                {
                    mode = options.mode;
                }
                else
                {
                    if(typeof options.basename != "undefined")
                    {
                        if (/^.*\.js$/i.test(options.basename)) {
                            mode = "javascript";
                        } else if (/^.*\.xml$/i.test(options.basename)) {
                            mode = "xml";
                        } else if (/^.*\.html?$/i.test(options.basename)) {
                            mode = "html";
                        } else if (/^.*\.css$/i.test(options.basename)) {
                            mode = "css";
                        } else if (/^.*\.py$/i.test(options.basename)) {
                            mode = "python";
                        } else if (/^.*\.php$/i.test(options.basename)) {
                            mode = "php";
                          } else if (/^.*\.cs$/i.test(options.basename)) {
                              mode = "csharp";
                        } else if (/^.*\.java$/i.test(options.basename)) {
                            mode = "java";
                        } else if (/^.*\.rb$/i.test(options.basename)) {
                            mode = "ruby";
                        } else if (/^.*\.(c|cpp|h|hpp|cxx)$/i.test(options.basename)) {
                            mode = "c_cpp";
                        } else if (/^.*\.coffee$/i.test(options.basename)) {
                            mode = "coffee";
                        } else if (/^.*\.(pl|pm)$/i.test(options.basename)) {
                            mode = "perl";
                        }
                    }
                }

                var self = this;

                this.setMode(mode, {
                    session: session,
                    callback: function(session)
                    {
                        self.editor.setSession(session);

                        self.session = session;

                        if (typeof options.callback != "undefined")
                        {
                            options.callback(session);
                        }
                    }
                });
            },

            setMode: function(name, options)
            {
                // TODO: display loading message

                var self = this;

                var session = options.session || self.session;
                if (!session)
                    throw new Error("Session required!");

                // async load mode
                module.load("ace/mode/" + name, function(id)
                {
                    var modeObj = new (require(id).Mode);
                    session.setMode(modeObj);

                    if (typeof options.callback != "undefined")
                    {
                        options.callback(session);
                    }
                });                
            },

            setTheme: function(name)
            {
                this.editor.setTheme("ace/theme/" + name);
            },

            setKeyboardHandler: function(name, options)
            {
                if (name === null)
                {
                    this.editor.setKeyboardHandler(null);
                    return;
                }
                var self = this;

                // TODO: This should be done more generically
                var id = "ace/keyboard/keybinding/" + name;
                if (name == "hash_handler") {
                    id = "ace/keyboard/" + name;
                }

                // async load keybinding
                module.load(id, function(id)
                {
                    var obj = require(id);

                    // TODO: This should be done more generically
                    if (name == "vim") {
                        obj = obj.Vim;
                    } else
                    if (name == "emacs") {
                        obj = obj.Emacs;
                    } else
                    if (name == "hash_handler") {
                        obj = new obj.HashHandler(options);
                    }

                    self.editor.setKeyboardHandler(obj);
                });
            },

            setFontSize: function(value)
            {
                this.el.dom.style.fontSize = value;
            }
        };
    }
});
require.memoize('text!'+bravojs.realpath(bravojs.mainModuleDir + '/aae9e0c4eed45f3c888f8e7824a96a83f5f8f861@/lib/component.css'), [], function () {
return ["",".x-ux-ace-editor-panel {","    border-style: solid;","    border-width: 0;","    border-color: #99bbe8;","    background-color: #ffffff;","}",""].join("\n");
});
require.memoize(bravojs.realpath(bravojs.mainModuleDir + '/87749d9714f1925e26afa48a0d592eaa39403858@/lib/ace/mode/clojure_highlight_rules'), ['pilot/oop','pilot/lang','ace/mode/text_highlight_rules'], function (require, exports, module) {


var oop = require("pilot/oop");
var lang = require("pilot/lang");
var TextHighlightRules = require("ace/mode/text_highlight_rules").TextHighlightRules;



var ClojureHighlightRules = function() {

       var builtinFunctions = lang.arrayToMap(
        ('* *1 *2 *3 *agent* *allow-unresolved-vars* *assert* *clojure-version* ' +
			'*command-line-args* *compile-files* *compile-path* *e *err* *file* ' +
			'*flush-on-newline* *in* *macro-meta* *math-context* *ns* *out* ' +
			'*print-dup* *print-length* *print-level* *print-meta* *print-readably* ' +
			'*read-eval* *source-path* *use-context-classloader* ' +
			'*warn-on-reflection* + - -> -&gt; ->> -&gt;&gt; .. / < &lt; <= &lt;= = ' +
			'== > &gt; >= &gt;= accessor aclone ' +
			'add-classpath add-watch agent agent-errors aget alength alias all-ns ' +
			'alter alter-meta! alter-var-root amap ancestors and apply areduce ' +
			'array-map aset aset-boolean aset-byte aset-char aset-double aset-float ' +
			'aset-int aset-long aset-short assert assoc assoc! assoc-in associative? ' +
			'atom await await-for await1 bases bean bigdec bigint binding bit-and ' +
			'bit-and-not bit-clear bit-flip bit-not bit-or bit-set bit-shift-left ' +
			'bit-shift-right bit-test bit-xor boolean boolean-array booleans ' +
			'bound-fn bound-fn* butlast byte byte-array bytes cast char char-array ' +
			'char-escape-string char-name-string char? chars chunk chunk-append ' +
			'chunk-buffer chunk-cons chunk-first chunk-next chunk-rest chunked-seq? ' +
			'class class? clear-agent-errors clojure-version coll? comment commute ' +
			'comp comparator compare compare-and-set! compile complement concat cond ' +
			'condp conj conj! cons constantly construct-proxy contains? count ' +
			'counted? create-ns create-struct cycle dec decimal? declare definline ' +
			'defmacro defmethod defmulti defn defn- defonce defstruct delay delay? ' +
			'deliver deref derive descendants destructure disj disj! dissoc dissoc! ' +
			'distinct distinct? doall doc dorun doseq dosync dotimes doto double ' +
			'double-array doubles drop drop-last drop-while empty empty? ensure ' +
			'enumeration-seq eval even? every? false? ffirst file-seq filter find ' +
			'find-doc find-ns find-var first float float-array float? floats flush ' +
			'fn fn? fnext for force format future future-call future-cancel ' +
			'future-cancelled? future-done? future? gen-class gen-interface gensym ' +
			'get get-in get-method get-proxy-class get-thread-bindings get-validator ' +
			'hash hash-map hash-set identical? identity if-let if-not ifn? import ' +
			'in-ns inc init-proxy instance? int int-array integer? interleave intern ' +
			'interpose into into-array ints io! isa? iterate iterator-seq juxt key ' +
			'keys keyword keyword? last lazy-cat lazy-seq let letfn line-seq list ' +
			'list* list? load load-file load-reader load-string loaded-libs locking ' +
			'long long-array longs loop macroexpand macroexpand-1 make-array ' +
			'make-hierarchy map map? mapcat max max-key memfn memoize merge ' +
			'merge-with meta method-sig methods min min-key mod name namespace neg? ' +
			'newline next nfirst nil? nnext not not-any? not-empty not-every? not= ' +
			'ns ns-aliases ns-imports ns-interns ns-map ns-name ns-publics ' +
			'ns-refers ns-resolve ns-unalias ns-unmap nth nthnext num number? odd? ' +
			'or parents partial partition pcalls peek persistent! pmap pop pop! ' +
			'pop-thread-bindings pos? pr pr-str prefer-method prefers ' +
			'primitives-classnames print print-ctor print-doc print-dup print-method ' +
			'print-namespace-doc print-simple print-special-doc print-str printf ' +
			'println println-str prn prn-str promise proxy proxy-call-with-super ' +
			'proxy-mappings proxy-name proxy-super push-thread-bindings pvalues quot ' +
			'rand rand-int range ratio? rational? rationalize re-find re-groups ' +
			're-matcher re-matches re-pattern re-seq read read-line read-string ' +
			'reduce ref ref-history-count ref-max-history ref-min-history ref-set ' +
			'refer refer-clojure release-pending-sends rem remove remove-method ' +
			'remove-ns remove-watch repeat repeatedly replace replicate require ' +
			'reset! reset-meta! resolve rest resultset-seq reverse reversible? rseq ' +
			'rsubseq second select-keys send send-off seq seq? seque sequence ' +
			'sequential? set set-validator! set? short short-array shorts ' +
			'shutdown-agents slurp some sort sort-by sorted-map sorted-map-by ' +
			'sorted-set sorted-set-by sorted? special-form-anchor special-symbol? ' +
			'split-at split-with str stream? string? struct struct-map subs subseq ' +
			'subvec supers swap! symbol symbol? sync syntax-symbol-anchor take ' +
			'take-last take-nth take-while test the-ns time to-array to-array-2d ' +
			'trampoline transient tree-seq true? type unchecked-add unchecked-dec ' +
			'unchecked-divide unchecked-inc unchecked-multiply unchecked-negate ' +
			'unchecked-remainder unchecked-subtract underive unquote ' +
			'unquote-splicing update-in update-proxy use val vals var-get var-set ' +
			'var? vary-meta vec vector vector? when when-first when-let when-not ' +
			'while with-bindings with-bindings* with-in-str with-loading-context ' +
			'with-local-vars with-meta with-open with-out-str with-precision xml-seq ' +
			'zero? zipmap ').split(" ")
    );

    var keywords = lang.arrayToMap(
        ('def do fn if let loop monitor-enter monitor-exit new quote recur set! ' +
			'throw try var').split(" ")
    );

    var buildinConstants = lang.arrayToMap(
        ("true false nil").split(" ")
    );


    // regexp must not have capturing parentheses. Use (?:) instead.
    // regexps are ordered -> the first match is used

    this.$rules = {
        "start" : [

	        {
	            token : "comment",
	            regex : ";.*$"
	        }, {
                    token : "comment", // multi line comment
                    regex : "^\=begin$",
                    next : "comment"
                },
                {             
	            token : "keyword", //parens
	            regex : "[\\(|\\)]"
	        },
                {             
	            token : "keyword", //lists
	            regex : "[\\'\\(]"
	        },
                {             
	            token : "keyword", //vectors
	            regex : "[\\[|\\]]"
	        },
                {             
	            token : "keyword", //sets and maps
	            regex : "[\\{|\\}|\\#\\{|\\#\\}]"
	        },
                {
                    token : "keyword", // ampersands
                    regex : '[\\&]'
	        },
                {
                    token : "keyword", // metadata
                    regex : '[\\#\\^\\{]'
	        },
                {
                    token : "keyword", // anonymous fn syntactic sugar
                    regex : '[\\%]'
	        },
                {
                    token : "keyword", // deref reader macro
                    regex : '[@]'
	        },
                {
	            token : "constant.numeric", // hex
	            regex : "0[xX][0-9a-fA-F]+\\b"
	        },
                {
	            token : "constant.numeric", // float
	            regex : "[+-]?\\d+(?:(?:\\.\\d*)?(?:[eE][+-]?\\d+)?)?\\b"
	        },
                {
	            token : "constant.language",
	            regex : '[!|\\$|%|&|\\*|\\-\\-|\\-|\\+\\+|\\+||=|!=|<=|>=|<>|<|>|!|&&]'
	        },
                
           {
	        token : function(value) {
                 	if (keywords.hasOwnProperty(value))
	                    return "keyword";
	                else if (buildinConstants.hasOwnProperty(value))
	                    return "constant.language";
                        else if (builtinFunctions.hasOwnProperty(value))
                        return "support.function";
	                else
	                    return "identifier";
	            },
	            // TODO: Unicode escape sequences
	            // TODO: Unicode identifiers
	            regex : "[a-zA-Z_$][a-zA-Z0-9_$]*\\b"
	        },
                {
                token : "string", // single line
                regex : '["](?:(?:\\\\.)|(?:[^"\\\\]))*?["]'
	        },
                {
                token : "string", // symbol
                regex : "[:](?:[a-zA-Z]|\d)+"
	        },
                {
	        token : "string.regexp", //Regular Expressions
	        regex : '/#"(?:\.|(\\\")|[^\""\n])*"/g'
	        }
              
        ],
        "comment" : [
	        {
                token : "comment", // closing comment
                regex : "^\=end$",
                next : "start"
            }, {
	            token : "comment", // comment spanning whole line
	            regex : ".+"
	        }
        ]
    };
};

oop.inherits(ClojureHighlightRules, TextHighlightRules);

exports.ClojureHighlightRules = ClojureHighlightRules;
});
__bravojs_loaded_moduleIdentifier = bravojs.realpath(bravojs.mainModuleDir + '/87749d9714f1925e26afa48a0d592eaa39403858@/lib/ace/mode/clojure_highlight_rules');