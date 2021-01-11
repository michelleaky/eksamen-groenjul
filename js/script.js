//gsap.registerPlugin(ScrollTrigger);
//var rellax = new Rellax(".rellax", {
//    center: true,
//});


window.addEventListener("load", visStart);

function visStart() {
    console.log("jeg er ved start")
    produktInfoSkift();
    clickAddToKurv();
}



// PRODUKTINFOSKIFT SKTIFTER MELLEM BESKRIVELSE INFORMATION OG LEVERING

function produktInfoSkift() {



    console.log("jeg er ved produktInfoSkift")
    document.querySelectorAll(".produktbeskrivelse p").forEach(elm => {
        elm.addEventListener("click", filtering);
        console.log("Hvis der står 3 her, er det rigtigt")
    })
}

function filtering() {
    console.log("filtering")

    //    console.log("filter");
    //    filter = this.dataset.kategori;


    document.querySelectorAll(".produktbeskrivelse p").forEach(elm => {
        elm.classList.remove("valgt_info");
    })

    this.classList.add("valgt_info");

    if (this.dataset.kategori == "beskrivelse") {
        console.log("hej med dig");

        document.querySelector("#beskrivelseInfo").classList.remove("hidden");
        document.querySelector("#informationInfo").classList.add("hidden");
        document.querySelector("#leveringsInfo").classList.add("hidden");


    } else if (this.dataset.kategori == "information") {
        console.log("hej med dig info");

        document.querySelector("#beskrivelseInfo").classList.add("hidden");
        document.querySelector("#informationInfo").classList.remove("hidden");
        document.querySelector("#leveringsInfo").classList.add("hidden");
    } else if (this.dataset.kategori == "levering") {
        console.log("hej med dig levering");

        document.querySelector("#beskrivelseInfo").classList.add("hidden");
        document.querySelector("#informationInfo").classList.add("hidden");
        document.querySelector("#leveringsInfo").classList.remove("hidden");
    }


}




//forside

//var rellax = new Rellax(".rellax", {
//    center: true,
//});

//Instagram feed
const instaFeed = document.querySelector("#instafeed");
const tekstFade = document.querySelector("#tekst_fade");
const workshop = document.querySelector("#forside_workshop");
const middag = document.querySelector("#middag_fade");
const gaver = document.querySelector("#gaver_fade");

gsap.from(instaFeed, {
    opacity: 0,
    y: 100,
    duration: 2,
    stagger: 1,
    scrollTrigger: {
        trigger: "#instafeed",
        start: "20% bottom",
        end: "10% top",
        //        markers: true,
        scrub: true,
    }
});

gsap.from(tekstFade, {
    opacity: 0,
    y: 100,
    duration: 2,
    stagger: 1,
    scrollTrigger: {
        trigger: "#tekst_fade",
        start: "20% bottom",
        end: "10% top",
        //        markers: true,
        scrub: true,
    }
});

gsap.from(workshop, {
    opacity: 0,
    y: 100,
    duration: 2,
    stagger: 1,
    scrollTrigger: {
        trigger: "#forside_workshop",
        start: "20% bottom",
        end: "10% top",
        //        markers: true,
        scrub: true,
    }
});

gsap.from(middag, {
    opacity: 0,
    y: 100,
    duration: 2,
    stagger: 1,
    scrollTrigger: {
        trigger: "#middag_fade",
        start: "20% bottom",
        end: "10% top",
        //        markers: true,
        scrub: true,
    }
});

gsap.from(gaver, {
    opacity: 0,
    y: 100,
    duration: 2,
    stagger: 1,
    scrollTrigger: {
        trigger: "#gaver_fade",
        start: "20% bottom",
        end: "10% top",
        //        markers: true,
        scrub: true,
    }
});


// KØBS FLOW STARTER HER

function clickAddToKurv() {
    document.querySelector("#addToCard").addEventListener("click", () => {

        console.log("jeg har klikket på tilføjet til kurv")
        document.querySelector("#popupkurv").classList.remove("hidden");

        document.querySelector("#lukkeknap").addEventListener("click", () => {

            console.log("jeg har klikket på lukkeknap")
            document.querySelector("#popupkurv").classList.add("hidden");
        })
        document.querySelector("#popupkurv").addEventListener("click", () => {
            document.querySelector("#popupkurv").classList.add("hidden");
        })
    })
}
