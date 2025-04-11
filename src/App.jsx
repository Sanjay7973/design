import './App.css';
import Header from './component/header/Header';
import { useEffect, useState } from "react";
import Layout from '../Layout';

function App() {
  const [isExpanded, setIsExpanded] = useState(true);

  useEffect(() => {
    const handleScroll = () => {
      const currentScroll = window.scrollY;
      // Check if the scroll position is greater than 50 and `isExpanded` is false
      if (currentScroll > 50 && isExpanded) {
        // console.log(window.scrollY)
        setIsExpanded(false);
      } else if (currentScroll <= 10 && !isExpanded) {
        // console.log(window.scrollY)
        setIsExpanded(true);
      }
    };

    window.addEventListener("scroll", handleScroll);

    return () => {
      window.removeEventListener("scroll", handleScroll);
    };
  }, [window.scrollY]);

  return (
    <>
    <Layout />
    </>
  );
}

export default App;
