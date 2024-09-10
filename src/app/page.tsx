import Image from "next/image";

import Navbar from "./components/navbar/page";
import Header from "./components/header/header";
import AboutUniversity from "./components/aboutUniversity/aboutUniversity";
import Courses from "./components/courses/courses";
import BestFeatures from "./components/bestFeatures/bestFeatures";
import Footer from "./components/footer/footer";
export default function Home() {
  return (
    <main className="">
      <Navbar />
      <Header />
      <AboutUniversity />
      <Courses />
      <BestFeatures />
      <Footer />
    </main>
  );
}
