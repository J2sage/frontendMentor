const sideBar = document.getElementsByClassName('side-bar')[0];
const menuBtn = document.getElementsByClassName('sidebar-control')[0];
const menu = document.getElementById('menu');
const closeBtn = document.getElementById('close');

menuBtn.addEventListener('click', ()=>{
  if (menu.style.display !== 'none') {
    sideBar.style.display = 'block';
    menu.style.display = 'none';
    closeBtn.style.display = 'block';
  } else{
    sideBar.style.display = 'none';
    menu.style.display = 'block';
    closeBtn.style.display = 'none';
  }
});