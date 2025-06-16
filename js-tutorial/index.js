function get_name(name, greeting) {
    const str = "My name is " + name + ". " + greeting();
    return str
}

function respect() {
    return "Good Morning, ma"
}

const david = get_name("david", respect)
// const chidinma = get_name("chidinma")
// const francis = get_name("Francis")

console.log(david)
// console.log(chidinma)
// console.log(francis)
// console.log(get_name())

const joy = get_name("david", () => {
    return "Good Morning, ma."
})

console.log(joy)

// () = parenthesis
// [] = square bracket
// {} = curly bracket
// <> = angle bracket