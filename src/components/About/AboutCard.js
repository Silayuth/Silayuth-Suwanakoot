import React from "react";
import Card from "react-bootstrap/Card";
import { ImPointRight } from "react-icons/im";

function AboutCard() {
  return (
    <Card className="quote-card-view">
      <Card.Body>
        <blockquote className="blockquote mb-0">
          <p style={{ textAlign: "justify" }}>
            Hi Everyone, I am <span className="purple">Silayuth Suwanakoot (Rocky) </span>
            from <span className="purple"> Thailand. </span>
            {/* <br />
            I am currently employed as a software developer at Juspay.
            <br />
            I have completed Integrated MSc (IMSc) in Maths and Computing at BIT
            Mesra.
            <br />
            <br /> */}
            A recent graduate from Generation Bootcamp specializing in Junior Software Development, 
            I bring over 7 years of experience in the game industry, 
            including game development, esports, and game business models.
            I possess strong soft skills such as a growth mindset, resilience, problem-solving, persistence, 
            and the ability to handle heavy pressure. My technical skills include computer skills, technology, JavaScript, CSS, HTML, React, and framework knowledge, 
            making me a proficient full stack developer.
            I am seeking a position as a Software Developer where I can contribute to a team that values customer focus, achievement motivation, and teamwork.
            <br/>
            <br/>
            Apart from coding, some other activities that I love to do!
          </p>
          <ul>
            <li className="about-activity">
              <ImPointRight /> Playing Games
            </li>
            <li className="about-activity">
              <ImPointRight /> Movies
            </li>
            <li className="about-activity">
              <ImPointRight /> Travel
            </li>
            <li className="about-activity">
              <ImPointRight /> Animes
            </li>
            <li className="about-activity">
              <ImPointRight /> Cooking
            </li>
          </ul>

          {/* <p style={{ color: "rgb(155 126 172)" }}>
            "Strive to build things that make a difference!"{" "}
          </p> */}
          <footer className="blockquote-footer">Rocky</footer>
        </blockquote>
      </Card.Body>
    </Card>
  );
}

export default AboutCard;
