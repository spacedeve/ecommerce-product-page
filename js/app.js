const thumbnails = document.querySelector('.sneakers__images');
const imgs = thumbnails.getElementsByTagName('img');
const mainImage = document.querySelector('.sneakers__main-img');
const modal = document.querySelector('.modal');

for(let i=0; i<imgs.length; i++){
  let img = imgs[i];
  img.addEventListener('click', () => {
    mainImage.src = img.src;
  });
}

//Add/Remove className
const listImages = document.querySelectorAll('.sneakers__img');
listImages.forEach(item =>{ 
        item.addEventListener('click', (e) =>{
          listImages.forEach(e=>{e.classList.remove('selected');});
        item.classList.add('selected')
    })
})

//Modal
const closeBtn = document.querySelector('.close-btn');
const modalThumbnails = document.querySelector('.modal__images');
const modalImgs = modalThumbnails.getElementsByTagName('img');
const modalMainImage = document.querySelector('.modal__main-img');

for(let i=0; i<modalImgs.length; i++){
  let modalImg = modalImgs[i];
  modalImg.addEventListener('click', () => {
    modalMainImage.src = modalImg.src;
  });
}

const nextBtn = document.querySelector('.next-btn');
const prevBtn = document.querySelector('.prev-btn');

const nextImage = () => {
  const selected = modalThumbnails.querySelector('.selected');
  const next = selected.nextElementSibling || modalThumbnails.firstElementChild;
  selected.classList.remove('selected');
  selected.classList.add('selected');
  setMainImage(next);
}

const prevImage = () => {
  const selected = modalThumbnails.querySelector('.selected');
  const prev = selected.previousElementSibling || modalThumbnails.lastElementChild;
  selected.classList.remove('selected');
  selected.classList.add('selected');
  setMainImage(prev);
}

nextBtn.addEventListener('click', nextImage);
prevBtn.addEventListener('click', prevImage);

//Add/Remove className
const modalListImages = document.querySelectorAll('.modal__img');
modalListImages.forEach(item =>{ 
        item.addEventListener('click', (e) =>{
          modalListImages.forEach(e=>{e.classList.remove('selected');});
        item.classList.add('selected')
    })
})
//-------------------------------------------------------------------------//
mainImage.addEventListener('click', () => {
  modal.classList.add('open');
});
closeBtn.addEventListener('click', () => {
  modal.classList.remove('open');
});





//Counter
let count = 0;
const value = document.querySelector('#value');
const btns = document.querySelectorAll('.btn');

btns.forEach(btn => {
  btn.addEventListener('click', e => {
    const item = e.currentTarget.classList;
    if (item.contains('decrease') && count > 0){
      count--;
    } else if(item.contains('increase')){
      count++;
    } 
    value.textContent = count;
  });
})

