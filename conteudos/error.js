function returnString(string){
    if(!string) throw 'String Inválida';
    
    console.log(string);
}

function tryCatch(string){
    try{
        returnString(string);
    }
    catch(e){
        console.log(e);
    }
    finally{ //finally é executado sempre
        console.log(`Valor Enviado: ${string}`);
    }
}

tryCatch('dsds');