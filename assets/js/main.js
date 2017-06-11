var inputTelefono = document.getElementById("icon_telephone");
var btnInputTelefono = document.getElementById("btn-telNext");

inputTelefono.addEventListener("click", validarFormTel);

function setTime () {
    setTimeout(function(){window,location.href="home.html";}, 5000);
}

function validarFormTel() {
	if (inputTelefono.value.length == 8) {
		btnInputTelefono.disabled = true;
	}
	else {
		btnInputTelefono.disabled = false;
	}
}

function cargarPagina() {
    setTime();
}



