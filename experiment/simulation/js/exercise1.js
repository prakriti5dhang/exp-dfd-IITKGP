
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
  newIconbtn.setAttribute("onclick", "removerowli(this)");
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
  newIconbtn.setAttribute("onclick", "removerowli(this)");
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
    let optionTextp = document.createTextNode(pl);
    // set option text
    newOptionp.appendChild(optionTextp);
    // and option value
    
    newOptionp.setAttribute("id", newOptionIDp);
    newOptionp.setAttribute('value',pl);
    let selectp = document.getElementById('selectfrom'); 
    selectp.appendChild(newOptionp);


    let newOptionIDpt;
newOptionIDpt = 'newOption_' + inpt2;
  
let newOptionpt = document.createElement('option');
let optionTextpt = document.createTextNode(pl);
// set option text
newOptionpt.appendChild(optionTextpt);
// and option value

newOptionpt.setAttribute("id", newOptionIDpt);
newOptionpt.setAttribute('value',pl);
let selectpt = document.getElementById('selectto'); 
selectpt.appendChild(newOptionpt);

  }

document.getElementById("inp2").value="";
document.getElementById("inp3").value="";



}


/*function checknumber(){
  if (isNaN(inpt3)) 
  {
    alert("Must input numbers");
  }
}*/



/************************************ Function for Table 3 ********************************************/
var inpt4;
var arrdatastore=[];
function addbtnt3() {
  
inpt4=document.getElementById("inp4").value;

  
var newIconbtn = document.createElement("img");
  newIconbtn.setAttribute("src","./images/remove.png");
  newIconbtn.setAttribute("onclick", "removerowli(this)");
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
    arrdatastore.push(inpt4);
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


var selt1,t1val,selt2,t2val, selfrom, selfromv, selto, seltov;
var arrdatal=[];
function addbtnt4(){
    let  inpt5;
  

inpt5=document.getElementById("inp5").value;

//console.log(arrevent);
inpt5=document.getElementById("inp5").value;
selt1= document.getElementById("selecttype1");
t1val =selt1.options[selt1.selectedIndex].text;
selfrom= document.getElementById("selectfrom");
selfromv =selfrom.options[selfrom.selectedIndex].text;

inpt5=document.getElementById("inp5").value;

//console.log(arrdatal);
selt2= document.getElementById("selecttype2");
t2val =selt2.options[selt2.selectedIndex].text;
selto= document.getElementById("selectto");
seltov =selto.options[selto.selectedIndex].text;

  if(t1val=="Select") {
    alert("Select external entity or process or data store from first 'Type(P/DS/EE)' drop down list");
  } 
  else if (t2val=="Select"){
    alert("Select external entity or process or data store from second 'Type(P/DS/EE)' drop down list");
   }
  else if(t1val==t2val){
alert("A system should not have any data flown from "+t1val+ " to" +t2val );
}
if(selfromv=="Select") {
  alert("Select external entity or process or data store for 'From' from the drop down list");
} 
else if (seltov=="Select"){
  alert("Select external entity or process or data store for 'to' from the drop down list");
 }
 else if(selfromv==seltov){
  alert("A system should not have any data flow from "+selfromv+ " to" +seltov );
  }
 
 else if(inpt5 == ""){
  alert("A Data Label is necessary for a data flow to occur! Please specify it.");
 }
 else if((t1val=="External entity")&&(t2val=="Data store") ) {
  alert("A system should not have any data flown from "+t1val+ " to" +t2val);
 }

 else if((t2val=="External entity")&&(t1val=="Data store") ) {
  alert("A system should not have any data flown from "+t1val+ " to" +t2val);
 }

else{
  arrdatal.push(inpt5);
  //console.log(arrdatal);
 tr = document.createElement('tr');
  tr.setAttribute("id","t6st");
  document.getElementById('tbodyt6').appendChild(tr);
  var td1 = document.createElement('td');
  var td2=document.createElement("td");
  var td3=document.createElement("td");
  var td4=document.createElement("td");
 // var td5=document.createElement("td");
 // var td6=document.createElement("td");
  var tdval1=document.createTextNode(selfromv);
  var tdval2=document.createTextNode(inpt5);
  var tdval3=document.createTextNode(seltov);
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
  document.getElementById('tbodyt6').appendChild(tr);
  document.getElementById("inp5").value="";
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

function drawbtex1(){

  document.getElementById("dispuml1").style.display="block";
  var namespace = joint.shapes;

  var graph = new joint.dia.Graph({}, { cellNamespace: namespace });

  paper = new joint.dia.Paper({
      el: document.getElementById('dfd_diag_ex1'),
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

 


  var exentity = new joint.shapes.standard.Rectangle();
        
  exentity.position(148, 65);
  exentity.resize(120, 50);
  exentity.attr({
      body: {
          rx: 4, // add a corner radius
          ry: 4,
          fill: '#FBFFBC ',
          strokeWidth: 2
      },
      label: {
          text: arrentity[0],
          
          fill: 'red',
          fontSize: 16
      }
  });
  exentity.addTo(graph);

  var process = new joint.shapes.standard.Ellipse();
        
  process.position(148, 335);
  process.resize(120, 50);
  process.attr({
      body: {
        
        ry: 80,
          fill: '#BAFEF6 ',
          strokeWidth: 2
      },
      label: {
         
          text:arrprocess[0],
          fill: 'red',
          fontSize: 16
      }
  });
  process.addTo(graph);


  
  var db = new joint.shapes.standard.Image();
  db.resize(120, 50);
  db.position(471,65);
//actor1.position(103, 15);
db.attr('root/title', 'joint.shapes.standard.BoarderedImage');
//db.attr('label/text', arrdatastore[0]);
//db.attr('label/fontSize', 16);
db.attr('image/xlinkHref', 'images/datastore.png');
db.addTo(graph); 
 
var dsl = new joint.shapes.standard.Rectangle();
        
dsl.position(484, 71);
dsl.resize(100, 40);

dsl.attr({
    body: {

        fill: '#FFFFFF',
        strokeWidth: 0
    },
    label: {
        text: arrdatastore[0],
        fill: 'red',
        fontSize: 16
    }
});
dsl.addTo(graph);     

  
  var msg1 = new joint.shapes.standard.Rectangle();
        
  msg1.position(111, 209);
  msg1.resize(100, 40);
  msg1.rotate(270);
  msg1.attr({
      body: {

          fill: '#FFFFFF',
          strokeWidth: 0
      },
      label: {
          text: arrdatal[0],
          fill: 'black',
          fontSize: 16
      }
  });
 msg1.addTo(graph);

 var msg2 = new joint.shapes.standard.Rectangle();
        
  msg2.position(144, 210);
  msg2.resize(100, 40);
  msg2.rotate(270);
  
  msg2.attr({
      body: {

          fill: '#FFFFFF',
          strokeWidth: 0,
          
      },
      label: {
          text: arrdatal[1],
          fill: 'black',
          fontSize: 16,
          
      }
  });
 msg2.addTo(graph);

 var msg3 = new joint.shapes.standard.Rectangle();
        
  msg3.position(206,210);
  msg3.resize(100, 40);
  msg3.rotate(270);
  msg3.attr({
      body: {

          fill: '#FFFFFF',
          strokeWidth: 0
      },
      label: {
          text: arrdatal[2],
          
          fill: 'black',
          fontSize: 16
      }
  });
 msg3.addTo(graph);



 var msg4 = new joint.shapes.standard.Rectangle();
        
  msg4.position(414, 200);
  msg4.resize(100, 40);
  //msg1.transform(90);
  msg4.attr({
      body: {

          fill: '#FFFFFF',
          strokeWidth: 0
      },
      label: {
          text: arrdatal[3],
          fill: 'black',
          fontSize: 16
      }
  });
 msg4.addTo(graph);

  var arrow = new joint.shapes.standard.Image();
  arrow.resize(15, 12);
  arrow.position(171,326);
//actor1.position(103, 15);
arrow.attr('root/title', 'joint.shapes.standard.BoarderedImage');

arrow.attr('image/xlinkHref', 'images/arrowd.png');
arrow.addTo(graph);

  var arrow1 = new joint.shapes.standard.Image();
      arrow1.resize(15, 12);
      arrow1.position(201,324);
  //actor1.position(103, 15);
  arrow1.attr('root/title', 'joint.shapes.standard.BoarderedImage');
 
  arrow1.attr('image/xlinkHref', 'images/arrowd.png');
  arrow1.addTo(graph);

   var arrow2 = new joint.shapes.standard.Image();
      arrow2.resize(15, 12);
      arrow2.position(230,114);
  //actor1.position(103, 15);
  arrow2.attr('root/title', 'joint.shapes.standard.BoarderedImage');
 
  arrow2.attr('image/xlinkHref', 'images/arrowup.png');
  arrow2.addTo(graph);

        
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
link1.source(exentity);
link1.target(process);
link1.attr({
  line: {
    strokeWidth: 2,
     //strokeDasharray: '4 2',
    targetMarker: { 
      'stroke':'blue',
      'type':'path',
      'stroke-width': 2,
      //'fill': 'blue',
      'd':'M 0 -30  L 220 -30 L 2 -30  ',
      //'d': 'M 50 -80 L 220 -80 V -80'
  }
  
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

link2.source(exentity);
link2.target(process);
link2.attr({
  line: {
    strokeWidth: 2,
     //strokeDasharray: '4 2',
    targetMarker: { 
      'stroke':'blue',
      'type':'path',
      'stroke-width': 2,
      //'fill': 'blue',
      'd':'M 20 30  L 220 30 L 2 30  ',
      //'d': 'M 50 -80 L 220 -80 V -80'
  }
  
}
});
       
link2.addTo(graph);

      var link3 = new joint.shapes.standard.Link();
      link3.source(process);
      link3.target(exentity);
      link3.attr({
        line: {
          strokeWidth: 2,
           //strokeDasharray: '4 2',
          targetMarker: { 
            'stroke':'blue',
            'type':'path',
            'stroke-width': 2,
            //'fill': 'blue',
            'd':'M 20 0  L 220 0 L 2 0  ',
            //'d': 'M 50 -80 L 220 -80 V -80'
        }
        
    }
      });
             
            link3.addTo(graph);


            var link4 = new joint.shapes.standard.Link();
            link4.source(db);
            link4.target(process);
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


     

}

  

  



  