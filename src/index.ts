import express from 'express';
import  routes  from './routes';
import { MongoConnection } from './database/MongoConnection';

const app = express()
app.use(express.json())
app.use(routes)

const database = new MongoConnection()
database.connect()

app.listen(5000, () => {
    console.log('Server running!')
});


