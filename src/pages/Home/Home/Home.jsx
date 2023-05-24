import { Link, useLoaderData } from "react-router-dom";
import useTitle from "../../../useTitle";
import banner from "/banner.gif"
import { Tab, Tabs} from 'react-tabs';
import 'react-tabs/style/react-tabs.css';
import { useEffect, useState } from "react";
import CategoryCard from "./CategoryCard";
import AOS from 'aos';
import 'aos/dist/aos.css';
import img from "/extra.gif";



const Home = () => {
	const [selectedValue, setSelectedValue] = useState('all');
	const toys = useLoaderData();
	const filteredData = selectedValue === 'all' ? toys : toys?.filter((item) => item?.sub_category === selectedValue);

	const handleTabChange = (value) => {
		setSelectedValue(value);
	};

	const filteredItems = selectedValue === 'all' ? toys : toys.filter(item => item.sub_category === selectedValue);

	useTitle('Home');
	console.log(filteredData)

	useEffect(() => {
		AOS.init();
	}, []);

	return (
		<div className=" bg-base-200">
			{/* banner */}
			<div className="bg-cover  bg-no-repeat md:py-72 py-6 bg-[#2D4764]" style={{
				backgroundImage: `url(${banner})`
			}}>
				<div>
					<h1 className="md:text-5xl text-md text-white font-medium mb-4 capitalize md:px-64 px-4">Super <span className="text-amber-500">Collection</span> For <br /> Disney <span className="text-amber-500">Dolls </span>Paradise</h1>
					<p className="md:px-64 md:w-1/2 text-sm md:text-lg px-4 text-base-100">Explore the Magical World of Disney Dolls Paradise! <br /> Join us on this enchanting journey as we celebrate the beloved characters that have touched our hearts.</p>
					<div className="md:mt-12 mt-4">
						<Link to="/" className="bg-primary border border-primary text-white md:mx-64 md:px-8 px-4 md:py-3 py-2 mx-4 md:font-medium rounded-md hover:bg-transparent hover:text-primary transition ">Shop Now</Link>
					</div>
				</div>
			</div>

			{/* Gallery Section */}
			<div className="md:px-64 px-4 pb-8">
				<h1 className="text-center text-4xl font-semibold py-8  md:mt-8 text-black" >Dolls Gallery</h1>
				<div className="grid grid-cols-2 md:grid-cols-4 gap-4" data-aos-anchor-placement="top-center" data-aos="fade-up" data-aos-duration="1000" >
					<img src="https://i.ibb.co/2tF5JD9/img4.jpg" alt=""/>
					<img src="https://i.ibb.co/MhKT75x/img5.jpg" alt="" />
					<img src="https://i.ibb.co/xmdY1n7/img1.jpg" alt="" />
					<img src="https://i.ibb.co/Rykm2v5/img2.jpg" alt="" />
					<img src="https://i.ibb.co/D44MRSX/img3.jpg" alt="" />
					<img src="https://i.ibb.co/ZTM3KjJ/img2.jpg" alt="" />
					<img src="https://i.ibb.co/NF7jq9C/img3.jpg" alt="" />
					<img src="https://i.ibb.co/TTVkkD0/img3.webp" alt="" />
					<img src="https://i.ibb.co/wgsWtDz/img1.webp" alt="" />
					<img src="https://i.ibb.co/hf0Jr3H/img2.webp" alt="" />
					<img src="https://i.ibb.co/ZTM3KjJ/img2.jpg" alt="" />
					<img src="https://i.ibb.co/wgsWtDz/img1.webp" alt="" />
				</div>

			</div>

			{/* Category Tab */}
			<div className="md:px-64 py-8">
				<h1 className="text-4xl font-medium py-4 text-center">Shop by Category</h1>

				<Tabs className="text-center font-bold text-xl py-3" >
					<Tab  className={`tab ${selectedValue === 'all' ? 'active' : ''}`} onClick={() => handleTabChange('all')}>
						All
					</Tab>
					<Tab  className={`tab ${selectedValue === 'princess' ? 'active' : ''}`} onClick={() => handleTabChange('princess')}>
						Disney Princess
					</Tab>
					<Tab className={`tab ${selectedValue === 'frozen' ? 'active' : ''}`} onClick={() => handleTabChange('frozen')}>
						Frozen Dolls
					</Tab>
					<Tab className={`tab ${selectedValue === 'animation' ? 'active' : ''}`} onClick={() => handleTabChange('animation')}>
						Animation Characters
					</Tab>
				</Tabs>

				<hr />

				<div className="grid md:grid-cols-3 gap-4 py-8">
					{filteredItems?.map(item => <CategoryCard
						key={item._id}
						item={item}
					></CategoryCard>)}
				</div>


			</div>

			{/* Extra Section-1 */}

			<div className="md:px-72 py-8">
				<div className="card lg:card-side" data-aos-anchor-placement="top-center" data-aos="fade-up" data-aos-duration="1000">
					<div className="card-body">
						<h2 className="card-title text-sky-800 text-2xl md:text-6xl">Best dolls finder  Website <br /> Disney Dolls Paradise </h2>
						<p className="md:w-3/4 py-3 md:text-xl">Do you want a reborn or a Disney doll? Which size? Any special hair color? Here is available Disney Princess, Frozen Dolls and animation character dolls. Find the doll you are looking for with the exclusive Dolls And Dolls Advanced Search Engine.</p>
							<button className="btn btn-outline w-1/2 md:w-1/4">Shop Now</button>
					</div>
					<figure className="md:w-1/2" ><img src={img} /></figure>
				</div>
			</div>

			{/* Extra section-2 */}
			<section className=" py-8 bg-base-300" data-aos-anchor-placement="top-center" data-aos="fade-up" data-aos-duration="1000">
				<div className="max-w-5xl mx-auto px-4 sm:px-6 lg:px-8">
					<div className="text-center">
						<h2 className="text-3xl leading-8 font-extrabold tracking-tight text-gray-900 sm:text-4xl">
							Contact Us
						</h2>
						<p className="mt-4 max-w-2xl text-xl text-gray-500 lg:mx-auto">
							We would love to hear from you. Send us a message and we will get back to you as soon as possible.
						</p>
					</div>
					<div className="mt-12">
						<form>
							<div className="grid grid-cols-1 gap-y-6 sm:grid-cols-2 sm:gap-x-8">
								<div>
									<label htmlFor="name" className="block text-sm font-medium text-gray-700">
										Name
									</label>
									<div className="mt-1">
										<input
											type="text"
											id="name"
											className="py-3 px-4 block w-full shadow-sm focus:ring-indigo-500 focus:border-indigo-500 border-gray-300 rounded-md"
										/>
									</div>
								</div>
								<div>
									<label htmlFor="email" className="block text-sm font-medium text-gray-700">
										Email
									</label>
									<div className="mt-1">
										<input
											type="email"
											id="email"
											className="py-3 px-4 block w-full shadow-sm focus:ring-indigo-500 focus:border-indigo-500 border-gray-300 rounded-md"
										/>
									</div>
								</div>
								<div className="sm:col-span-2">
									<label htmlFor="message" className="block text-sm font-medium text-gray-700">
										Message
									</label>
									<div className="mt-1">
										<textarea
											id="message"
											rows="4"
											className="py-3 px-4 block w-full shadow-sm focus:ring-indigo-500 focus:border-indigo-500 border-gray-300 rounded-md"
										></textarea>
									</div>
								</div>
								<div className="sm:col-span-2 text-center">
									<button className="btn bg-blue-500  md:w-3/4">Submit</button>
								</div>
							</div>
						</form>
					</div>
				</div>
			</section>


		</div >
	);
};

export default Home;