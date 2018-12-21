import React from "react";
import ReactDOM from "react-dom";
import ContactCard from "./ContactCard";
import nameData from "./names.json";
import "./styles.css";

let names = nameData;
console.log();
function App() {
  return (
    <div className="App">
      <ContactCard
        contact={{
          name: "Brandon",
          phone: "(347)330-4700",
          email: names.people.Brandon.email
        }}
      />
      <ContactCard
        contact={{
          name: "Amanda",
          phone: "(315)921-8208",
          email: names.people.Amanda.email
        }}
      />
      <ContactCard
        contact={{
          name: "Socks",
          phone: "(123)123-1234",
          email: names.people.Socks.email
        }}
      />
      <ContactCard
        contact={{
          name: "Penny",
          phone: "(123)123-1231",
          email: names.people.Penny.email
        }}
      />
    </div>
  );
}

const rootElement = document.getElementById("root");
ReactDOM.render(<App />, rootElement);
