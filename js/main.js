"use script";
{
  const open = document.getElementById("open");
  const close = document.getElementById("close");
  const closeMenu = document.querySelector(".close-hg-menu");
  


  open.addEventListener("click" , ()=>{
    closeMenu.classList.add("show");
  });
  close.addEventListener("click" , ()=>{
    closeMenu.classList.remove("show");
  });
}


