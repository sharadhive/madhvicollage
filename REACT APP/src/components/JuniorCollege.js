import React from "react";
import "./BSC.css"; // Reusing BSC styles

const JuniorCollege = () => {
  return (
    <div className="bsc-page">
      <h1 className="page-title">Junior College (XI & XII - Arts, Commerce (IT), Science (IT))</h1>

      <p className="intro-text">
        <strong>College Time:</strong> 07.10 am to 11.35 am
      </p>

      <p className="intro-text">
        A college education educates discipline, teamwork, and understanding the importance of communication through comprehensive learning, to the students. Attending college leads the way for a better prospectus. Students, when they set foot in college, are confused about what they wish to become in life, but by the time they step out, they will have a clear vision.
      </p>

      <h2 className="section-title">Examination Pattern and Evaluation</h2>
      <p className="intro-text">
        To check regularly whether the personality of the child is developing along expected lines while it is being shaped is called <strong>Formative Evaluation</strong>.
        <br />
        And checking against various criteria whether at the end of a stage of teaching, the expected learning has taken place is <strong>Summative Evaluation</strong>.
      </p>

      <h3 className="section-title">Techniques & Tools of Formative Evaluation:</h3>
      <ul className="intro-text">
        <li>Daily Observation</li>
        <li>Oral work (questions and answers, reading aloud, speech and conversation, role-playing, interview, group discussions, etc.)</li>
        <li>Practicals / Experiments</li>
        <li>Programmes / Activities (individual / in groups, by self-learning)</li>
        <li>Projects</li>
        <li>Surprise tests, short informal tests, open book tests</li>
        <li>Exercise / Classwork (writing informative passages, descriptions, essays, reports, stories, letters, dialogues, fantasies, etc.)</li>
        <li>Other tools (like questionnaire, peer evaluation and group work)</li>
      </ul>
    </div>
  );
};

export default JuniorCollege;
