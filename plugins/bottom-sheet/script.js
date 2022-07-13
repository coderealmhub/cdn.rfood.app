const bottomSheet = document.querySelector(".bottom-sheet-container");
const button = document.querySelector(".button");
const closeButton = document.querySelector(".close-button");

function toggleBottomSheet() {
  bottomSheet.classList.toggle("show-bottom-sheet");
};

bottomSheet.addEventListener('click', function (e) {
  if (e.target === bottomSheet) {
    toggleBottomSheet();
  }
});

closeButton.addEventListener('click', function (e) {
  toggleBottomSheet();
});