
// 객체
var Body ={
  setColor: function setColor(color){
  var alist = document.querySelectorAll('a');
    for(i=0; i<alist.length; i++){
      alist[i].style.color = color;  
    }
  },
  setBackgroundColor:function setBackgroundColor(color){
    document.querySelector('body').style.backgroundColor = color;
  }
}
function nigth_bay_handler(self){
  var target = document.querySelector('body');
  if(self.value === 'night'){
    Body.setBackgroundColor('gray');
    self.value = 'day';
    Body.setColor('powderblue');
  } else{
    Body.setBackgroundColor('cornsilk');
    self.value = 'night';
    Body.setColor('blue');
  }
}