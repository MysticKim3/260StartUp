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

    const per1 = document.getElementById("person1");
    per1.textContent = "Kia saved new choreography for " + danceSongs[0] + "!";
    const per2 = document.getElementById("person2");
    per2.textContent = "Andrew saved new choreography for " + danceSongs[1] + "!";

    const v1 = document.getElementById("v1");
    v1.textContent = Math.floor(Math.random() * 20).toString() + " versions";
    const v2 = document.getElementById("v2");
    v2.textContent = Math.floor(Math.random() * 20).toString() + " versions";
    const v3 = document.getElementById("v3");
    v3.textContent = Math.floor(Math.random() * 20).toString() + " versions";
}

function showSong(i) {
    localStorage.setItem("song", danceSongs[i]);
    window.location.href = "song.html";
}