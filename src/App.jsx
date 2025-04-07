import './App.css'
import Box from './Box';
import Header from './Header';
import Footer from './Footer';
import { persons } from './personsData';

const App = () => {

 
  
  return (
    <>
    <div>
      <Header logo="Saara Rikama" />
    </div>
    <main>
      {persons.map((person, index) => (
          <Box 
            index={index}
            key={person.id}
            id={person.id}
            name={person.name}
            title={person.title}
            age={person.age}
          />
      ))};
    </main>
    <div>
      <Footer year={2025} />
    </div>
    </>
  )};

export default App;
