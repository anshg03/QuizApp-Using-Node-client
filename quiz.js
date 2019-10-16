$(function(){
    result();
    let mark=0; 
    sessionStorage.setItem("mark",mark);
  })

let count;
let data;
let queCount=0;
let countNo=1;


$(document).ready(function(){
     $.ajax({ 
         url:'http://localhost:8000/'
        }).done(function(dataNew) {
         data=dataNew;     
  });

 })
 
 function result()
 {
    let marksession=sessionStorage.getItem("mark");
     let mark1=parseInt(marksession, 10);
    $("#result").text(marksession);
 }

  function getJSON(){
    
    queCount++;
    countNo++;
    if(countNo<=7)
    {
        $("#queno").text(countNo);
        $("#que").text(data[0][queCount].question);
        $("#value1").text(data[0][queCount].options[0]);
        $("#value2").text(data[0][queCount].options[1]);
        $("#value3").text(data[0][queCount].options[2]);
        $("#value4").text(data[0][queCount].options[3]);
        sessionStorage.setItem("ans",data[0][queCount].answer);
    }
}


function process(value)
{
    selectedValue=value.innerText;
    console.log(selectedValue);
    let ans = sessionStorage.getItem("ans");
    if(ans==selectedValue)
    {
        console.log("Right answer");
        let mark=sessionStorage.getItem("mark");
        let mark1=parseInt(mark, 10);
        mark1++;
        //console.log(mark1);
        sessionStorage.setItem("mark",mark1);   
    }
    else
    {
        console.log("wrong answer");   
    }
    getJSON();  
}


  




    

