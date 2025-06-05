import mongoose from "mongoose";

const URI =
  "mongodb+srv://erick:1234@practica.ugpwuhu.mongodb.net/miapp?retryWrites=true&w=majority&appName=practica";

export async function conectarDB() {
  try {
    await mongoose.connect(URI);
    console.log("Conectado a MongoDB Atlas");
  } catch (error) {
    console.error("Error de conexión:", error);
  }
}
