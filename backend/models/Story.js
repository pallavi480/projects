import mongoose from "mongoose";

const choiceSchema = new mongoose.Schema({
    text:String,
    nextStoryid: {type: mongoose.Schema.Types.ObjectId,ref: "Story"}
})

const storySchema = new mongoose.Schema({
    mood: String,
    genre:String,
    text:String,
    choices: [choiceSchema]
})

export default mongoose.model(`Story`, storySchema)