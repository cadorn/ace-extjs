
module.declare(["pilot/event_emitter", "pilot/oop", "pilot/fixoldbrowsers"], function(require, exports, module)
{
    exports.main = function()
    {
        var console = {
            log: function(msg) {
                postMessage({type: "log", data: msg});
            }
        };

        var window = {
            console: console
        };

        function initSender() {
        
            var EventEmitter = require("pilot/event_emitter").EventEmitter;
            var oop = require("pilot/oop");
            
            var Sender = function() {};
            
            (function() {
                
                oop.implement(this, EventEmitter);
                        
                this.callback = function(data, callbackId) {
                    postMessage({
                        type: "call",
                        id: callbackId,
                        data: data
                    });
                };
            
                this.emit = function(name, data) {
                    postMessage({
                        type: "event",
                        name: name,
                        data: data
                    });
                };
                
            }).call(Sender.prototype);
            
            return new Sender();
        }

        onmessage = function(e) {
            var msg = e.data;
            if (msg.command) {
                main[msg.command].apply(main, msg.args);
            }
            else if (msg.init) {        
                require("pilot/fixoldbrowsers");
                sender = initSender();

                module.load(require.id(msg.module, true), function(id)
                {
                    var clazz = require(id)[msg.classname];
                    main = new clazz(sender);
                });
            } 
            else if (msg.event) {
                sender._dispatchEvent(msg.event, msg.data);
            }
        };
    }
});
