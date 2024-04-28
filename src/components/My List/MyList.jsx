import { useLoaderData } from "react-router-dom";
import TravelCard from "../Travel card/TravelCard";

const MyList = () => {

    const travels = useLoaderData();
    return (
        <div className=" m-5 lg:m-20 ">
            <h3 className="text-5xl text-center my-2 mt-6 text-purple-600">My List</h3>
          <div className="grid md:grid-col-2 gap-4">
          {
                travels.map(travel => <TravelCard
                key={travel._id}
                travel={travel}
                ></TravelCard>)
            }
          </div>
        </div>
    );
};

export default MyList;