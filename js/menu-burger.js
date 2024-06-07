const navUl = document.querySelector('nav ul');

const a = document.getElementById('menu-toggle')
a.addEventListener('click', function(){
  document.body.classList.toggle('nav-open');
  navUl.classList.toggle("activeBurger");
});

window.addEventListener('resize', function() {
    if (window.innerWidth > 760) {
      document.body.classList.toggle('nav-open');
      navUl.classList.remove("activeBurger");
    }
  });