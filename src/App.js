import Spinner from './img/kalja.svg'
import Header from './components/Header'
import Helmet from 'react-helmet'
import React, { useEffect, Suspense } from 'react'
import Nav2 from './components/Nav2'
import './styles/App.scss'

//iconit
import { library } from '@fortawesome/fontawesome-svg-core'
import { faFacebook, faInstagram, faYoutube, faKaggle } from '@fortawesome/free-brands-svg-icons'
import { faCalendarDay, faMapMarkerAlt, faTicketAlt, faFireAlt, faEnvelope, faQuoteLeft, faQuoteRight } from '@fortawesome/free-solid-svg-icons'

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
library.add(
  faCalendarDay,
  faMapMarkerAlt,
  faTicketAlt,
  faFireAlt,
  faEnvelope,
  faFacebook,
  faInstagram,
  faYoutube,
  faKaggle,
  faQuoteLeft,
  faQuoteRight
)


function App() {

  useEffect(() => {
    // When the user scrolls the page, execute createScrollbar
    window.onscroll = function () { createScrollbar() }

    function createScrollbar() {
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
            <meta name="description" content="OMSTART - Syksyn aloitusbileet!" />
          </Helmet>

          <div className="progress-container">
            <div className="progress-bar" id="myBar"></div>
          </div>

          {/*<Nav />*/}
          <Nav2 />
          <Header />
          <Body />
          <Footer />

        </Suspense>
      </div>
    </div>
  )
}

export default App
