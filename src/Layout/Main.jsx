import { Outlet } from 'react-router-dom';
import Footer from '../pages/Shared/Footer';
import Header from '../pages/Shared/Header';

const Main = () => {
	return (
		<div>
			<Header></Header>
			<div className='min-h-[calc(100vh-340px)]'>
				<Outlet></Outlet>
			</div>
			<Footer></Footer>
		</div>
	);
};

export default Main;