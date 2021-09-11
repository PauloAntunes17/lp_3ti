var cliente = {
    nome:'yuu',
    login: 'yuu17',
    senha: '123456',
    conta: 'ax23',
    saldo: 50.00
}

var add_dinheiro = function (valor){
    cliente.saldo = cliente.saldo + valor;
}

var remover_dinheiro = function (valor){
    cliente.saldo = cliente.saldo - valor;
}

var consultar_saldo = function(){
    console.log('SALDO: ' + cliente.saldo );
}

var consulatar_cliente = function(){
    console.log('nome: ' + cliente.nome);
    console.log('login: ' + cliente.login);
    console.log('senha: ' + cliente.senha);
    console.log('conta: ' + cliente.conta);
    console.log('saldo: ' + cliente.saldo);
}

add_dinheiro(10000);
consultar_saldo();
remover_dinheiro(3000);
consultar_saldo();
