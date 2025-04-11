
// const menu = document.getElementById("menu");
// const navmenu = document.querySelector(".nav-menu");

// menu.addEventListener("click",()=>{
//     navmenu.classList.toggle("show");
// })
function showSidebar(){
    const sidebar = document.querySelector(".sidebar");
    const menu = document.querySelector(".menu-burger");
    const menuClose = document.querySelector(".menu-close");
    sidebar.style.display = 'block';
    menuClose.style.display = 'block';
    menu.style.display = 'none';
    sidebar.style.animation = 'sidebar-animation-enter 0.5s ease-out';
}

function hideSidebar(){
    const sidebar = document.querySelector(".sidebar");
    const menu = document.querySelector(".menu-burger");
    const menuClose = document.querySelector(".menu-close");
    menuClose.style.display = 'none';
    menu.style.display = 'block';
    sidebar.style.display = 'none';
}