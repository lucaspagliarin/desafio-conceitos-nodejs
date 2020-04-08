const express = require("express");
const cors = require("cors");

const { uuid, isUuid } = require("uuidv4");

const app = express();

app.use(express.json());
app.use(cors());

const repositories = [];

function isIdValid(req, res, next) {
  const { id } = req.params;

  if (!isUuid(id)){
    return res.status(400).json({error: 'Invalid ID'})
  }

  const repoIndex = repositories.findIndex(repo => repo.id === id);
  
  if (repoIndex < 0){
    return res.status(400).json({ error: "Repository not found."});
  }

  req.params.repoIndex = repoIndex;

  return next();

}

app.get("/repositories", (request, response) => {
  return response.json(repositories);
});

app.post("/repositories", (request, response) => {
  const { title, url, techs } = request.body;

  const repo = {
    id: uuid(),
    title,
    url,
    techs,
    likes: 0
  }

  repositories.push(repo);

  return response.json(repo);
});

app.put("/repositories/:id", isIdValid, (request, response) => {
  const { id, repoIndex } = request.params;
  const { title, url, techs } = request.body;

  const { likes } = repositories[repoIndex];

  const repo = {
    id,
    title,
    url,
    techs,
    likes
  }

  repositories[repoIndex] = repo;

  return response.json(repo);
});

app.delete("/repositories/:id", isIdValid, (req, res) => {
  const { repoIndex } = req.params;

  repositories.splice(repoIndex, 1);

  return res.status(204).send();
});

app.post("/repositories/:id/like", isIdValid, (request, response) => {
  const { id, repoIndex } = request.params;

  const { likes, title, url, techs } = repositories[repoIndex];

  const repo = {
    id,
    title,
    url,
    techs,
    likes: likes + 1,
  }

  repositories[repoIndex] = repo;

  return response.json(repo)
});

module.exports = app;
