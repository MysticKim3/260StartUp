const danceSongs = ["The Hardest Love", "Summertime Friends", "Growing Up Is Hard"];

async function loadScores() {
	let edits = [];
	try {
	  // Get the latest high scores from the service
	  const response = await fetch('/api/edits');
	  edits = await response.json();
  
	  // Save the scores in case we go offline in the future
	  localStorage.setItem('edits', JSON.stringify(scores));
	} catch {
	  // If there was an error then just use the last saved scores
	  const editsText = localStorage.getItem('edits');
	  if (editsText) {
		edits = JSON.parse(editsText);
	  }
	}
  
	displayEdits(edits);
}

function displayEdits(edits) {
	const tableBodyEl = document.querySelector('#people');
  
	if (edits.length) {
	  // Update the DOM with the scores
	  for (const [i, edit] of edits.entries()) {
		const text = document.createElement('li');
  
		text.textContent = edit.name + " saved new choreography for " + edit.song + "!";
  
		tableBodyEl.appendChild(text);
	  }
	} else {
	  tableBodyEl.innerHTML = '<li>No one has made any edits yet</li>';
	}
  }
  

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

    // const per1 = document.getElementById("person1");
    // per1.textContent = "Kia saved new choreography for " + danceSongs[0] + "!";
    // const per2 = document.getElementById("person2");
    // per2.textContent = "Andrew saved new choreography for " + danceSongs[1] + "!";
	loadScores();

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