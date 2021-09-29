const image1 = document.querySelector(".image1");

const video1 = document.querySelector(".video1");

const image2 = document.querySelector(".image2");

const video2 = document.querySelector(".video2");

const image3 = document.querySelector(".image3");

const video3 = document.querySelector(".video3");

const image4 = document.querySelector(".image4");

const video4 = document.querySelector(".video4");

image1.addEventListener('click',toggleVideo1);
function toggleVideo1(){
    image1.classList.add("hidden");
    video1.classList.remove("hidden");
    video1.setAttribute("src","https://www.youtube.com/embed/I9QGnNvrmoY?autoplay=1");
}

image2.addEventListener('click',toggleVideo2);
function toggleVideo2(){
    image2.classList.add("hidden");
    video2.classList.remove("hidden");
    video2.setAttribute("src","https://www.youtube.com/embed/ckub1RSlhic?autoplay=1");
}

image3.addEventListener('click',toggleVideo3);
function toggleVideo3(){
    image3.classList.add("hidden");
    video3.classList.remove("hidden");
    video3.setAttribute("src","https://www.youtube.com/embed/ckub1RSlhic?autoplay=1");
}

image4.addEventListener('click',toggleVideo4);
function toggleVideo4(){
    image4.classList.add("hidden");
    video4.classList.remove("hidden");
    video4.setAttribute("src","https://www.youtube.com/embed/ckub1RSlhic?autoplay=1");
}

window.addEventListener("scroll",show);
function show(){
    if(window.scrollY <=100){
        document.querySelector(".hidebut").classList.add("hidden");
    }
    else{
        document.querySelector(".hidebut").classList.remove("hidden");
    }
  
   
   
}
