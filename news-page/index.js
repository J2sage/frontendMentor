const menu = document.getElementById('menu');
const sideBar = document.getElementsByClassName('side-bar')[0];
const closeMnu = document.getElementById('close-menu');

menu.addEventListener('click', ()=>{
  sideBar.style.display = 'block';
})

closeMnu.addEventListener('click', ()=>{
  sideBar.style.display = 'none';
})