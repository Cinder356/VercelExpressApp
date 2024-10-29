import Express from "express"
import path from "path"

const app = Express();
app.use(Express.static("public"));
app.set("view engine", "pug");
app.set("views", "views");

app.get('/', (req, res) => {
    const currentTime = new Date();
    const timeString = `${currentTime.getHours()}:${currentTime.getMinutes()}:${currentTime.getSeconds()}`;
    const data = { title: "recieving time", time: timeString };
    res.render("index.pug", data);
});

app.listen(3000, () => console.log("Server ready on port 3000."));

export default app;