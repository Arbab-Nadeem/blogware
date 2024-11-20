import { Routes, Route } from 'react-router-dom';
import { Home, Local, HomeHeader, LocalHeader } from '@/components';
function App() {
	const auth = false;
	return (
		<>
			{auth ? <HomeHeader /> : <LocalHeader />}
			<Routes>
				<Route path='/' element={<Home />} />
				<Route path='/local' element={<Local />} />
			</Routes>
		</>
	);
}

export default App;
