import { Helmet } from "react-helmet-async";
import Banner from "../../components/Banner";
import PersonalInfo from "../../PersonalInfo/PersonalInfo";
import MySkills from "../../components/MySkills";
import Edocation from "../../components/Edocation";



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
        <MySkills></MySkills>
        <Edocation></Edocation>
        </div>
            
        </>
    );
};

export default Home;