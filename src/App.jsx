import gsap from "gsap"
import { ScrollTrigger, SplitText } from "gsap/all"
import Navbar from "./Components/Navbar";
import Hero from "./Components/Hero";
import Lattes from "./Components/Lattes";

gsap.registerPlugin(ScrollTrigger, SplitText);


function App() {
  return (
    <main>
      <Navbar />
      <Hero />
      <Lattes />
    </main>
  )
}

export default App
