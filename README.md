# Exercício de Fixação 03
##  POO - Professor Gerson

Nesta atividade você deve praticar a construção de objetos que precisam de atributos privados. Dividida em 3 partes: <br>
### Cliente
O cpf de um cliente deve ser algo que não pode mudar após sua criação. Portanto, o atributo deve ser privado. <br>
class Cliente{<br>
    #cpf<br>
    constructor(nome, cpf, endereco){<br>
        this.nome = nome<br>
        this.endereco = endereco<br>
        this.telefones = new Set()<br>
        this.#cpf = cpf<br>
    }}<br>
Um cliente pode ter uma lista de telefones, que pode crescer ou diminuir.

### Telefone
A classe telefone não deve possuir atributos privados.<br>
class Telefone(){<br>
    constructor(ddd, numero){<br>
        this.ddd = ddd<br>
        this.numero = numero<br>
    }}<br>
Esta classe servirá para criar objetos que serão usados em clientes e na empresa.

### Endereço
A classe endereço não deve possuir atributos privados.<br>
class Endereco{<br>
    constructor(estado, cidade, rua, numero){<br>
        this.estado = estado<br>
        this.cidade = cidade<br>
        this.rua = rua<br>
        this.numero = numero<br>
    }}<br>
Esta classe servirá para criar objetos que serão usados em clientes e na empresa.

### Empresa
O cnpj de uma empresa é algo que não deve mudar após a criação do objeto. Por isso, este atributo deve ser privado na classe empresa.<br>

class Empresa{<br>
    #cnpj<br>
    constructor(razaoSocial, nomeFantasia, cnpj, endereco){<br>
        this.endereco<br>
        this.nomeFantasia = nomeFantasia<br>
        this.razaoSocial = razaoSocial<br>
        this.#cnpj = cnpj<br>
        this.clientes = new Set()<br>
        this.telefones = new Set()<br>
    }}<br>

### Objetivos, parte 1
No script desenvolvido deverão existir métodos construtores para cada tipo de objeto. Para cada atributo privado, deverão existir métodos de acesso get e métodos que permitam recuperar o valor do atributo em caixa alta e caixa baixa. <br>

### Objetivos, parte 2
O script deve ser testado! Para isso crie uma empresa e atribua a ela um endereço e pelo menos dois telefones.Além disso, crie cinco clientes, cada um com seu endereço e dois telefones. Estes clientes devem ser colocados dentro do conjunto de clientes da empresa. <br>


### Objetivos, parte 3
Por fim, seu script deve ser capaz de gerar uma descrição da empresa e de seus clientes.