class Cliente {
    #cpf
    constructor(nome, cpf, endereco){
        this.nome = nome
        this.endereco = endereco
        this.#cpf = cpf
        this.telefones = new Set()
    }
    get getCpf(){
        return this.#cpf
    }

    get upperNome(){
        return this.nome.toUpperCase()
    }
    get lowerNome(){
        return this.nome.toLowerCase()
    }

    get upperEndereco(){
        return this.endereco.toUpperCase()
    }
    get lowerEndereco(){
        return this.endereco.toLowerCase()
    }

    addTelefone(telefone) {
        this.telefones.add(telefone)
    }
}

class Telefone{
    constructor(ddd, numero){
        this.ddd = ddd;
        this.numero = numero;
    }
}

class Endereco{
    constructor(estado, cidade, rua, numero){
        this.estado = estado
        this.cidade = cidade
        this.rua = rua
        this.numero = numero
    }
    
get upperEstado(){
    return this.estado.toUpperCase()
}
get lowerEstado(){
    return this.estado.toLowerCase()
}

get upperCidade(){
    return this.cidade.toUpperCase()
}
get lowerCidade(){
    return this.cidade.toLowerCase()
}

get upperRua(){
    return this.rua.toUpperCase()
}
get lowerRua(){
    return this.rua.toLowerCase()
}

get getNumero() {
    return this.numero;
}
}


class Empresa {
    #cnpj
    constructor(razaoSocial, nomeFantasia, cnpj, endereco){
        this.endereco = endereco
        this.nomeFantasia = nomeFantasia
        this.razaoSocial = razaoSocial
        this.#cnpj = cnpj
        this.clientes = new Set()
        this.telefones = new Set()
    }

    get getCnpj(){
        return this.#cnpj
    }

    get upperEndereco(){
        return this.endereco.toUpperCase()
    }
    get lowerEndereco(){
        return this.endereco.toLowerCase()
    }

    get upperNomeFantasia(){
        return this.nomeFantasia.toUpperCase()
    }
    get lowerNomeFantasia(){
        return this.nomeFantasia.toLowerCase()
    }

    get upperRazaoSocial(){
        return this.razaoSocial.toUpperCase()
    }
    get lowerRazaoSocial(){
        return this.razaoSocial.toLowerCase()
    }

    addCliente(cliente) {
        this.clientes.add(cliente)
    }

    addTelefone(telefone) {
        this.telefones.add(telefone)
    }

    detalhe(){
        let descricao = `Razão Social: ${this.razaoSocial}\n`
        descricao += `Nome Fantasia: ${this.nomeFantasia}\n`
        descricao += `----------------------------------------------------------\n`

        this.clientes.forEach(cliente => {
            descricao += `Nome: ${cliente.nome}\n`
            descricao += `Estado: ${cliente.endereco.estado} Cidade: ${cliente.endereco.cidade} Rua: ${cliente.endereco.rua} Número: ${cliente.endereco.numero}\n`
            cliente.telefones.forEach(telefone => {
                descricao += `DDD: ${telefone.ddd}  Número: ${telefone.numero}\n`
            })
            descricao += `----------------------------------------------------------\n`
        })

        return descricao
    }
}


let endereco1 = new Endereco('SC', 'Florianópolis', 'Rua das Ondas', '300');
let cliente1 = new Cliente('Fernanda', '753159486', endereco1);
cliente1.addTelefone(new Telefone('48', '981234567'));
cliente1.addTelefone(new Telefone('48', '982345678'));

let endereco2 = new Endereco('RJ', 'Rio de Janeiro', 'Avenida Central', '1000');
let cliente2 = new Cliente('Maria', '987654321', endereco2);
cliente2.addTelefone(new Telefone('21', '987123456'));
cliente2.addTelefone(new Telefone('21', '987654987'));

let endereco3 = new Endereco('MG', 'Belo Horizonte', 'Rua das Flores', '250');
let cliente3 = new Cliente('Carlos', '456123789', endereco3);
cliente3.addTelefone(new Telefone('31', '988776655'));
cliente3.addTelefone(new Telefone('31', '987111222'));

let endereco4 = new Endereco('PR', 'Curitiba', 'Rua das Árvores', '77');
let cliente4 = new Cliente('Ana', '321654987', endereco4);
cliente4.addTelefone(new Telefone('41', '986532147'));
cliente4.addTelefone(new Telefone('41', '985623478'));

let endereco5 = new Endereco('RS', 'Porto Alegre', 'Avenida dos Ventos', '500');
let cliente5 = new Cliente('Pedro', '159753468', endereco5);
cliente5.addTelefone(new Telefone('51', '984563219'));
cliente5.addTelefone(new Telefone('51', '982365478'));

let enderecoEmpresa = new Endereco('SP', 'São Paulo', 'Rua dos Negócios', '10')
let empresa = new Empresa('ABC LTDA', 'Mercado Online', '453627189', enderecoEmpresa)

empresa.addTelefone(new Telefone('11', '40028922'))
empresa.addTelefone(new Telefone('11', '40202020'))

empresa.addCliente(cliente1);
empresa.addCliente(cliente2);
empresa.addCliente(cliente3);
empresa.addCliente(cliente4);
empresa.addCliente(cliente5);


console.log(empresa.detalhe())