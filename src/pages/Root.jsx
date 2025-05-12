import Header from "../components/Header/Header";
import Footer from "../components/Footer/Footer";

const Root = () => {

    return (
      <>
      <Header name="Saara Rikama" />
      <main>
        <p>I am the Root component</p>
      </main>
      <Footer year={2025} />
      </>
    )}
  
  export default Root;