import './App.scss';
import Intro from './Intro/Intro';
import Header from './Header/Header';
import Experience from './Experience/Experience';
import Skills from './Skills/Skills';
import Footer from './Footer/Footer';

function App() {
  return (
    <main>
      <Header />
      <div className="body">
        <Intro />
        <Experience />
        <Skills />
        <Footer />
      </div>
    </main>
  )
}

export default  App
