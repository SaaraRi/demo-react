import { useState } from 'react';
import BookCard from '../BookCard/BookCard';
import books from '../../data/booksData';
import './BookList.css';

const BookList = ({ booksData, setBooksData }) => {

   /* const [booksData, setBooksData] = useState(books);*/
    const [searchValue, setSearchValue] = useState("");

    /*const [stockData, setStockData] = useState(books.inStock);
    const [readData, setReadData] = useState(books.isRead);

    /* const [person, setPerson] = useState({ department, location, role });
    
    const [isEditing, setIsEditing] = useState(false);
    const toggleEdit = () => setIsEditing((prev) => !prev); 
    const handleChange = (e) => setAnimalValue(e.target.value);
    
    const handleInputChange = (e) => {
    const { name, value } = e.target;
    setPerson((prevState) => ({ ...prevState, [name]: value }));
  };

    const renderEditableField = (value, name) =>
    isEditing ? (
      <input value={value} name={name} onChange={handleInputChange} />
    ) : (
      <p className={name}>{value}</p>
    );*/

    const eventHandler = (id) => {
        console.log("Read more -button was clicked on book", id);
    };
    
    const toggleStock = (id) => {
       /*console.log("toggleStock was clicked on book", id);*/
       const updatedArray = booksData.map((book) => 
        book.id === id ? {...book, inStock: !book.inStock } :
       book
        );
        setBooksData(updatedArray);
    };

    const toggleRead  = (id) => {
         /*console.log("toggleRead was clicked on book", id, isRead);*/
        setBooksData(prevBooks => 
            prevBooks.map(book =>
                book.id === id ? {...book, isRead: !book.isRead} :
                book
            ));
        };

    const searchHandle = (event) => {
        setSearchValue(event.target.value);

        /*{booksData.filter(searchValue === )  map((book) => (
            <BookCard 
              key={book.id}
              {...book}
               />*/
    };

    const filteredBooks = booksData.filter((book) => {
      const search = searchValue.toLowerCase();
      return (
        book.title.toLowerCase().includes(search) ||
        book.author.toLowerCase().includes(search)
      );
    });
  

    const handlePriceChange = (id, newPrice) => {
        setBooksData((prevState) => 
            prevState.map((book) => 
                book.id ===id ? { ...book, price: parseFloat(newPrice) } : book
            )
        )
    }

    /*<div className='booklist'>
      {books.map((book) => (
          <BookCard 
            key={book.id} 
            {...book}
          />
      ))}
      </div>*/

  return (
    <>
    <h1>Book Catalogue</h1>
    <label htmlFor="search">Search: </label>
    <input 
    type="text" 
    id="search" 
    name="search" 
    value={searchValue}
    onChange={searchHandle}
     />
    <p>You searched for: {searchValue}</p>

    <div className="booklist">
        {filteredBooks.length > 0 ? (
          filteredBooks.map((book) => (
            <BookCard
              key={book.id}
              {...book}
              onEventHandler={() => eventHandler(book.id)}
              onToggleStock={toggleStock}
              onToggleRead={() => toggleRead(book.id)}
              onPriceChange={handlePriceChange}
            />
          ))
        ) : (
          <p>No matching books found. Try another search.</p>
        )}
      </div>
    </>
  )};

export default BookList;
