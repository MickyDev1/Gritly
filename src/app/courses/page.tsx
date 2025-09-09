import Cards from "@/components/Cards";
import Footer from "@/components/Footer";
import NavBar from "@/components/NavBar";
import SearchBar from "@/components/SearchBar";

export const metadata = {
    title: 'GRITLY',
};

export default function Courses() {
    return (
        <>
            <NavBar />
            <SearchBar />
            <Cards />
            <Footer />
        </>
    );
}