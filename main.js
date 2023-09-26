const generateBtn=document.querySelector(".main .genetate-btn");
const memeTitle=document.querySelector(".main .meme-title");
const memeImage=document.querySelector(".main img");
const memeAuthor=document.querySelector(".main .meme-author");

const updateDetails=(url,title,author)=>{
    memeImage.setAttribute("src",url)
    memeTitle.innerHTML=title;
    memeAuthor.innerHTML=`Meme by: ${author}`;
}


const generateMeme=()=>{
    fetch(" https://meme-api.com/gimme/wholesomememes")
    .then((response)=>response.json())
    .then(data=>{
        updateDetails(data.url,data.title,data.author)
    });
};



document.addEventListener("click",generateMeme);
generateMeme();








