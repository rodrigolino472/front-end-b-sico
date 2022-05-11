var hamburguer = document.querySelector("#hamburguer")
hamburguer.addEventListener("click", function(){
  document.querySelector(".nav-menu-principal").classList.toggle("show-menu");
});