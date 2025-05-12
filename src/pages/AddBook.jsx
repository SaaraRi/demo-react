import { useState } from 'react';
import { useNavigate } from 'react-router'
import Header from '../components/Header/Header';
import Footer from '../components/Footer/Footer';


const AddBook = ({ onAddBook }) => {

    const [formData, setFormData] = useState({
        title:"",
        author:"",
        genre:"",
        price:"",
    })

    const navigate = useNavigate();
    
    const handleChange = (e) => {
        const { name, value } = e.target;
        setFormData((prev) => ( {...prev, [e.target.name]: e.target.value }))
    }

    /*const [title, setTitle] = useState("");
    const [author, setAuthor] = useState("");
    const [genre, setGenre] = useState("");
    const [price, setPrice] = useState("");*/

    const handleSubmit = (e) => {
        e.preventDefault();

        const newBook = {...formData, price: parseFloat(formData.price)};

       /* const newBook = {
            title: title, 
            author: author, 
            genre: genre, 
            price: parseFloat(price)
        }*/

        onAddBook(newBook);

        /*setTitle("")
        setAuthor("")
        setGenre("")
        setPrice("")*/

        setFormData({
            title:"",
            author:"",
            genre:"",
            price:"",
        });

        navigate("/books");
    }

  return (
    <>
      <Header name="Saara Rikama" />
      <main>
      <h2>Add Book to Catalogue</h2>
        <form onSubmit={handleSubmit}>
            <div>
                <label htmlFor="title">Title:</label>
                <input 
                    type="text" 
                    name="title" 
                    value={formData.title} 
                    onChange={handleChange}
                    /*onChange={(e) => setTitle(e.target.value)}*/
                />
            </div>
            <div>
                <label htmlFor="author">Author:</label>
                <input 
                    type="text" 
                    name="author" 
                    value={formData.author} 
                    onChange={handleChange}
                    /*onChange={(e) => setAuthor(e.target.value)}/>*/
                />
            </div>
            <div>
                <label htmlFor="genre">Genre:</label>
                <input 
                    type="text" 
                    name="genre" 
                    value={formData.genre} 
                    onChange={handleChange}
                    /*onChange={(e) => setGenre(e.target.value)}/>*/
                />
            </div>
            <div>
                <label htmlFor="price">Price:</label>
                <input 
                    type="number" 
                    name="price" 
                    value={formData.price} 
                    onChange={handleChange}
                    /*onChange={(e) => setPrice(e.target.value)}/>*/
                />
            </div>
            <button type="submit">Add book</button>
        </form>
      </main>
      <Footer year={2025} />
      </>
    )}
  
  export default AddBook;
    
