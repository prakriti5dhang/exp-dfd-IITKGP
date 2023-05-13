
/* Redeveloped
Lab: Software Engineering
Exp: Modeling Data Flow Diagrams
File Name: exercise1.js
Author: Prakriti Dhang*/
/********************************************* Table 1 ****************************************/


var arrentity=[];
var inpt1;
function addbtnt1(){
    let   newtd, newtdp, newtdds;  
inpt1=document.getElementById("inp1").value;
arrentity.push(inpt1)


  var newIconbtn = document.createElement("img");
  newIconbtn.setAttribute("src","./images/remove.png");
  newIconbtn.setAttribute("onclick", "removerow(this)");
  newIconbtn.setAttribute("style","cursor:pointer;");
  //newdiv.appendChild(newIconbtn);

  let newtrID =  inpt1;
  let newtdID= inpt1;
  //rbtn.appendChild(newIconbtn);   
let newtr=document.createElement("tr");
newtr.setAttribute("id",newtrID);
newtd = document.createElement("td");
newtd.setAttribute("class","entityname");
newtd.setAttribute("id",newtdID);
//newdiv = document.createElement("div");
//newdiv.setAttribute("class", "form-check");
newtr.appendChild(newtd);
//newtd.appendChild(newdiv);


newuLi = document.createElement("ul");
newuLi.setAttribute("style","list-style-type:none" );
newLi = document.createElement("li");
let liTextNodeact = document.createTextNode(inpt1);
newLi.appendChild(liTextNodeact);
newLi.appendChild(newIconbtn);
newuLi.appendChild(newLi);
newtd.appendChild(newuLi);


/**** process *****/
let newtdpID =  "process_" +inpt1;
newtdp = document.createElement("td");
//newula = document.createElement("ul");
newtdp.setAttribute("id",newtdpID);

//newtda.appendChild(newula);
newtr.appendChild(newtdp);
let liTextNodeacta = document.createTextNode("");
newtdp.appendChild(liTextNodeacta);
//liTextNodeacta.appendChild(newIconbtn);
newtr.appendChild(newtdp);

/**** data store *****/
let newtdsID =  "ds_" +inpt1;
newtdds = document.createElement("td");
//newula = document.createElement("ul");
newtdds.setAttribute("id",newtdsID);

//newtda.appendChild(newula);
newtr.appendChild(newtdds);
let liTextNodeactds = document.createTextNode("");
newtdds.appendChild(liTextNodeactds);
//liTextNodeactds.appendChild(newIconbtn);
newtr.appendChild(newtdds);


  if (inpt1 == "") {
    alert("Please Enter External Entity before clicking Add Button");
  } else {
    document.getElementById('tbodyt5').appendChild(newtr);
    
 
  document.getElementById("inp1").value="";

/*********************** Adding input value in table 4 dropdown (from ) *************************/

let newOptionIDt4;
newOptionIDt4 = 'newOption_' + inpt1;
  
let newOptiont4 = document.createElement('option');
let optionTextt4 = document.createTextNode(inpt1);
// set option text
newOptiont4.appendChild(optionTextt4);
// and option value

newOptiont4.setAttribute("id", newOptionIDt4);
newOptiont4.setAttribute('value',inpt1);
let selectt4 = document.getElementById('selectfrom'); 
selectt4.appendChild(newOptiont4);



 




  /*********************** Adding input value table 4 dropdown ( to) *************************/

let newOptionID;
newOptionID = 'newOption_' + inpt1;
  
let newOption = document.createElement('option');
let optionText = document.createTextNode(inpt1);
// set option text
newOption.appendChild(optionText);
// and option value

newOption.setAttribute("id", newOptionID);
newOption.setAttribute('value',inpt1);
let select = document.getElementById('selectto'); 
select.appendChild(newOption);

  }
}

  /************************************ Function for Table 2 ********************************************/
  var arrprocess=[];
  
  var inpt2, inpt3;
  function addbtnt2() {
    
  inpt2=document.getElementById("inp2").value;
  inpt3=document.getElementById("inp3").value;
 
  var newIconbtn = document.createElement("img");
  newIconbtn.setAttribute("src","./images/remove.png");
  newIconbtn.setAttribute("onclick", "removerowuc(this)");
  newIconbtn.setAttribute("style","cursor:pointer;");

  var b_sign="(";
  var para = document.createElement("b");
  let add_b = document.createTextNode(b_sign);
  para.appendChild(add_b);
  var b_sign1=")";
  var para1 = document.createElement("b");
  let add_b1 = document.createTextNode(b_sign1);
  para1.appendChild(add_b1);


newuLi = document.createElement("ul");
newuLi.setAttribute("style","list-style-type:none" );
newLi = document.createElement("li");
let liTextNodep = document.createTextNode(inpt2);
let liTextNodepl = document.createTextNode(inpt3);
newLi.appendChild(liTextNodep);
newLi.appendChild(para);
newLi.appendChild(liTextNodepl);
newLi.appendChild(para1);


newLi.appendChild(newIconbtn); 
newuLi.appendChild(newLi);

 if (inpt2 == "" ) {
    alert("Please Enter Process Before Clicking Add Button");
  } 
  else if (inpt3 == ""){
    alert("Please Enter Process Level Before Clicking Add Button");
  }
  
  else{
    document.getElementById("process_" +inpt1 ).appendChild(newuLi);
    var pl= inpt2+"("+inpt3+")";
    arrprocess.push(pl);
    
    let newOptionIDp;
    newOptionIDp = 'newOption_' + inpt2;
      
    let newOptionp = document.createElement('option');
    let optionTextp = document.createTextNode(inpt2);
    // set option text
    newOptionp.appendChild(optionTextp);
    // and option value
    
    newOptionp.setAttribute("id", newOptionIDp);
    newOptionp.setAttribute('value',inpt2);
    let selectp = document.getElementById('selectfrom'); 
    selectp.appendChild(newOptionp);


    let newOptionIDpt;
newOptionIDpt = 'newOption_' + inpt2;
  
let newOptionpt = document.createElement('option');
let optionTextpt = document.createTextNode(inpt2);
// set option text
newOptionpt.appendChild(optionTextpt);
// and option value

newOptionpt.setAttribute("id", newOptionIDpt);
newOptionpt.setAttribute('value',inpt2);
let selectpt = document.getElementById('selectto'); 
selectpt.appendChild(newOptionpt);

  }

document.getElementById("inp2").value="";
document.getElementById("inp3").value="";



}


function removerow(btndel) {
  if (typeof(btndel) == "object") {
      $(btndel).closest("tr").remove();
      
  } 
 

  else {
     return false;
  }
}


function removerowuc(btndel) {

if (typeof(btndel) == "object") {

    $(btndel).closest("li").remove();
   
   // x.remove(typeof(btndel));
   
} else {
    return false;
}
}



/************************************ Function for Table 3 ********************************************/
var inpt4;
var arrdatastore=[];
function addbtnt3() {
  
inpt4=document.getElementById("inp4").value;

  
var newIconbtn = document.createElement("img");
  newIconbtn.setAttribute("src","./images/remove.png");
  newIconbtn.setAttribute("onclick", "removerowuc(this)");
  newIconbtn.setAttribute("style","cursor:pointer;");


newuLin = document.createElement("ul");
newLin = document.createElement("li");
newuLin.setAttribute("style","list-style-type:none" );

let liTextNodent = document.createTextNode(inpt4);
newLin.appendChild(liTextNodent);
newLin.appendChild(newIconbtn);



newuLin.appendChild(newLin);




 if (inpt4 == "") {
    alert("Please Enter Data Store Before Clicking Add Button");
  } 
  
  else{
   document.getElementById("ds_"+inpt1 ).appendChild(newuLin);


   let newOptionIDds;
   newOptionIDds= 'newOption_' + inpt4;
     
   let newOptionds = document.createElement('option');
   let optionTextds = document.createTextNode(inpt4);
   // set option text
   newOptionds.appendChild(optionTextds);
   // and option value
   
   newOptionds.setAttribute("id", newOptionIDds);
   newOptionds.setAttribute('value',inpt4);
   let selectds = document.getElementById('selectfrom'); 
   selectds.appendChild(newOptionds);


   let newOptionIDdst;
newOptionIDdst = 'newOption_' + inpt4;
 
let newOptiondst = document.createElement('option');
let optionTextdst = document.createTextNode(inpt4);
// set option text
newOptiondst.appendChild(optionTextdst);
// and option value

newOptiondst.setAttribute("id", newOptionIDdst);
newOptiondst.setAttribute('value',inpt4);
let selectdst = document.getElementById('selectto'); 
selectdst.appendChild(newOptiondst);

 
  }
  document.getElementById("inp4").value="";
  document.getElementById("ftbl3").reset();

}
/********************************************************** Function for Table 4 *****************************************************************/


var sels1,s1eval,sels2,s2eval;

function addbtnt5(){
    let inpt4, inpt5, inpt6;
   
   

inpt4=document.getElementById("inp4").value;
arrevent.push(inpt4);
//console.log(arrevent);
inpt5=document.getElementById("inp5").value;
inpt6=document.getElementById("inp6").value;
sels1= document.getElementById("selectstatet5a");
s1eval =sels1.options[sels1.selectedIndex].text;
//arrstate1.push(s1eval);
//console.log(arrstate1);

   sels2= document.getElementById("selectstatet5b");
  s2eval =sels2.options[sels2.selectedIndex].text;
  //arrstate2.push(s2eval);
  //console.log(arrstate2);

  if((s1eval=="Current State") || (s2eval=="Next State")){
    alert("Please add a transition from Initial state to one of the states in your system");
   }
  else if(s1eval==s2eval){
alert("A system should not have any transition from Initial to itself");
}
 else if((s1eval=="Initial") && (s2eval=="Final")){
  alert("A system should not have any transition from Initial to Final");
 }
 else if(inpt4 == ""){
  alert("An event is necessary for a state transition to occur! Please specify it.");
 }
else{
 tr = document.createElement('tr');
  tr.setAttribute("id","t6st");
  document.getElementById('tbodytbt6').appendChild(tr);
  var td1 = document.createElement('td');
  var td2=document.createElement("td");
  var td3=document.createElement("td");
  var td4=document.createElement("td");
  var td5=document.createElement("td");
  var td6=document.createElement("td");
  var tdval1=document.createTextNode(s1eval);
  var tdval2=document.createTextNode(inpt4);
  var tdval3=document.createTextNode(inpt5);
  var tdval4=document.createTextNode(inpt6);
  var tdval5=document.createTextNode(s2eval);
  



var newIconbtn = document.createElement("btn");
newIconbtn.setAttribute("type", "button");
newIconbtn.setAttribute("class", "btn btn-danger");
newIconbtn.setAttribute("onclick", "removerow(this)");
newIconbtn.setAttribute("style","cursor:pointer;");
       
var newIconbtni = document.createElement("i");
newIconbtni.setAttribute("class", "bi bi-dash-circle");
newIconbtn.appendChild(newIconbtni);
        
  td1.appendChild(tdval1);
  td2.appendChild(tdval2);
  td3.appendChild(tdval3);
  td4.appendChild(tdval4);
  td5.appendChild(tdval5);
  td6.appendChild(newIconbtn); 
  
  tr.appendChild(td1);
  tr.appendChild(td2);
  tr.appendChild(td3);
  tr.appendChild(td4);
  tr.appendChild(td5);
  tr.appendChild(td6);
  document.getElementById('tbodytbt6').appendChild(tr);
  document.getElementById("inp4").value="";
}
  //document.getElementById("ftbl5").reset();
}


function drawbtex1(){

  document.getElementById("dispuml1").style.display="block";
  var namespace = joint.shapes;

  var graph = new joint.dia.Graph({}, { cellNamespace: namespace });

  paper = new joint.dia.Paper({
      el: document.getElementById('stchart_diag_ex1'),
      model: graph,
      //x: 0,
      //y: 0,
      //width: $('#ucdiagram1').width(),
      //height:  $('#ucdiagram1').height(), // height had to be increased
     
      background: {
          color: '#ffffff', //'rgba(0, 255, 0, 0.3)'
      },
      
      cellViewNamespace: namespace
  });

  var initialst = new joint.shapes.standard.Image();
  initialst.resize(25, 25);
  initialst.position(29,107);
  //actor1.position(103, 15);
  initialst.attr('root/title', 'joint.shapes.standard.BoarderedImage');
  initialst.attr('label/fontSize', 16);
  initialst.attr('body/strokeWidth', 2);
  initialst.attr('border/rx', 2);
  initialst.attr('image/xlinkHref', 'images/initial_state.png');
  initialst.addTo(graph);

  var finalst = new joint.shapes.standard.Image();
  finalst.resize(25, 25);
  finalst.position(445,393);
  //actor1.position(103, 15);
  finalst.attr('root/title', 'joint.shapes.standard.BoarderedImage');
  finalst.attr('label/fontSize', 16);
  finalst.attr('body/strokeWidth', 2);
  finalst.attr('border/rx', 2);
  finalst.attr('image/xlinkHref', 'images/endstate.png');
  finalst.addTo(graph);


  var state1 = new joint.shapes.standard.Rectangle();
        
  state1.position(166, 99);
  state1.resize(100, 40);
  state1.attr({
      body: {
          rx: 3, // add a corner radius
          ry: 3,
          fill: '#FFFC8C',
          strokeWidth: 2
      },
      label: {
          text: arrstate[0],
          //text:arractivity[0],
          fill: 'black',
          fontSize: 16
      }
  });
  state1.addTo(graph);

  var evnt1 = new joint.shapes.standard.Rectangle();
        
  evnt1.position(166, 136);
  evnt1.resize(100, 40);
  evnt1.attr({
      body: {
          rx: 3, // add a corner radius
          ry: 3,
          fill: '#FFFC8C',
          strokeWidth: 2
      },
      label: {
          //text: arrstate[0],
          text:arractivity[0],
          fill: 'black',
          fontSize: 16
      }
  });
  evnt1.addTo(graph);


  var state2 = new joint.shapes.standard.Rectangle();
        
  state2.position(463, 159);
  state2.resize(100, 40);
  state2.attr({
      body: {
          rx: 3, // add a corner radius
          ry: 3,
          fill: '#FFFC8C',
          strokeWidth: 2
      },
      label: {
          text: arrstate[1],
          fill: 'black',
          fontSize: 16
      }
  });
  state2.addTo(graph);

  var evnt2 = new joint.shapes.standard.Rectangle();
        
  evnt2.position(463, 196);
  evnt2.resize(100, 40);
  evnt2.attr({
      body: {
          rx: 3, // add a corner radius
          ry: 3,
          fill: '#FFFC8C',
          strokeWidth: 2
      },
      label: {
          text: arractivity[1],
          fill: 'black',
          fontSize: 16
      }
  });
  evnt2.addTo(graph);

  var state3 = new joint.shapes.standard.Rectangle();
        
  state3.position(164, 386);
  state3.resize(100, 40);
  state3.attr({
      body: {
          rx: 3, // add a corner radius
          ry: 3,
          fill: '#FFFC8C',
          strokeWidth: 2
      },
      label: {
          text: arrstate[2],
          fill: 'black',
          fontSize: 16
      }
  });
  state3.addTo(graph);

  var evnt3 = new joint.shapes.standard.Rectangle();
        
  evnt3.position(164, 422);
  evnt3.resize(100, 40);
  evnt3.attr({
      body: {
          rx: 3, // add a corner radius
          ry: 3,
          fill: '#FFFC8C',
          strokeWidth: 2
      },
      label: {
          text: arractivity[2],
          fill: 'black',
          fontSize: 16
      }
  });
  evnt3.addTo(graph);

  joint.shapes.standard.Link.define('examples.CustomLink', {
    attrs: {
        line: {
            stroke: 'black',
            strokeWidth: 2,
            targetMarker: {
                'type': 'rect',
                
            }
        }
    },
    
  });


var linkis1 = new joint.shapes.standard.Link();
linkis1.source(initialst);
linkis1.target(state1);
linkis1.addTo(graph);
linkis1.appendLabel({
          attrs: {
              text: {
                  text: arrevent[0],
                  fontSize: 16
              }
              
        }
      });
      linkis1.addTo(graph);

      

var link1 = new joint.shapes.standard.Link();
link1.source(state1);
link1.target(state2);
link1.addTo(graph);
        link1.appendLabel({
          attrs: {
              text: {
                  text: arrevent[1],
                  fontSize: 16
              }
              
        },
        position: {
          distance: 0.25
      }
      });
      link1.addTo(graph);

var link2 = new joint.shapes.standard.Link();
link2.position(164, 386);
link2.source(evnt2);
link2.target(evnt1);
link2.addTo(graph);
        link2.appendLabel({
          attrs: {
              text: {
                  text: arrevent[2],
                  fontSize: 16
              }
              
        }
      });
      link2.addTo(graph);

      var link3 = new joint.shapes.standard.Link();
      link3.source(evnt1);
      link3.target(state3);
      link3.addTo(graph);
              link3.appendLabel({
                attrs: {
                    text: {
                        text: arrevent[3],
                        fontSize: 16
                    }
                    
              }
            });
            link3.addTo(graph);


            var link4 = new joint.shapes.standard.Link();
            link4.source(evnt2);
            link4.target(state3);
            link4.addTo(graph);
                    link4.appendLabel({
                      attrs: {
                          text: {
                              text: arrevent[4],
                              fontSize: 16
                          }
                          
                    }
                  });
                  link4.addTo(graph);


      var linkfs3 = new joint.shapes.standard.Link();
      linkfs3.source(state3);
      linkfs3.target(finalst);
      linkfs3.addTo(graph);
      linkfs3.appendLabel({
          attrs: {
              text: {
                  text: arrevent[5],
                  fontSize: 16
              }
              
        }
       
      });
      linkfs3.addTo(graph);

}

  

  



  