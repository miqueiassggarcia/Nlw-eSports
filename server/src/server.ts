import express from "express";

const app = express();

app.get("/ads", (request, response) => {
  return response.json([
    { id: 1, name: "Anúncio 10" },
    { id: 4, name: "Anúncio 12" },
    { id: 7, name: "Anúncio 14" },
    { id: 23, name: "Anúncio 13" },
  ])
})

app.listen(3333);