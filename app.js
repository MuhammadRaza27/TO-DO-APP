// function submit () {
// let container = document.querySelector("#container");
// let tagText = container.value.trim()


// if (tagText === '') {

// alert ("Enter something");

// return;

// }

//     let Line = document.createElement("div")
//     Line.className = "card-body"


//     let newTag = document.createElement("card");
//     // newTag.className = ("tag")
//     newTag.innerText = tagText;


//     Line.appendChild(newTag)
//     document.querySelector("#card1").appendChild(Line);


//     container.value = ''

// }

























// function submit() {
//     let container = document.querySelector("#container");
//     let tagText = container.value.trim();

//     if (tagText === '') {
//         alert("Please enter something!");
//         return;
//     }

//     // Naya span tag banayenge
//     let newTag = document.createElement("span");
//     newTag.className = "tag"; // styling ke liye
//     newTag.innerText = tagText;

//     // Tag container mein add karenge
//     document.querySelector("#tagContainer").appendChild(newTag);

//     // Input field khali kar denge
//     container.value = '';
// }

function submit (){

    let container = document.querySelector('#container')

    let tagText = container.value.trim();
   

    

    if (tagText === ''){

        alert("Enter Some Key")
    
        return;
    }
    
    
    let getContainer = document.getElementById("container")
    let submit = () => {
        let getContainer = document.getElementById("container")

        getContainer.type === "container" ? getContainer.type = "text" : getContainer.type = "container"
        localStorage.setItem("container",getContainer.value);

    }
    
    let Line = document.createElement("div")
    Line.className="task-line"

    let newTag = document.createElement("card")
    newTag.className = "tag"
    
    newTag.innerText = tagText

    let closeBtn = document.createElement("button")
    closeBtn.innerText="x"
    closeBtn.className = "close-btn"

    closeBtn.onclick = function () {

        Line.remove();

    };

    let addBtn = document.createElement("button")
    addBtn.innerText = "Y"
    addBtn.className = "add-btn"

    addBtn.onclick = function(){

        document.querySelector("#card2").appendChild(Line)

        // addBtn.remove()
       
    };

    let inProgBtn = document.createElement("button")
    inProgBtn.innerText = "I"
    inProgBtn.className =  "inPro-btn"

    inProgBtn.onclick = function(){

    document.querySelector("#card3").appendChild(Line)

    // inProgBtn.remove()

    }

    Line.appendChild(newTag)
    Line.appendChild(addBtn)
    Line.appendChild(closeBtn)
    Line.appendChild(inProgBtn)

    document.querySelector("#card1").appendChild(Line)

    container.value = ''
    



}

