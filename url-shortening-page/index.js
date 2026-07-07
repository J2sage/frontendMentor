const menu = document.getElementById('menu');
const sideBar = document.getElementsByClassName('side-bar')[0];
const menuBtn = document.getElementsByClassName('sidebar-control')[0];
const closeMnu = document.getElementById('close');

menuBtn.addEventListener('click', ()=>{
  if (menu.style.display !== 'none') {
    sideBar.style.display = 'block';
    menu.style.display = 'none';
    closeMnu.style.display = 'block';
  } else{
    sideBar.style.display = 'none';
    menu.style.display = 'block';
    closeMnu.style.display = 'none';
    document.body.classList.remove('no-scroll');
  }
});