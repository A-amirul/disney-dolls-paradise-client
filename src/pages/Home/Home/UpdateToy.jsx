import { useForm } from "react-hook-form";
import { useParams } from "react-router-dom";
import useTitle from "../../../useTitle";

const UpdateToy = () => {

	const { register, handleSubmit } = useForm();
	const { _id } = useParams();

	const handleUpdate = data => {
		fetch(`https://disney-dolls-paradise-server-side.vercel.app/updateToy/${_id}`, {
			method: "PUT",
			headers: { "Content-Type": "application/json" },
			body: JSON.stringify(data)
		})
			.then(res => res.json())
			.then(result => {
				console.log(result);
				if (result.matchedCount) {
					alert('Successfully Updated');
				}
			})
	}

	useTitle('Update Toy');

	return (
		<div className="md:px-96 px-4 mx-auto bg-base-200 md:py-36">
			<form onSubmit={handleSubmit(handleUpdate)}>
				<div className="grid grid-cols-1 gap-4">


					<div>
						<label className="font-medium" htmlFor="price">Price</label> <br />
						<input className="w-full py-2 rounded-lg px-4" placeholder="price($)" required{...register("price")} />
					</div>



					<div>
						<label className="font-medium" htmlFor="quantity">Available Quantity</label> <br />
						<input className="w-full py-2 rounded-lg px-4" placeholder="Quantity" required{...register("quantity")} />
					</div>



				</div>
				<div className="pt-8">
					<label className="font-medium" htmlFor="description">Description</label> <br />

					<textarea className="w-full rounded-lg p-4" name="description" cols="30" rows="5" placeholder="Write here about the Toy" required {...register("description")} />
				</div>

				<div className="w-1/3 mx-auto">
					<input className=" w-full py-4 rounded-lg px-4 bg-blue-400 hover:bg-blue-700 text-white font-semibold text-xl my-6" value="Update" type="submit" />
				</div>
			</form>

		</div>
	);
};

export default UpdateToy;