# Desafio: Conceitos do Node.js

A proposta deste desafio, criado pela Rockeseat, era a aplicação dos conhecimentos apresentados até o momento.

Nesta API possuímos 5 diferentes rotas:  

### List 
  Listagem dos repositórios criados  
  Rota: [GET] http://localhost:3333/repositories/
### Create  
  Criação de repositórios, com título, url do github e tecnologias utilizadas. Nesta criação, o ID é gerado automaticamente pela biblioteca uuidv4 e o número de likes é inicializado com o valor 0.  
  Rota: [POST] http://localhost:3333/repositories/
### Update 
  Atualização de informações de um repositório. Só é possivel atualizar as informações de título, url do github e tecnologias utilizadas.  
  Rota: [PUT] http://localhost:3333/repositories/:id
### Delete 
  Exclusão de um repositório.  
  Rota: [DELETE] http://localhost:3333/repositories/:id
### Like  
  Através dessa rota, o repositório recebe +1 na contagem de likes.  
  Rota: [POST] http://localhost:3333/repositories/:id/like

Por se tratar de uma aplicação básica, não possuímos qualquer conexão com banco de dados, portanto, todas as vezes que a aplicação for reiniciada, você perderá todos os dados cadastrados.