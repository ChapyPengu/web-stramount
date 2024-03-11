import './App.css'
import Nav from './components/Nav'
import About from './sections/About'
import Contact from './sections/Contact'
import Footer from './sections/Footer'
import Header from './sections/Header'
import Members from './sections/Members'
import Projects from './sections/Projects'
import Section from './sections/Section'
import Stack from './sections/Stack'

function App() {
  return (
    <>
      <Nav/>
      <div className='container mx-auto shadow-2xl'>
        <header className='bg-white' id='home'>
          <Header/>
        </header>

        <main className='bg-white'>
          <section id='projects'>
            <Section>
              <Projects/>
            </Section>
          </section>
          <section id='about'>
            <About/>
          </section>
          <section id='members'>
            <Members/>
          </section>
          <section>
            <Stack/>
          </section>
          <section id='contact'>
            <Contact/>
          </section>
        </main>
        
        <footer className='bg-white'>
          <Footer/>
        </footer>
      </div>
    </>
    )
}

export default App
