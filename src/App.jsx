import { PersonInfo } from "./components/PersonInfo"

const people=[
  { 
    name:"Tomek",
    tel: 445890221,
    city: "Warszawa"
  },
  {
    name:"Karol",
    tel: 445833221,
    city: "Częstochowa"
  },
  {
    name:"Bartek",
    tel: 223216677,
    
  }

];

function App() {
  
  return (
    <>
      <h1>Lista kontaktów</h1>
      {people.map((person) => (
        <PersonInfo
          key= {person.tel} 
          name={person.name} 
          tel={person.tel} 
          city={person.city}/>
      ))}
    </>
  )
};

export default App;
