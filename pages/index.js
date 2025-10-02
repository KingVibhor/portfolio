import Nav from '../components/NAV'
import Hero from '../components/Hero'
import Projects from '../components/projects'
import About from '../components/ABout'
import Contact from '../components/Contact'

export default function Home() {
  return (
    <div>
      <Nav />
      <main>
        <Hero />
        <About />
        <Projects />
        <Contact />
      </main>
    </div>
  )
}