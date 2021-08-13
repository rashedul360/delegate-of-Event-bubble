let items = document.getElementsByClassName("item");
for (const item of items) {
  item.addEventListener("click", function (event) {});
}
document.getElementById("add-item").addEventListener("click", function () {
  const li = document.createElement("li");

  li.innerText = "brand new item";
  const parent = document.getElementById("items");

  parent.appendChild(li);
});
document.getElementById("items").addEventListener("click", function (event) {
  event.target.parentNode.removeChild(event.target);
});
