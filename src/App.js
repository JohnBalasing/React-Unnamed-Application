import React from "react";
import "./App.css";

const sections = [
  { id: 1, title: "Main Section1", img: "/SXG-main.jpg" },
  { id: 2, title: "Main Section2", img: "/SXG-sec.jpg" },
  { id: 3, title: "Footer", img: "/SXG-footer1.jpg" },
];

export default function App() {
  return (
    <div>
      {sections.map((sec) => (
        <section
          key={sec.id}
          className="bg-section"
          style={{ backgroundImage: `url(${sec.img})` }}
        >
          <h1>{sec.title}</h1>
        </section>
      ))}
    </div>
  );
}
