var iron_mq = require('iron_mq');
var imq = new iron_mq.Client();

var queue = imq.queue("my_queue");

var options = {};

queue.get(options, function(error, body) {
    if (error) {
        console.error(error);
    }    
    console.log(body);
});