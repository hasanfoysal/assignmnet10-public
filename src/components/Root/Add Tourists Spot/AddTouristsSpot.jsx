import Swal from 'sweetalert2'
const AddTouristsSpot = () => {

    const AddSpot = event => {
        event.preventDefault();

        const form = event.target;

        const photo = form.photo.value;
        const tourists_spot_name = form.tourists_spot_name.value;
        const country_Name = form.country_Name.value;
        const location = form.location.value;
        const ShortDescription = form.ShortDescription.value;
        const Average_cost = form.Average_cost.value;
        const Seasonality = form.Seasonality.value;
        const travelTime = form.travelTime.value;
        const tota = form.tota.value;
        const email = form.email.value;
        const name = form.name.value;

        const x = {name,email,tota,travelTime,Seasonality,Average_cost,ShortDescription,location,country_Name,tourists_spot_name,photo}
        console.log(x);

        fetch('http://localhost:5000/travel', {
            method: 'POST',
            headers: {
                'content-type': 'application/json'
            },
            body: JSON.stringify(x)
        })
        .then(res => res.json())
        .then(data => {
            console.log(data);
            if(data.insertedId){
                Swal.fire({
                    title: 'Success!',
                    text: ' Added Successfully!',
                    icon: 'success',
                    confirmButtonText: 'Cool'
                  })

            }
        })


    }
    return (
        <div className="bg-red-100 lg:p-16 mb-4">
      <h2 className="text-3xl text-teal-700 text-center font-bold my-5">
        Add Tourists Spot
      </h2>
      <form onSubmit={AddSpot}>
        
        <div className="lg:flex lg:flex-row flex-col gap-5">
          <div className="form-control md:w-1/2">
            <label className="label">
              <span className="label-text">Image</span>
            </label>
            <label className="input-group">
              <input
                type="text"
                placeholder="Image"
                name="photo"
                className="input input-bordered w-full"
              />
            </label>
          </div>
          <div className="form-control md:w-1/2">
            <label className="label">
              <span className="label-text">Tourists_spot_name</span>
            </label>
            <label className="input-group">
              <input
                type="text"
                placeholder="tourists_spot_name"
                name="tourists_spot_name"
                className="input input-bordered w-full"
              />
            </label>
          </div>
        </div>
      
        <div className="lg:flex lg:flex-row flex-col gap-5">
          <div className="form-control md:w-1/2">
            <label className="label">
              <span className="label-text">Country_Name</span>
            </label>
            <label className="input-group">
              <input
                type="text"
                placeholder="country_Name"
                name="country_Name"
                className="input input-bordered w-full"
              />
            </label>
          </div>
          <div className="form-control md:w-1/2">
            <label className="label">
              <span className="label-text">Location</span>
            </label>
            <label className="input-group">
              <input
                type="text"
                placeholder="location"
                name="location"
                className="input input-bordered w-full"
              />
            </label>
          </div>
        </div>
      
        <div className="lg:flex lg:flex-row flex-col gap-5">
          <div className="form-control md:w-1/2">
            <label className="label">
              <span className="label-text">Short description</span>
            </label>
            <label className="input-group">
              <input
                type="text"
                placeholder="short description"
                name="ShortDescription"
                className="input input-bordered w-full"
              />
            </label>
          </div>
          <div className="form-control md:w-1/2">
            <label className="label">
              <span className="label-text">Average_cost</span>
            </label>
            <label className="input-group">
              <input
                type="text"
                placeholder="average_cost"
                name="Average_cost"
                className="input input-bordered w-full"
              />
            </label>
          </div>
        </div>
       
 
        <div className="lg:flex lg:flex-row flex-col gap-5">
          <div className="form-control md:w-1/2">
            <label className="label">
              <span className="label-text">Seasonality</span>
            </label>
            <label className="input-group">
              <input
                type="boolean"
                placeholder="seasonality"
                name="Seasonality"
                className="input input-bordered w-full"
              />
            </label>
          </div>
          <div className="form-control md:w-1/2">
            <label className="label">
              <span className="label-text">Travel_time</span>
            </label>
            <label className="input-group">
              <input
                type="text"
                placeholder="travel_time"
                name="travelTime"
                className="input input-bordered w-full"
              />
            </label>
          </div>
        </div>
      
        <div className="lg:flex lg:flex-row flex-col gap-5">
          <div className="form-control md:w-1/2">
            <label className="label">
              <span className="label-text">TotaVisitorsPerYear</span>
            </label>
            <label className="input-group">
              <input
                type="text"
                placeholder="totaVisitorsPerYear"
                name="tota"
                className="input input-bordered w-full"
              />
            </label>
          </div>
          <div className="form-control md:w-1/2">
            <label className="label">
              <span className="label-text">User Email</span>
            </label>
            <label className="input-group">
              <input
                type="text"
                placeholder="User Email"
                name="email"
                className="input input-bordered w-full"
              />
            </label>
          </div>
        </div>
        {/* form row */}
        <div className="mb-8">
          <div className="form-control">
            <label className="label">
              <span className="label-text"> User Name</span>
            </label>
            <label className="input-group">
              <input
                type="text"
                placeholder=" User Name"
                name="name"
                className="input input-bordered w-full"
              />
            </label>
          </div>
        </div>
        <input
          type="submit"
          value="Add"
          className="btn text-white bg-teal-700 btn-block"
        />
      </form>
    </div>
    );
};

export default AddTouristsSpot;