export function obterElemento(elemento) {
    if (elemento[0] === "#") {
        return document.querySelector(elemento);
    }
    return document.querySelectorAll(elemento);
}