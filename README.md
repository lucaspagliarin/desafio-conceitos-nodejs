# Desafio: Conceitos do Node.js

A proposta deste desafio, criado pela Rockeseat, era a aplicação dos conhecimentos apresentados até o momento.

Nesta API possuímos 5 diferentes rotas:
- List\
  Listagem dos repositórios criados
- Create\
  Criação de repositórios, com título, url do github e tecnologias utilizadas. Nesta criação, o ID é gerado automaticamente pela biblioteca uuidv4 e o número de likes é inicializado com o valor 0.
- Update\
  Atualização de informações de um repositório. Só é possivel atualizar as informações de título, url do github e tecnologias utilizadas.
- Delete\
  Exclusão de um repositório.
- Like\
  Através dessa rota, o repositório recebe +1 na contagem de likes.

