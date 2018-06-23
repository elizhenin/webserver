var Environment = {};
Environment.APPDIR = __dirname + "/";
Environment.ROOTDIR = Environment.APPDIR + "../";
Environment.SITESDIR = Environment.ROOTDIR + "sites";
Environment.listen_port = 5000;
//common requres
var express = require('express');
var path = require('path');
var fs = require('fs');

Environment.app = express();
Environment.app
    .get(/(.+)$/,
        function(req, res) {
            domain = req.hostname;
            console.log('request for "' + domain + '"');
            var result = '';
            var requested = path.join(Environment.SITESDIR, domain, req.params[0]);
            console.log('search for file "' + req.params[0] + '"');
            var fallback = path.join(Environment.SITESDIR, domain, 'index.html');
            if (fs.existsSync(requested)) {
                result = requested;
            } else if (fs.existsSync(fallback)) {
                result = fallback;
            } else result = path.join(Environment.SITESDIR, 'index.html');
            console.log('sending "' + result + '"');
            res.sendFile(result);

        });

var port = process.env.PORT || Environment.listen_port;
Environment.app.listen(port, function() {
    console.log("Listening on " + port);
});