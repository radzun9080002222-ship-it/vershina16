import Header from "./components/Header";
import Hero from "./components/Hero";
import Manifesto from "./components/Manifesto";
import Services from "./components/Services";
import SeoCopy from "./components/SeoCopy";
import Cases from "./components/Cases";
import Process from "./components/Process";
import Trust from "./components/Trust";
import Rent from "./components/Rent";
import Faq from "./components/Faq";
import FinalCta from "./components/FinalCta";
import Footer from "./components/Footer";
import FloatBar from "./components/FloatBar";

export default function App() {
  return (
    <>
      <Header />
      <main>
        <Hero />
        <Manifesto />
        <Services />
        <SeoCopy />
        <Cases />
        <Process />
        <Trust />
        <Rent />
        <Faq />
        <FinalCta />
      </main>
      <Footer />
      <FloatBar />
    </>
  );
}
