import express from 'express';
import cors from 'cors';
import dotenv from 'dotenv';
import path from 'path';
import { createSchema } from './weaviate/schema';
import qaRoutes from "./routes/qaRoutes";

import uploadRouter from './routes/upload';
import searchRouter from './routes/search';

dotenv.config();
const app = express();
app.use(cors(({origin: "*"})))
app.use(express.json())
createSchema().catch(err => {
    console.error("Error creating Weaviate schema:", err);
});
// GOOD: Serve uploads under a different path
app.use('/files', express.static(path.join(__dirname, 'uploads')));

app.use('/upload', uploadRouter);
app.use('/search', searchRouter);
app.use("/api", qaRoutes);
const PORT = process.env.PORT || 5050;
app.listen(PORT, ()=>{
    console.log(`Server running on http://localhost:${PORT}`);
})

