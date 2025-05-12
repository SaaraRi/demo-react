import { useState } from 'react';
import './BookCard.css';

const BookCard = ({title, author, year, genre, inStock, price, isRead, onEventHandler, onToggleStock, onToggleRead, onPriceChange, id, ...rest}) => {

    const [isEditing, setIsEditing] = useState(false);
    const [newPrice, setNewPrice] = useState(price);



 /*   console.log(rest);
    const [isRead, setIsRead] = useState();
    const clickHandler = () => {
        setIsRead(!isRead);
    };
    <p onClick={clickHandler}> 
    */

    const eventHandler2 = () => {
        console.log(rest)
        console.log ("Jee jee")
    };

    const handleSave = () => {
        onPriceChange(id, newPrice);
        setIsEditing(!isEditing);

    };


    return (
        <div className="bookcard">
            <p>Title: {title} </p>
            <p>Author: {author}</p>
            <p>Year: {year}</p>
            <p>Genre: {genre}</p>

            {/*<p>In stock: {inStock ? "In Stock" : "Out of Stock"}</p>*/}
            <p onClick={() => onToggleStock(id)}>{inStock ? "In Stock" : "Out of Stock"}</p>
            
            {isEditing ? (
            <div>
            <label htmlFor="price"> Price: € </label>
            <input type="text" value={newPrice} name="price" onChange={(e)=>setNewPrice(e.target.value)} />
            </div>
            ) : (
            <p>Price: € {price} </p>
            )}

            {isEditing? (
                <button onClick={handleSave}>Save price</button>
            ) : (
                <button onClick={() => setIsEditing(!isEditing)}>Edit price</button>
            )} <br />


           {/* <button onClick={() => setIsEditing(!isEditing)}> {isEditing? "Save price" : "Edit price"} </button> */}

            {/* <button onClick={() => onEventHandler(id)}>Read more</button>  child-level, next button is on parent level. Do binding where you have the data eg. id. Child more recommended*/}
            <button onClick={onEventHandler} className='readmore'>Read more</button>
            {/*<Button onClick={toggleEdit} text={isEditing ? "Save" : "Edit"} />*/}
            {!inStock && <button onClick={eventHandler2} className='wishlist-btn'>Add to Wishlist</button>}
            <p className="bookicon" onClick={onToggleRead}>{isRead ? <svg xmlns="http://www.w3.org/2000/svg" height="40px" viewBox="0 -960 960 960" width="40px" fill="#000000"><path d="M560-564v-68q33-14 67.5-21t72.5-7q26 0 51 4t49 10v64q-24-9-48.5-13.5T700-600q-38 0-73 9.5T560-564Zm0 220v-68q33-14 67.5-21t72.5-7q26 0 51 4t49 10v64q-24-9-48.5-13.5T700-380q-38 0-73 9t-67 27Zm0-110v-68q33-14 67.5-21t72.5-7q26 0 51 4t49 10v64q-24-9-48.5-13.5T700-490q-38 0-73 9.5T560-454ZM260-320q47 0 91.5 10.5T440-278v-394q-41-24-87-36t-93-12q-36 0-71.5 7T120-692v396q35-12 69.5-18t70.5-6Zm260 42q44-21 88.5-31.5T700-320q36 0 70.5 6t69.5 18v-396q-33-14-68.5-21t-71.5-7q-47 0-93 12t-87 36v394Zm-40 118q-48-38-104-59t-116-21q-42 0-82.5 11T100-198q-21 11-40.5-1T40-234v-482q0-11 5.5-21T62-752q46-24 96-36t102-12q58 0 113.5 15T480-740q51-30 106.5-45T700-800q52 0 102 12t96 36q11 5 16.5 15t5.5 21v482q0 23-19.5 35t-40.5 1q-37-20-77.5-31T700-240q-60 0-116 21t-104 59ZM280-494Z"/></svg> : <svg xmlns="http://www.w3.org/2000/svg" height="40px" viewBox="0 -960 960 960" width="40px" fill="#000000"><path d="M240-80q-50 0-85-35t-35-85v-560q0-50 35-85t85-35h440v640H240q-17 0-28.5 11.5T200-200q0 17 11.5 28.5T240-160h520v-640h80v720H240Zm120-240h240v-480H360v480Zm-80 0v-480h-40q-17 0-28.5 11.5T200-760v447q10-3 19.5-5t20.5-2h40Zm-80-480v487-487Z"/></svg>}</p>
        </div>
    );
};

export default BookCard;