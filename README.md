Seja bem-vindo ao JavaScript Masterclass. Neste documento, você encontrará informações importantes sobre o treinamento como o *Plano de Aula*, *Exercícios* e *Configuração do Ambiente*.

# Plano de Aula

### Aula 1

#### 08:30
* Introdução 0:15
* Tipos de dados 0:15
* Tipos de variáveis 0:15
* Number, String, Boolean, Symbol, undefined, null 0:30
* RegExp 0:30
* Exercício 1 0:15

#### 10:30
* Coffee Break 0:15

#### 10:45
* Correção do Exercício 1 0:15
* Object 1:15

#### 12:15
* Almoço 01:30

### Aula 2

#### 14:00
* Exercício 2 0:15
* Correção do Exercício 2 0:15
* Function - Parte 1 1:00
* Arrow Function 0:15
* Destructuring 0:30

#### 16:00
* Coffee Break 0:15

#### 16:15
* Exercício 3 0:30
* Correção do Exercício 3 0:15
* Function - Parte 2 1:00
* Errors 0:15

### Aula 3

#### 08:30

* Execution Context e Closure 0:45
* Exercício 4 0:45

#### 10:45
* Coffee Break 0:15

#### 11:00
* Correção do Exercício 4 0:15
* Classes 0:30
* Proxy e Reflect 0:30

#### 12:15
* Almoço 01:30

### Aula 4

#### 13:45
* Exercício 5 0:30
* Correção do Exercício 5 0:15
* Array Map Set WeakMap WeakSet 1:00
* Exercício 6 0:45
* Correção do Exercício 6 0:15

#### 15:30
* Coffee Break 0:15

#### 15:45
* Modules 0:15
* Exercício 7 0:15
* Correção do Exercício 7 0:15
* Promises 0:15
* Exercício 8 0:15
* Correção do Exercício 8 0:05
* Generators 0:15
* Async/Await 0:15

# Exercícios

Ao longo do treinamento, vamos construir, passo a passo, um **gerenciador de banco de dados**, ou SGBD, com **suporte para a linguagem SQL**. [Clique aqui para ver as instruções](exercises).

Os comandos suportados são:

#### CREATE TABLE

```sql
create table author (id number, name string, age number, city string, state string, country string)
```

#### INSERT

```sql
insert into author (id, name, age) values (1, Douglas Crockford, 62)
```

#### SELECT

```sql
select name, age, city from author where age > 50 and age < 60
```

#### UPDATE

```sql
update author set age = 45 where id = 2
```

#### DELETE

```sql
delete from author where age < 50
```

# Slides

[Clique aqui para fazer o download os slides](http://www.agilecode.com.br/javascriptmasterclass/slides.zip)

# Configuração do Ambiente

No ambiente, vamos precisar do Node.js instalado, versão 6.10.0+ e também do Git.

Recomendo a utilização do babel para auxiliar na compilação do código, indicando qualquer erro de sintaxe que possa surgir e também para converter o código escrito em ECMA6 para ECMA5.1, em casos de funcionalidades que ainda não são suportadas pelo Node.js, como Modules. 

#### Instalação dos módulos

```sh
npm install
```

#### Instalação do Babel

```sh
npm install -g babel
```

#### Execução do Babel


```sh
npm run-script babel
```