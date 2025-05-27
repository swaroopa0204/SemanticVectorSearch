import express from "express";
import { searchRelevantChunks } from "../services/searchService";

const router = express.Router();

router.post("/",async (req, res) => {
    console.log("query is ", req.body);
    try {
        const query = req.body;
        const results = await searchRelevantChunks(query);
        console.log("results", results);
        res.json(results);
    } catch(error) {
        console.error("Search Error", error);
        res.status(500).json({error: "Search Failed"});
    } 
});

export default router;