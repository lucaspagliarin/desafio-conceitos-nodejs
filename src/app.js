const express = require("express");
const cors = require("cors");

const { uuid } = require("uuidv4");

const app = express();

app.use(express.json());
app.use(cors());

const repositories = [];

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

app.put("/repositories/:id", (request, response) => {
  const { id } = request.params;
  const { title, url, techs } = request.body;
  
  const repoIndex = repositories.findIndex(repo => repo.id === id);
  
  
  if (repoIndex < 0){
    return response.status(400).json({ error: "Repository not found."});
  }

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

app.delete("/repositories/:id", (req, res) => {
  
});

app.post("/repositories/:id/like", (request, response) => {
  // TODO
});

module.exports = app;
