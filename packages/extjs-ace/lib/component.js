
module.declare(["pilot/dom", "text!./component.css"], function(require, exports, module)
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
                self._editorLoaded = false;
                self._afterOnRender = false;

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

                        self._editorLoaded = true;
                        if (self._afterOnRender && !self.initialized)
                            self.firstRender();
                    });
                });

                if (typeof this.on === "function")
                {
                    this.on("resize", function()
                    {
                        if(self.editor) {
                            self.editor.resize();
                        }
                    });
                }
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

                this._afterOnRender = true;
                if (this._editorLoaded && !this.initialized)
                    this.firstRender();
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
