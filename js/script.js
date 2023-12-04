function typeWrite(elemento){
    const textoArray = elemento.innerHTML.split('');
    elemento.innerHTML = '';
    console.log(textoArray);
    textoArray.forEach((letra,i) => {
        setTimeout(() => elemento.innerHTML += letra,50 * i)
    });
}


const texto = document.querySelector('p');
typeWrite(texto);

const hambueguer = document.querySelector(".hamburguer");
const nav = document.querySelector("nav");

hambueguer.addEventListener("click", () => nav.classList.toggle("active"));