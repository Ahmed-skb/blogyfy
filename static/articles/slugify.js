const titleinput = document.querySelector('input[name=title]');
const sluginput = document.querySelector('input[name=slug]');

const slugify = (val) => {
   return val.toString().toLowerCase().trim()
   .replace(/&/g, '-and-') //replace with '-and-'
   .replace(/[\s\W-]+/g, '-') //replace with spaces, non word chars,dashes with single dash

};
titleinput.addEventListener('keyup', (e) => {
   sluginput.setAttribute('value', slugify(titleinput.value));
});