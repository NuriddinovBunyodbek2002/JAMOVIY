const toggleBtn = document.getElementById("toggle-btn");
const menusToggle = document.getElementById("menus-toggle");
const closeBtn = document.getElementById("exit")

toggleBtn.addEventListener("click" , () => {    menusToggle.classList.add("show")})

closeBtn.addEventListener("click" , () => {
    menusToggle.classList.remove("show")
})