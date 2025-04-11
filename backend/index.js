const { MongoClient } = require("mongodb");

const uri = 'mongodb://sofruiz:Fresa21.@ac-pj9xb47-shard-00-00.etknnsm.mongodb.net:27017,ac-pj9xb47-shard-00-01.etknnsm.mongodb.net:27017,ac-pj9xb47-shard-00-02.etknnsm.mongodb.net:27017/?replicaSet=atlas-lrzpyt-shard-0&ssl=true&authSource=admin&retryWrites=true&w=majority&appName=Cluster0';
const dbName = "portafolio";

console.log("🟢 El archivo index.js se está ejecutando");

MongoClient.connect(uri, { useUnifiedTopology: true }, (err, client) => {
    if (err) {
        console.error("❌ Error al conectar a MongoDB:", err);
        return;
    }

    console.log("✅ Conexión a MongoDB exitosa");

    const db = client.db(); // ya está en la URL, no necesitas pasar nombre

    db.collection("projects").find({}).toArray((err, result) => {
        if (err) {
            console.error("❌ Error al consultar la colección:", err);
            return;
        }

        console.log("📦 Datos encontrados:");
        console.log(JSON.stringify(result, null, 2)); // bonito y legible

        client.close();
    });
});