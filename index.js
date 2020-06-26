var input=document.querySelector("#input");
var ul=document.querySelector("#lists")
input.addEventListener('keypress',function(event){
    if(event.keyCode===13){
       var list=document.createElement('li');
      list.innerHTML=event.target.value;
      ul.appendChild(list);
      event.target.value=""
      var span=document.createElement('span')
      span.innerHTML="X";
    
      list.appendChild(span);
      span.addEventListener('click',function(){
        ul.removeChild(list)
    })
    }
    
})