var isValid=false;
var cHex;

var customHexT = document.getElementById('hidHx').innerHTML;

const modO = document.getElementById('modal');
var modalDisplay = document
.getElementById('modal').style.display;
const modBtn = document.getElementById('modalBtn');
const closeBtn = document.getElementById('closeModal');

var isHidden = true;

const bod = document.getElementById('bdy');
const flatC = document.getElementById('flatColor');
let trails = []; // Store created trail elements

var trailToggle = false;

var incW = 10;
var incH = 10;

const incr = document.getElementById('increase');
const decr = document.getElementById('decrease');

//Add click events for Decreasing and increasing brush size
decr.addEventListener('click', function() {
  incW -= 10;
  if (incW == 0) {
    incW = 10;
  }
});
document.getElementById('increase').addEventListener('click', function() {
  incW += 10;
  if (incW == 0) {
    incW = 10;
  }
});

//get the checkbox id and set the state to unchecked
var checkTrail = document.getElementById('keepTrail');
checkTrail.checked = false;
//toggles trlTogg to true if trail checkbox isnt checked
var trlTogg = false;
checkTrail.addEventListener('change', isCkd);
function isCkd() {
  if (!checkTrail.checked && trlTogg == false) {
    trlTogg = true;
  }
}

modBtn.addEventListener('click', 
function(){
  modO.style.display = "block";
  isHidden=false;
})
closeBtn.addEventListener('click', 
function(){
  modO.style.display = "none";
  isHidden = true;
  
});

//The paint function
bod.addEventListener('touchmove', function(event) {
  if(isHidden === true){
  //get touches and create a new div element 
  const touch = event.touches[0];
  const trail = document.createElement('div');
  trail.classList.add('trail');
  
  //Console hex color change
  if(flatC.checked){
    trail.style.backgroundColor = "#" + hidHx.innerText;
  }else{
   trail.style.backgroundColor='#fff';
  }
  //positions the new element at the touched position
  trail.style.left = touch.pageX + 'px';
  trail.style.top = touch.pageY + 'px';
  
  //Sets the width of the brush and puts it behind the Ui
  trail.style.width = incW + "px";
  trail.style.height = incW + "px";
  trail.style.zIndex = -1;
  bod.appendChild(trail);
  trails.push(trail);
  
  //Removes the trail after x Amount of time
  if (!checkTrail.checked) {
    setTimeout(() => {
     trail.style.opacity = 0;
     
      setTimeout(() => {
        trail.remove();
        trails = trails.filter(t => t !== trail);
      }, 500);
    }, 1000);
    //If toggeling from static trail to dissapearing trail, delete the static trail divs
    if (trlTogg == true) {
      removeAllTrails();
    }
  }}
});

// Function to remove all trails when needed and set trlTogg to false 
function removeAllTrails() {
  trails.forEach(trail => trail.remove());
  trails = [];
  trlTogg = false;
}