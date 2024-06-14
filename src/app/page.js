import About from "@/components/About";
import Footer from "@/components/Footer";
import Hero from "@/components/Hero";
import Hero2 from "@/components/Hero2";
import MenuBar from "@/components/MenuBar";
import TopNavbar from "@/components/TopNavbar";

export default function Home() {
  return (
    <div>
      <TopNavbar />
      <MenuBar />
      <Hero />
      <Hero2 />
      <About />
      <Footer />
    </div>
  );
}
