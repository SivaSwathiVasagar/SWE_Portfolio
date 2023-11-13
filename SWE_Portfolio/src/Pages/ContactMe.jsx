import React from "react";

export default function ContactMe() {
  return (
    <div id="contactme" className="Contactme">
      <h2>Where to reach me:</h2>
      <p>Feel free to connect with me through the following channels:</p>
      <ul className="ULtag">
        <li>➠ Email : sivaswathi.vasagar@gmail.com</li>
        <li>
          ➠ Linkedin :
          <a
            href="https://www.linkedin.com/in/siva-swathi-v-468429196/"
            target="_blank"
            rel="noopener noreferrer"
          >
            My Linkedin URL
          </a>
        </li>
        <li>
          ➠ GitHub :
          <a
            href="https://github.com/SivaSwathiVasagar/"
            target="_blank"
            rel="noopener noreferrer"
          >
            My Github URL
          </a>
        </li>
        <li>
          ➠ Behance :
          <a
            href="https://www.behance.net/sivaswathi2007"
            target="_blank"
            rel="noopener noreferrer"
          >
            My Behance URL
          </a>
        </li>
      </ul>
      <p>
        I'm open to discussions, feedback, and collaboration opportunities.
        Let's connect and explore the exciting possibilities that lie ahead in
        the world of fitness and technology.
      </p>
    </div>
  );
}
