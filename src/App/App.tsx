import './App.css'
import Name from './Name/Name'
import Header from './Header/Header'
import About from './About/About'
import Experience from './Experience/Experience'
import Skills from './Skills/Skills'

function App() {
  return (
    <main>
      <Header />
      <div className="body">
        <Name />
        <About />
        <Experience />
        <Skills />
      </div>
    </main>
  )
}


export default  App
