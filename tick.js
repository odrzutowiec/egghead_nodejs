console.log('start');
process.nextTick(function(){
  console.log('nextTick');
});
setTimeout(function(){
  console.log('settimeout');
}, 0);
console.log('scheduled');
