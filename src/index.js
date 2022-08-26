import React from 'react'
import ReactDom from 'react-dom'
import {FirstClassComponent} from './pages/First-Class-Component'
// import Navbar from './components/Navbar'
// import {Table} from './components/Table'
// import {Card} from './components/Card'
// import Footer from './components/Footer'



const App = () => { 
    return ( 
        <div>
          <FirstClassComponent />
      {/* <Navbar />     
        <Table />
        <div className="d-flex justify-content-between">
               <Card />
               <Card />
               <Card />
        </div>
        <Footer/> */}
  </div>
    )
}

const root = ReactDom.createRoot(document.getElementById('root'))
root.render(<App />)
