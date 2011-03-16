
module.declare([
    // required for this module
    "pilot/fixoldbrowsers",
    "pilot/plugin_manager",
    "pilot/settings",
    "pilot/environment",
    // preload typically used
    "pilot/canon",
    "pilot/event",
    "ace/editor",
    "ace/virtual_renderer",
    "ace/edit_session",
    "ace/undomanager",
    "ace/theme/textmate",
    "ace/mode/text"
], function(require, exports, module)
{
    var env,
        launchCallback;
    exports.main = function()
    {
        exports.init();
    }
    exports.init = function(callback)
    {
        var plugins = [
            "pilot/index",
            "cockpit/index",
            "ace/defaults"
        ];
        var catalog = require("pilot/plugin_manager").catalog;
        catalog.registerPlugins(plugins).then(function()
        {
            env = require("pilot/environment").create();
            catalog.startupPlugins({ env: env }).then(function()
            {
                if (typeof callback != "undefined")
                    callback(env);
                if (typeof launchCallback != "undefined")
                    launchCallback(env);
            });
        });
    }
    exports.module = function(id)
    {
        return require(id);
    }
    exports.launch = function(callback)
    {
        if (typeof callback == "string")
        {
            if (callback == "demo")
            {
                callback = function(env)
                {
                    module.load(require.id("./demo", true), function(id)
                    {
                        require(id).launch(env);
                    });
                }
            }
            else
                throw new Error("Unknown editor configuration: " + callback);
        }

        if (typeof env != "undefined")
            callback(env);
        else
            launchCallback = callback;
    }
});
