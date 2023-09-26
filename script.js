// function myFun(x) {
//     x.classList.toggle("change");

//     let y = document.getElementById("menu");
//     // let bodyy = document.getElementsByTagName("body")[0];

//     if (y.style.display === "block") {
//         y.style.display = "none";
//     } else {
//         y.style.display = "block";
//     }
// }

function closeNav() {
    document.getElementById("menu").style.width = "0%";
}

function openNav() {
    document.getElementById("menu").style.width = "100%";
}