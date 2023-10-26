import http from 'http'
import app from './app.js';
import dotenv from "dotenv"

dotenv.config()

const PORT = process.env.PORT || 8001

const server = http.createServer(app);


async function startServer() {
    server.listen(PORT, () => {
        console.log(`Listening on port ${PORT}...`);
    });
}

startServer();
// app.listen(PORT, ()=>{
//         console.log(`Listening on port ${PORT}...`);

// })
