
var PATH = require("nodejs/path"),
    PROMISE = require("jsgi/promise"),
    PROGRAM_SERVER = require("pinf/program-server");

exports.main = function(env)
{
    var server = new PROGRAM_SERVER.JSGI({
        api: {
            PROMISE: PROMISE
        },
        map: {
            "/extjs3-ace/Component.js": {
                programPath: PATH.dirname(PATH.dirname(module.id)) + "/programs/extjs3-ace/program.json"
            },
            "/extjs4-ace/Component.js": {
                programPath: PATH.dirname(PATH.dirname(module.id)) + "/programs/extjs4-ace/program.json"
            }
        }
    });

    server.spider("/extjs3-ace/Component.js", PATH.dirname(PATH.dirname(module.id)) + "/build");
    server.spider("/extjs4-ace/Component.js", PATH.dirname(PATH.dirname(module.id)) + "/build");
}
