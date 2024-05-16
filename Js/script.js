

const prodotti = [ 'carote', 'banane', 'mele', 'carne', 'pollo', 'fiocchi di latte', 'uova'];
const ulElement = document.querySelector('ul');


//  MIA SOLUZIONE (errata)
// const listaDellaSpesa = [];


// while (listaDellaSpesa.length < prodotti.length) {
//     const index = Math.floor(Math.random() * prodotti.length);
//     if (!listaDellaSpesa.includes(prodotti[index])) {
//         listaDellaSpesa.push(prodotti[index]);
//     }
//     let element = document.createElement('li');
//     element.append(listaDellaSpesa[index]);
//     ulElement.append(element);

//     console.log(prodotti[index] +  " " + listaDellaSpesa[index]);
// }


// SOLUZIONE CORRETTA IN AULA 


let j = 0;

while( j < prodotti.length){
    const element = document.createElement('li');
    element.append(prodotti[j]);
    ulElement.append(element);
    j++;
}