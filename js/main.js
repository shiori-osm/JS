"use script";
{
  // 自分の↓
  // const open = document.getElementById("open");
  // const close = document.getElementById("close");
  // const closeMenu = document.querySelector(".close-hg-menu");
  
  // open.addEventListener("click" , ()=>{
  //   closeMenu.classList.add("show");
  // });
  // close.addEventListener("click" , ()=>{
  //   closeMenu.classList.remove("show");
  // });



// 教科書の↓
  const target = document.getElementById("menu");
  const hgMenu = document.getElementById("hg-menu");

  target.addEventListener('click', () => {
    target.classList.toggle('open');
    hgMenu.classList.toggle('show');
  });

}


