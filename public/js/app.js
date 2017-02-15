var Counter = {
  count: 0, //data
  init: function (){ //initializes the following functions
    Counter.cacheDom();
    Counter.addEventListeners();
    Counter.render();
  },
  cacheDom: function (){
    Counter.increaseButton = document.querySelector('#increase');
    Counter.decreaseButton = document.querySelector('#decrease');
    Counter.output = document.querySelector('#count');
  },
  addEventListeners: function (){ //adds mouse events
    Counter.increaseButton.addEventListener('click', Counter.increase);
    Counter.decreaseButton.addEventListener('click', Counter.decrease);
  },
  render: function (){
    Counter.output.innerHTML = Counter.count;
  },
  increase: function(){ 
    Counter.count += 1;
    Counter.render();
  },
  decrease: function(){
    Counter.count -= 1;
    Counter.render();
  },
};
Counter.init();
console.log(Counter);
