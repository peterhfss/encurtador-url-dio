/**
 *  Alterar o username, password e databasename conforme a configuração do seu banco de dados no Mongo DB
 */

export const config = {
    API_URL: 'http://localhost:5000',
    MONGO_CONNECTION: 'mongodb+srv://<username>:<password>@dio-url-shortener.zik8c.mongodb.net/<databasename>?retryWrites=true&w=majority',
}