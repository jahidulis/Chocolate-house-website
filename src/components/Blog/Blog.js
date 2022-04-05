import React from "react";
import QuestionAnswer from "../QuestionAnswer/QuestionAnswer";

const Blog = () => {
  const questionAnswer = [
    {
      question: "What is Context API?",
      answer: `React’s context API is all about enabling you to send data to multiple components outside of the standard unidirectional data flow. This in no way touches upon state management.
        React.create All you need is Context().  It will give you a customer and a provider. Provider is a component that supplies the state to its children, as its name suggests. It will contain the "store" and serve as the parent of all components that may require it. A component that consumes and uses the state is known as a consumer.`,
    },
    {
      question: "What is “Semantic Tag”?",
      answer: `Semantic HTML is the use of HTML markup to reinforce the semantics, or meaning of the information in webpages and web applications rather than merely to define its presentation or look. Semantic HTML is processed by traditional web browsers as well as by many other user agents. The benefit of writing semantic HTML stems from the goal of a web page—to communicate. By adding semantic tags to your document, you provide additional information about the document, which aids in communication.`,
    },
    {
      question: "What's the difference between inline and inline-block?",
      answer: `1.An inline element can't have width and height property set whereas a block and an inline-block element can have.
      2. An inline element can not have top or bottom margin that can be set for an inline-block element and block element.
      3.Both inline and inline-block elements allow keeping elements beside other but block elements are placed one on another.`,
    },
  ];
  return (
    <div>
      {questionAnswer.map((que) => (
        <QuestionAnswer que={que} key={que.question}></QuestionAnswer>
      ))}
    </div>
  );
};

export default Blog;
