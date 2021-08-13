let popupVariantsList = document.querySelector(".popup-variants__list");
let popupVariantsItem = popupVariantsList.getElementsByClassName(
  "popup-variants__item"
);
for (let i = 0; i < popupVariantsItem.length; i++) {
  popupVariantsItem[i].addEventListener("click", function () {
    document.querySelector("._checked")
      ? document.querySelector("._checked").classList.remove("_checked")
      : "";
    this.classList.add("_checked");
  });
}

let productDelivery = document.querySelector(".product-item__delivery");
if (productDelivery != null) {
  productDelivery.addEventListener("click", function (e) {
      productDelivery.classList.toggle("_active");
  });
}
function productDelivery_close() {
  let productDelivery = document.querySelector(".product-item__delivery");
  productDelivery.classList.remove("_active");
}

let productWarranty = document.querySelector(".product-item__warranty");
if (productWarranty != null) {
  productWarranty.addEventListener("click", function (e) {
      productWarranty.classList.toggle("_active");
  });
}
function productDelivery_close() {
  let productWarranty = document.querySelector(".product-item__warranty");
  productWarranty.classList.remove("_active");
}


$(".product-item__for").slick({
  slidesToShow: 1,
  slidesToScroll: 1,
  arrows: false,
  // fade: true,
  asNavFor: ".product-item__nav",
});
$(".product-item__nav").slick({
  slidesToShow: 5,
  slidesToScroll: 1,
  asNavFor: ".product-item__for",
  // dots: true,
  centerMode: false,
  focusOnSelect: true,
  lazyLoad: 'progressive',
});


let productDefaultList = document.querySelector(".product-item__select-wrapper");
let productDefaultItem = productDefaultList.getElementsByClassName(
  "item-goods__variant"
);
for (let i = 0; i < productDefaultItem.length; i++) {
  productDefaultItem[i].addEventListener("click", function () {
    document.querySelector("._checked")
      ? document.querySelector("._checked").classList.remove("_checked")
      : "";
    this.classList.add("_checked");
  });
}

// $(document).ready(function(){
//   $(".product-item__img-big").zoom({
//     url: "https://via.placeholder.com/1920x1080",
//   });
// });
