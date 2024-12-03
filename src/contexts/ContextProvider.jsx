import { onAuthStateChanged } from 'firebase/auth';
import { useEffect } from 'react';
import { useContext, useState, createContext } from 'react';
import { auth } from '@/firebase';
import { Loading } from '@/components/common';

const AppContext = createContext(null);

const ContextProvider = ({ children }) => {
	const [currentUser, setCurrentUser] = useState(null);
	const [loading, setLoading] = useState(true);

	const value = { currentUser, setCurrentUser };

	useEffect(() => {
		const unsubscribe = onAuthStateChanged(auth, (user) => {
			if (user) {
				setCurrentUser(user);
			} else {
				setCurrentUser(null);
			}
			setLoading(false);
		});

		return () => unsubscribe();
	}, [currentUser]);

	return (
		<AppContext.Provider value={value}>
			{loading ? <Loading /> : children}
		</AppContext.Provider>
	);
};

const useAppContext = () => {
	const context = useContext(AppContext);
	if (!context) {
		throw new Error('useAppContext must be used within a ContextProvider');
	}
	return context;
};

export { ContextProvider, useAppContext };
