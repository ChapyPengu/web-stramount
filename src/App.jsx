import './App.css'
import Nav from './components/Nav'
import About from './sections/About'
import Contact from './sections/Contact'
import Footer from './sections/Footer'
import Header from './sections/Header'
import Members from './sections/Members'
import Projects from './sections/Projects'

function App() {
  return (
    <>
      <Nav/>
      <div className='container mx-auto shadow-2xl'>
        <header id='home'>
          <Header/>
        </header>
        
        <main>
          <section id='projects'>
            <Projects/>
          </section>
          <section id='about'>
            <About/>
          </section>
          <section id='members'>
            <Members/>
          </section>
          <section id='contact'>
            <Contact/>
          </section>
        </main>
        
        <footer>
          <Footer/>
        </footer>
      </div>
    </>
    )
}

export default App
