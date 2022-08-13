window.addEventListener("storage", function(e){
    document.querySelector(".result").textContent = localStorage.getItem("tasks created")
})

