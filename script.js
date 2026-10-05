const lista = document.getElementById("lista")
const li1 = document.createElement("li");

const atributo = document.createAttribute("class")
atributo.value = "mis-puntos";

li1.setAttributeNode(atributo);

const texto1 = document.createTextNode("ESTA ES MI LISTA");

li1.appendChild(texto1);
lista.appendChild(li1);

lista.innerHTML += '<li class="mis-puntos">HOLA A TI, TE DESEO UN MUY BONITO DIA</li>'


//EJERCICIO 1 BIS:

const quehaceres = ["comprar","barrer","alimentar gato","colada"]
const fragmento = document.createDocumentFragment();

for (let i = 0; i < quehaceres.length; i++) {
    const li = document.createElement("li");
    const texto = document.createTextNode(quehaceres[i]);

    li.appendChild(texto);
    fragmento.appendChild(li)
    lista.appendChild(fragmento);
}
