import "./Home.scss";
import Header from "../../components/Header/Header";
import Tagline from "../../components/Tagline/Tagline";
import PhotoGallery from "../../components/PhotoGallery/PhotoGallery"
import Menu from "../../components/Menu/Menu";
import Carousel from "../../components/Carousel/Carousel";
import Footer from "../../components/Footer/Footer";

export default function Home() {

   return (
      <main className="container">
         <div className="home">
            <Header />
            <Tagline />
            <PhotoGallery />
            <Menu />
            <Carousel />
            <Footer />
         </div>
      </main >
   );
}



