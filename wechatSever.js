var http = require('https');
var fs = require("fs");

var options = {

    key: fs.readFileSync('214297523400983.key'),   //加载https证书

    cert: fs.readFileSync('214297523400983.pem')

};
http.createServer(options, function (request, response) {
    var path = request.url;
    var defaultFunc = function(fileName,requestType){
        if(requestType){
            fs.readFile(fileName,function(err,data){
                response.writeHead(200,{"Content-Type":"text/html; charset=utf-8"});
                response.write(data);
                response.end();
            });
        }else {
            fs.readFile(fileName,function(err,data){
                response.writeHead(200,{"Content-Type":"image/jpeg"});
                response.write(data);
                response.end();
            });
        }

    }
    switch(path){
        case '/discover/home/rank':defaultFunc('JsonData/rank.json',1);break;
        case '/discover/home/hotPage':defaultFunc('JsonData/hotPage.json',1);break;
        case '/image/home/rank':defaultFunc('images/dailySelection@2x.png',0);break;
        case '/image/hot1':defaultFunc('images/hot1.jpg',0);break;
        case '/image/hot2':defaultFunc('images/hot2.jpg',0);break;
        case '/image/hot3':defaultFunc('images/hot3.jpg',0);break;
        case '/image/slider1':defaultFunc('images/slider1.jpg',0);break;
        case '/image/slider2':defaultFunc('images/slider2.jpg',0);break;
        case '/image/slider3':defaultFunc('images/slider3.jpg',0);break;
        case '/image/slider4':defaultFunc('images/slider4.jpg',0);break;
        default:
            response.writeHead(200,{"Content-Type":"text/html; charset=utf-8"});
            response.write('hello word');
            response.end();
            break;
    }

    /*response.writeHead(200, {'Content-Type': 'text/plain'});
    response.end('');*/
}).listen(8888);
console.log('Server running at http://localhost:8888/');