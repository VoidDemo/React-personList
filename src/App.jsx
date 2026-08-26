import { useState } from "react";
import { Form } from "./components/Form";
import { PersonInfo } from "./components/PersonInfo";

const people = [
  {
    name: "Tomek",
    tel: 445890221,
    city: "Warszawa",
  },
  {
    name: "Karol",
    tel: 445833221,
    city: "Częstochowa",
  },
  {
    name: "Bartek",
    tel: 223216677,
  },
];

function App() {
  const [isFormShown, setIsFormShown] = useState(false);
  const handleShowFormClick = () => setIsFormShown(true);

  return (
    <>
      <h1>Lista kontaktów</h1>
      {isFormShown ? (
        <Form />
      ) : (
        <button onClick={handleShowFormClick}> Dodaj</button>
      )}

      {people.map((person) => (
        <PersonInfo
          key={person.tel}
          name={person.name}
          tel={person.tel}
          city={person.city}
        />
      ))}
    </>
  );
}

export default App;
