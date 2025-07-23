let searchInput = document.getElementById("Input");
let searchBtn = document.getElementById("searchBtn");

const getData = async (inputValue) => {
    
    let data = await fetch(`https://api.dictionaryapi.dev/api/v2/entries/en/${inputValue}`);
    let jsonData = await data.json();
    
    document.querySelector(".text").innerHTML="";
    let div = document.createElement("div");
    div.classList.add("Details");
    div.innerHTML=`
            <h1>word: <span>${jsonData[0].word}</span> </h1>
            <p>${jsonData[0].meanings[0].partOfSpeech}</p>
            <p>Meaning: <span>${jsonData[0].meanings[0].definitions[0].definition}</span></p>
            <p>Example: <span>${jsonData[0].meanings[0].definitions[0].example == undefined ? "Not Found" : jsonData[0].meanings[0].definitions[0].example}</span></p>
            <p>Synonyms: <span>${jsonData[0].meanings[0].synonyms[0] == undefined ? "Not Found" : jsonData[0].meanings[0].synonyms[0]}</span></p>
            <a href=${jsonData[0].sourceUrls[0]} target="_blank"> Read more</a>
    `

    document.querySelector(".text").appendChild(div);

    console.log(jsonData);


}


searchBtn.addEventListener("click", function(){

    let inputValue = searchInput.value;

    if(inputValue === ""){
        alert("First Enter your word");
    }

    else{
        getData(inputValue);
        
        searchInput.value = '';

    }

    
})
