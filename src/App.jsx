import gsap from "gsap"
import { ScrollTrigger, SplitText } from "gsap/all"
import Navbar from "./Components/Navbar";
import Hero from "./Components/Hero";

gsap.registerPlugin(ScrollTrigger, SplitText);


function App() {
  return (
    <main>
      <Navbar />
      <Hero />
    </main>
  )
}

export default App
