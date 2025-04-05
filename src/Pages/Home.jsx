import Herosection from "@/Components/Herosection/Herosection";
import Navbar from "@/Components/Navbar/Navbar";
import Service from "@/Components/Services/Services";
import Team from "@/Components/Team/Team";

function Home(){
    return (
        <>
            <Navbar/>
            <Herosection/>
            <Service/>
            <Team/>
        </>
    )
}

export default Home;