# cors-dumper
#### A simple proxy server that can be used to bypass CORS.
##### A working instance will be added soon. 
#
###### If you want to use it meanwhile you have to:
* git clone https://github.com/axbg/cors-dumper.git
* navigate to cors-dumper directory
* npm install
* set a value for the PORT variable in constants.js
* npm start
* call the resource using the proxy:
    * GET: proxy_server_url?url=resource_url
    * POST: proxy_server_url?url=resource_url&body=request_body
        * the *body* parameter has to be URL encoded
* say goodbye to anoying CORS errors
