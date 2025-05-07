import NavBarMain from "./Components/NavBar/NavBarMain"
import HeroMain from "./Components/HeroSection/HeroMain"
import HeroGradient from "./Components/HeroSection/HeroGradient"
import SubHeroSection from "./Components/HeroSection/SubHeroSection"
import AboutMeMain from "./Components/AboutMeSection/AboutMeMain"
import SkillMain from "./Components/SkillSection/SkillMain"
import SubSkills from "./Components/SkillSection/SubSkills"
import ExperienceMain from "./Components/ExperienceSection/ExperienceMain"

function App() {
  return (
    <main className="font-body">
      <NavBarMain/>
      <HeroMain/>
      <HeroGradient/>
      <SubHeroSection/>
      <AboutMeMain/>
      <SkillMain/>
      <SubSkills/>
      <ExperienceMain/>
    </main>
  )
}

export default App
