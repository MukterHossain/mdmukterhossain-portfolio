import MyInfo from "../components/MyInfo";
import MyInfoDetails from "../components/MyInfoDetails";


const PersonalInfo = () => {
    return (
        <div className="md:grid  md:grid-cols-3 justify-center gap-16 my-12 mx-5 md:mx-0">
            <div className="col-span-1 mb-6 md:mb-0">
                <MyInfo></MyInfo>
            </div>
            <div className="col-span-2">
                <MyInfoDetails></MyInfoDetails>
            </div>
        </div>
    );
};

export default PersonalInfo;