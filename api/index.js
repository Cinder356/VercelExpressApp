import Express from "express"
import path from "path"
import { fileURLToPath } from "url";

const __filename = fileURLToPath(import.meta.url);
const __dirname = path.dirname(__filename);

const viewsPathway = path.join(__dirname, '../views');
const staticPathway = path.join(__dirname, '../public');

const app = Express();
app.use(Express.static("public"));
app.set("view engine", "pug");
app.set("views", viewsPathway);
app.use('/assets', Express.static(staticPathway)) // например http://localhost:3000/assets/css/index.css . то есть мы типо к assets обращаемся

app.get('/', (req, res) => {
    const currentTime = new Date();
    const timeString = `${currentTime.getHours()}:${currentTime.getMinutes()}:${currentTime.getSeconds()}`;
    const data = { title: "recieving time", time: timeString };
    res.render("index.pug", data);
});

app.listen(3000, () => console.log("Server ready on port 3000."));

export default app;