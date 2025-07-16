const pending = document.querySelector("#pendingText");

async function fetchOffers(){
 
    const response = await fetch("https://api.allorigins.win/raw?url=https://codepassport.dev/api/offers");
    // j'ai collé https://api.allorigins.win/raw?url= avant mon url d'api car erreur corps
    const offers = await response.json();

    pending.style.display = "none";

    const offerList = document.querySelector("#offerList");


    for (const offer of offers){
        const title = document.createElement("h2");
        const jd = document.createElement("p");
        title.innerHTML = offer.titre;
        jd.innerHTML = offer.description;
        offerList.appendChild(title);
        offerList.appendChild(jd);
    };
};
fetchOffers();