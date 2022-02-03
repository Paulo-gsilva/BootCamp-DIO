function getAdmin(map){
    let admins = [];
    
    for([key, value] of map){
        if(value === 'admin'){
            admins.push(key);
        }
    }
    return admins;
}

const usuario = new Map();
usuario.set('Mario', 'admin');
usuario.set('Joao', 'user');
usuario.set('Ana', 'user');
usuario.set('Paulo', 'admin');
usuario.set('Fernanda', 'user');
console.log(getAdmin(usuario));
