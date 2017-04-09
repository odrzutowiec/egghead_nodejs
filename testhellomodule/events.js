function sayHello() {
  console.log('hello');
}
function sayBye() {
  console.log('bye');
}
var EventEmitter = require('events').EventEmitter;
var emitter = new EventEmitter();
emitter.on('hello', sayHello);
emitter.on('bye', sayBye);
emitter.emit('hello');
emitter.emit('bye');
