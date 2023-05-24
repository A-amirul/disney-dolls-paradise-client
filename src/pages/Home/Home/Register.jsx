import { useContext } from "react";
import { Link } from "react-router-dom";
import { AuthContext } from "../../../providers/AuthProvider";
import useTitle from "../../../useTitle";

const Register = () => {
	const { createUser } = useContext(AuthContext);
	useTitle('Register');

	const handleRegister = event => {
		event.preventDefault();
		const form = event.target;
		const name = form.name.value;
		const email = form.email.value;
		const password = form.password.value;
		const photo = form.photo.value;
		console.log(name, email, password, photo);
		
		createUser(email, password)
			.then(result => {
				const user = result.user;
				console.log(user);
			})
		.catch(error=>console.log(error))
	}
	return (
		<div className="hero min-h-screen bg-base-200">
			<div>
				
				<div className="card flex-shrink-0 w-full max-w-sm shadow-2xl bg-base-100">
					<div className="card-body md:w-96">
						<h1 className="text-3xl font-semibold">Registration Now</h1>

						<form onSubmit={handleRegister}>
							<div className="form-control ">
								<label className="label">
									<span className="label-text">Name</span>
								</label>
								<input type="text" placeholder="name" name="name" className="input input-bordered" />
							</div>
							<div className="form-control ">
								<label className="label">
									<span className="label-text">Email</span>
								</label>
								<input type="email" placeholder="email" name="email" className="input input-bordered" />
							</div>
							<div className="form-control ">
								<label className="label">
									<span className="label-text">Password</span>
								</label>
								<input type="password" name="password" placeholder="password" className="input input-bordered" />
							</div>
							<div className="form-control">
								<label className="label">
									<span className="label-text">Photo URL</span>
								</label>
								<input type="text" name="photo" placeholder="URL" className="input input-bordered" />
								
							</div>
							<div className="form-control mt-6">
								<input className="btn bg-sky-600" type="submit" value="Register" />
							</div>
						</form>
						<label className="label">
							<small>Already Have an Account?<Link to="/login" className="text-blue-600 px-3 hover:text-blue-900 font-bold">Login</Link> </small>
						</label>
					</div>
				</div>
			</div>
		</div>
	);
};

export default Register;