import mongoose from "mongoose";

const URI =
  "mongodb+srv://proyectoGratuidad:JLqIzCmNMMwQBxvz@cluster0.axizg5j.mongodb.net/miapp?retryWrites=true&w=majority&appName=Cluster0";

export async function conectarDB() {
  try {
    await mongoose.connect(URI);
    console.log("Conectado a MongoDB Atlas");
  } catch (error) {
    console.error("Error de conexión:", error);
  }
}
