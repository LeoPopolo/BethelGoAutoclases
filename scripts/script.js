window.onload = addEvents;

function addEvents(){

  let loadpage = document.getElementById("loadpage");
  window.sr = ScrollReveal();

  setTimeout(()=>{
    loadpage.style.display = "none";
    
  }, 800);
  
  
  sr.reveal("#h1-title", {
    duration: 2000,
    origin: "right",
    distance: "300px",
  });
  sr.reveal(".h2-title-left", {
    duration: 2000,
    origin: "left",
    distance: "300px",
  });
  sr.reveal(".h2-title-right", {
    duration: 2000,
    origin: "right",
    distance: "300px",
  });
  sr.reveal("#textAbout", {
    duration: 2000,
    origin: "bottom",
    distance: "150px",
  });
  sr.reveal("#courses-card1", {
    duration: 2000,
    origin: "top",
    distance: "150px",
    delay: 300
  });
  sr.reveal("#courses-card2", {
    duration: 2000,
    origin: "top",
    distance: "150px",
    delay: 600
  });
  sr.reveal("#courses-card3", {
    duration: 2000,
    origin: "top",
    distance: "150px",
    delay: 900
  });
  sr.reveal("#payment-card1", {
    duration: 2000,
    origin: "bottom",
    distance: "150px",
    delay: 300
  });
  sr.reveal("#payment-card2", {
    duration: 2000,
    origin: "bottom",
    distance: "150px",
    delay: 600
  });
  sr.reveal("#payment-card3", {
    duration: 2000,
    origin: "bottom",
    distance: "150px",
    delay: 900
  });
  sr.reveal(".form", {
    duration: 2000,
    origin: "right",
    distance: "500px",
  });
  sr.reveal("#social-net1", {
    duration: 2000,
    origin: "top",
    distance: "150px",
    delay: 300
  });
  sr.reveal("#social-net2", {
    duration: 2000,
    origin: "top",
    distance: "150px",
    delay: 600
  });
  sr.reveal("#social-net3", {
    duration: 2000,
    origin: "top",
    distance: "150px",
    delay: 900
  });
  sr.reveal("#social-net4", {
    duration: 2000,
    origin: "top",
    distance: "150px",
    delay: 1200
  });

  document.querySelectorAll('a[href^="#"]').forEach((anchor) => {
    anchor.addEventListener("click", function (e) {
      e.preventDefault();

      document.querySelector(this.getAttribute("href")).scrollIntoView({
        behavior: "smooth",
      });
    });
  });

  let card1 = document.getElementById("courses-card1");
  let card2 = document.getElementById("courses-card2");
  let card3 = document.getElementById("courses-card3");

  card1.addEventListener("click", ()=>{
    window.location.href = "#inscription";
  });

  card2.addEventListener("click", ()=>{
    window.location.href = "#inscription";
  });

  card3.addEventListener("click", ()=>{
    window.location.href = "#inscription";
  });

  let btnmenu = document.getElementById("btn-burger-menu");
  let btnCloseMenu = document.getElementById("btn-close-menu");
  var sidebar = document.getElementById("sidebar");

  btnmenu.addEventListener("click", ()=>{

    sidebar.style.display = "block";
  });

  btnCloseMenu.addEventListener("click", ()=>{

    sidebar.style.display = "none";
  });
}

function closeNav() {
  sidebar.style.display = "none";
}