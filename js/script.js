let menu = document.querySelector('#menu-bar');
let navbar = document.querySelector('.navbar');

menu.addEventListener('click', () =>{

    menu.classList.toggle('fa-times');
    navbar.classList.toggle('nav-toggle');
});

window.onscroll = () =>{
    menu.classList.remove('fa-times');
    navbar.classList.remove('nav-toggle');
}

function showHide(obj) {
    for (i = 1; i <= 10; i++) {  //CHANGED THIS LINE
      if (i == obj) {
        document.getElementById('q' + i).style.display = 'block';
      } else {
        document.getElementById('q' + i).style.display = 'none';
      }
    }
    return false;
  }

function chat(){
    const mess = `Halo min saya mau tanya nih`
    const whatsapp = `https://wa.me/6281388990433?text=${mess}`
    open(whatsapp, "_blank")
}

function iphone(){
    const mess = `Silahkan diisi, Tipe-iPhone :  dan Keluhan : `
    const whatsapp = `https://wa.me/6281388990433?text=${mess}`
    open(whatsapp, "_blank")
}

function macbook(){
    const mess = `Silahkan diisi, Tipe-Macbook :  dan Keluhan : `
    const whatsapp = `https://wa.me/6281388990433?text=${mess}`
    open(whatsapp, "_blank")
}

function laptop(){
    const mess = `Silahkan diisi, Tipe-Laptop :  dan Keluhan : `
    const whatsapp = `https://wa.me/6281388990433?text=${mess}`
    open(whatsapp, "_blank")
}

function android(){
    const mess = `Silahkan diisi, Tipe-Hp :  dan Keluhan : `
    const whatsapp = `https://wa.me/6281388990433?text=${mess}`
    open(whatsapp, "_blank")
}
