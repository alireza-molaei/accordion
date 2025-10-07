import { useState } from "react";
import "./App.css";

const faqs = [
  {
    title: "Where are these chairs assembled?",
    text: "Lorem ipsum dolor sit amet consectetur, adipisicing elit. Accusantium, quaerat temporibus quas dolore provident nisi ut aliquid ratione beatae sequi aspernatur veniam repellendus.",
  },
  {
    title: "How long do I have to return my chair?",
    text: "Pariatur recusandae dignissimos fuga voluptas unde optio nesciunt commodi beatae, explicabo natus.",
  },
  {
    title: "Do you ship to countries outside the EU?",
    text: "Excepturi velit laborum, perspiciatis nemo perferendis reiciendis aliquam possimus dolor sed! Dolore laborum ducimus veritatis facere molestias!",
  },
];

export default function App() {
  return (
    <div>
      <Accordion />
    </div>
  );
}

function Accordion() {
  const [curOpen, setCurOpen] = useState();

  const handleOpen = function (num) {
    setCurOpen(curOpen === num ? null : num);
  };
  return (
    <div className="accordion">
      {faqs.map((faq, i) => (
        <AccordionItem
          key={i}
          title={faq.title}
          text={faq.text}
          num={i}
          curOpen={curOpen}
          handleOpen={handleOpen}
        />
      ))}
    </div>
  );
}
function AccordionItem({ title, text, num, curOpen, handleOpen }) {
  return (
    <div
      className={`item ${curOpen === num && "open"}`}
      onClick={() => handleOpen(num)}
    >
      <p className="number">{num + 1}</p>
      <p className="title">{title}</p>
      <p className="icon">{curOpen === num ? "-" : "+"}</p>
      <p className="content-box">{curOpen === num && text}</p>
    </div>
  );
}
