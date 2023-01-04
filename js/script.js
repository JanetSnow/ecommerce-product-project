/*jshint esversion: 6 */

//** desktop slideshow
var picIndex = 1;
showPictures(picIndex);

// Thumbnail image controls
function currentPics(n) {
  showPictures(picIndex = n);
}
function showPictures(n) {
  var i;
  var pics = document.getElementsByClassName("myPictures");
  var demo = document.getElementsByClassName("mainDemo");

  for (i = 0; i < pics.length; i++) {
    pics[i].style.display = "none";
  }
  for (i = 0; i < pics.length; i++) {
    demo[i].className = demo[i].className.replace(" activeMainDemo", "");
  }
  pics[picIndex-1].style.display = "block";
  demo[picIndex-1].className += " activeMainDemo";
}

//** mobile slideshow
var slideIndex = 1;
showDivs(slideIndex);

function plusDivs(n) {
  showDivs(slideIndex += n);
}

function showDivs(n) {
  var i;
  var x = document.getElementsByClassName("mobile-pic");
  if (n > x.length) {
    slideIndex = 1;
  }
  if (n < 1) {
    slideIndex = x.length;
  }
  // 在这一步所有的图片都设置成消失的状态
  for (i = 0; i < x.length; i++) {
    x[i].style.display = "none";
  }
  // 在这一步选中的图片恢复可视状态，前面的消失设置对它无效，因为它是在它后面设置的
  //(可以实现除选中图片外对其他都不产生影响的效果)
  x[slideIndex-1].style.display = "block";
}

//** modal
// Open the Modal
function openModal() {
  document.getElementById("myModal").style.display = "block";
}

// Close the Modal
function closeModal() {
  document.getElementById("myModal").style.display = "none";
}

var slideIndex = 1;
showSlides(slideIndex);

// Next/previous controls
function plusSlides(n) {
  showSlides(slideIndex += n);
}

// Thumbnail image controls
function currentSlide(n) {
  showSlides(slideIndex = n);
}

function showSlides(n) {
  var i;
  var slides = document.getElementsByClassName("mySlides");
  var dots = document.getElementsByClassName("demo");
  if (n > slides.length) {
    slideIndex = 1;
  }
  if (n < 1) {
    slideIndex = slides.length;
  }
  for (i = 0; i < slides.length; i++) {
    slides[i].style.display = "none";
  }
  for (i = 0; i < dots.length; i++) {
    dots[i].className = dots[i].className.replace(" active", "");
  }
  slides[slideIndex-1].style.display = "block";
  dots[slideIndex-1].className += " active";
}

// ** mobile-menu
const navToggler = document.querySelector('.nav-toggler');
const closeBtn = document.querySelector('.close-btn');

const navbarToggle = () => document.querySelector('.mobile-menu').classList.toggle('showUp');

navToggler.addEventListener('click', navbarToggle);
closeBtn.addEventListener('click', navbarToggle);

//** lightbox
const cart = document.querySelector('.cart');
const basket = document.querySelector('.basket');
const closeBoxBtn = document.querySelector('.close-box-btn');

function cartToggle() {
  if (basket.style.display === "none") {
    basket.style.display = "block";
  } else {
    basket.style.display = "none";
  }
}

cart.addEventListener('click', cartToggle);

function closeBasket() {
  basket.style.display = "none";
}

closeBoxBtn.addEventListener('click', closeBasket);


//** buttons and cart display
const amtBtns = document.querySelectorAll('.amt');
const qty = document.querySelector('.qty');
const emptyBasket = document.querySelector('.empty-basket');
const filledBasket = document.querySelector('.filled-basket');
const addToCartBtn = document.querySelector('.add-to-cart-btn');
const deleteBasket = document.querySelector('#trash');
const cartAmt = document.querySelector('.cart-product-amt');
var amt = 0;

function updateCartState(num) {
  if (num === 0) {
    emptyBasket.style.display = "block";
    filledBasket.style.display = "none";
  } else {
    emptyBasket.style.display = "none";
    filledBasket.style.display = "block";
    const price = 125;
    const total = document.querySelector('#total');
    document.querySelector('#amt').textContent = num;
    total.textContent = `$${num * price}.00`;
  }
}


amtBtns.forEach(b => b.addEventListener('click', handleAmtBtnClick));

function handleAmtBtnClick(e) {
  if (e.currentTarget.id === 'amt-decrease') {
    if (amt <= 0) {
      amt = 0;
    } else {
      amt--;
    }
  } else {
    amt++;
  }
  qty.textContent = amt;

}

addToCartBtn.addEventListener('click', handleAddBtnClick);

var addedAmt = 0;

function handleAddBtnClick() {
  addedAmt = amt + addedAmt;
  updateCartState(addedAmt);
  cartAmt.textContent = addedAmt;
  if (addedAmt === 0) {
    cartAmt.style.display = "none";
  } else {
    cartAmt.style.display = "block";
  }
}

deleteBasket.addEventListener('click', handleDeleteBasketBtnClick);

function handleDeleteBasketBtnClick() {
    addedAmt -= 1;
    updateCartState(addedAmt);
    cartAmt.textContent = addedAmt;
    if (addedAmt === 0) {
      cartAmt.style.display = "none";
    } else {
      cartAmt.style.display = "block";
    }
}
