import app from "./app.js";
import { conectarDB } from "./db.js";

app.listen(4000);
conectarDB();
console.log("Server is running on port 4000");
