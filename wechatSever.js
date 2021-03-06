var http = require('https');
var fs = require("fs");

var options = {

    key: fs.readFileSync('2_22097341.qcloud.la.key'),   //加载https证书

    cert: fs.readFileSync('1_22097341.qcloud.la_bundle.crt')

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
        case '/home/rank':defaultFunc('JsonData/rank.json',1);break;
        case '/home/hotPage':defaultFunc('JsonData/hotPage.json',1);break;
        case '/home/detail':defaultFunc('JsonData/detail.json',1);break;
        case '/home/new':defaultFunc('JsonData/new.json',1);break;
        case '/home/detail100392':defaultFunc('JsonData/detail100392.json',1);break;
        case '/home/detail100389':defaultFunc('JsonData/detail100389.json',1);break;
        case '/home/detail100384':defaultFunc('JsonData/detail100384.json',1);break;
        case '/image/home/rank':defaultFunc('images/dailySelection@2x.png',0);break;
        case '/image/hot1':defaultFunc('images/hot1.jpg',0);break;
        case '/image/hot2':defaultFunc('images/hot2.jpg',0);break;
        case '/image/hot3':defaultFunc('images/hot3.jpg',0);break;
        case '/image/slider1':defaultFunc('images/slider1.jpg',0);break;
        case '/image/slider2':defaultFunc('images/slider2.jpg',0);break;
        case '/image/slider3':defaultFunc('images/slider3.jpg',0);break;
        case '/image/slider4':defaultFunc('images/slider4.jpg',0);break;
        case '/image/new0':defaultFunc('images/new0.jpg',0);break;
        case '/image/new1':defaultFunc('images/new1.jpg',0);break;
        case '/image/new2':defaultFunc('images/new2.jpg',0);break;
        case '/image/new3':defaultFunc('images/new3.jpg',0);break;
        case '/image/new4':defaultFunc('images/new4.jpg',0);break;
        case '/image/new5':defaultFunc('images/new5.jpg',0);break;
        case '/image/new6':defaultFunc('images/new6.jpg',0);break;
        case '/image/new7':defaultFunc('images/new7.jpg',0);break;
        case '/image/new8':defaultFunc('images/new8.jpg',0);break;
        case '/image/new9':defaultFunc('images/new9.jpg',0);break;
        case '/image/new10':defaultFunc('images/new10.jpg',0);break;
        case '/image/new11':defaultFunc('images/new11.jpg',0);break;
        case '/image/new12':defaultFunc('images/new12.jpg',0);break;
        default:
            response.writeHead(200,{"Content-Type":"text/html; charset=utf-8"});
            response.write('hello word');
            response.end();
            break;
    }

    /*response.writeHead(200, {'Content-Type': 'text/plain'});
    response.end('');*/
}).listen(8081);
console.log('Server running at https://localhost:8081/');