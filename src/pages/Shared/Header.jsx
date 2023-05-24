import { Link } from "react-router-dom";
import logo from "/logo.png"
import { useContext } from "react";
import { AuthContext } from "../../providers/AuthProvider";
import userImg from "/user.png"

const Header = () => {
	const { user, logOut } = useContext(AuthContext);

	const handleLogOut = () => {
		logOut()
			.then(() => { })
			.catch(error => console.log(error))
	}
	const NavItems = <>
		<li> <Link to="/">Home</Link></li>
		<li><Link to="/allToys">All Toys</Link></li>
		{
			user?.email ?
				<>
					<li><Link to="myToy">My Toys</Link></li>
					<li><Link to="/addToy">Add a Toy</Link></li>
				</>
				:''

		}
		<li><Link to="/blog">Blog</Link></li>

	</>
	return (
		<div className="navbar bg-white shadow-sm md:px-64">
			<div className="navbar-start">
				<div className="dropdown">
					<label tabIndex={0} className="btn btn-ghost lg:hidden">
						<svg xmlns="http://www.w3.org/2000/svg" className="h-5 w-5" fill="none" viewBox="0 0 24 24" stroke="currentColor"><path strokeLinecap="round" strokeLinejoin="round" strokeWidth="2" d="M4 6h16M4 12h8m-8 6h16" /></svg>
					</label>
					<ul tabIndex={0} className="menu menu-compact dropdown-content mt-3 p-2 shadow bg-base-100 rounded-box w-52 font-medium">
						{NavItems}
					</ul>
				</div>
				<Link to="/" className="font-bold text-xl">
					<img className="mx-auto rounded-full" style={{ width: "80px", height: "70px" }} src={logo} alt="" />Disney<span className="text-amber-600">Dolls</span>
				</Link>
			</div>
			<div className="navbar-center hidden lg:flex">
				<ul className="menu menu-horizontal px-2 font-medium">
					{NavItems}
				</ul>
			</div>
			<div className="navbar-end">

				<div className='text-blue-600 hover:bg-blue-900 p-3 rounded-xl font-bold text-xl'>
					{
						user ?
							<img onClick={handleLogOut}
								className='w-10 h-10 rounded-full border bottom-2 border-black'
								title={user?.reloadUserInfo?.displayName ? user?.reloadUserInfo?.displayName :'user name not available'}
								src={user?.photoURL === null || '' ? userImg : user?.reloadUserInfo?.photoUrl} alt="" />
							:
							<Link to='/login'
							className={({ isActive }) => (isActive ? 'active' : 'default')}
							>
								Login
							</Link>
					}

				</div>

			</div>
		</div>
	);
};

export default Header;