import React, { useState } from "react";

const Assessment = ({ assessment, onComplete }) => {
  const [userAnswer, setUserAnswer] = useState("");
  const [feedback, setFeedback] = useState("");

  const handleSubmit = () => {
    if (userAnswer === assessment.correctAnswer) {
      setFeedback("Correct! Well done.");
      onComplete();
    } else {
      setFeedback("Incorrect. Please try again.");
    }
  };

  return (
    <div className="assessment-container">
      <h3>{assessment.question}</h3>
      {assessment.type === "multiple-choice" ? (
        <div>
          {assessment.options.map((option, index) => (
            <button
              key={index}
              onClick={() => setUserAnswer(option)}
              disabled={feedback === "Correct! Well done."}
            >
              {option}
            </button>
          ))}
        </div>
      ) : (
        <textarea
          placeholder="Type your answer here..."
          value={userAnswer}
          onChange={(e) => setUserAnswer(e.target.value)}
        ></textarea>
      )}
      <button onClick={handleSubmit}>Submit</button>
      {feedback && <p>{feedback}</p>}
    </div>
  );
};

export default Assessment;
