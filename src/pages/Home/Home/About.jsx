
const About = () => {
	return (
		<section className="bg-gray-100 py-40 rounded-lg shadow-md px-4 md:px-64">
			<h2 className="text-3xl lg:text-5xl font-bold mb-4">About Us</h2>
			<p className="text-base lg:text-lg mb-6">Welcome to our company! We are a team of passionate individuals dedicated to providing high-quality products and services.</p>
			<p className="text-base lg:text-lg mb-6">Our mission is to create innovative solutions that solve real-world problems and make a positive impact on peoples lives.</p>
			<p className="text-base lg:text-lg mb-6">At our company, we value collaboration, creativity, and continuous learning. We believe in fostering a supportive and inclusive environment where everyone can thrive and contribute their unique perspectives.</p>
			<p className="text-base lg:text-lg mb-6">Whether you are a customer, partner, or team member, we are committed to delivering exceptional experiences and building long-lasting relationships.</p>
			<p className="text-base lg:text-lg mb-6">Thank you for choosing our company. We look forward to serving you!</p>
			<div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-4 gap-4">
				<div className="flex items-center justify-center">
					<img className="h-24 w-24 rounded-full" src="https://i.ibb.co/gRNKfgb/3.jpg" alt="Team Member 1" />
					<p className="text-lg m-2">John Doe</p>
				</div>
				<div className="flex items-center justify-center">
					<img className="h-24 w-24 rounded-full" src="https://i.ibb.co/rGqY6Yj/2.jpg" alt="Team Member 2" />
					<p className="text-lg m-2">Jane Smith</p>
				</div>
				<div className="flex items-center justify-center">
					<img className="h-24 w-24 rounded-full" src="https://i.ibb.co/BVPpsk7/1.jpg" alt="Team Member 3" />
					<p className="text-lg m-2">Alex Johnson</p>
				</div>
				<div className="flex items-center justify-center">
					<img className="h-24 w-24 rounded-full" src="https://i.ibb.co/4sn5jw8/4.jpg" alt="Team Member 4" />
					<p className="text-lg m-2">Sarah Thompson</p>
				</div>
			</div>
		</section>
	);
};

export default About;