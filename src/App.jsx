// import { useState } from 'react'
import Header from './components/Header.jsx'
import Nav from './components/Nav.jsx'
import Article from './components/Article.jsx'
import Blog1 from './assets/blog-image-1.jpg'
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
        p= "Lorem Ipsum is simply dummy text of the printing and typesetting industry. Lorem Ipsum has been the industry's standard dummy text ever since the 1500s, when an unknown printer took a galley of type and scrambled it to make a type specimen book. It has survived not only five centuries, but also the leap into electronic typesetting, remaining essentially unchanged. It was popularised in the 1960s with the release of Letraset sheets containing Lorem Ipsum passages, and more recently with desktop publishing software like Aldus PageMaker including versions of Lorem Ipsum.

m"
        continue="Continues..." />
    </>
  )
}

export default App
