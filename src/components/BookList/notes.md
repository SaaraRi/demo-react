- {
  margin: 0;
  padding: 0;
  box-sizing: border-box;
  }

body {
margin: 3rem 0;
font-family: "Comfortaa", 'Gill Sans', 'Gill Sans MT', Calibri, 'Trebuchet MS', sans-serif;
font-size: 12pt;
background-color: rgb(34, 32, 32);
}

.header-div {
display: flex;
align-items: center;
justify-content: space-between;
}

h1 {
font-family: "Moirai One", 'Gill Sans', 'Gill Sans MT', Calibri, 'Trebuchet MS', sans-serif;
text-transform: uppercase;
font-size: 50pt;
color: rgb(225, 255, 0);
text-shadow: 0px 0px 2px rgb(239, 255, 122), 0px 0px 1px rgb(248, 255, 195);
margin-left: 5rem;
flex: 1;
}

h2 {
font-family: "Comfortaa", 'Gill Sans', 'Gill Sans MT', Calibri, 'Trebuchet MS', sans-serif;
text-align: center;
text-transform: uppercase;
font-size: 30pt;
margin: 6rem auto 3rem auto;
}

nav {
flex: 1;
}

nav ul {
list-style: none;
text-align: right;
margin-right: 3rem;
}

nav ul li {
display: inline;
margin: 2rem;
}

.create-link,
.list-link {
font-size: 22pt;
text-decoration: none;
text-transform: uppercase;
font-family: "Comfortaa", 'Gill Sans', 'Gill Sans MT', Calibri, 'Trebuchet MS', sans-serif;
}

.create-link,
.create {
color: rgb(85, 255, 0);
text-shadow: 0px 0px 2px rgb(248, 255, 195), 0px 0px 1px rgb(251, 255, 225);
}

.list-link,
.list {
color: rgb(255, 0, 217);
text-shadow: 0px 0px 2px rgb(255, 163, 241), 0px 0px 2px rgb(255, 214, 252);
}

.create-link:hover,
.list-link:hover {
cursor: pointer;
color: rgb(140, 0, 255);
text-shadow: 0px 0px 2px rgb(247, 236, 255), 0px 0px 1px rgb(236, 212, 255);
transition-property: background-color;
transition-timing-function: cubic-bezier(0.4, 0, 0.2, 1);
transition-duration: 150ms;
}

table {
flex: 1;
border-collapse: collapse;
text-align: center;
width: 90vw;
margin-top: 0.5rem;
}

.user-table {
border: solid 4px rgb(255, 0, 217);
border-top: none;
background-color: rgb(255, 0, 217);
border-radius: 15px;
padding: 0;
margin: 4rem auto 2rem auto;
display: flex;
justify-content: center;
width: 90vw;
box-shadow: 0px 0px 6px #ff60e7, 0px 0px 4px rgb(255, 128, 236);
}

td {
padding: 1rem 2rem;
border: solid 2px rgb(34, 32, 32);
}

th {
padding: 1rem 2rem;
text-transform: uppercase;
font-size: 14pt;
background-color: rgb(255, 0, 217);
padding: 1rem 2rem;
border-top: none;
text-shadow: 0px 0px 1px rgba(0, 0, 0, 0.3)
}

tr:last-child td {
border-bottom: none;
}

tr td:first-child {
border-left: none;
}

tr td:last-child {
border-right: none;
}

th:first-child {
border-top-left-radius: 15px;
border-left: none;
}

th:last-child {
border-top-right-radius: 15px;
border-right: none;
}

tr:last-child td:first-child {
border-bottom-left-radius: 15px;
}

tr:last-child td:last-child {
border-bottom-right-radius: 15px;
}

tr:nth-child(odd) {
background-color: rgb(255, 224, 250);
}

tr:nth-child(even) {
background-color: rgb(255, 248, 254);
}

button {
font-size: 12pt;
font-family: "Comfortaa", 'Gill Sans', 'Gill Sans MT', Calibri, 'Trebuchet MS', sans-serif;
text-transform: uppercase;
padding: 0.5rem 1rem;
border-radius: 8px;
background-color: rgb(255, 149, 0);
box-shadow: 0px 1px 1px rgba(0, 0, 0, 0.3), inset 0px 0px 8px rgb(255, 215, 37), inset 0px 0px 4px rgb(255, 238, 165);
}

button:hover {
cursor: pointer;
background-color: rgb(178, 83, 255);
box-shadow: 0px 1px 1px rgba(0, 0, 0, 0.3), inset 0px 0px 8px rgb(230, 200, 255), inset 0px 0px 4px rgb(178, 83, 255);
transition-property: background-color;
transition-timing-function: cubic-bezier(0.4, 0, 0.2, 1);
transition-duration: 150ms;
}

.buttons {
display: flex;
justify-content: center;
gap: 1rem;
}

.input-container {
display: flex;
flex-direction: column;
width: 30vw;
margin: 0 auto;
}

.input-data {
display: flex;
flex-direction: row;
justify-content: space-between;
align-items: center;
}

label {
color: rgb(85, 255, 0);
font-size: 14pt;
font-family: "Comfortaa", 'Gill Sans', 'Gill Sans MT', Calibri, 'Trebuchet MS', sans-serif;
text-transform: uppercase;
flex: 1;
text-shadow: 0px 0px 1px rgb(248, 255, 195), 0px 0px 0.8px rgb(251, 255, 225);
}

input {
padding: 0.5rem;
margin: 1rem auto;
border-radius: 8px;
font-size: 14pt;
font-family: "Comfortaa", 'Gill Sans', 'Gill Sans MT', Calibri, 'Trebuchet MS', sans-serif;
flex: 2;
}

.input-field{
border: solid 3px rgb(85, 255, 0);
box-shadow: 0px 0px 2px rgb(248, 255, 195), 0px 0px 1px rgb(251, 255, 225);
}

.save-btn {
margin: 3rem auto 2rem auto;
padding: 0.6rem 3.4rem;
font-size: 14pt;
}

.edit-input {
font-size: 12pt;
margin: 0;
}

footer p {
font-size: 12pt;
color: rgb(225, 255, 0);
text-shadow: 0px 0px 2px rgb(239, 255, 122), 0px 0px 1px rgb(248, 255, 195);
text-align: center;
margin-top: 6rem;
}
