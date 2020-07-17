//city section

const city = document.getElementById('city-input');
const save = document.getElementById('save');
const remove = document.getElementById('remove');
const info = document.getElementById('info');

save.disabled = true;
city.oninput = () => save.disabled = false;

function setCookie() {
	if (city.value === '') return;
	else {
		let myCookie = 'city=';
		let expiresAttr = '; max-age=3600';
		let cityValue = city.value;

		document.cookie = myCookie + '*' + cityValue + '*' + expiresAttr;
	}
}

function removeCookie() {
	document.cookie = 'city=; max-age=-1';
}

save.onclick = () => setCookie();
remove.onclick = () => removeCookie();

//checkboxes section

const check1 = document.getElementById('gridCheck1');
const check2 = document.getElementById('gridCheck2');
const check3 = document.getElementById('gridCheck3');
const check4 = document.getElementById('gridCheck4');
const check5 = document.getElementById('gridCheck5');
const check6 = document.getElementById('gridCheck6');
const checkSave = document.getElementById('check-save');

checkSave.onclick = () => {
	if (check1.checked == true) {
		document.cookie = 'check1=true; max-age: 3600';
	};
	if (check2.checked == true) {
		document.cookie = 'check2=true; max-age: 3600';
	};
	if (check3.checked == true) {
		document.cookie = 'check3=true; max-age: 3600';
	};
	if (check4.checked == true) {
		document.cookie = 'check4=true; max-age: 3600';
	};
	if (check5.checked == true) {
		document.cookie = 'check5=true; max-age: 3600';
	};
	if (check6.checked == true) {
		document.cookie = 'check6=true; max-age: 3600';
	};
	if (check1.checked == false && check2.checked == false && check3.checked == false && check4.checked == false && check5.checked == false && check6.checked == false) {
		document.cookie = 'check=true; max-age: 3600';
	}
}

//onload section

window.onload = () => {
	if (document.cookie.includes('city=')) {
		city.style.display = 'none';
		save.style.display = 'none';
		info.style.display = 'inline-block';
		remove.style.display = 'inline-block';
		info.innerText = 'your city is ' + document.cookie.split('*')[1];
	}
	if (document.cookie.includes('check1=true')) {
		check1.checked = true;
		check1.disabled = true;
		check2.disabled = true;
		check3.disabled = true;
		check4.disabled = true;
		check5.disabled = true;
		check6.disabled = true;
	}
	if (document.cookie.includes('check2=true')) {
		check2.checked = true;
		check1.disabled = true;
		check2.disabled = true;
		check3.disabled = true;
		check4.disabled = true;
		check5.disabled = true;
		check6.disabled = true;
	}
	if (document.cookie.includes('check3=true')) {
		check3.checked = true;
		check1.disabled = true;
		check2.disabled = true;
		check3.disabled = true;
		check4.disabled = true;
		check5.disabled = true;
		check6.disabled = true;
	}
	if (document.cookie.includes('check4=true')) {
		check4.checked = true;
		check1.disabled = true;
		check2.disabled = true;
		check3.disabled = true;
		check4.disabled = true;
		check5.disabled = true;
		check6.disabled = true;
	}
	if (document.cookie.includes('check5=true')) {
		check5.checked = true;
		check1.disabled = true;
		check2.disabled = true;
		check3.disabled = true;
		check4.disabled = true;
		check5.disabled = true;
		check6.disabled = true;
	}
	if (document.cookie.includes('check6=true')) {
		check6.checked = true;
		check1.disabled = true;
		check2.disabled = true;
		check3.disabled = true;
		check4.disabled = true;
		check5.disabled = true;
		check6.disabled = true;
	}
	if (document.cookie.includes('check=true')) {
		check1.disabled = true;
		check2.disabled = true;
		check3.disabled = true;
		check4.disabled = true;
		check5.disabled = true;
		check6.disabled = true;
	}
	if (document.cookie === '') {
		city.style.display = 'inline-block';
		save.style.display = 'inline-block';
		info.style.display = 'none';
		remove.style.display = 'none';
		city.value = '';
		check1.checked = false;
		check1.disabled = false;
		check2.checked = false;
		check2.disabled = false;
		check3.checked = false;
		check3.disabled = false;
		check4.checked = false;
		check4.disabled = false;
		check5.checked = false;
		check5.disabled = false;
		check6.checked = false;
		check6.disabled = false;
	}
}
