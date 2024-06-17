import express from 'express';
import { engine } from "express-handlebars";
import { router as ViewsRouter } from "./router/viewsRoutes.js"

const port = 3000;
const app = express();


app.use(express.json());
app.use(express.urlencoded({extended: true}));
app.use(express.static("./src/public"));

app.engine(`handlebars`, engine());
app.set(`view engine`, `handlebars`);
app.set(`views`, (`./src/views`));

app.use("/", ViewsRouter);

const server = app.listen(port, ()=>{
console.log(`Server escuchando en puerto port ${port}`);
}) 