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
