console.log("Frontend JS loaded ✅");

const btn = document.getElementById("generateBtn");

btn.addEventListener("click", async () => {
  console.log("Button clicked ✅");

  const mood = document.getElementById("mood").value;
  const genre = document.getElementById("genre").value;
  const storyBox = document.getElementById("storyBox");

  if (!mood || !genre) {
    alert("Please select mood and genre");
    return;
  }

  storyBox.innerText = "Generating story... ⏳";

  try {
    const res = await fetch(
      `http://localhost:5000/api/story?mood=${mood}&genre=${genre}`
    );

    const data = await res.json();
    console.log("API Response:", data);

    if (data.length === 0) {
      storyBox.innerText = "No story found 😢";
      return;
    }

    storyBox.innerHTML = `
      <h3>📖 Your Story</h3>
      <p>${data[0].text}</p>
    `;
  } catch (err) {
    storyBox.innerText = "Backend not connected ⚠️";
  }
});
