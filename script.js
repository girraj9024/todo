let input = document.querySelector("input")
let ullist = document.querySelector("ul")
let add =document.querySelector("button")
add.addEventListener("click", (e)=> {
    e.preventDefault()
    let spans = document.createElement("i")
    let delet = document.createElement("i")
    let list = document.createElement("li")
    spans.innerHTML = input.value
    delet.innerHTML = input.value
    list.innerHTML = input.value
    spans.innerHTML = '<i class="fa-solid fa-pen-to-square"></i>'
    delet.innerHTML = '<i class="fa-solid fa-trash"></i>'
    ullist.append(list)
    list.append(spans)
    list.append(delet)
})