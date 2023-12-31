// function login() {
//     const userName = document.querySelector("#username");
//     const password = document.querySelector("#password");
//     localStorage.setItem("userName", userName.value);
//     localStorage.setItem("password", password.value);
//     window.location.href = "dance.html";
// }

(async () => {
	const userName = localStorage.getItem('userName');
	if (userName) {
	  document.querySelector('#playerName').textContent = userName;
	  setDisplay('loginControls', 'none');
	  setDisplay('playControls', 'block');
	} else {
	  setDisplay('loginControls', 'block');
	  setDisplay('playControls', 'none');
	}
})();
  
async function loginUser() {
	loginOrCreate(`/api/auth/login`);
}
  
async function createUser() {
	loginOrCreate(`/api/auth/create`);
}

async function loginOrCreate(endpoint) {
	const userName = document.querySelector('#username')?.value;
	const password = document.querySelector('#password')?.value;
	const response = await fetch(endpoint, {
	  method: 'post',
	  body: JSON.stringify({ email: userName, password: password }),
	  headers: {
		'Content-type': 'application/json; charset=UTF-8',
	  },
	});
  
	if (response.ok) {
	  localStorage.setItem('userName', userName);
	  window.location.href = 'dance.html';
	} else {
	  const body = await response.json();
	  const modalEl = document.querySelector('#msgModal');
	  modalEl.querySelector('.modal-body').textContent = `⚠ Error: ${body.msg}`;
	  const msgModal = new bootstrap.Modal(modalEl, {});
	  msgModal.show();
	}
}

function play() {
	window.location.href = 'dance.html';
}

function logout() {
	localStorage.removeItem('userName');
	fetch(`/api/auth/logout`, {
	  method: 'delete',
	}).then(() => (window.location.href = '/'));
}

async function getUser(email) {
	let scores = [];
	// See if we have a user with the given email.
	const response = await fetch(`/api/user/${email}`);
	if (response.status === 200) {
	  return response.json();
	}
  
	return null;
}

function setDisplay(controlId, display) {
	const playControlEl = document.querySelector(`#${controlId}`);
	if (playControlEl) {
	  playControlEl.style.display = display;
	}
}

function displayPicture() {
	const random = Math.floor(Math.random() * 1000);
	fetch(`https://picsum.photos/v2/list?page=${random}&limit=1`)
	  .then((response) => response.json())
	  .then((data) => {
		const containerEl = document.querySelector('#picture');
  
		const width = containerEl.offsetWidth;
		const height = containerEl.offsetHeight;
  
		const imgUrl = `https://picsum.photos/id/${data[0].id}/${width}/${height}?grayscale`;
		const imgEl = document.createElement('img');
		imgEl.setAttribute('src', imgUrl);
		containerEl.appendChild(imgEl);
	});
}

displayPicture();