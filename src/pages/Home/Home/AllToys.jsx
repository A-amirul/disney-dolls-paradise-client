import { useLoaderData } from "react-router-dom";
import ToyCard from "./ToyCard";
import useTitle from "../../../useTitle";
import { useEffect, useState } from "react";



const AllToys = () => {
	const [searchQuery, setSearchQuery] = useState('');
	const [searchResults, setSearchResults] = useState([]);
	
	const allToys = useLoaderData();

	const handleSearch = () => {
		const results = allToys.filter((item) =>
			item.toyName.toLowerCase().includes(searchQuery.toLowerCase())
		);
		setSearchResults(results);
	};

	useEffect(() => {
		setSearchResults(allToys);
	// eslint-disable-next-line react-hooks/exhaustive-deps
	}, [])
	
	useTitle('AllToys');
	
	return (
		<div className="md:px-64 px-4 py-8 md:py-16 bg-base-200">
			<h2 className="text-center font-medium md:text-4xl text-xl py-4">All Toys: {allToys.length}</h2>



			<div className="text-center py-4">
				<input
					type="text"
					value={searchQuery}
					onChange={(e) => setSearchQuery(e.target.value)}
					placeholder="Enter your search here"
					className="border border-gray-300 px-4 py-2 rounded-lg focus:outline-none focus:border-blue-500 w-1/3"
				/>
				<button
					onClick={handleSearch}
					className="bg-blue-500 hover:bg-blue-700 text-white font-bold py-2 px-4 rounded mt-2"
				>
					Search
				</button>
				{/* Render search results */}
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
							<th>Action (View Details)</th>
						</tr>
					</thead>
					<tbody>
						{
							searchResults?.map(toy => <ToyCard
								key={toy._id}
								toy={toy}
							></ToyCard>)
						}


					</tbody>
				</table>
			</div>

			
		</div>
	);
};

export default AllToys;