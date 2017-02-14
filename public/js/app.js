var Counter = {
  count: 0,//data
  init: function (){
    Counter.cacheDom();
    Counter.addEventListeners();
    Counter.render();
  },
  cacheDom: function (){
    Counter.increaseButton = document.querySelector('#increase');
    Counter.decreaseButton = document.querySelector('#decrease');
    Counter.output = document.querySelector('#count');
  },
  addEventListeners: function (){
    Counter.increaseButton.addEventListener('click', Counter.increaseButton);
    Counter.decreaseButton.addEventListener('click', Counter.decreaseButton);
  },
  render: function (){
    Counter.output.innerHTML = Counter.count;
  },
  inc: function(){
    Counter.render();
  },
  dec: function(){

    Counter.render();
  },
};
Counter.init();
console.log(Counter);
