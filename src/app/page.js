import Add from "./Components/Add";
import Content from "./Components/Content";
import Feature from "./Components/Feature";
import Footer from "./Components/Footer";
import Header from "./Components/Header";
import HeroBanner from "./Components/HeroBanner";
import Testimonials from "./Components/Testimonials";
import Top from "./Components/Top";

export default function Home() {
  return (
    <main>
      <Header />
      <HeroBanner />
      <Feature />
      <Add />
      <Testimonials />
      <Content />
      <Footer />
      <Top />
    </main>
  );
}