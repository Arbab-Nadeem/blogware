import { Navigate } from 'react-router-dom';
import { Routes, Route } from 'react-router-dom';

import { Home, HomeHeader } from '@/components/home';
import { Local, LocalHeader } from '@/components/local';
import { useAppContext } from '@/contexts/ContextProvider';
import { ToastContainer } from 'react-toastify';
import 'react-toastify/dist/ReactToastify.css';

function App() {
	const { currentUser } = useAppContext();
	return (
		<>
			{currentUser ? <HomeHeader /> : <LocalHeader />}
			<ToastContainer />
			<Routes>
				{currentUser && <Route path='/' element={<Home />} />}
				{!currentUser && <Route path='/local' element={<Local />} />}
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
