// get div
var bg = document.getElementById('color');
const tohx = document.getElementById('hexClr');
// red
var red = document.getElementById('red');
var redValue = document.getElementById('redValue');
var hidHx = document.getElementById('hidHx');

redValue.textContent = red.value;
red.oninput = function(){
  // change background color by red
  bg.style.backgroundColor =
    `rgb(${red.value}, ${green.value}, ${blue.value})`;
  redValue.textContent = this.value;
  rgbaToHex(red.value, green.value, blue.value);
}
// green
var green = document.getElementById('green');
var greenValue = document.getElementById('greenValue');

greenValue.textContent = green.value;
green.oninput = function(){
  // change bg color by green
  bg.style.backgroundColor =
    `rgb(${red.value}, ${green.value}, ${blue.value})`;
  greenValue.textContent = this.value;
  rgbaToHex(red.value, green.value, blue.value);
}
// blue
var blue = document.getElementById('blue');
var blueValue = document.getElementById('blueValue');

blueValue.textContent = blue.value;
blue.oninput = function() {
  // change bg color by blue
  bg.style.backgroundColor =
    `rgb(${red.value}, ${green.value}, ${blue.value})`;
  blueValue.textContent = this.value;
  rgbaToHex(red.value, green.value, blue.value);
}
bg.style.backgroundColor =
  `rgb(${red.value}, ${green.value}, ${blue.value})`;
  
  
  
  function rgbaToHex(r, g, b) {
    r = Math.round(r);
    g = Math.round(g);
    b = Math.round(b);
    
    const rgbHex = ((r << 16) | (g << 8) | b).toString(16).padStart(6, '0');
    tohx.innerHTML="#"+rgbHex;
    hidHx.innerHTML = rgbHex;
    return `#${rgbHex}`;
}



