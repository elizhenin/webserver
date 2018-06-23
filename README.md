# webserver
Standalone static webserver on Node.js and Express.js.

The main concept is to serve static files and always show index.html instead of 404 error. This feachure is required for application building where CMS tasks such as uri path routing and dynamic page generating is done on browser side by js application.

So, the logic is "If static file exist, send it. If not - send /index.html". And "index.html" must look at the URI and do the all dirty work.

# Usage:
1) start server by node.js executable;
2) go to localhost:5000 to see the sample site working;
3) look at "sites" subdirectory to see how it organized. The bootstrap template is placed there at this moment, not good example but enougth;
*Hint: create symlink to "localhost" directory and name it "127.0.0.1". See that this way also works, to open your resource by IP instead of domain;*
4) create directory with your domain name at "sites" subdirectory and index.html into it;
*Hint: you can make symlink to real place of directory with your files instead;*
5) place your other required files there;
6) access server by your domain name and see your site is working;
7) configure best number of worker threads by modyfying *Environment.workers_per_cpu* in App/main.js file.
8) Got it!

If you want to change the default port, it can be done in two ways:
1) set environment variable "PORT" before starting node.js;
2) change *Environment.listen_port* variable in App/main.js.

# TODO
1) <del>make multithreaded version</del> - Done.
2) move setting to external config;
3) improve documentation.
