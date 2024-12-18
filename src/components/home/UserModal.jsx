import { BiSpreadsheet } from 'react-icons/bi';
import { HiOutlineChartBar } from 'react-icons/hi';
import { AiOutlineUser } from 'react-icons/ai';
import { IoLibraryOutline } from 'react-icons/io5';
import { MdEditNote } from 'react-icons/md';
import { Link } from 'react-router-dom';

import { useAppContext } from '@/contexts/ContextProvider';
import { secretEmail } from '@/utils/helper';
import { useNavigate } from 'react-router-dom';

const UserModal = ({ setModal }) => {
	const { currentUser, setCurrentUser } = useAppContext();
	const navigate = useNavigate();
	const userModal = [
		{
			id: 1,
			title: 'Profile',
			icon: <AiOutlineUser />,
			path: `/profile/${currentUser?.uid}`,
		},
		{
			id: 2,
			title: 'Library',
			icon: <IoLibraryOutline />,
			path: `/library`,
		},
		{
			id: 3,
			title: 'Stories',
			icon: <BiSpreadsheet />,
			path: `/stories`,
		},
		{
			id: 4,
			title: 'Stats',
			icon: <HiOutlineChartBar />,
			path: `/stats`,
		},
	];

	const handleLogout = () => {
		setCurrentUser(null);
		navigate('/local');
	};
	return (
		<section className='absolute w-[18rem] p-6 bg-n-2 right-0 top-[100%] shadow-lg rounded-md z-50 text-n-9'>
			<Link
				to={'/write'}
				className='flex md:hidden items-center justify-start gap-1.5 text-n-8'
			>
				<span className='text-3xl'>
					<MdEditNote />
				</span>
				<span className='text-sm'>Write</span>
			</Link>
			<div className='flex flex-col gap-4 border-b border-b-n-6 pb-5'>
				{userModal.map((item) => (
					<Link
						onClick={() => setModal(false)}
						key={item.id}
						to={item.path}
						className='flex gap-2 text-n-8 hover:text-n-9 transition-all'
					>
						<span className='flex items-center gap-2 text-xl '>
							{item.icon}
						</span>
						<span className='text-md'>{item.title}</span>
					</Link>
				))}
			</div>
			<button
				className='flex flex-col pt-5 cursor-pointer text-n-8 hover:text-n-9 transition-all'
				onClick={() => handleLogout()}
			>
				Sign Out
				<span className='text-sm'>{secretEmail(currentUser?.email)}</span>
			</button>
		</section>
	);
};

export default UserModal;
