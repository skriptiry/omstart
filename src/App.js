import React, { useEffect, useState } from 'react'
import './styles/App.scss'
import Nav from './components/Nav'
import Header from './components/Header'
import Footer from './components/Footer'
import Body from './components/Body'
import Helmet from 'react-helmet'

//iconit
import { library } from '@fortawesome/fontawesome-svg-core'
import { fab } from '@fortawesome/free-brands-svg-icons'

//iconit muille komponenteille
library.add(fab)

function App() {

  const [loading, setLoading] = useState(true)

  useEffect(() => {
    setTimeout(() => setLoading(false), 1500)
  }, [])

  return (
    <div>
      {loading === false ?
        <div className="App">

          <Helmet>
            <title>OMSTART</title>
            <meta name="description" content="OMSTART, a party for students in Joensuu" />
          </Helmet>

          <Nav />
          <Header />
          <Body />
          <Footer />

        </div>
        :
        <div className="loading-screen">
          <img className="spinner" src="https://skripti.org/img/spinner.svg" alt="spinner" width="150px" />
        </div>
      }
    </div>
  )
}

export default App
