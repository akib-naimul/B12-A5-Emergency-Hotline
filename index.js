// Cards HeartIcon click ==> COunt in NavBar hearts icon

const likeCount = document.getElementById("like-count"); //navbar like p tag
const heartIcons = document.querySelectorAll(".card-logo2");   // catch all the hearticons of all cards

for (const heart of heartIcons){
    heart.addEventListener("click",function(){
        likeCount.innerText = parseInt(likeCount.innerText) + 1;
    });
}


//  CALL BUTTON Features:

const coinCount = document.getElementById("coins");  //get the navbar coins tag
const callHistoryContainer = document.getElementById("call-history-cards");   //mother call history coinatiner

const callBtns = document.querySelectorAll(".call-btn");    // get call buttons from cards

for(const btn of callBtns){
    btn.addEventListener("click",function(){
        let currentcoin = parseInt(coinCount.innerText);

        if (currentcoin < 20){
            alert("Not enought coins");
            return;
        }
        else{
            coinCount.innerText = currentcoin - 20;
        }

        const card = btn.parentElement.parentElement;
        const serviceName = card.querySelector(".card-h2").innerText;
        const serviceNumber = card.querySelector(".card-number").innerText;

        alert("Calling" +" " + serviceName + "  "+ serviceNumber);


        // add call hisory
        //type-2:
         const entry = document.createElement("div");
         const nameP = document.createElement("p");
         nameP.innerText = serviceName;
         const numberP = document.createElement("p");
         numberP.innerText = serviceNumber;

         entry.appendChild(nameP);
         entry.appendChild(numberP);
         callHistoryContainer.appendChild(entry);


        //type-1
        // const entry = document.createElement("div");
        // entry.innerText =  serviceName + "-" + serviceNumber;
        // callHistoryContainer.appendChild(entry);
    });
}



