import { FaRegStar, FaStar } from "react-icons/fa";
import Rating from "react-rating";
import { Link } from "react-router-dom";
import AOS from 'aos';
import 'aos/dist/aos.css';
import { useEffect } from "react";

const CategoryCard = ({ item }) => {
	useEffect(() => {
		AOS.init();
	}, []);

	return (
		<div className=" bg-base-100 px-4 " data-aos-anchor-placement="top-center" data-aos="fade-up" data-aos-duration="1000" >
			<figure><img src={item?.photo} alt="Album" /></figure>
			<div className="card-body px-4">
				<h2 className="card-title pt-4">{item?.toyName}</h2>
				<p> <strong>Price:</strong> {item?.price}</p>
				<div className='flex items-center'> <strong className="pe-2">Ratings: </strong>
					<Rating
						placeholderRating={item?.rating}
						readonly
						emptySymbol={<FaRegStar></FaRegStar>}
						placeholderSymbol={<FaStar className='text-amber-500'></FaStar>}
						fullSymbol={<FaStar></FaStar>}
					></Rating>
					<p className='ms-2 font-bold'> {item?.rating}</p>
				</div>
				<Link to={`/allToys/${item?._id}`}><button className=" bg-blue-600 text-white hover:bg-blue-800 px-4 py-2 rounded-md transition">View Details</button></Link>

			</div>
		</div>
	);
};

export default CategoryCard;