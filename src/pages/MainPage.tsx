import { useEffect } from "react";
import { getCommon } from "../api/controllers/common-controller";


useEffect(() => {
    getCommon()
        .then((response) => {
            console.log(response);
        })
        .catch((e) => console.log(e));
}, []);

const MainPage = () => {
    return <div>
        Main Page
    </div>
}

export default MainPage;