import NavBarMain from "./Components/NavBar/NavBarMain"
import HeroMain from "./Components/HeroSection/HeroMain"
import HeroGradient from "./Components/HeroSection/HeroGradient"
import SubHeroSection from "./Components/HeroSection/SubHeroSection"
import AboutMeMain from "./Components/AboutMeSection/AboutMeMain"
import SkillMain from "./Components/SkillSection/SkillMain"
import SubSkills from "./Components/SkillSection/SubSkills"
import ExperienceMain from "./Components/ExperienceSection/ExperienceMain"
import ProjectMain from "./Components/ProjectsSection/ProjectMain"
import ContactMeMain from "./Components/ContactMeSection/ContactMeMain"
import FooterMain from "./Components/FooterSection/FooterMain"

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
      <ProjectMain/>
      <ContactMeMain/>
      <FooterMain/>
    </main>
  )
}

export default App
