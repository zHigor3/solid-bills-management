## Sobre o projeto
Esta API foi desenvolvida com o objetivo de estudar e aplicar os **princípios do SOLID**, utilizando uma estrutura bem definida e modular. O projeto apresenta um nível de **complexidade intermediário**, com **duas entidades relacionadas**.

A finalidade desta API é permitir que os usuários **armazenem e gerenciem suas contas do dia a dia**, proporcionando uma **visualização clara de seus gastos** e facilitando o controle financeiro.

## O que é **SOLID**
SOLID é um conjunto de cinco princípios de design de software orientado a objetos, criado por Robert C. Martin (Uncle Bob). Esses princípios ajudam a tornar o código mais organizado, modular e fácil de manter, reduzindo o acoplamento e aumentando a coesão do sistema.

### Os 5 Pricípios do **SOLID**
1. Single Responsibility Principle (Princípio da Responsabilidade Única)
   - Uma classe deve ter apenas um motivo para mudar, ou seja, deve ter uma única responsabilidade.

   - Exemplo: Em uma API, um repositório deve apenas manipular dados, e não conter regras de negócio.

2. Open/Closed Principle (Princípio Aberto/Fechado)
   - O código deve ser aberto para extensão, mas fechado para modificação.

   - Isso significa que não devemos modificar classes existentes para adicionar novas funcionalidades, mas sim estendê-las através de herança ou implementação de interfaces.

3. Liskov Substitution Principle (Princípio da Substituição de Liskov)
   - Uma classe filha deve poder substituir a classe pai sem afetar o funcionamento do código.

   - Isso evita que subclasses modifiquem o comportamento esperado das superclasses.

4. Interface Segregation Principle (Princípio da Segregação de Interfaces)
   - Uma interface não deve forçar uma classe a implementar métodos que ela não usa.

   - Exemplo: Em vez de uma única interface com muitos métodos, é melhor ter interfaces menores e específicas para diferentes propósitos.

5. Dependency Inversion Principle (Princípio da Inversão de Dependência)
   - Módulos de alto nível não devem depender de módulos de baixo nível. Ambos devem depender de abstrações (interfaces).

   - Isso permite que dependências sejam injetadas e substituídas facilmente, facilitando testes e manutenção.

## Como funciona a estrutura de **SOLID** para este projeto

### 1. **Modelos ou Models**
Os modelos são responsáveis por representar as entidades do domínio da aplicação. Eles devem conter apenas os atributos que caracterizam a entidade, sem incluir regras de negócio ou métodos de manipulação de dados. A estruturação da API geralmente começa pela definição dessas entidades, pois elas servem como base para as demais camadas da aplicação.

### 2. **Repositórios ou Repositories**
Os repositórios criam uma camada intermediária entre o banco de dados e a lógica de negócio da aplicação. Eles são responsáveis por realizar as operações de **CRUD** (Create, Read, Update, Delete), isolando a lógica de persistência dos dados.

É altamente recomendado o uso de um **ORM** como **Prisma**, pois ele facilita a manipulação do banco e torna futuras migrações de tecnologia mais simples.

Além disso, os repositórios utilizam interfaces, que definem os contratos que cada repositório deve seguir. Isso garante um alto nível de desacoplamento, permitindo que a implementação do repositório possa ser trocada sem impactar o restante do código.

### 3. **Serviços ou Services**
Os serviços são responsáveis por implementar as regras de negócio da aplicação. Aqui são criados os métodos que manipulam e validam os dados antes que eles sejam armazenados ou retornados ao usuário.

Os services garantem que a lógica de negócio não fique espalhada pelos controladores ou repositórios, mantendo o código organizado e mais fácil de manter.

### 4. **Controladores ou Controllers**
Os controladores são responsáveis por receber as requisições **HTTP** da aplicação. Eles atuam como uma camada intermediária entre as rotas e os serviços, garantindo que a requisição seja processada corretamente.

Dentro dos controladores não devem existir regras de negócio, pois essa responsabilidade pertence aos services. O controller apenas repassa os dados recebidos para o serviço adequado e retorna uma resposta para o cliente.

### 5. **Rotas ou Routes**
As rotas definem os endpoints da **API** e determinam quais métodos **HTTP** (GET, POST, PUT, DELETE) estarão disponíveis.

Normalmente, utilizamos um framework como **Express** para gerenciar essas rotas. Cada rota está associada a um controller, que recebe a requisição e a direciona para o serviço apropriado. Dessa forma, a **API** mantém uma organização clara e modular.

### 6. **Infra**
A pasta infra contém configurações e serviços de infraestrutura da aplicação, incluindo a conexão com o banco de dados.

Quando utilizamos um **ORM** como **Prisma**, essa camada pode centralizar a instância do banco de dados, garantindo que a aplicação tenha um ponto único de conexão e facilitando a migração entre bancos, caso necessário.

## Próximos passos
- [ ] Implementar testes
- [ ] Verificação de login
- [ ] Tokenização
- [ ] Outras regras de negocio como troca de password
- [ ] Alterar banco de dados para PostgreSQL
