import Footer from "../components/Footer";
import Navbar from "../components/Navbar";
import NotFound from "../components/NotFound";
import 'app/globals.css'

export default function Error(){
    return(
        <div>
            <Navbar/>
            <NotFound/>
            <Footer/>
        </div>
    );
}