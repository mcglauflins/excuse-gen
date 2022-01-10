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
  let subject = ["jogger", "racoon", "dog", "driver", "pinecone"];
  let action = ["took my", "stole my", "used my", "bite my"];
  let possesion = ["car", "shoe", "homework"];
  let where = ["ont the street", "in my house", "in the yard"];

  let proIndx = Math.floor(Math.random() * pronoun.length);
  let subIndx = Math.floor(Math.random() * subject.length);
  let possIndx = Math.floor(Math.random() * action.length);
  let actIndx = Math.floor(Math.random() * possesion.length);
  let wherIndx = Math.floor(Math.random() * where.length);

  return (
    pronoun[proIndx] +
    " " +
    subject[subIndx] +
    " " +
    action[actIndx] +
    " " +
    possesion[possIndx] +
    " " +
    where[wherIndx] +
    " "
  );
};
