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
}

function showSong(i) {
    localStorage.setItem("song", danceSongs[i]);
    window.location.href = "song.html";
}