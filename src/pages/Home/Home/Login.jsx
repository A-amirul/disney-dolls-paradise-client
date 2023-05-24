import { Link, useLocation, useNavigate } from "react-router-dom";
import { FaGoogle } from "react-icons/fa";
import { useContext, useState } from "react";
import { AuthContext } from "../../../providers/AuthProvider";
import { GoogleAuthProvider, getAuth, signInWithPopup } from "firebase/auth";
import useTitle from "../../../useTitle";
const provider = new GoogleAuthProvider();
const auth = getAuth();

const Login = () => {
	const [error, setError] = useState('');
	const { signIn } = useContext(AuthContext);
	const navigate = useNavigate();
	const location = useLocation();
	const from = location?.state?.from?.pathname || '/'
	useTitle('Login');

	const handleLogin = event => {
		event.preventDefault();
		const form = event.target;
		const email = form.email.value;
		const password = form.password.value;
		console.log(email, password);

		signIn(email, password)
			.then(result => {
				const loggedUser = result.user;
				console.log(loggedUser);
				navigate(from, { replace: true })
			})
			.catch(error => setError(error));
	}

	const handleGoogleSignIn = () => {
		signInWithPopup(auth,provider)
			.then((result) => {
				const loggedUser = result.user;
				console.log(loggedUser);
				navigate(from, { replace: true })
			})
			.catch((error) => {
				setError(error.message);
			});
	};
	return (
		<div className="hero min-h-screen bg-base-200">
			<div className="hero-content flex-col lg:flex-row-reverse">
				<div className="text-center lg:text-left w-1/2 mx-auto">
					<h1 className="text-3xl font-semibold">Create Your Account</h1>
					<p className="py-6">By registering at www.DisneyDolls Paradise.com, you will be able to shop and access the status and history of your orders. Create your new account easily.</p>
					<div className="form-control mt-6">
						<Link to="/register" className="btn bg-sky-600 rounded-full">Register Here</Link>
					</div>
				</div>
				
				<div className="card flex-shrink-0 w-full max-w-sm shadow-2xl bg-base-100">
					<div className="card-body">
						<h1 className="text-3xl font-semibold">Login your Account</h1>
						<form onSubmit={handleLogin}>
							<div className="form-control">
								<label className="label">
									<span className="label-text">Email</span>
								</label>
								<input type="email" name="email" placeholder="email" className="input input-bordered" />
							</div>
							<div className="form-control">
								<label className="label">
									<span className="label-text">Password</span>
								</label>
								<input type="password" name="password" placeholder="password" className="input input-bordered" />
								<label className="label">
									<Link className="label-text-alt link link-hover">Forgot password?</Link>
								</label>
							</div>
							<p>{error}</p>
							<div className="form-control mt-6">
								<input className="btn bg-sky-600 rounded-full" type="submit" value="Login" />
							</div>
						</form>
						<hr className="my-4" />
						<button onClick={handleGoogleSignIn} className="btn btn-outline btn-success rounded-full"><FaGoogle className="me-2"></FaGoogle>Continue With Google</button>
					</div>
				</div>
			</div>
		</div>
	);
};

export default Login;