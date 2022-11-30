//Mail, Chiedi all’utente la sua email, controlla che sia nella lista di chi può accedere, stampa un messaggio appropriato sull’esito del controllo.

// 1 - Chiedi all'utente la mail

const email = ['leonardo.martellosio@gmail', 'mariorossi@gmail.com', 'pizza@gmail.com']

// 2 - inserisci mail

let cerca = prompt('inserisci mail')

// 3 - cerca con for se l'email insritsa dall'utente è nella lista

let flag = false

for(let i=0; i < email.length; i++){
    
    if(email[i] == cerca){
        flag = true;
    }
}

if(flag == true){
    console.log("L'email è presente")
}

else{
    console.log("L'email non è presente")
}
