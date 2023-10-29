const danceSongs = ["The Hardest Love", "Summertime Friends", "Growing Up Is Hard"];

function setTitles() {
    const element = document.getElementById("usn");
    const text = localStorage.getItem("userName");
    element.textContent = "Username: " + text;
    const t1 = document.getElementById("t1");
    t1.textContent = danceSongs[0];
    const t2 = document.getElementById("t2");
    t2.textContent = danceSongs[1];
    const t3 = document.getElementById("t3");
    t3.textContent = danceSongs[2];
    const cont = document.getElementById("contributions");
    const numCont = localStorage.getItem("numConts");
    if (numCont == null) {
        cont.textContent = "You've made 0 contributions!";
    } else {
        cont.textContent = "You've made " + numCont.toString() + " contributions!";
    }
}

function showSong(i) {
    localStorage.setItem("song", danceSongs[i]);
    window.location.href = "song.html";
}