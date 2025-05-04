import NavBarMain from "./Components/NavBar/NavBarMain"
import HeroMain from "./Components/HeroSection/HeroMain"
import HeroGradient from "./Components/HeroSection/HeroGradient"
import SubHeroSection from "./Components/HeroSection/SubHeroSection"
import AboutMeMain from "./Components/AboutMeSection/AboutMeMain"

function App() {
  return (
    <main className="font-body">
      <NavBarMain/>
      <HeroMain/>
      <HeroGradient/>
      <SubHeroSection/>
      <AboutMeMain/>
    </main>
  )
}

export default App
