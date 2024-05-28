import About from './sections/About'
import Header from './sections/Header'
import Partners from './sections/Partners'
import Services from './sections/Services'
import Top from './sections/Top'

function App() {
  return(  
    <>
      <Header/>
      <main>
        <Top/>
        <Services />
        <About/>
        <Partners/>
      </main>
      
    </>
  )
}

export default App
