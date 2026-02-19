import express from "express";

const app = express();
const port = 3000;

// configura EJS
app.set("view engine", "ejs");

// pasta public (css, imagens, js)
app.use(express.static("public"));

function getAdviceByDay(dayIndex) {
  const days = [
    "Sunday",
    "Monday",
    "Tuesday",
    "Wednesday",
    "Thursday",
    "Friday",
    "Saturday"
  ];

  const adviceMap = {
    0: "Reset day: plan lightly and recharge.",
    1: "Start small: do one 15-minute task.",
    2: "Deep work: 45 minutes focused.",
    3: "Midweek check: remove one useless task.",
    4: "Push day: finish something important.",
    5: "Wrap-up: review wins and plan tomorrow.",
    6: "Recharge: rest without guilt."
  };

  return {
    dayName: days[dayIndex],
    advice: adviceMap[dayIndex]
  };
}

app.get("/", (req, res) => {
  const dayIndex = new Date().getDay();
  const { dayName, advice } = getAdviceByDay(dayIndex);

  res.render("index", {
    dayName,
    advice
  });
});

app.listen(port, () => {
  console.log(`Server running at http://localhost:${port}`);
});