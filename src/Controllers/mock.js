console.log('fired first');
console.log('fired second');

setTimeout(()=>{
    console.log('fired third');
},2000);  //2 seconds

console.log('fired last');