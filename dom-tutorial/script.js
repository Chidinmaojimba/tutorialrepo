function getInput() {
    let input = document.querySelector("#todo");
    let submit = document.getElementById("submit");
    
    submit.addEventListener('click', () => {
        let div_element = document.querySelector("#input");
        div_element.innerHTML += `<p>${input.value}</p>`
        input.value = ''
        console.log("You just clicked")
    })
}

document.addEventListener('DOMContentLoaded', getInput)