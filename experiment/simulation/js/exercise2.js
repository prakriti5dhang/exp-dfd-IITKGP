
/* Redeveloped
Lab: Software Engineering
Exp: Modeling Data Flow Diagrams
File Name: exercise2.js
Author: Prakriti Dhang*/

/********************************************* Table 1 ****************************************/


var arrentityt2=[];
var inpt21;
function addbtnt21(){
    let   newtd2, newtdp2, newtdds2;  
inpt21=document.getElementById("inp21").value;
arrentityt2.push(inpt21)


  var newIconbtn = document.createElement("img");
  newIconbtn.setAttribute("src","./images/remove.png");
  newIconbtn.setAttribute("onclick", "removerowli(this)");
  newIconbtn.setAttribute("style","cursor:pointer;");
  //newdiv.appendChild(newIconbtn);

  let newtrID2 =  inpt21;
  let newtdID2= inpt21;
  //rbtn.appendChild(newIconbtn);   
let newtr2=document.createElement("tr");
newtr2.setAttribute("id",newtrID2);
newtd2 = document.createElement("td");
newtd2.setAttribute("class","entityname");
newtd2.setAttribute("id",newtdID2);
//newdiv = document.createElement("div");
//newdiv.setAttribute("class", "form-check");
newtr2.appendChild(newtd2);
//newtd.appendChild(newdiv);


newuLi2 = document.createElement("ul");
newuLi2.setAttribute("style","list-style-type:none" );
newLi2 = document.createElement("li");
let liTextNodeact2 = document.createTextNode(inpt21);
newLi2.appendChild(liTextNodeact2);
newLi2.appendChild(newIconbtn);
newuLi2.appendChild(newLi2);
newtd2.appendChild(newuLi2);


/**** process *****/
let newtdpID2 =  "process_" +inpt21;
newtdp2 = document.createElement("td");
//newula = document.createElement("ul");
newtdp2.setAttribute("id",newtdpID2);

//newtda.appendChild(newula);
newtr2.appendChild(newtdp2);
let liTextNodep2 = document.createTextNode("");
newtdp2.appendChild(liTextNodep2);
//liTextNodeacta.appendChild(newIconbtn);
newtr2.appendChild(newtdp2);

/**** data store *****/
let newtdsID2 =  "ds_" +inpt21;
newtdds2 = document.createElement("td");
//newula = document.createElement("ul");
newtdds2.setAttribute("id",newtdsID2);

//newtda.appendChild(newula);
newtr2.appendChild(newtdds2);
let liTextNodeactds2 = document.createTextNode("");
newtdds2.appendChild(liTextNodeactds2);
//liTextNodeactds.appendChild(newIconbtn);
newtr2.appendChild(newtdds2);


  if (inpt21 == "") {
    alert("Please Enter External Entity before clicking Add Button");
  } else {
    document.getElementById('tbodyt25').appendChild(newtr2);
    
 
  document.getElementById("inp21").value="";

/*********************** Adding input value in table 4 dropdown (from ) *************************/

let newOptionIDt4a;
newOptionIDt4a = 'newOption_' + inpt21;
  
let newOptiont4a = document.createElement('option');
let optionTextt4a = document.createTextNode(inpt21);
// set option text
newOptiont4a.appendChild(optionTextt4a);
// and option value

newOptiont4a.setAttribute("id", newOptionIDt4a);
newOptiont4a.setAttribute('value',inpt21);
let selectt4a = document.getElementById('selectfrom2'); 
selectt4a.appendChild(newOptiont4a);



 




  /*********************** Adding input value table 4 dropdown ( to) *************************/

let newOptionIDb;
newOptionIDb = 'newOption_' + inpt21;
  
let newOptionb = document.createElement('option');
let optionTextb = document.createTextNode(inpt21);
// set option text
newOptionb.appendChild(optionTextb);
// and option value

newOptionb.setAttribute("id", newOptionIDb);
newOptionb.setAttribute('value',inpt21);
let selectb = document.getElementById('selectto2'); 
selectb.appendChild(newOptionb);

  }
}

  /************************************ Function for Table 2 ********************************************/
  var arrprocess2=[];
  
  var inpt22, inpt23;
  function addbtnt22() {
    
  inpt22=document.getElementById("inp22").value;
  inpt23=document.getElementById("inp23").value;
 
  var newIconbtn = document.createElement("img");
  newIconbtn.setAttribute("src","./images/remove.png");
  newIconbtn.setAttribute("onclick", "removerowli(this)");
  newIconbtn.setAttribute("style","cursor:pointer;");

  var b_sign2="(";
  var para2 = document.createElement("b");
  let add_b2 = document.createTextNode(b_sign2);
  para2.appendChild(add_b2);
  var b_sign12=")";
  var para12 = document.createElement("b");
  let add_b12 = document.createTextNode(b_sign12);
  para12.appendChild(add_b12);


newuLi2 = document.createElement("ul");
newuLi2.setAttribute("style","list-style-type:none" );
newLi2 = document.createElement("li");
let liTextNodep2 = document.createTextNode(inpt22);
let liTextNodepl2 = document.createTextNode(inpt23);
newLi2.appendChild(liTextNodep2);
newLi2.appendChild(para2);
newLi2.appendChild(liTextNodepl2);
newLi2.appendChild(para12);


newLi2.appendChild(newIconbtn); 
newuLi2.appendChild(newLi2);

 if (inpt22 == "" ) {
    alert("Please Enter Process Before Clicking Add Button");
  } 
  else if (inpt23 == ""){
    alert("Please Enter Process Level Before Clicking Add Button");
  }
  
  
  else{
    document.getElementById("process_" +inpt21 ).appendChild(newuLi2);
    var pl2= inpt22+"("+inpt23+")";
    arrprocess2.push(pl2);
    
    let newOptionIDpa;
    newOptionIDpa = 'newOption_' + inpt22;
      
    let newOptionpa = document.createElement('option');
    let optionTextpa = document.createTextNode(pl2);
    // set option text
    newOptionpa.appendChild(optionTextpa);
    // and option value
    
    newOptionpa.setAttribute("id", newOptionIDpa);
    newOptionpa.setAttribute('value',pl2);
    let selectpa = document.getElementById('selectfrom2'); 
    selectpa.appendChild(newOptionpa);


    let newOptionIDptb;
newOptionIDptb = 'newOption_' + inpt22;
  
let newOptionptb = document.createElement('option');
let optionTextptb = document.createTextNode(pl2);
// set option text
newOptionptb.appendChild(optionTextptb);
// and option value

newOptionptb.setAttribute("id", newOptionIDptb);
newOptionptb.setAttribute('value',pl2);
let selectptb = document.getElementById('selectto2'); 
selectptb.appendChild(newOptionptb);

  }

document.getElementById("inp22").value="";
document.getElementById("inp23").value="";



}


/*function checknumber(){
  if (isNaN(inpt3)) 
  {
    alert("Must input numbers");
  }
}*/



/************************************ Function for Table 3 ********************************************/
var inpt24;
var arrdatastore2=[];
function addbtnt23() {
  
inpt24=document.getElementById("inp24").value;

  
var newIconbtn = document.createElement("img");
  newIconbtn.setAttribute("src","./images/remove.png");
  newIconbtn.setAttribute("onclick", "removerowli(this)");
  newIconbtn.setAttribute("style","cursor:pointer;");


newuLin2 = document.createElement("ul");
newLin2 = document.createElement("li");
newuLin2.setAttribute("style","list-style-type:none" );

let liTextNodent2 = document.createTextNode(inpt24);
newLin2.appendChild(liTextNodent2);
newLin2.appendChild(newIconbtn);



newuLin2.appendChild(newLin2);




 if (inpt24 == "") {
    alert("Please Enter Data Store Before Clicking Add Button");
  } 
  
  else{
    arrdatastore2.push(inpt24);
   document.getElementById("ds_"+inpt21 ).appendChild(newuLin2);


   let newOptionIDdsa;
   newOptionIDdsa= 'newOption_' + inpt24;
     
   let newOptiondsa = document.createElement('option');
   let optionTextdsa = document.createTextNode(inpt24);
   // set option text
   newOptiondsa.appendChild(optionTextdsa);
   // and option value
   
   newOptiondsa.setAttribute("id", newOptionIDdsa);
   newOptiondsa.setAttribute('value',inpt24);
   let selectdsa = document.getElementById('selectfrom2'); 
   selectdsa.appendChild(newOptiondsa);


   let newOptionIDdstb;
newOptionIDdstb = 'newOption_' + inpt24;
 
let newOptiondstb = document.createElement('option');
let optionTextdstb = document.createTextNode(inpt24);
// set option text
newOptiondstb.appendChild(optionTextdstb);
// and option value

newOptiondstb.setAttribute("id", newOptionIDdstb);
newOptiondstb.setAttribute('value',inpt24);
let selectdstb = document.getElementById('selectto2'); 
selectdstb.appendChild(newOptiondstb);

 
  }
  document.getElementById("inp24").value="";
  //document.getElementById("ftbl3").reset();

}
/********************************************************** Function for Table 4 *****************************************************************/


var selt21,t21val,selt22,t22val, selfrom2, selfromv2, selto2, seltov2;
var arrdatal2=[];
function addbtnt24(){
    let  inpt25;
  

inpt25=document.getElementById("inp25").value;

//console.log(arrevent);
inpt25=document.getElementById("inp25").value;
selt21= document.getElementById("selecttype21");
t21val =selt21.options[selt21.selectedIndex].text;
selfrom2= document.getElementById("selectfrom2");
selfromv2 =selfrom2.options[selfrom2.selectedIndex].text;

inpt25=document.getElementById("inp25").value;

//console.log(arrdatal);
selt22= document.getElementById("selecttype22");
t22val =selt22.options[selt22.selectedIndex].text;
selto2= document.getElementById("selectto2");
seltov2 =selto2.options[selto2.selectedIndex].text;

  if(t21val=="Select") {
    alert("Select external entity or process or data store from first 'Type(P/DS/EE)' drop down list");
  } 
  else if (t22val=="Select"){
    alert("Select external entity or process or data store from second 'Type(P/DS/EE)' drop down list");
   }
  else if(t21val==t22val){
alert("A system should not have any data flown from "+t21val+ " to" +t22val );
}
if(selfromv2=="Select") {
  alert("Select external entity or process or data store for 'From' from the drop down list");
} 
else if (seltov2=="Select"){
  alert("Select external entity or process or data store for 'to' from the drop down list");
 }
 else if(selfromv2==seltov2){
  alert("A system should not have any data flow from "+selfromv2+ " to" +seltov2 );
  }
 
 else if(inpt25 == ""){
  alert("A Data Label is necessary for a data flow to occur! Please specify it.");
 }
 else if((t21val=="External entity")&&(t22val=="Data store") ) {
  alert("A system should not have any data flown from "+t21val+ " to" +t22val);
 }

 else if((t22val=="External entity")&&(t21val=="Data store") ) {
  alert("A system should not have any data flown from "+t21val+ " to" +t22val);
 }

else{
  arrdatal2.push(inpt25);
  //console.log(arrdatal);
 tr = document.createElement('tr');
  tr.setAttribute("id","t6st");
  document.getElementById('tbodytbt26').appendChild(tr);
  var td1 = document.createElement('td');
  var td2=document.createElement("td");
  var td3=document.createElement("td");
  var td4=document.createElement("td");
 // var td5=document.createElement("td");
 // var td6=document.createElement("td");
  var tdval1=document.createTextNode(selfromv2);
  var tdval2=document.createTextNode(inpt25);
  var tdval3=document.createTextNode(seltov2);
  //var tdval4=document.createTextNode(inpt6);
 // var tdval5=document.createTextNode(s2eval);
  



var newIconbtn = document.createElement("btn");
newIconbtn.setAttribute("type", "button");
newIconbtn.setAttribute("class", "btn btn-danger");
newIconbtn.setAttribute("onclick", "removerowtr(this)");
newIconbtn.setAttribute("style","cursor:pointer;");
       
var newIconbtni = document.createElement("i");
newIconbtni.setAttribute("class", "bi bi-dash-circle");
newIconbtn.appendChild(newIconbtni);
        
  td1.appendChild(tdval1);
  td2.appendChild(tdval2);
  td3.appendChild(tdval3);
  //td4.appendChild(tdval4);
 // td5.appendChild(tdval5);
  td4.appendChild(newIconbtn); 
  
  tr.appendChild(td1);
  tr.appendChild(td2);
  tr.appendChild(td3);
  tr.appendChild(td4);
  //tr.appendChild(td5);
 // tr.appendChild(td6);
  document.getElementById('tbodytbt26').appendChild(tr);
  document.getElementById("inp25").value="";
}
  //document.getElementById("ftbl5").reset();
}

/********************************************* Function for removing table row **************************************************/
function removerowtr(btndel) {
  if (typeof(btndel) == "object") {
      $(btndel).closest("tr").remove();
      
  } 
 

  else {
     return false;
  }
}

/********************************************* Function for removing li **************************************************/
function removerowli(btndel) {

if (typeof(btndel) == "object") {

    $(btndel).closest("li").remove();
   
   // x.remove(typeof(btndel));
   
} else {
    return false;
}
}


/********************************************* Function for Drawing UML**************************************************/

function drawbtex2(){

  document.getElementById("dispuml2").style.display="block";
  var namespace = joint.shapes;

  var graph = new joint.dia.Graph({}, { cellNamespace: namespace });

  paper = new joint.dia.Paper({
      el: document.getElementById('dfd_diag_ex2'),
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

 


  var exentityb = new joint.shapes.standard.Rectangle();
        
  exentityb.position(177, 62);
  exentityb.resize(120, 50);
  exentityb.attr({
      body: {
          rx: 4, // add a corner radius
          ry: 4,
          fill: '#FBFFBC ',
          strokeWidth: 2
      },
      label: {
          text: arrentityt2[0],
          
          fill: 'red',
          fontSize: 16
      }
  });
  exentityb.addTo(graph);

  var process1 = new joint.shapes.standard.Ellipse();
        
  process1.position(17, 213);
  process1.resize(120, 50);
  process1.attr({
      body: {
        
        ry: 80,
          fill: '#BAFEF6 ',
          strokeWidth: 2
      },
      label: {
         
          text:arrprocess2[0],
          fill: 'red',
          fontSize: 16
      }
  });
  process1.addTo(graph);

  var process2 = new joint.shapes.standard.Ellipse();
        
  process2.position(177, 286);
  process2.resize(120, 50);
  process2.attr({
      body: {
        
        ry: 80,
          fill: '#BAFEF6 ',
          strokeWidth: 2
      },
      label: {
         
          text:arrprocess2[1],
          fill: 'red',
          fontSize: 16
      }
  });
  process2.addTo(graph);

  var process3 = new joint.shapes.standard.Ellipse();
        
  process3.position(357, 204);
  process3.resize(120, 50);
  process3.attr({
      body: {
        
        ry: 80,
          fill: '#BAFEF6 ',
          strokeWidth: 2
      },
      label: {
         
          text:arrprocess2[2],
          fill: 'red',
          fontSize: 16
      }
  });
  process3.addTo(graph);
  
  var db2 = new joint.shapes.standard.Image();
  db2.resize(120, 50);
  db2.position(178,524);
//actor1.position(103, 15);
db2.attr('root/title', 'joint.shapes.standard.BoarderedImage');
//db.attr('label/text', arrdatastore[0]);
//db.attr('label/fontSize', 16);
db2.attr('image/xlinkHref', 'images/datastore.png');
db2.addTo(graph); 
 
var dsl2 = new joint.shapes.standard.Rectangle();
        
dsl2.position(186, 528);
dsl2.resize(100, 40);

dsl2.attr({
    body: {

        fill: '#FFFFFF',
        strokeWidth: 0
    },
    label: {
        text: arrdatastore2[0],
        fill: 'red',
        fontSize: 16
    }
});
dsl2.addTo(graph);     

  
  var msg1 = new joint.shapes.standard.Rectangle();
        
  msg1.position(71, 119);
  msg1.resize(100, 40);
  //msg1.rotate(315);
  msg1.attr({
      body: {

          fill: '#FFFFFF',
          strokeWidth: 0
      },
      label: {
          text: arrdatal2[0],
          fill: 'black',
          fontSize: 16
      }
  });
 msg1.addTo(graph);

 var msg2 = new joint.shapes.standard.Rectangle();
        
  msg2.position(60, 386);
  msg2.resize(100, 40);
  //msg1.transform(90);
  msg2.attr({
      body: {

          fill: '#FFFFFF',
          strokeWidth: 0
      },
      label: {
          text: arrdatal2[1],
          fill: 'black',
          fontSize: 16
      }
  });
 msg2.addTo(graph);

 var msg3 = new joint.shapes.standard.Rectangle();
        
  msg3.position(169, 187);
  msg3.resize(100, 40);
  msg3.rotate(270);
  
  msg3.attr({
      body: {

          fill: '#FFFFFF',
          strokeWidth: 0,
          
      },
      label: {
          text: arrdatal2[2],
          fill: 'black',
          fontSize: 16,
          
      }
  });
 msg3.addTo(graph);


 var msg4 = new joint.shapes.standard.Rectangle();
        
  msg4.position(172, 410);
  msg4.resize(100, 40);
  msg4.rotate(270);
  msg4.attr({
      body: {

          fill: '#FFFFFF',
          strokeWidth: 0
      },
      label: {
          text: arrdatal2[3],
          fill: 'black',
          fontSize: 16
      }
  });
 msg4.addTo(graph);

 var msg5 = new joint.shapes.standard.Rectangle();
        
  msg5.position(221,185);
  msg5.resize(100, 40);
  msg5.rotate(270);
  msg5.attr({
      body: {

          fill: '#FFFFFF',
          strokeWidth: 0
      },
      label: {
          text: arrdatal2[4],
          
          fill: 'black',
          fontSize: 16
      }
  });
 msg5.addTo(graph);



 var msg6 = new joint.shapes.standard.Rectangle();
        
  msg6.position(310, 116);
  msg6.resize(100, 40);
  //msg1.transform(90);
  msg6.attr({
      body: {

          fill: '#FFFFFF',
          strokeWidth: 0
      },
      label: {
          text: arrdatal2[5],
          fill: 'black',
          fontSize: 16
      }
  });
 msg6.addTo(graph);

 


 var msg7 = new joint.shapes.standard.Rectangle();
        
  msg7.position(357,326);
  msg7.resize(100, 40);
  //msg1.transform(90);
  msg7.attr({
      body: {

          fill: '#FFFFFF',
          strokeWidth: 0
      },
      label: {
          text: arrdatal2[6],
          fill: 'black',
          fontSize: 16
      }
  });
 msg7.addTo(graph);

 var arrow = new joint.shapes.standard.Image();
  arrow.resize(15, 12);
  arrow.position(250,112);
//actor1.position(103, 15);
arrow.attr('root/title', 'joint.shapes.standard.BoarderedImage');

arrow.attr('image/xlinkHref', 'images/arrowup.png');
arrow.addTo(graph);
        
  /*joint.shapes.standard.Link.define('examples.CustomLink', {
    attrs: {
        line: {
            stroke: 'black',
            strokeWidth: 2,
            targetMarker: {
                'type': 'rect',
                
            }
        }
    },
    
  });*/

 /* paper.options.defaultConnector={
    name:'rounded',
    args:{
      radius:20
    }
  }*/
  
var link1 = new joint.shapes.standard.Link();
link1.source(exentityb);
link1.target(process1);
link1.attr({
  line: {
    strokeWidth: 2,
    'stroke':'blue',
    'type':'path',
     //strokeDasharray: '4 2',
    
  
}
});
        /*link1.appendLabel({
          attrs: {
              text: {
                  text: arrdatal[0],
                  fontSize: 16
              }
              
        },
        position: {
          distance: 0.25
      }
      });*/
     link1.addTo(graph);

var link2 = new joint.shapes.standard.Link();

link2.source(exentityb);
link2.target(process2);
link2.attr({
  line: {
    strokeWidth: 2,
    'stroke':'blue',
    'type':'path',
     //strokeDasharray: '4 2',
    
  
}
});
       
link2.addTo(graph);

      var link3 = new joint.shapes.standard.Link();
      link3.source(exentityb);
      link3.target(process3);
      link3.attr({
        line: {
          strokeWidth: 2,
          'stroke':'blue',
          'type':'path',
           //strokeDasharray: '4 2',
          
    }
      });
             
            link3.addTo(graph);


            var link4 = new joint.shapes.standard.Link();
            link4.source(db2);
            link4.target(process2);
            link4.addTo(graph);
            link4.attr({
              line: {
                strokeWidth: 2,
                'stroke':'blue',
                'type':'path',
                 //strokeDasharray: '4 2',
                
              
            }
            });
                  link4.addTo(graph);


                  var link5 = new joint.shapes.standard.Link();
                  link5.source(process1);
                  link5.target(db2);
                  link5.addTo(graph);
                  link5.attr({
                    line: {
                      strokeWidth: 2,
                      'stroke':'blue',
                      'type':'path',
                       //strokeDasharray: '4 2',
                      
                    
                  }
                  });
                        link5.addTo(graph);


                        var link6 = new joint.shapes.standard.Link();
                        link6.source(process3);
                        link6.target(db2);
                        link6.addTo(graph);
                        link6.attr({
                          line: {
                            strokeWidth: 2,
                            'stroke':'blue',
                            'type':'path',
                             //strokeDasharray: '4 2',
                            
                          
                        }
                        });
                              link6.addTo(graph);

                              var link7 = new joint.shapes.standard.Link();

                              link7.source(process2);
                              link7.target(exentityb);
                              link7.attr({
                                line: {
                                  strokeWidth: 2,
                                  'stroke':'blue',
                                  'type':'path',
                                   //strokeDasharray: '4 2',
                                  
                                   targetMarker: { 
                                    'stroke':'blue',
                                    'type':'path',
                                    'stroke-width': 2,
                                    //'fill': 'blue',
                                    'd':'M 0 -20  L 175 -20 L 2 -20  ',
                                    //'d': 'M 50 -80 L 220 -80 V -80'
                                }
                              }
                              });

                              link7.addTo(graph);




                            }







  

  



  