function sayHello(name){
    console.log('Hello ${name}');
}

function sayGoodbye(name){
    console.log('GoodsBye ${name}');
}

module.exports.sayHello = sayHello
exports.sayGoodbye = sayGoodbye