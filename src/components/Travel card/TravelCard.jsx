import { Link } from "react-router-dom";
import Swal from "sweetalert2";

const TravelCard = ({travel,travels, setTravels}) => {

    const { _id, name,email,ShortDescription,country_Name,tourists_spot_name,photo} = travel;

    const handleDelete = _id => {
        console.log(_id);
        Swal.fire({
            title: "Are you sure?",
            text: "You won't be able to revert this!",
            icon: "warning",
            showCancelButton: true,
            confirmButtonColor: "#3085d6",
            cancelButtonColor: "#d33",
            confirmButtonText: "Yes, delete it!"
          }).then((result) => {
            if (result.isConfirmed) {
            
            fetch(`https://travel-server-xi-ten.vercel.app/travel/${_id}`, {
                method:'DELETE'
            })
            .then(res => res.json() 
            .then(data => {
                console.log(data);
                if(data.deletedCount > 0){
                    Swal.fire({
                            title: "Deleted!",
                            text: "Your file has been deleted.",
                            icon: "success"
                          });
                          const remaining = travels.filter(tra => tra._id !== _id);
                          setTravels(remaining);

                }
            })
        )
          
            }
          });

    }
    return (
        <div className="card card-side bg-base-100 shadow-xl">
        <figure><img src={photo} alt="Movie"/></figure>
        <div className="flex justify-between w-full pr-4">
         <div>
         <h2 className="card-title">Name: {name}</h2>
          <p>Email:{email}</p>
          <p>Country_Name: {country_Name}</p>
          <p>Tourists_spot_name: {tourists_spot_name}</p>
          <p>Short Description {ShortDescription}</p>
         </div>
          
          <div className="card-actions justify-end">
          <div className="join join-vertical lg:join-horizontal space-x-2 space-y-4">
  <button onClick={() => handleDelete(_id)} className="btn join-item bg-orange-500">Delete</button>
  <Link to={`/update/${_id}`}><button className="btn join-item bg-green-500">Update</button></Link>
</div>
          </div>
        </div>
      </div>
    );
};

export default TravelCard;