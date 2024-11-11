
/* Declaring the alternative text for each image file */

const displayedImage = document.querySelector('.displayed-img');
const thumbBar = document.querySelector('.thumb-bar');

const btn = document.querySelector('button');
const overlay = document.querySelector('.overlay');

/* Declaring the array of image filenames */

const imgNames = ['../img/ghosttown-color-29.jpg', '../img/ghosttown-color-36.jpg', '../img/ghosttown-color-39.jpg', '../img/ghosttown-color-41.jpg', '../img/ghosttown-color-58.jpg'];
const imgAlts = ['Smokin Cowboy','Queer Cowgirls','Kissin Cowgirls','Westerners in the Field','Looking Back'];


/* Looping through images */

for (let i =0; i<imgNames.length; i++) {
  const newImage = document.createElement('img');
    newImage.setAttribute('src', imgNames[i]);
    newImage.setAttribute('alt', imgAlts[i]);
    thumbBar.appendChild(newImage);
    newImage.addEventListener('click', () => {
    displayedImage.setAttribute('src', imgNames[i]).setAttribute('alt', imgAlts[i]);
    displayedImage.alt = e.target.alt;
  });
}

/* Wiring up the Darken/Lighten button */

let toggle = false;
btn.addEventListener('click', () => {
  if(!toggle){
    overlay.style.backgroundColor = "rgba(0,0,0,0.5)";
    toggle = true
  }
  else{
    overlay.style.backgroundColor = "rgba(0,0,0,0.0)";
    toggle = false;
  }
});