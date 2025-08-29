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
const clearbtn = document.getElementById("clear-btn");

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
        const serviceName = card.querySelector(".card-h1").innerText;
        const serviceNumber = card.querySelector(".card-number").innerText;

        alert("Calling" +" " + serviceName + "  "+ serviceNumber);


        // add call hisory
        // type-3 (call history with time)
        const callrecord = document.createElement("div");
        callrecord.style.position = "relative";
        callrecord.style.backgroundColor = "#FAFAFA";
        callrecord.style.borderRadius = "8px";
        callrecord.style.padding = "10px";
        callrecord.style.margin = "8px 0";
        callrecord.style.boxShadow = "0 2px 5px rgba(0,0,0,0.1)";

        // get the service name
        const nameS = document.createElement("p");
        nameS.innerText = serviceName;
        callrecord.appendChild(nameS);

        //get the service Number
        const numberS = document.createElement("p");
        numberS.innerText = serviceNumber;
        callrecord.appendChild(numberS);

        // get the call time
        const time = document.createElement("p");
        const now = new Date();
        let hours = now.getHours();
        let minutes = now.getMinutes();
        let seconds = now.getSeconds();
        let ampm = hours >= 12 ? "PM" : "AM";
        hours = hours % 12;
        hours = hours ? hours : 12;
        minutes = minutes < 10 ? "0" + minutes : minutes;
        seconds = seconds < 10 ? "0" + seconds : seconds;
        time.innerText = `${hours}:${minutes}:${seconds} ${ampm}`;
        time.style.position = "absolute";
        time.style.right = "10px";
        time.style.top = "50%";
        time.style.transform = "translateY(-50%)";
        time.style.fontWeight = "bold";

        callrecord.appendChild(time);

        // append to cal history
        callHistoryContainer.appendChild(callrecord);



        //type-2:
        //  const entry = document.createElement("div");
        //  const nameP = document.createElement("p");
        //  nameP.innerText = serviceName;
        //  const numberP = document.createElement("p");
        //  numberP.innerText = serviceNumber;

        //  entry.appendChild(nameP);
        //  entry.appendChild(numberP);
        //  callHistoryContainer.appendChild(entry);  
    });
}

// clear button functionality
clearbtn.addEventListener("click", function(){
    callHistoryContainer.innerHTML ="";
});


// challenege part functionality
//  copy button functional;ity
const copybtn = document.querySelectorAll("#main-container #copy-btn");
const copycount = document.querySelector("#box-3 p")   //get the copy btn count

copybtn.forEach(function(btn){
    btn.addEventListener("click", function(){
        const card = btn.parentElement.parentElement;
        const number = card.querySelector(".card-number").innerText;
        //above part:  get/copy the phn number

        //copy the phn number
        navigator.clipboard.writeText(number);

        alert("The Number is copied " + number);

        // change/update the copy count from navbar
        const currentcopycount = parseInt(copycount.innerText);
        copycount.innerText = (currentcopycount + 1) + "  Copy";
    });
});


//  live calling time
