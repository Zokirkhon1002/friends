import React from "react";
import "./App.css";
import ContactCard from "./ContactCard";

function App() {
  let list = [
    {
      avatarUrl: "./photos/rasm6.jpg",
      name: "Muhriddin",
      lastName: "Haydarov",
      email: "muhriddinhaydarov@gmail.com",
      age: 25,
    },
    {
      avatarUrl: "./photos/rasm2.jpg",
      name: "Abdulhamid",
      lastName: "Qodirov",
      email: "abulhamidqodirov@gmail.com",
      age: 22,
    },
    {
      avatarUrl: "./photos/rasm3.jpg",
      name: "A'zamjon",
      lastName: "Mamadjanov",
      email: "azamjonmamadjanov@gmail.com",
      age: 22,
    },
    {
      avatarUrl: "./photos/rasm4.jpg",
      name: "Boburmirzo",
      lastName: "Rosulov",
      email: "boburmirzorosulov@gmail.com",
      age: 24,
    },
    {
      avatarUrl: "./photos/rasm5.jpg",
      name: "Khurshidbek",
      lastName: "Alisherov",
      email: "khurshidbekalisherov@gmail.com",
      age: 21,
    },
    {
      avatarUrl: "./photos/rasm1.jpg",
      name: "Zokirkhon",
      lastName: "Kotibkhonov",
      email: "zokirxonkotibxanov@gmail.com",
      age: 23,
    },
  ];

  return (
    <div>
      {list.map(({ avatarUrl, name, lastName, email, age },idx) => (
        <ContactCard
          key={idx}
          avatarUrl={avatarUrl}
          name={name}
          lastName={lastName}
          email={email}
          age={age}
        />
      ))}
    </div>
  );
}

export default App;
