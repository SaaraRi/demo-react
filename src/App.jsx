import './App.css'
import Header from './components/Header/Header';
import Footer from './components/Footer/Footer';
import BookList from './components/BookList/BookList';
import { useState } from 'react';
import { createBrowserRouter, RouterProvider } from "react-router";
import books from './data/booksData';
import Root from './pages/Root';
import About from './pages/About';
import Books from './pages/Books';
import AddBook from './pages/AddBook';



const App = () => {

  const [booksData, setBooksData] = useState(books);

  const addBookHandler = (newBook) => {
    setBooksData((prev) => [
      ...prev, 
      { ...newBook, id: Date.now(), inStock: true, isRead: false }
    ]);
  };

  const router = createBrowserRouter([
    {
      path: "/",
      element: <Root />,
    },
    {
      path: "/about",
      element: <About />,
    },
    {
      path: "/books",
      element: <BookList  booksData={booksData} setBooksData={setBooksData}/>,
    },
    {
      path: "/add",
      element: <AddBook onAddBook={addBookHandler}/>,
    }
  ]);
  
  return <RouterProvider router={router}/>

  }

export default App;
