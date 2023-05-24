import { useContext, useEffect, useState } from "react";
import { AuthContext } from "../../../providers/AuthProvider";
import { useLoaderData } from "react-router-dom";
import MyToyCard from "./MyToyCard";
import useTitle from "../../../useTitle";


const MyToy = () => {
	const [sortOrder, setSortOrder] = useState('ascending');
	const [myToys, setMyToys] = useState();
	const { user } = useContext(AuthContext);

	const toys = useLoaderData();
	console.log(toys)

	const userToys = toys?.filter(toy => user?.email === toy?.email);
	useEffect(() => {
		setMyToys(userToys)
		// eslint-disable-next-line react-hooks/exhaustive-deps
	}, [])

	useTitle('MyToy');
	const handleAscendingSort = () => {
		const sortedToys = [...userToys].sort((a, b) => a?.price.localeCompare(b?.price));
		console.log(sortedToys)
		setMyToys(sortedToys);
		setSortOrder('ascending');
	};

	const handleDescendingSort = () => {
		const sortedToys = [...userToys].sort((a, b) => b?.price.localeCompare(a?.price));
		console.log(sortedToys)
		setMyToys(sortedToys);
		setSortOrder('descending');
	};

	const handleDelete = id => {

		const proceed = confirm('Are you sure you want to delete?');
		if (proceed) {
			fetch(`https://disney-dolls-paradise-server-side.vercel.app/alltoys/${id}`, {
				method: 'DELETE',
			})
				.then(res => res.json())
				.then(data => {
					console.log(data);
					if (data.deletedCount > 0) {
						alert('deleted successful');
						const remaining = myToys?.filter(toy => toy?._id !== id);
						setMyToys(remaining);
					}
				})
		}
	}

	return (

		<div>


			<div className="md:px-64 px-4 py-8 md:py-16 bg-base-200">


				<h2 className="text-center font-medium md:text-4xl text-xl">My Toys: {myToys?.length}</h2>
				
				<div className="text-end md:pe-44 pe-4 py-6">
					<button className="bg-green-700 text-base-300 px-3 py-2 rounded-md" onClick={sortOrder === 'ascending' ? handleDescendingSort : handleAscendingSort}>
						{sortOrder === 'ascending' ? 'Click to Descending' : 'Click to Ascending'}
					</button>
				</div>
				<div className="overflow-x-auto w-full">
					<table className="table w-full">
						{/* head */}
						<thead>
							<tr>
								<th>Seller Name</th>
								<th>Toy Name</th>
								<th>Sub-Category</th>
								<th>Price</th>
								<th>Quantity</th>
								<th className="mx-8">Action ( Delete or Update ) </th>
							</tr>
						</thead>
						<tbody>
							{
								myToys?.map(myToy => <MyToyCard
									key={myToy._id}
									myToy={myToy}
									handleDelete={handleDelete}
								></MyToyCard>)
							}
						</tbody>
					</table>
				</div>



			</div>
		</div>
	);
};

export default MyToy;