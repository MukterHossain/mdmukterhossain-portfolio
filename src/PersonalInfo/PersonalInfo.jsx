import MyInfo from "../components/MyInfo";
import MyInfoDetails from "../components/MyInfoDetails";


const PersonalInfo = () => {
    return (
        <div className="md:grid  md:grid-cols-3 justify-center gap-16 mt-12">
            <div className="col-span-1">
                <MyInfo></MyInfo>
            </div>
            <div className="col-span-2">
                <MyInfoDetails></MyInfoDetails>
            </div>
        </div>
    );
};

export default PersonalInfo;