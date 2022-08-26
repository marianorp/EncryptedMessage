
/* Emperadores de Roma del 14 dc a 138 dc*/

const Emperors = [   /* 0 a 10 */
    {name: "Tiberio", beginning: 14, ending: 37 },
    {name: "Caligula", beginning: 37, ending: 41 },
    {name: "Claudio", beginning: 41, ending: 54 },
    {name: "Neron", beginning: 54, ending: 68 },
    {name: "Galba", beginning: 68, ending: 69},
    {name: "Vespasiano", beginning: 69, ending: 79},
    {name: "Tito", beginning: 79, ending: 81},
    {name: "Domiciano", beginning: 81, ending: 96},
    {name: "Nerva", beginning: 96, ending: 98},
    {name: "Trajano", beginning: 98, ending: 117},
    {name: "Adriano", beginning: 117, ending: 138}
]

const min = 0
const max = 10

let messageToEncrypt = "PepeLuis"

let keys = [Math.floor(Math.random()*(max-min+1)+min)]   /* define el emperador a usar */

keys[1] = (Math.random()>0.5) ? Emperors[keys[0]].beginning : Emperors[keys[0]].ending  /* define key beginning or ending */

keys[2] = (Emperors[keys[0]].name).length  /* define key largo del nombre*/ 

console.log(`Key 0: ${keys[0]}`)
console.log(`Key 1: ${keys[1]}`)
console.log(`Key 2: ${keys[2]}`)

let Masterkey = keys[0]+keys[1]+keys[2] 

console.log(`Master Key: ${Masterkey}`)


const encrypt = (messageToEncrypt, Masterkey) => {
    let encrypted = ""

    for (let i = 0; i < messageToEncrypt.length; i++) {
        const upperCase = messageToEncrypt.toUpperCase()  
        const char = upperCase.charCodeAt(i)  
        const newChar = char + Masterkey
        encrypted += String.fromCharCode(newChar)  
    }
    return encrypted
}


const decrypted = (encryptMessage, Masterkey) => {
    let decrypted = ""

    for (let i = 0; i < encryptMessage.length; i++) {
        const char = encryptMessage.charCodeAt(i)    
        const newChar = char - Masterkey
        decrypted += String.fromCharCode(newChar)   
    }
    return decrypted
}

/* Pagina para lleer el unicode https://unicode-table.com/es/ */ 

let encryptMessage = encrypt(messageToEncrypt, Masterkey)

console.log("........")
console.log(".......")
console.log("......")
console.log(".....")
console.log("....")

console.log(`Encrypted message: ${encryptMessage}`)

console.log(`Decrypted message: ${decrypted(encryptMessage, Masterkey)}`)   /* deberia mostrar directamente la variable messageToEncrypt porque al 
                                                                             pasarla a mayuscula si el mensaje es case sensitive no muestra lo correcto*/



// Tambien podria haber elegido que la master key no pase de el numero 32 asi mostraba todo en caracteres de letras 
// "A..Z y a..z" por ejemplo la letra N mayuscula es 78 mas un numero maximo de 32 = 100, que en codigo seria la "o" minuscula