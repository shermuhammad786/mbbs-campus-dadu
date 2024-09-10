import Footer from "@/app/components/footer/footer";
import Header from "@/app/components/header/header";
import Navbar from "@/app/components/navbar/page";
import Forth from "@/app/components/semesters/forth/forth";

import './forth.css'
export default function Home() {
    return (
        <div>
            <Navbar />
            <Header />
            <div className="forth-semesters-wrapper">
            <Forth />
            </div>
            <Footer />
        </div>
    )
}
