import { Link } from "react-router-dom";

const MyToyCard = ({ myToy, handleDelete }) => {
	const { seller, toyName, sub_category, price, quantity, _id } = myToy;
	
	
	
	return (
		
		<tr>
			<td>
				{seller}
			</td>
			<td>{toyName}</td>
			<td>{sub_category}</td>
			<td>{price}</td>
			<td>{quantity}</td>
			<td>
				<Link to={`/updateToy/${_id}`}> <button className=" bg-blue-600 text-white hover:bg-blue-800 px-8 py-2 mx-4 rounded-md transition">Edit</button> </Link>
		
				<button onClick={()=>handleDelete(_id)} className=" bg-blue-600 text-white hover:bg-blue-800 px-4 py-2 rounded-md transition">Delete</button>
			</td>
		</tr>
	);
};

export default MyToyCard;