// modal script
(function(){
  let modalOpenButton = document.querySelectorAll("[data-target='modal']");
  
  if (!modalOpenButton) return;
  for(let i=0; i < modalOpenButton.length; i++) {
    modalOpenButton[i].addEventListener("click", function(e) {
      e.preventDefault();
      let modalId = this.getAttribute("data-href");
      let modal = document.getElementById(modalId);

      if (!modal) return;
      modal.classList.add("open");
    });
  }
        
  let modalCloseButton = document.querySelectorAll(".modal__close-link");
    
  for(let i = 0; i < modalCloseButton.length; i++) {
    modalCloseButton[i].addEventListener("click", function(e) {
      e.preventDefault();
      let modal = this.closest(".modal");
      
      if (!modal) return;
      modal.classList.remove("open")
    })
  }
})();

// menu
(function(){
  let menuButton = document.querySelector(".menu__toggle");
    
  if (!menuButton) return;
  menuButton.addEventListener("click", function(e) {
    e.preventDefault();
    this.classList.toggle("open");
    let menu = this.closest(".menu");
    
    if (!menu) return;
    menu.classList.toggle("open")
  });
})();