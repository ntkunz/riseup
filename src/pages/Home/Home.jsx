import "./Home.scss";
import { lazy } from "react";
import Header from "../../components/Header/Header";
import Tagline from "../../components/Tagline/Tagline";
const PhotoGallery = lazy(() => import("../../components/PhotoGallery/PhotoGallery"));
// import Catering from "../../components/Catering/Catering";
const Menu = lazy(() => import("../../components/Menu/Menu"));
const Carousel = lazy(() => import("../../components/Carousel/Carousel"));
const Footer = lazy(() => import("../../components/Footer/Footer"));



export default function Home() {

   return (
      <main className="container">
         <div className="home">
            <Header />
            <Tagline />
            <PhotoGallery />
            {/* <Catering /> */}
            <Menu />
            <Carousel />
            <Footer />
         </div>
      </main >
   );
}



