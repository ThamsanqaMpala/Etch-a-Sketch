let numberOfSquares = prompt("How many squares per side for the new grid?");
makeGrid(numberOfSquares);

function makeGrid(numberOfSquare){
    console.log(numberOfSquare);
    //let i = 0;
    //do{
        /*const content = document.createElement('div');
        content.classList.add('content');
        content.innerHTML = 'You had my heart';
        console.log(numberOfSquare);
        console.log(i);
        div.addEventListener('mouseover' , changeColor());
        i++; */
/*
        // create a new div element
        const newDiv = document.createElement("div");
        newDiv.classList.add('new'); 

        // and give it some content
        const newContent = document.createTextNode("Hi there and greetings!");

        // add the text node to the newly created div
        newDiv.appendChild(newContent);

        // add the newly created element and its content into the DOM
        const currentDiv = document.getElementsByClassName("container");
        //document.body.insertBefore(newDiv, currentDiv);
        document.body.appendChild(newDiv, currentDiv)
*/
        let row = 0;
        let j = 0;
    do{

        // create a new div element
        const newDiv = document.createElement("div");
        newDiv.classList.add(`newish${row}`); 

        // and give it some content
        const newContent = document.createTextNode(`This is row ${row}`);
        
        // add the text node to the newly created div
        newDiv.appendChild(newContent);
        
        // add the newly created element and its content into the DOM
        const currentDiv = document.getElementsByClassName("container");
        //document.body.insertBefore(newDiv, currentDiv);
        document.body.appendChild(newDiv, currentDiv)

        
        for(let i = 0; i < numberOfSquare; i++){
            
            const parentSelector = document.querySelector(`.newish${row}`);

            // create a new div element
            const newDiv = document.createElement("div");
            newDiv.classList.add('newer'); 

            // and give it some content
            const newContent = document.createTextNode("Hi there and greetings!");

            // add the text node to the newly created div
            newDiv.appendChild(newContent);

            // add the newly created element and its content into the DOM
            const currentDiv = document.getElementsByClassName(`newish${row}`);
            //document.body.insertBefore(newDiv, currentDiv);
            document.body.appendChild(newDiv, currentDiv);

            for(let x = 0; x < numberOfSquare; x++){
                parentSelector.appendChild(newDiv);
            }

            //newDiv.addEventListener('mouseover' , changeColor());
            newDiv.addEventListener('mouseover', changeColor, false);
            newDiv.addEventListener('mouseout', removeColor, false);
            
        }
        
        row++;
        j++;
    }while(j < numberOfSquare);
    return;

}


function changeColor(e){
    const randomColor = Math.floor(Math.random()*16777215).toString(16);
    this.style.backgroundColor = "#" + randomColor;
    //this.classList.add('hovering');
}
function removeColor(e){
    this.classList.add('hovering');
    //this.classList.remove('hovering');
}