document.body.contentEditable = true;

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

    });
}

//adding to bookmarks
for (var i = 0; i < buttonBookmark.length; i++) {
    var self = buttonBookmark[i];
    
    self.addEventListener("click", function(evt) {
        evt.preventDefault();
        var int = parseInt(bookmark.textContent.replace("Закладки: ", ""));
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
})

//map button
const contactsButton = document.querySelector(".contacts img");
contactsButton.addEventListener("click", function(evt) {
    evt.preventDefault();
    document.querySelector(".modal-map").style.display = "flex";
})




// double range slider 

