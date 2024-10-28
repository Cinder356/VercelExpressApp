import Express from "express"

const app = Express();

app.get('/', (req, res) => res.send("Hi"));

app.listen(3000, () => console.log("Server ready on port 3000."));

export default app;