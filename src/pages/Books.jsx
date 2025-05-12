import Header from "../components/Header/Header";
import Footer from "../components/Footer/Footer";
import BookList from "../components/BookList/BookList";

const Books = () => {

    return (
      <>
      <Header name="Saara Rikama" />
      <main>
        <BookList />
      </main>
      <Footer year={2025} />
      </>
    )}
  
  export default Books;