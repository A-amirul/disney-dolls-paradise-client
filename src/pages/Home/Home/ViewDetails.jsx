import { useEffect, useState } from "react";
import { useParams } from "react-router-dom";
import Rating from 'react-rating';
import { FaRegStar, FaStar } from "react-icons/fa";
import useTitle from "../../../useTitle";

const ViewDetails = () => {
	const [toys, setToys] = useState();
	const [loading, setLoading] = useState(true);

	const { _id } = useParams();
	useEffect(() => {
		fetch("https://disney-dolls-paradise-server-side.vercel.app/alltoys")
			.then(res => res.json())
			.then(result => {
				setLoading(false);
				const singleToy = result?.find(result => result?._id === _id)
				setToys(singleToy)
			})
	}, [_id])

	useTitle('View Details');


	return (
		<div className="md:px-64 p-4 md:w-2/3 mx-auto my-8">

			{
				loading ? <>
					<p>loading....</p>
				</> : <>

					<div className="card lg:card-side bg-base-100 shadow-xl">
						<figure><img src={toys?.photo} alt="Album" /></figure>
						<div className="card-body px-4">
							<h2 className="card-title pt-4">{toys?.toyName}</h2>
							<p><strong>Seller Name:</strong> {toys?.seller}</p>
							<p><strong>Seller Email:</strong> {toys?.email}</p>
							<p> <strong>Price:</strong> {toys?.price}</p>
							<p> <strong>Available Quantity:</strong> {toys?.quantity}</p>
							<div className='flex items-center'> <strong className="pe-2">Ratings: </strong>
								<Rating
									placeholderRating={toys?.rating}
									readonly
									emptySymbol={<FaRegStar></FaRegStar>}
									placeholderSymbol={<FaStar className='text-amber-500'></FaStar>}
									fullSymbol={<FaStar></FaStar>}
								></Rating>
								<p className='ms-2 font-bold'> {toys?.rating}</p>
							</div>
							<div className="md:pb-8">
								<p><strong>Details</strong></p>
								<p>{toys?.description}</p>
							</div>

						</div>
					</div>
				</>
			}


		</div>
	);
};

export default ViewDetails;