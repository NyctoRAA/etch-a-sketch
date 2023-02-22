
const size = document.querySelector("#quantity")
const clearBtn = document.querySelector(".clear")
const grid = document.querySelector(".container")

createGrid = () => {
    for(let i = 0; i < 256; i++) { // create 256 squares and the add to the grid, default grid is 16x16
        const div = document.createElement("div")
        div.classList.add("square")
        grid.appendChild(div)
    }
}

updateGrid = () => {
    grid.innerHTML = ""
    grid.style.setProperty("grid-template-columns", `repeat(${size.value}, 2fr)`)
    grid.style.setProperty("grid-template-rows", `repeat(${size.value}, 2fr)`)

    for(let i = 0; i < (size.value * size.value); i++) {
        const div = document.createElement("div")
        div.classList.add("square")
        grid.appendChild(div)
    }
}

const square = document.querySelector("div")
square.addEventListener("mouseover", function(e) {
    e.target.classList.replace("square", "color"); // subs square with color (paints)
})

size.addEventListener("change", updateGrid) // changes the size

clearBtn.addEventListener("click", function() {
    grid.innerHTML = ""
    size.value = ""
    grid.style.setProperty("grid-template-columns", `repeat(16, 2fr)`);
    grid.style.setProperty("grid-template-rows", `repeat(16, 2fr)`);
    createGrid()
})

createGrid()

