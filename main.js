

let btn = document.getElementById("btn");
let fields = document.querySelectorAll("input");

btn.addEventListener("click", () => {
    fields.forEach(field => field.value = "" )
});
