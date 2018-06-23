# webserver
Standalone static webserver on Node.js and Express.js.

The main concept is to serve static files and always show index.html instead of 404 error. This feachure is required for application building where CMS feachures such as uri path routing and dynamic page generating is done on browser side by js application.

So, the logic is "If static file exist, send it. If not - send /index.html". And "index.html" must look at the URI and do the all dirty work.

# Usage:
1) start server by node.js executable;
2) go to localhost:5000 to see the sample site working;
3) look at "sites" subdirectory to see how it organized;
4) create directory (or symlink to real place with it) with your domain name at "sites" subdirectory and index.html into it;
5) place your other required files there;
6) access server by your domain name and see your site is working.

If you want to change the default port, it can be done in two ways:
1) set environment variable "PORT" before starting;
2) change it in App/main.js.

# TODO
1) make multithreaded version
2) move setting to external config
3) improve documentation
