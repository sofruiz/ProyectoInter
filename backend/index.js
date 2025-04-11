const express = require('express');
const mongodb = require('mongodb');
const MongoClient = mongodb.MongoClient;

const app = express();
const port = 3700;

const connectionURL = 'mongodb://sofruiz:Fresa21.@ac-pj9xb47-shard-00-00.etknnsm.mongodb.net:27017,ac-pj9xb47-shard-00-01.etknnsm.mongodb.net:27017,ac-pj9xb47-shard-00-02.etknnsm.mongodb.net:27017/?replicaSet=atlas-lrzpyt-shard-0&ssl=true&authSource=admin&retryWrites=true&w=majority&appName=Cluster0';
const dbName = 'portafolio';

MongoClient.connect(connectionURL, (err, connectedClient) => {
  if (err) throw err;

  const db = connectedClient.db(dbName);
  const collection = db.collection("projects");

  // Ruta raíz
  app.get('/', (req, res) => {
    res.send('Servidor funcionando correctamente con conexión a MongoDB Atlas');
  });

  // Ruta para consultar proyectos
  app.get('/projects', async (req, res) => {
    try {
      const data = await collection.find({}).toArray();
      res.json(data);
    } catch (e) {
      res.status(500).send('Error al consultar proyectos');
    }
  });

  // Inicia el servidor solo si se conectó a MongoDB
  app.listen(port, () => {
    console.log(`🚀 Servidor corriendo en http://localhost:${port}`);
  });
});
