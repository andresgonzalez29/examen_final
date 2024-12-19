
document.getElementById("subscribe-form").addEventListener("submit", function (event) {
    event.preventDefault(); 
    const confirmation = document.getElementById("confirmation");
    confirmation.classList.remove("hidden"); 

 
    setTimeout(() => {
        confirmation.classList.add("hidden");
    }, 3000);
});

document.addEventListener("DOMContentLoaded", () => {
    document.body.style.opacity = "1";
    document.body.style.transition = "opacity 1.5s ease-in-out";
});
