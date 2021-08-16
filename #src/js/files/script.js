$(document).ready(function () {
  $(".popup-variants__item").click(function (e) {
    e.preventDefault();
    $(".popup-variants__item").removeClass("_checked");
    $(this).addClass("_checked");
  });
});


let productDelivery = document.querySelector(".product-item__delivery");
if (productDelivery != null) {
  productDelivery.addEventListener("click", function (e) {
      productDelivery.classList.toggle("_active");
  });
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


$(document).ready(function () {
  $(".item-variant").click(function (e) {
    e.preventDefault();
    $(".item-variant").removeClass("_checked");
    $(this).addClass("_checked");
  });
});


$(document).ready(function(){
  $(".product-item__img-big").zoom({
    url: "https://via.placeholder.com/1920x1080",
    touch: false,
    on: "mouseover",
  });
});

$(document).ready(function(){
  $(".product-item__for").slick({
    slidesToShow: 1,
    slidesToScroll: 1,
    arrows: false,
    // fade: true,
    asNavFor: ".product-item__nav",
    dots: true,
  });
  $(".product-item__nav").slick({
    slidesToShow: 5,
    slidesToScroll: 1,
    asNavFor: ".product-item__for",
    // dots: true,
    centerMode: false,
    focusOnSelect: true,
    lazyLoad: "progressive",
    arrows: true,
  });
});
