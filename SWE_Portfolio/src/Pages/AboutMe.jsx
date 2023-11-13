import React from "react";

export default function AboutMe() {
  return (
    <div id="aboutme" className="AboutMe">
      <h2>About Me 🌸</h2>
      <p>
        <ul className="ULtag">
          <li>
            ➨ Results-driven and dedicated IT professional with 4 years of
            experience as a Jr. Developer in the Insurance industry.
          </li>
          <li>
            ➨ Demonstrated passion for technology and a proactive approach to
            responsibilities.
          </li>
          <li>
            ➨ Known for adaptability and the ability to thrive in dynamic
            environments.
          </li>
          <li>
            ➨ Proficient in legacy service migration, version upgrades, and
            providing reliable production support.
          </li>
          <li>
            ➨ Possesses a solid background in HTML, CSS, JavaScript, React,
            Node.js and Express backed by practical hands-on expertise from Per
            Scholas training.
          </li>
          <li>➨ A team player who excels at collaborative efforts.</li>
        </ul>
      </p>
      <div id="education" className="Education">
        <h2>Education 👩🏻‍🎓</h2>
        <ul className="ULtag">
          <li>
            <article>
              <h4>➨ Per Scholas, Detroit Campus, MI</h4>
              <p>Software Engineering</p>
              <p>October 2023</p>
            </article>
          </li>
          <li>
            <article>
              <h4>➨ Anna University, Chennai, India</h4>
              <p>
                Bachelor of Engineering in Electronics and Communication
                Engineering (GPA: 7.86/10)
              </p>
              <p>April 2017</p>
            </article>
          </li>
        </ul>
      </div>
      <div id="workexp" className="WorkExp">
        <h2>Work Experience 👩🏻‍💼</h2>
        <div className="WorkExpContent">
          <h4>Cognizant Technology Solutions, Chennai, India </h4>
          <h4>Software Developer</h4>
          <h4>November 2017 – May 2021</h4>
        </div>
        <article>
          <ul className="ULtag">
            <li>
              <h4>➨ Problem Solving and Enhancement:</h4>
              <p>
                Improved functionality, debugged, and resolved production
                issues, contributing to enhanced system performance and user
                experience
              </p>
            </li>
            <li>
              <h4>➨ Business Insights and Analysis:</h4>
              <p>
                Initiated as a Rule Analyst, gaining valuable business insights,
                and analyzing processes to inform effective technical solutions
              </p>
            </li>
            <li>
              <h4>➨ Development Transition:</h4>
              <p>
                Seamlessly transitioned to the role of a Junior Developer,
                spearheading critical projects
              </p>
            </li>
            <li>
              <h4>➨ Complex Problem Solving:</h4>
              <p>
                Skillfully troubleshot intricate issues, delivering effective
                resolutions as part of Level 3 support responsibilities
              </p>
            </li>
            <li>
              <h4>➨ Production Support: </h4>
              <p>
                Played a pivotal role in the successful production release of
                code
              </p>
            </li>
            <li>
              <h4>
                ➨ Upgraded Spring Boot projects, enhancing application
                efficiency and modernizing codebase
              </h4>
            </li>
            <li>
              <h4>
                ➨ Successfully migrated from Ivy to Gradle, optimizing project
                build processes and dependencies
              </h4>
            </li>
            <li>
              <h4>
                ➨ Conducted JUnit migration, ensuring streamlined testing and
                robust code quality
              </h4>
            </li>
            <li>
              <h4>
                ➨ Facilitated migration from SVN to GitHub, promoting
                collaborative code management and version control
              </h4>
            </li>
          </ul>
        </article>
      </div>
    </div>
  );
}
