// Change navBar when scrolling
const header = document.querySelector('header');
window.addEventListener('scroll', function(){
  const scrolled = window.scrollY;
  if (scrolled > 10){
    header.style.backgroundColor = "#000";
  }else{
    header.style.backgroundColor = "rgba(255,255,255,0.2)";
  }
});

// Home slide picture
const slidePic = document.querySelectorAll('#show-case img');
const currentPic = document.querySelectorAll('.all-current div');
const currentImg = document.querySelector('#show-case');

let currentPicArr = Array.from(currentPic);

function resetCurrentPic(){
  let i = 0;
  for(i = 0; i<currentPicArr.length; i++){
    currentPicArr[i].classList.remove('currentPicColor');
    currentImg.children[i].style.display = "none"
  }
}

currentPicArr[0].addEventListener('click', function(){
  resetCurrentPic();
  currentPicArr[0].classList.add('currentPicColor');
  currentImg.children[0].style.display = "block";
});
currentPicArr[1].addEventListener('click', function(){
  resetCurrentPic();
  currentPicArr[1].classList.add('currentPicColor');
  currentImg.children[1].style.display = "block";
});
currentPicArr[2].addEventListener('click', function(){
  resetCurrentPic();
  currentPicArr[2].classList.add('currentPicColor');
  currentImg.children[2].style.display = "block";
});



