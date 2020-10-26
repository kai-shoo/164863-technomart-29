// document.body.contentEditable = true;

const buttonBuy = document.querySelectorAll(".products-item__buy");
const buttonBookmark = document.querySelectorAll(".products-item__bookmark");
const bookmark = document.querySelector(".purchase-bookmarks a");
const cart = document.querySelector(".purchase-cart a");


//adding to a cart
for (var i = 0; i < buttonBuy.length; i++) {
    var self = buttonBuy[i];
    self.addEventListener("click", function(evt) {
        
        //increase count, colorize button red
        evt.preventDefault();
        var int = parseInt(cart.textContent.replace("Корзина: ", ""));
        if (!int) {
            cart.classList.add("purchase-item_notempty");
        }
        cart.textContent = cart.textContent.replace(int, ++int);
        
        //show modal
        document.querySelector(".modal-cart").style.display = "flex";
        document.querySelector(".modal-cart__button").focus();
    });
}

//adding to bookmarks
for (var i = 0; i < buttonBookmark.length; i++) {
    var self = buttonBookmark[i];
    
    self.addEventListener("click", function(evt) {
        evt.preventDefault();
        var int = parseInt(bookmark.textContent.replace("Закладки: ", ""));
        if (!int) {
            bookmark.classList.add("purchase-item_notempty");
        }
        bookmark.textContent = bookmark.textContent.replace(int, ++int);
    });
}

// close button
const buttonClose = document.querySelectorAll(".modal__close");
buttonClose.forEach(function(self) {
    self.addEventListener("click", function(evt) {
        evt.preventDefault();
        self.closest(".modal").style.display = "none";
    });
    self.addEventListener("focusout", function(evt) {
        evt.preventDefault();
        self.closest(".modal").focus();
    })
});

    
//continue shopping button
const shoopingButton = document.querySelector(".modal-cart__button_shopping");
shoopingButton.addEventListener("click", function(evt) {
    evt.preventDefault();
    shoopingButton.closest(".modal").style.display = "none";
})

//feedback button
const feedbackButton = document.querySelector(".contacts__button");
feedbackButton.addEventListener("click", function(evt) {
    evt.preventDefault();
    document.querySelector(".modal-write").style.display = "flex";
    document.querySelector("#mail_name").focus();
})

//map button
const contactsButton = document.querySelector(".contacts img");
contactsButton.addEventListener("click", function(evt) {
    evt.preventDefault();
    document.querySelector(".modal-map").style.display = "flex";
    document.querySelector(".modal-map .modal__close").focus();
})




// slider

var slideIndex = 1;
showSlides(slideIndex);

function plusSlides(n) {
  showSlides(slideIndex += n);
}

function currentSlide(n) {
  showSlides(slideIndex = n);
}

function showSlides(n) {
  var i;
  var slides = document.getElementsByClassName("slider-item");
  var dots = document.getElementsByClassName("slider__status");
  if (n > slides.length) {slideIndex = 1}
  if (n < 1) {slideIndex = slides.length}
  for (i = 0; i < slides.length; i++) {
      slides[i].style.display = "none";
  }
  for (i = 0; i < dots.length; i++) {
      dots[i].className = dots[i].className.replace(" slider_active", "");
  }
  slides[slideIndex-1].style.display = "block";
  dots[slideIndex-1].className += " slider_active";
} 




// vertical tabs

tabcontent = document.getElementsByClassName("services-content-item");
    for (i = 1; i < tabcontent.length; i++) {
      tabcontent[i].style.display = "none";
    }
var i, tabcontent, tablinks;
tablinks = document.getElementsByClassName("toggle__tab");
tabcontent = document.getElementsByClassName("services-content-item");

function openTab(evt, tabName) {
    // Declare all variables

    for (i = 0; i < tabcontent.length; i++) {
      tabcontent[i].style.display = "none";
    }
  

    for (i = 0; i < tablinks.length; i++) {
      tablinks[i].className = tablinks[i].className.replace(" enabled", "");
    }
  
    document.getElementById(tabName).style.display = "flex";
    evt.currentTarget.className += " enabled";
  } 
