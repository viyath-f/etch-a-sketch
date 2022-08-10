let container = document.querySelector(".container");
let length = 16;

generateGrid(length);



function generateGrid(length)
{

    for (let i =0; i < length; i++) 
    {
        let gridRow = document.createElement("div");
        gridRow.classList.add("grid-row");
        for (let j=0; j < length; j++)
        {
            let square = document.createElement("div");
            square.classList.add("grid");
            square.addEventListener("mouseover", (e) => {
                // this.classList.add("hovered");
                e.target.style.backgroundColor = "blue";
            })
            gridRow.appendChild(square);

        }
        container.appendChild(gridRow);
    }

}

function removeGrid()
{
    while (container.firstChild)
    {
        container.removeChild(container.firstChild);
    }
}

function redrawGrid()
{
    let newLength = prompt("Choose a new side length for the grid", "16");
    if (newLength != null && !isNaN(parseInt(newLength))) 
    {
        newLength = parseInt(newLength);
        if (newLength < 0) newLength = -newLength;
        if (newLength > 100) newLength = 100;
        removeGrid();
        generateGrid(newLength);
        
        
    }
}

