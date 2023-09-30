import "./Home.scss";
import { useState } from "react";
import Header from "../../components/Header/Header";
import MainLogo from "../../components/MainLogo/MainLogo";
import Tagline from "../../components/Tagline/Tagline";
import PhotoGallery from "../../components/PhotoGallery/PhotoGallery"
import Menu from "../../components/Menu/Menu";
import DoordashIcon from "../../components/Icons/DoordashIcon"
import FacebookIcon from "../../components/Icons/FacebookIcon"
import InstagramIcon from "../../components/Icons/InstagramIcon"
import logoColor from '/logos/riseup-logo-color.png';
import logoMonochrome from '/logos/riseup-logo-monochrome.png';
// import recordPlayer from '/logos/record-player.svg';

export default function Home() {

   return (
      <main className="container">
         <MainLogo />
         <div className="home">
            <Header />
            <Tagline />
            <PhotoGallery />
            <Menu />



            {/* ============ RADIO PLAYER ================ */}

            {/* <section className="radio-player">
               <img src={recordPlayer} className="radio-player__image" alt="clickable radio logo to stream caribbean music" />
               <h2 className="radio-player__title">Start Streaming Tunes</h2>
               <p>Not working yet</p>

            </section> */}




            {/* ============== CAROUSEL ================= */}
            <div className="carousel">
               <div className="carousel__container">
                  <img src="/images/patio3.JPG" alt="riseup marketplace garden and patio" className="carousel__image" />
                  <img src="/images/riseup-marketplace-bread-4.JPG" alt="riseup marketplace garden and patio" className="carousel__image" />
                  <img src="/images/riseup-marketplace-merchandise-2.jpg" alt="riseup marketplace garden and patio" className="carousel__image" />
                  <img src="/images/riseup-marketplace-pacman-1.jpg" alt="riseup marketplace garden and patio" className="carousel__image" />
                  <img src="/images/riseup-mug.JPG" alt="riseup marketplace garden and patio" className="carousel__image" />
                  <img src="/images/riseup-marketplace-patties-4.JPG" alt="riseup marketplace garden and patio" className="carousel__image" />
                  <img src="/images/riseup-marketplace-dog-2.JPG" alt="riseup marketplace garden and patio" className="carousel__image" />
                  <img src="/images/snickerdoodles-in-case-1.JPG" alt="riseup marketplace garden and patio" className="carousel__image" />


                  <img src="/images/patio3.JPG" alt="riseup marketplace garden and patio" className="carousel__image" />
                  <img src="/images/riseup-marketplace-bread-4.JPG" alt="riseup marketplace garden and patio" className="carousel__image" />
                  <img src="/images/riseup-marketplace-merchandise-2.jpg" alt="riseup marketplace garden and patio" className="carousel__image" />
                  <img src="/images/riseup-marketplace-pacman-1.jpg" alt="riseup marketplace garden and patio" className="carousel__image" />
                  <img src="/images/riseup-mug.JPG" alt="riseup marketplace garden and patio" className="carousel__image" />
                  <img src="/images/riseup-marketplace-patties-4.JPG" alt="riseup marketplace garden and patio" className="carousel__image" />
                  <img src="/images/riseup-marketplace-dog-2.JPG" alt="riseup marketplace garden and patio" className="carousel__image" />
                  <img src="/images/snickerdoodles-in-case-1.JPG" alt="riseup marketplace garden and patio" className="carousel__image" />

               </div>
            </div>

            {/* // ============== FOOTER ================= */}
            <div className="footer">

               <div className="footer__store-details">
                  <p className="footer__details">704 Vernon Dr, Vancouver, BC</p>
                  <p className="footer__details">Mon - Fri 9-6 , Sat 10-4</p>
               </div>

               <h3 className="footer__details">Making Community Convenient</h3>

               {/* <div className="footer__social-container">
                  <a className="footer__social-link" target="_blank" rel="noreferrer" href="https://www.facebook.com/riseupmarketplace/">
                     <FacebookIcon />
                  </a>
                  <a className="footer__social-link" target="_blank" rel="noreferrer" href="https://www.instagram.com/riseupmarketplace/?hl=en">
                     <InstagramIcon />
                  </a>
                  <a className="footer__social-link" target="_blank" rel="noreferrer" href="https://www.doordash.com/en-CA/store/rise-up-marketplace-vancouver-22918403/">
                     <DoordashIcon />
                  </a>
               </div> */}

            </div>




            {/* ================ LIVE STREAM ================= */}
            {/* <div className="live-stream">
                  <div id="d8K/wrnDj8OVwrJ3NcKvw5TDp8O3w4J3e0rCo8Oaw5LCqGA=" className="mytuner-widget" data-target="401901" data-requires_initialization="true" data-autoplay="false" data-hidehistory="false" style="width: 100%; max-width: 400px; overflow: hidden; max-height: 225px; border: 1px solid rgb(17, 129, 66); border-radius: 6px;">
                     <div id="d8K/wrnDj8OVwrJ3NcKvw5TDp8O3w4J3e0rCo8Oaw5LCqGA=top-bar" style="background: rgb(240, 189, 46); height: 75px; width: 100%; display: block; padding: 5px; line-height: 65px;">
                        <div id="d8K/wrnDj8OVwrJ3NcKvw5TDp8O3w4J3e0rCo8Oaw5LCqGA=play-button" className="main-play-button disabled" data-id="d8K/wrnDj8OVwrJ3NcKvw5TDp8O3w4J3e0rCo8Oaw5LCqGA=">
                           <div className="play-image"></div>
                        </div>
                        <a className="player-radio-link" href="http://mytuner-radio.com/radio/radio-caribbean-international-401901/?utm_source=widget&amp;utm_medium=player" rel="nofollow" style="height: 100%; display: inline-block; line-height: 65px; cursor: pointer;">
                           <img src="https://static2.mytuner.mobi/media/tvos_radios/uz45WLyKXm.gif" alt="Radio Caribbean International" style="float: left; height: 74px; margin-top: -5px; box-shadow: black 0px 0px 3px -1px;" />
                           <span className="player-radio-name" style="margin-left: 10px; color: rgb(10, 10, 10); font-weight: bold; font-size: 20px; float: left; overflow: hidden; text-overflow: ellipsis; white-space: nowrap;">Radio Caribbean International</span>
                        </a>
                        <div className="volume-controls">
                           <input id="d8K/wrnDj8OVwrJ3NcKvw5TDp8O3w4J3e0rCo8Oaw5LCqGA=volume-control" className="volume-control slider" max="100" min="1" orient="vertical" type="range" value="100" />
                           <svg id="d8K/wrnDj8OVwrJ3NcKvw5TDp8O3w4J3e0rCo8Oaw5LCqGA=volume-indicator" className="volume-indicator" height="30" width="30" viewBox="0 0 24 24" xmlns="http://www.w3.org/2000/svg" style="fill: grey; margin: 2px;">
                              <path d="M3 10v4c0 .55.45 1 1 1h3l3.29 3.29c.63.63 1.71.18 1.71-.71V6.41c0-.89-1.08-1.34-1.71-.71L7 9H4c-.55 0-1 .45-1 1zm13.5 2c0-1.77-1.02-3.29-2.5-4.03v8.05c1.48-.73 2.5-2.25 2.5-4.02zM14 4.45v.2c0 .38.25.71.6.85C17.18 6.53 19 9.06 19 12s-1.82 5.47-4.4 6.5c-.36.14-.6.47-.6.85v.2c0 .63.63 1.07 1.21.85C18.6 19.11 21 15.84 21 12s-2.4-7.11-5.79-8.4c-.58-.23-1.21.22-1.21.85z">
                              </path>
                           </svg>
                        </div>
                        <a className="player-mytuner-logo" href="https://mytuner-radio.com?utm_source=widget&amp;utm_medium=player" rel="nofollow" style="display: inline-block; vertical-align: top;">
                           <img src="https://mytuner-radio.com/static/icons/widgets/MyTuner_Logo/MyTunerLogo_White.png" alt="Listen on myTuner radio!" style="height: 36px; width: 84px; vertical-align: middle;" />

                        </a>
                     </div>
                     <ul id="d8K/wrnDj8OVwrJ3NcKvw5TDp8O3w4J3e0rCo8Oaw5LCqGA=song-history" data-border="1" data-bordercolor="#00481f" style="width: 100%; background-color: rgb(238, 238, 238); max-height: calc(140px); padding: 0px; margin: 0px; overflow-y: scroll;">
                     </ul>
                  </div>
               </div> */}


            {/* <Header /> */}
            {/* <Hero /> */}
            {/* <Gallery /> */}
            {/* <Menu /> */}
            {/* <About /> */}
            {/* <Footer /> */}
         </div>
      </main >
   );
}