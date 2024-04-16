let url = "https://catfact.ninja/fact";
let btn1 = document.querySelector("button");

btn1.addEventListener("click",async ()=> { 
    let fact = await  getFacts(); 
    let p = document.querySelector("#result");
    p.innerHTML = fact;
});
async function getFacts() {
    try {
        let res = await axios.get(url);
        return res.data.fact;
    }
    catch(e) {
        console.log("ERROR :--",e);
        return "No fact found";
    }
}

// API for the img generation
let url2 = "https:dog.ceo/api/breeds/image/random";
let btn2 = document.querySelector(".btn");


btn2.addEventListener("click", async ()=> {
    let link = await getImg();
    let img = document.querySelector("#dogresult");
    img.setAttribute("src",link);
})

async function getImg() {
    try{
        let res = await axios.get(url2);
        console.log(res);
        return res.data.message;
        
    }
    catch(e){
        console.log("Error:-",e);
        return "Img No Shown";
    }
}

