import React from "react";

export default function Projects() {
  return (
    <div id="projects" className="Projects">
      <h2>My Projects 💻 🚀</h2>
      <p>
        These project has been a labor of love, born out of my journey as a
        passionate learner at Per Scholas. My goal is to combine my evolving
        skills in both the design industry and software engineering to deliver
        an exceptional fitness experience as a front-end web engineer.
      </p>

      <ul className="ULtag">
        <li>
          <h3> ➳ Workout Generator (MERN) 🏋🏻‍♀️ 🏃🏻‍♀️</h3>
          <h4>App Description :</h4>
          <p>
            This is a tool for generating workout , your personalized fitness
            companion! This tool empowers you to craft customized workout
            routines tailored to your fitness goals. Simply select your target
            muscle group, and our capability to produce two exercises tailored
            to each proficiency level upon your selection of a specific muscle
            group. Get ready to transform your fitness journey with Workout
            Generator.
          </p>
          <ul className="ULtag">
            <li>
              ➠ Github repo link :{" "}
              <a
                href="https://github.com/SivaSwathiVasagar/WorkoutGenrator_MERN"
                target="_blank"
                rel="noopener noreferrer"
              >
                Workout Generator
              </a>
            </li>
            <li>
              ➠ The hosted webpage for this project is available on Render :{" "}
              <a
                href="https://frontend-mh29.onrender.com/"
                target="_blank"
                rel="noopener noreferrer"
              >
                Workout Generator UI on Render
              </a>
            </li>
            <li>
              (backend server might be in sleep mode but frontend UI will be
              live)
            </li>
          </ul>
        </li>
        <li>
          <h3> ➳ Jeopardy Quiz 🏆 🥇 🥈</h3>
          <h4>App Description :</h4>
          <p>
            Jeopardy is an engaging quiz game that challenges your knowledge
            across various categories. In this game, I've selected categories
            such as Space, General Knowledge, and Geography.
          </p>
          <ul className="ULtag">
            <li>
              ➠ Github repo link :{" "}
              <a
                href="https://github.com/SivaSwathiVasagar/Jeopardy_Game"
                target="_blank"
                rel="noopener noreferrer"
              >
                Jeopardy Quiz
              </a>
            </li>
            <li>
              ➠ The hosted webpage for this project is available on GitHub Pages
              :{" "}
              <a
                href="https://sivaswathivasagar.github.io/Jeopardy_Game/"
                target="_blank"
                rel="noopener noreferrer"
              >
                Jeopardy Quiz on GitHub Pages
              </a>
            </li>
          </ul>
        </li>
      </ul>
    </div>
  );
}
