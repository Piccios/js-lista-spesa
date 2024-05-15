

const listaDellaSpesa = [ 'carote', 'banane', 'mele', 'carne', 'pollo', 'fiocchi di latte', 'uova'];
const ulElement = document.querySelector('ul');

for (let index = 0; index < listaDellaSpesa.length; index++ ) {
    
    const element = document.createElement('li');
    element.append(listaDellaSpesa[index]);
    
    ulElement.append(element);
}