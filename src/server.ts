import express from "express";
import { route } from "./routes/item.routes";

const app = express();
const port = process.env.PORT || 3000;

app.use(express.json())
app.use(route)

app.listen(port, () => {
    console.log(`App is running in port ${port}`)
})