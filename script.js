const continer = document.querySelector(".container")

document.querySelector(".open-navbar-icon")
    .addEventListener('click', ()=>{
        continer.classList.add("change");
    });


document.querySelector(".close-navbar-icon")
    .addEventListener('click', ()=>{
        continer.classList.remove("change");
    });

const colors = ["#6485eb" , "#7ff5d4", "#ffa07a", "#f08080", "#afeeee" ]

let i = 0;

Array.from(document.querySelectorAll(".nav-link"))
    .forEach(item =>{
        item.style.backgroundColor = colors[i++];
    });


Array.from(document.querySelectorAll(
    ".navigation-button")).forEach(item=>{
        item.onclick = ()=>{
            item.parentElement.parentElement.classList
                .toggle("change");
        };
});


