import gsap from "gsap"
import { ScrollTrigger,SplitText } from "gsap/all"

gsap.registerPlugin(ScrollTrigger,SplitText);


function App() {
  return (
    <div>
      <h1 className="flex-center">Hello</h1>
    </div>
  )
}

export default App
