import { Helmet } from "react-helmet-async";
import Banner from "../../components/Banner";
import PersonalInfo from "../../PersonalInfo/PersonalInfo";



const Home = () => {


    //<span className="loading loading-spinner loading-lg"></span>

    return (
        <>
        <Helmet>
            <title>MUKTER HOSSAIN || Home</title>
        </Helmet>
        <div className="">
        <Banner></Banner>
        <PersonalInfo></PersonalInfo>
        <p>Hie jfjj</p>
        </div>
            
        </>
    );
};

export default Home;