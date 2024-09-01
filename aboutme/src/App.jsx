import styles from './App.module.css';
import Navbar from "./components/Navbar/Navbar";
import About from "./components/About/About";
import IntroParagraph from "./components/IntroParagraph/IntroParagraph";
import LikesDislikes from "./components/LikesDislikes/LikesDislikes";
import Footer from "./components/Footer/Footer";

function App() {
  return (
    <div className={styles.App}> 
      <Navbar />
      <About />
      <IntroParagraph />
      <LikesDislikes />
      <Footer />
    </div>
  );
}

export default App;
