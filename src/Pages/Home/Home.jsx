import { Helmet } from "react-helmet-async";
import Banner from "../../components/Banner";



const Home = () => {


    //<span className="loading loading-spinner loading-lg"></span>

    return (
        <>
        <Helmet>
            <title>MUKTER HOSSAIN || Home</title>
        </Helmet>
        <div>
        <Banner></Banner>
        </div>
            
        </>
    );
};

export default Home;