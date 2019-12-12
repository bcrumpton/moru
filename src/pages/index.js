import React from "react"

import Layout from "../components/layout"
import SEO from "../components/seo"
import Header from "../components/header"
import PrimordialUrge from "../images/primordial-urge.jpg"
import PlagueWhispers from "../images/plague-whispers.jpg"
import Merch from "../images/moru_preorders_outline.png"
import Release from "../components/release"
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome'
import { faBandcamp, faSpotify, faInstagram, faFacebook, faTwitter } from '@fortawesome/free-brands-svg-icons'
import "./mystyles.scss"

const IndexPage = () => (
  <Layout>
    <SEO title="Home" />
    <Header />

    <div className="socials">
      <a target="_blank" rel="noopener noreferrer" href="https://morutn.bandcamp.com/"><FontAwesomeIcon icon={faBandcamp} /></a>
      <a target="_blank" rel="noopener noreferrer" href="https://open.spotify.com/artist/3sdiBAYeuwc6cyI6P4kl8G?si=34hF1nNiQD6RAxcLgZh6IQ"><FontAwesomeIcon icon={faSpotify} /></a>
      <a target="_blank" rel="noopener noreferrer" href="https://www.instagram.com/moru_tn/"><FontAwesomeIcon icon={faInstagram} /></a>
      <a target="_blank" rel="noopener noreferrer" href="https://www.facebook.com/Moru-2006325739393624/"><FontAwesomeIcon icon={faFacebook} /></a>
      <a target="_blank" rel="noopener noreferrer" href="https://twitter.com/moru_tn"><FontAwesomeIcon icon={faTwitter} /></a>
    </div>

    <div className="content-box">
      <h1 className="title">Releases</h1>
      <Release 
        name="Primordial Urge - 2019"
        label="Delayed Gratification Records"
        albumCover={PrimordialUrge} 
        albumAlt="Primordial Urge album cover"
        spotifyEmbed="https://open.spotify.com/embed/album/5jtYn4L1m6I3BjpUdOj3Nt"
      />
      <Release 
        name="Plague Whispers - 2017"
        label="Delayed Gratification Records"
        albumCover={PlagueWhispers}
        albumAlt="Plague Whispers album cover"
        spotifyEmbed="https://open.spotify.com/embed/album/1TI6RxvCPAZKYKuFLFcWJ1"
      />
    </div>

    <div className="content-box">
      <h1 className="title">Video</h1>
      <div class="iframe-container">
        <iframe title="Moru - Deconstruct (live session)" width="100%" src="https://www.youtube.com/embed/tE9uHjAG1_o" frameborder="0" allow="accelerometer; autoplay; encrypted-media; gyroscope; picture-in-picture" allowfullscreen></iframe>
      </div>
    </div>

    <div className="content-box">
      <h1 className="title">Merch</h1>
      <img src={Merch} alt="Merch preorder"/>
      Grab some merch at the <a href="https://delayedgratificationrecords.limitedrun.com/roster/moru">Delayed Gratification webstore</a>
    </div>

    <div className="content-box">
      <h1 className="title">Contact</h1>
      Email us at <a href="mailto:morutn@gmail.com">morutn@gmail.com</a>
    </div>
  </Layout>
)

export default IndexPage
