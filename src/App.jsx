import { Navigate } from 'react-router-dom';
import { Routes, Route } from 'react-router-dom';

import { Home, HomeHeader } from '@/components/home';
import { Local, LocalHeader } from '@/components/local';

function App() {
	const currentUser = false;
	return (
		<>
			{currentUser ? <HomeHeader /> : <LocalHeader />}
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
