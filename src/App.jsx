import { Navigate } from 'react-router-dom';
import { Routes, Route } from 'react-router-dom';
import { ToastContainer } from 'react-toastify';
import 'react-toastify/dist/ReactToastify.css';

import { Home, HomeHeader } from '@/components/home';
import { Local, LocalHeader } from '@/components/local';
import { useAppContext } from '@/contexts/ContextProvider';
import { Profile } from '@/components/home';

function App() {
	const { currentUser } = useAppContext();
	return (
		<>
			{currentUser ? <HomeHeader /> : <LocalHeader />}
			<ToastContainer />
			<Routes>
				{currentUser && <Route path='/' element={<Home />} />}
				{!currentUser && <Route path='/local' element={<Local />} />}
				<Route path='/profile/:userId' element={<Profile />} />
				{
					<Route
						path='*'
						element={<Navigate to={!currentUser ? '/local' : '/'} />}
					/>
				}
			</Routes>
		</>
	);
}

export default App;
