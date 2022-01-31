import express from "express";
import bodyParser from "body-parser";
import cors from "cors";

import userRoutes from "./routes/users.js"

const app = express();
const port = 5000;

app.use(bodyParser.json());
app.use(cors());

app.use("/", userRoutes);
//validação/verificação das rotas
app.get("/", (req, res) => res.send("Olá"));
app.all("*", (req, res) => res.send("Essa rota não existe"));

app.listen(port, () =>
  console.log(`Server is listening on port: http://localhost:${port}`)
);
