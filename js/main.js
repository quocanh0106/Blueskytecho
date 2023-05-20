document.querySelector("#menu").addEventListener('click', () => {
  document.querySelector("#menuList").classList.add("active");
})
document.querySelector("#closeMenu").addEventListener('click', () => {
  document.querySelector("#menuList").classList.remove("active");
})