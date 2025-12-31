import mongoose from "mongoose";
import Story from "./models/Story.js";

// MongoDB connect
mongoose
  .connect(
    "mongodb+srv://riya:LPJiRsG2ynFiZVdw@cluster0.xxuusor.mongodb.net/storyscape"
  )
  .then(async () => {
    console.log("MongoDB connected for seeding");

    // Clear old data (optional but recommended)
    await Story.deleteMany();

    // Insert stories
    await Story.insertMany([
      {
        mood: "happy",
        genre: "fantasy",
        text: "You enter a magical forest filled with sparkling lights and singing birds.",
        choices: [
          { text: "Follow the rainbow path", nextStoryId: null },
          { text: "Explore the hidden cave", nextStoryId: null }
        ]
      },
      {
        mood: "sad",
        genre: "mystery",
        text: "You walk alone in a rainy town, shadows moving in every corner.",
        choices: [
          { text: "Investigate the dark alley", nextStoryId: null },
          { text: "Go back home", nextStoryId: null }
        ]
      }
    ]);

    console.log("Stories seeded successfully");
    process.exit();
  })
  .catch((err) => {
    console.error(err);
    process.exit(1);
  });
