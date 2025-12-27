import express from "express";
import Story from "../models/Story.js";
import { error } from "node:console";

const router = express.Router();

router.get(`/start`,async (req,res)=>{
    const {mood, genre} = req.query;
    try{
        const story = await Story.findOne({mood,genre});
        if(!story) return res.status(404).json({message:"Story not found"})
            res.json(story)
    }catch (err){
        res.status(500).json({error:err.message})
    }
})

router.get(`/next/:id`,async (req,res)=>{
    try{
        const story = await Story.findById(req.params.id)
        if(!story) return res.status(404).json({message:"Story not found"})
            res.json(story)

    } catch (err){
        res.status(500).json({error: err.message})
    }
})

export default router