
var host = "localhost",
    port = 8003;

var CONNECT = require("connect/connect"),
    PATH = require("nodejs/path"),
    PROMISE = require("jsgi/promise"),
    PROGRAM_SERVER = require("pinf/program-server");

exports.main = function()
{
    module.print("\n\0cyan(\0bold(Welcome to the project server for the ACE Editor ExtJS Component!\0)\0)\n\n");
    module.print("\0yellow(\0bold(Use your browser to navigate to: " + "http://" + host + ":" + port + "/" + "\0)\0)\n\n");

    CONNECT()
        .use('/extjs3', CONNECT.static(require.pkg("extjs3").id(), {
            maxAge: 0
        }))
        .use('/extjs4', CONNECT.static(require.pkg("extjs4").id(), {
            maxAge: 0
        }))
        .use('/', CONNECT.static(PATH.dirname(PATH.dirname(module.id)) + "/www", {
            maxAge: 0
        }))
        .use('/build/', CONNECT.static(PATH.dirname(PATH.dirname(module.id)) + "/build", {
            maxAge: 0
        }))
        .use('/ace', jsgi(new PROGRAM_SERVER.JSGI({
            api: {
                PROMISE: PROMISE
            },
            map: {
                "/ace/AceEditor.js": {
                    programPath: PATH.dirname(PATH.dirname(module.id)) + "/programs/ace/program.json"
                }
            },
            trackRoutes: true
        }).responder(null)))
        .use('/extjs3-ace', jsgi(new PROGRAM_SERVER.JSGI({
            api: {
                PROMISE: PROMISE
            },
            map: {
                "/extjs3-ace/Component.js": {
                    programPath: PATH.dirname(PATH.dirname(module.id)) + "/programs/extjs3-ace/program.json"
                }
            },
            trackRoutes: true
        }).responder(null)))
        .listen(port);
}

// TODO: This should move to https://github.com/senchalabs/connect/blob/master/lib/middleware/jsgi.js
var jsgi = function jsgi(app, options)
{
    options = options || {};

    return function(req, res, next)
    {
        var env = {
            pathInfo: req.originalUrl,
            port: port,  // TODO: This should come from req
            host: host   // TODO: This should come from req
        };

        var data = app(env);

        if (typeof data == "object")
        {
            if (typeof data.then == "function")
            {
                function handle(data)
                {
                    res.statusCode = data.status;
                    for (var name in data.headers)
                    {
                        // TODO: Camelcase names
                        res.setHeader(name, data.headers[name]);
                    }
                    res.end(data.body.join(""));
                }
                data.then(
                    handle,
                    function (error)
                    {
                        module.print("Error: " + error.stack);
                        handle({ status:500, headers:{}, body:[error.message] });
                    },
                    function (data)
                    {
                        throw new Error("NYI");
                        // @see https://github.com/kriszyp/jsgi-node/blob/v0.2.4/lib/jsgi-node.js#L128
                        // TODO: handle(data, true);
                    }
                );
                return;
            }
            else
                throw new Error("NYI");
        }
        else
            throw new Error("NYI");
    }
}
