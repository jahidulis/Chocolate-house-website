import React from "react";

const QuestionAnswer = ({ que }) => {
  const { question, answer } = que;
  return (
    <div className="container m-auto">
      <h3 className="text-3xl font-serif text-purple-600 pb-3 font-bold">
        {question}
      </h3>
      <p className="text-base pb-5 font-serif">{answer}</p>
    </div>
  );
};

export default QuestionAnswer;
