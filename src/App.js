import React, { useEffect, useState, Suspense } from 'react'
import Spinner from './img/kalja.svg'
import Nav from './components/Nav'
import Header from './components/Header'
import Helmet from 'react-helmet'
import './styles/App.scss'

//iconit
import { library } from '@fortawesome/fontawesome-svg-core'
import { fab } from '@fortawesome/free-brands-svg-icons'

const Body = React.lazy(() => import('./components/Body'))

//minimidelay setTimeoutilla, on nimittäin smooth loadingscreen
const Footer = React.lazy(() => {
  return Promise.all([
    import('./components/Footer'),
    new Promise(resolve => setTimeout(resolve, 1500))
  ])
    .then(([moduleExports]) => moduleExports)
})


//iconit muille komponenteille, tähän voi pilkulla eroteltuna lisätä muitakin tarvittaessa
library.add(fab)


function App() {

  useEffect(() => {
    // When the user scrolls the page, execute myFunction
    window.onscroll = function () { myFunction() }

    function myFunction() {
      var winScroll = document.body.scrollTop || document.documentElement.scrollTop
      var height = document.documentElement.scrollHeight - document.documentElement.clientHeight
      var scrolled = (winScroll / height) * 100
      document.getElementById('myBar').style.height = scrolled + '%'
    }
  })

  return (
    <div>
      <div className="App">

        <Suspense fallback={
          <div className="loading-screen">
            <img src={Spinner} className="zoom-in-zoom-out" />
          </div>
        }>

          <Helmet>
            <title>OMSTART</title>
            <meta name="description" content="OMSTART-party in Joensuu" />
          </Helmet>

          <div className="progress-container">
            <div className="progress-bar" id="myBar"></div>
          </div>

          <Nav />
          <Header />
          <Body />
          <Footer />

        </Suspense>
      </div>
    </div>
  )
}

export default App
