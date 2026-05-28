import express from "express";

import cors from "cors";

import reporteRoutes from "./routes/reporteRoutes";

const app = express();

app.use(cors());

app.use(express.json());

app.get("/", (req, res) => {

  res.send("GreenWatch API funcionando");

});

app.use("/api/reportes", reporteRoutes);

export default app;