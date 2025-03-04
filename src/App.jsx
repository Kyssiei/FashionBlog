// import { useState } from 'react'
import Header from './components/Header.jsx'
import Nav from './components/Nav.jsx'
import Article from './components/Article.jsx'
import Blog1 from './assets/blog-image-1.jpg'
import Blog2 from './assets/blog-image-2.jpg'
import Footer from './components/Footer.jsx'
import './App.css'

function App() {
  // const [count, setCount] = useState(0)

  return (
    <>
      <Header />
      <Nav />
      <Article 
        date="3/3/2025" 
        title="On the Street in Brooklyn" 
        img={Blog1}
        p = ""
        continueText="Continues..." />
        <hr />

      <Article 
        date="3/1/2025" 
        title="Vintage in Vogue" 
        img={Blog2}
        p = ""
        continueText="Continues..." />
        <hr />

        <Footer />
    </>
  )
}

export default App
