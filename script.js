window.addEventListener("scroll", function () {
  let nav = document.getElementById("nav");

  nav.classList.toggle("scroll-active", window.scrollY > 0);
});

window.onload=function() {
    const menu_btn = document.querySelector('.hamburger');
    const navlinksMobile = document.querySelector('.navlinks-mobile');
    menu_btn.addEventListener('click', function () {
        menu_btn.classList.toggle('is-active');
        navlinksMobile.classList.toggle('is-active')
    });
    navlinksMobile.addEventListener('click', function () {
        menu_btn.classList.toggle('is-active');
        navlinksMobile.classList.toggle('is-active');
})}
