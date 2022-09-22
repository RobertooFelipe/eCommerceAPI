import express from "express";
import { route } from "./routes/item.routes";

const app = express();
const porta = process.env.PORT || 3000;

app.use(express.json())
app.use(route)

app.listen(porta, () => {
    console.log(`App is running in port ${porta}`)
})