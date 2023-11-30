
// prompt nome
let Nome = prompt('Dimmi il tuo nome')

// prompt cognome
let Cognome = prompt('Dimmi il tuo congnome')

// prompt colore preferito
let ColorePreferito = prompt('Dimmi il tuo colore preferito')

let Password = (Nome + Cognome + ColorePreferito + '114')

document.getElementById('info').innerHTML = Password;