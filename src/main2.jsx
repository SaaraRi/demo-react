import { StrictMode } from 'react'
import { createRoot } from 'react-dom/client'
import './index.css'
import App from './App.jsx'

const name = "Saara Rikama"
const first_page = 2024

const demo = (
  <div>
    <h1>Hello, my name is {name}</h1>
    <p> I have {2024.5-first_page} years of experience in web development.</p>
  </div>
  );


const Demo = () => {
  return (
  <div>
    <h1>Hello, my name is {name}</h1>
    <p> I have {2024.5-first_page} years of experience in web development.</p>
  </div>
  );
};

createRoot(document.getElementById('root')).render(
  <StrictMode>
    {demo}
   <Demo />
   <whateverdemo />
  </StrictMode>,
)




<Box name="Saara" title="Student" age="100"/>
<Box name="Manni" title="Teacher" age="97"/>
<Box name="Satu" title="Student" age="100"/>
<Box name="Aleksi" title="Consultant" age="101"/>
<Box name="Ramona" title="Baby" age="10"/>
<Box name="Lassi" title="Author" age="103"/>
<Box name="Jusa" title="Farmer" age="92"/>
<Box name="Elina" title="Biologist" age="92"/>
<Box name="Anne" title="CEO" age="127"/>
<Box name="Samuli" title="Analyst" age="127"/>