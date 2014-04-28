function doIt(){
var color = "black";
var id = document.getElementById('body');
id.style.backgroundColor = ""+color+"";  
}
setTimeout(doIt,50)
function motota() {
var namru = document.getElementById('damack').value;
var namrnam = document.getElementById('damack2').value;
var div = document.getElementById('chicho');
div.innerHTML = "<style>"+namrnam+"</style>"+namru+"";
alert('Your code has loaded.')
};
