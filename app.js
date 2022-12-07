const form = document.querySelector('form');
const display = document.querySelector('#displayArea');

form.addEventListener ('submit', function(e){
    e.preventDefault();
    const containerDiv = document.createElement('div');
    containerDiv.style.width = "400px";
    containerDiv.style.height = "100%";
    containerDiv.classList = "memeContainer";

    const newMeme = document.createElement('img');
    newMeme.classList = "newMeme";
    let image = document.getElementById("picture").value;
    newMeme.setAttribute("src", image);

    const upperText = document.createElement('div');
    upperText.style.width = "400px";
    upperText.classList = "upperText";
    let topText = document.getElementById("topText").value;
    upperText.innerText = topText;

    const lowerText = document.createElement('div');
    lowerText.style.width = "400px";
    lowerText.classList = "lowerText";
    let bottomText = document.getElementById("bottomText").value;
    lowerText.innerText = bottomText;

    const deleteHover = document.createElement('div');
    deleteHover.style.width = "100%";
    deleteHover.style.height = "100%";
    deleteHover.classList = "hover";
    deleteHover.innerText = "\u274c";
    
    containerDiv.appendChild(upperText);
    containerDiv.appendChild(lowerText);
    containerDiv.appendChild(newMeme);
    containerDiv.appendChild(deleteHover);
    


    display.appendChild(containerDiv);
    form.reset();

    containerDiv.addEventListener("click", function(e){
        console.log(e);
        this.remove();
    })
});
