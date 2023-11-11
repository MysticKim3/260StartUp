var dict = {
    "The Hardest Love": ["There was a person", "Standing outside my window", "They had fallen to the ground",
    "They put their arms up", "Falling into the concrete"], "Summertime Friends": ["I had a summer friend", 
    "They were so cool in the summer", "But only friends for the summer", "Winter I'd be unknown", "Winter was the end of it all"], 
    "Growing Up Is Hard": ["Being a child is so fun", "Free of every responsibility", "Taking in the little joys", 
    "Giving yourself fun and rest", "Dancing in the rain"]
};

var pplLyrics = {
    1: ["Salute no one", "Stiff upright posture", "Collapse to the floor", "Stare deeply up into the sky", "Lay as one with the floor"]
};

var mylyrics = {1:"", 2:"", 3:"", 4:"", 5:""};

function setSong() {
    const element = document.getElementById("usn");
    const text = localStorage.getItem("userName");
    element.textContent = "Username: " + text;
    const song = localStorage.getItem("song");
    if (song == null) {
        return;
    }
    var mylyrs;
    if (localStorage.getItem(song) != null){
        mylyrs = JSON.parse(localStorage.getItem(song));
    } else {
        mylyrs = null;
    }
    if (mylyrs != null) {
        mylyrics = mylyrs;
        const txt1 = document.getElementById("txt1");
        txt1.value = mylyrics[1];
        const txt2 = document.getElementById("txt2");
        txt2.value = mylyrics[2];
        const txt3 = document.getElementById("txt3");
        txt3.value = mylyrics[3];
        const txt4 = document.getElementById("txt4");
        txt4.value = mylyrics[4];
        const txt5 = document.getElementById("txt5");
        txt5.value = mylyrics[5];
    }
    const songtitle = document.getElementById("songtitle");
    songtitle.textContent = song;
    const lyrics = dict[song];
    const p1 = document.getElementById("p1");
    p1.textContent = "1. " + lyrics[0];
    const p2 = document.getElementById("p2");
    p2.textContent = "2. " + lyrics[1];
    const p3 = document.getElementById("p3");
    p3.textContent = "3. " + lyrics[2];
    const p4 = document.getElementById("p4");
    p4.textContent = "4. " + lyrics[3];
    const p5 = document.getElementById("p5");
    p5.textContent = "5. " + lyrics[4];
}

function saveEdits() {
    const txt1 = document.getElementById("txt1");
    mylyrics[1] = txt1.value;
    const txt2 = document.getElementById("txt2");
    mylyrics[2] = txt2.value;
    const txt3 = document.getElementById("txt3");
    mylyrics[3] = txt3.value;
    const txt4 = document.getElementById("txt4");
    mylyrics[4] = txt4.value;
    const txt5 = document.getElementById("txt5");
    mylyrics[5] = txt5.value;
    console.log(mylyrics);
    const song = localStorage.getItem("song");
    localStorage.setItem(song, JSON.stringify(mylyrics));
    numCont = localStorage.getItem("numConts");
    if (numCont == null) {
        localStorage.setItem("numConts", (1).toString());
    } else {
        localStorage.setItem("numConts", (parseInt(numCont)+1).toString());
    }
}

function otherChoreo() {
    const back = document.getElementById("arrow");
    var nextLyrs;
    var plus;
    if (back.value == "⇨") {
        back.value = "⇦";
        nextLyrs = pplLyrics[1];
        plus = "   +";
    } else {
        back.value = "⇨"
        nextLyrs = [mylyrics[1], mylyrics[2], mylyrics[3], mylyrics[4], mylyrics[5]];
        plus = "";
    }

    const txt1 = document.getElementById("txt1");
    txt1.value = nextLyrs[0] + plus;
    txt1.addEventListener("click", function(){const txt1 = document.getElementById("txt1");
    mylyrics[1] = txt1.value.slice(0, -2);})
    const txt2 = document.getElementById("txt2");
    txt2.value = nextLyrs[1] + plus;
    txt2.addEventListener("click", function(){const txt2 = document.getElementById("txt2");
    mylyrics[2] = txt2.value.slice(0, -2);})
    const txt3 = document.getElementById("txt3");
    txt3.value = nextLyrs[2] + plus;
    txt3.addEventListener("click", function(){const txt3 = document.getElementById("txt3");
    mylyrics[3] = txt3.value.slice(0, -2);})
    const txt4 = document.getElementById("txt4");
    txt4.value = nextLyrs[3] + plus;
    txt4.addEventListener("click", function(){const txt4 = document.getElementById("txt4");
    mylyrics[4] = txt4.value.slice(0, -2);})
    const txt5 = document.getElementById("txt5");
    txt5.value = nextLyrs[4] + plus;
    txt5.addEventListener("click", function(){const txt5 = document.getElementById("txt5");
    mylyrics[5] = txt5.value.slice(0, -2);})
}