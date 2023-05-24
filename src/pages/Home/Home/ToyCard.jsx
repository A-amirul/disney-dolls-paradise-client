import { Link } from "react-router-dom";

const ToyCard = ({ toy }) => {
	const { seller, toyName, sub_category, price, quantity,_id } = toy;
	return (
		<tr>
			<td>
				{seller}
			</td>
			<td>{toyName}</td>
			<td>{sub_category}</td>
			<td>{price}</td>
			<td>{quantity}</td>
			<th>
				<Link to={`/allToys/${_id}`}><button className=" bg-blue-600 text-white hover:bg-blue-800 px-4 py-2 rounded-md transition">View Details</button></Link>
			</th>
		</tr>
	);
};

export default ToyCard;