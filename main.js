const encriptars = document.getElementById("encriptar");
const desencriptar = document.getElementById("desencriptar");
const inputid = document.querySelector("#textarea");
const mensaje = document.querySelector("#mensaje");
const spanm = document.querySelector("#mensaje");
const spaninicial = spanm.innerHTML;
const copiar = document.querySelector("#copiar");

const enctriptarCodigo = function (mensaje) {
  let array = [];
  if (mensaje === "") {
    return;
  }
  for (let i = 0; i < mensaje.length; i++) {
    if (mensaje[i] === "a") {
      array.push("ai");
      continue;
    }
    if (mensaje[i] === "e") {
      array.push("enter");
      continue;
    }
    if (mensaje[i] === "i") {
      array.push("imes");
      continue;
    }
    if (mensaje[i] === "o") {
      array.push("ober");
      continue;
    }
    if (mensaje[i] === "u") {
      array.push("ufat");
      continue;
    } else {
      array.push(mensaje[i]);
    }
  }

  spanm.innerText = array.join("");
};

const desenctriptarCodigo = function (mensaje) {
  if (mensaje === "") {
    return;
  }
  var mEnc = [...mensaje];
  var array = [];
  let i = 0;
  while (mEnc.length) {
    if (mEnc[i] + mEnc[i + 1] === "ai") {
      array.push("a");
      mEnc.shift();
      mEnc.shift();
    }
    if (mEnc[i] + mEnc[i + 1] + mEnc[i + 2] + mEnc[i + 3] === "ufat") {
      array.push("u");
      mEnc.shift();
      mEnc.shift();
      mEnc.shift();
      mEnc.shift();
    }
    if (mEnc[i] + mEnc[i + 1] + mEnc[i + 2] + mEnc[i + 3] === "imes") {
      array.push("i");
      mEnc.shift();
      mEnc.shift();
      mEnc.shift();
      mEnc.shift();
    }
    if (mEnc[i] + mEnc[i + 1] + mEnc[i + 2] + mEnc[i + 3] === "ober") {
      array.push("o");
      mEnc.shift();
      mEnc.shift();
      mEnc.shift();
      mEnc.shift();
    }
    if (
      mEnc[i] + mEnc[i + 1] + mEnc[i + 2] + mEnc[i + 3] + mEnc[i + 4] ===
      "enter"
    ) {
      array.push("e");
      mEnc.shift();
      mEnc.shift();
      mEnc.shift();
      mEnc.shift();
      mEnc.shift();
    } else {
      array.push(mEnc[i]);
      mEnc.shift();
    }
  }
  spanm.innerText = array.join("");
};

const encriptarTexto = (evento) => {
  enctriptarCodigo(inputid.value);
};

function copyText() {
  const contenido = spanm.innerHTML;
  let input = document.createElement("input");

  if (contenido === spaninicial) {
    alert("No hay mensaje que copiar.");
    input.value = " ";

    document.body.appendChild(input);

    input.select();

    document.execCommand("copy");

    input.remove();
    return;
  }
  input.value = contenido;

  document.body.appendChild(input);

  input.select();

  document.execCommand("copy");

  input.remove();

  alert("Su mensaje ha sido copiado con exito!");
}

const desencriptarTexto = (evento) => {
  desenctriptarCodigo(inputid.value);
};

encriptars.addEventListener("click", encriptarTexto);
desencriptar.addEventListener("click", desencriptarTexto);
copiar.addEventListener("click", copyText);
