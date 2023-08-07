function func1(){
    // alert("hello all");
  let num1= Math.floor(Math.random()*3)
  if(num1==0){
    var a=document.getElementById("text")
    a.innerHTML=`\nYour: rock\n     
                 computer: rock\n
                 Match tie`
  }
  else if(num1==1)
  {
    var a=document.getElementById("text")
    a.innerHTML=`\nYour:rock\n
                  computer: paper\n
                  computer wins`
  }
    else if(num1==2)
    {
    var a=document.getElementById("text")
    a.innerHTML=`\nYour: rock\n
                 computer: scirror\n
                 you wins`
    }
  }
  
  function func2(){
    // alert("hello all");
  let num2= Math.floor(Math.random()*3)
    if(num2==1)
    {
      var a=document.getElementById("text")
      a.innerHTML=`\nYour: paper\n
                   computer: paper\n
                    \tMatch tie`
    }
    else if(num2==0)
    {
      var a=document.getElementById("text")
      a.innerHTML=`\nYour: paper\n
                    computer:rock\n
                     \tyou wins`
    }
    else if(num2==2)
    {
      var a=document.getElementById("text")
      a.innerHTML=`\nYour: paper\n
                  computer: scirror\n
                  \tcomputer wins`
    }
  }
  
  
  function func3(){
    // alert("hello all");
  let num3= Math.floor(Math.random()*3)
    if(num3==2)
    {
      var a=document.getElementById("text")
      a.innerHTML=`\nYour: scirror\n
                   computer: scirror\n
                   Match tie`
    }
    else if(num3==0)
    {
      var a=document.getElementById("text")
      a.innerHTML=`\nYour: scirror\n
                    computer : rock\n
                    computer wins`
    }
    else if(num3==1){
      var a=document.getElementById("text")
      a.innerHTML=`\nyour: scirror\n
                    computer: paper\n
                    You wins`
    }
  }