/* eslint-disable */
import "bootstrap";
import "./style.css";

import "./assets/img/rigo-baby.jpg";
import "./assets/img/4geeks.ico";

window.onload = () => {
  document.querySelector("#btn").addEventListener("click", () => {
    document.querySelector("#the-excuse").innerHTML = generateExcuse();
  });
  console.log("Hello Rigo from the console!");
};

let generateExcuse = () => {
  let pronoun = ["A", "The"];
  let subject = ["jogger", "raccoon", "dog", "driver", "pinecone"];
  let action = ["took my", "stole my", "used my", "bite my"];
  let possesion = ["car", "shoe", "homework"];
  let where = ["on the street", "in my house", "in the yard"];

  return (
    pronoun[Math.floor(Math.random() * pronoun.length)] +
    " " +
    subject[Math.floor(Math.random() * subject.length)] +
    " " +
    action[Math.floor(Math.random() * action.length)] +
    " " +
    possesion[Math.floor(Math.random() * possesion.length)] +
    " " +
    where[Math.floor(Math.random() * where.length)] +
    " "
  );
};
