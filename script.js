function derbyKentuckyCountdown(){
    const derbyDate = new Date("May 7, 2026 19:00");
    const now = new Date();
    
    const result = derbyDate-now;
    
    const msInSeconds = 1000;
    const msInMinutes = 60*1000;
    const msInHours = 60*60*1000;
    const msInDays = 24*60*60*1000;

    const displayDays = Math.floor(result / msInDays);
    document.querySelector(".day").textContent = displayDays;

    const displayHours = Math.floor((result % msInDays)/msInHours);
    document.querySelector(".hour").textContent = displayHours;

    const displayMinutes = Math.floor((result % msInHours)/ msInMinutes);
    document.querySelector(".minute").textContent = displayMinutes;

    const displaySeconds = Math.floor((result % msInMinutes)/ msInSeconds);
    document.querySelector(".second").textContent = displaySeconds;

    if(result <= 0){
        document.querySelector(".day").textContent = 0;
        document.querySelector(".hour").textContent = 0;
        document.querySelector(".minute").textContent = 0;
        document.querySelector(".second").textContent = 0; 
        clearInterval(timerId);
        theRunForTheRoses();
        
    }
}
    let timerId = setInterval(derbyKentuckyCountdown,1000);

    function theRunForTheRoses(){
        const beginning = document.querySelector("h1");
        beginning.textContent = "Let the Run for the Roses begin!!!";
        beginning.classList.add("party");

    }
    
    const button = document.querySelector("#myButton");
    button.addEventListener("click",function(){
        document.querySelector("#myAudio").play();
    })

gsap.from(".raise",{duration:2,opacity:0,rotation:180,stagger:1})
gsap.from("h1",{duration:2,opacity:0,delay:3,scale:2.5,easy:"bounce"})


