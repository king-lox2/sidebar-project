
const navBtn = document.querySelector(".nav-btn");

const hideSidebar = document.querySelector(".close-sidebar");

const sideBar = document.querySelector(".sidebar");

navBtn.addEventListener("click",() =>{
 if (sideBar.classList.contains('show-sidebar')) {
   sideBar.classList.remove('show-sidebar');
 } else{
   sideBar.classList.add('show-sidebar');
 }
});

hideSidebar.addEventListener("click",() => {
  sideBar.classList.remove('show-sidebar');
});

