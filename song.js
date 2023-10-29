var dict = {
    "The Hardest Love": ["There was a person", "Standing outside my window", "They had fallen to the ground",
    "They put their arms up", "Falling into the concrete"], "Summertime Friends": ["I had a summer friend", 
    "They were so cool in the summer", "But only friends for the summer", "Winter I'd be unknown", "Winter was the end of it all"], 
    "Growing Up Is Hard": ["Being a child is so fun", "Free of every responsibility", "Taking in the little joys", 
    "Giving yourself fun and rest", "Dancing in the rain"]
};

function setSong() {
    const element = document.getElementById("usn");
    const text = localStorage.getItem("userName");
    element.textContent = "Username: " + text;
    const song = localStorage.getItem("song");
    if (song == null) {
        return;
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