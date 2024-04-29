import { Link } from "react-router-dom";
import Helmet from "helmet"
const ErrorPage = () => {
    return (
        <div className=" space-y-4 text-center lg:my-10">
            <Helmet><title>error</title></Helmet>
            <h1 className="text-[70px]">404</h1>
            <h2 className="text-[40px]">Oops! That page can’t be found</h2>
            <Link to="/"><button className="btn btn-outline btn-error mt-3">Go to Home</button></Link>
        </div>
    );
};

export default ErrorPage;