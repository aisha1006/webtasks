  
     var s = document.querySelectorAll('#tasks > div > span');
     var b = document.querySelectorAll('#tasks > div > button');

s[0].style.textDecoration='none'
s[1].style.textDecoration='none'
s[2].style.textDecoration='none'
s[3].style.textDecoration='none'
s[4].style.textDecoration='none'



      b[0].onclick=function a() {
      if(s[0].style.textDecoration=='none'){
      s[0].style.textDecoration='line-through';
      }
      else{
        s[0].style.textDecoration='none';

      }
     }

      b[1].onclick=function a() {
      if(s[1].style.textDecoration=='none'){
      s[1].style.textDecoration='line-through';
      }
      else{
        s[1].style.textDecoration='none';

      }
     } 


      b[2].onclick=function a() {
      if(s[2].style.textDecoration=='none'){
      s[2].style.textDecoration='line-through';
      }
      else{
        s[2].style.textDecoration='none';

      }
     } 

      b[3].onclick=function a() {
      if(s[3].style.textDecoration=='none'){
      s[3].style.textDecoration='line-through';
      }
      else{
        s[3].style.textDecoration='none';

      }
     } 

      b[4].onclick=function a() {
      if(s[4].style.textDecoration=='none'){
      s[4].style.textDecoration='line-through';
      }
      else{
        s[4].style.textDecoration='none';

      }
     }