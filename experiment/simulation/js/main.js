/*Redeveloped
Lab: Software Engineering
Exp: Modeling Data Flow Diagrams
File Name: main.js
Author: Prakriti Dhang*/

/* Exercise number choice */
var ex= document.getElementById("selectex");
function subex(){

  if(ex.options[ex.selectedIndex].value==0){
    document.getElementById("exercise1").style.display="none";
    document.getElementById("ex1").style.display="none";
    document.getElementById("para1").style.display="none";
    document.getElementById("dispres").style.display="none";
    document.getElementById("show_result1").style.display="none";
    document.getElementById("show_result2").style.display="none";
    document.getElementById("dispuml1").style.display="none";
    document.getElementById("dispuml2").style.display="none";
    document.getElementById("dispviewbtn").disabled=true;
    document.getElementById("viewsol").disabled=true;
    
}
    if(ex.options[ex.selectedIndex].value==1){
        document.getElementById("exercise1").style.display="block";
        document.getElementById("ex1").style.display="block";
        document.getElementById("exercise2").style.display="none";
       document.getElementById("ex2").style.display="none";
        document.getElementById("para1").style.display="block";
        document.getElementById("dispres").style.display="none";
        document.getElementById("show_result1").style.display="none";
        document.getElementById("show_result2").style.display="none";
        document.getElementById("dispuml1").style.display="none";
        document.getElementById("dispuml2").style.display="none";
        document.getElementById("dispviewbtn").disabled=false;
        document.getElementById("viewsol").disabled=true;
       
    }
    if(ex.options[ex.selectedIndex].value==2){
      document.getElementById("exercise2").style.display="block";
      document.getElementById("ex2").style.display="block";
      document.getElementById("exercise1").style.display="none";
      document.getElementById("ex1").style.display="none";
      document.getElementById("para1").style.display="block";
      document.getElementById("dispres").style.display="none";
      document.getElementById("show_result1").style.display="none";
      document.getElementById("show_result2").style.display="none";
      document.getElementById("dispuml1").style.display="none";
      document.getElementById("dispuml2").style.display="none";
      document.getElementById("dispviewbtn").disabled=false;
      document.getElementById("viewsol").disabled=true;
     
  }
    
    
}
/* Submit button to directly view the solution*/

function viewsolutionb(){ //submit button
  document.getElementById("dispres").style.display="block";
  document.getElementById("show_result1").style.display="none";
  document.getElementById("show_result2").style.display="none";
    document.getElementById("viewsol").disabled=false;
    document.getElementById("dispviewbtn").disabled=true;
    if(ex.options[ex.selectedIndex].value==1){
    window.scrollBy(0, 1800);
    }
    if(ex.options[ex.selectedIndex].value==2){
      window.scrollBy(0, 2800);
    }

}

function solview(){  //view solution button
  if(ex.options[ex.selectedIndex].value==1){
  document.getElementById("show_result1").style.display="block";
  document.getElementById("show_result2").style.display="none";
    document.getElementById("viewsol").disabled=true;
    
  }
  if(ex.options[ex.selectedIndex].value==2){
    document.getElementById("show_result2").style.display="block";
    document.getElementById("show_result1").style.display="none";
      document.getElementById("viewsol").disabled=true;
      
    }

}
 
