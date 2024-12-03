import { Link } from 'react-router-dom';
import {
	MdNotificationsNone,
	MdEditNote,
	MdKeyboardArrowDown,
} from 'react-icons/md';

import { Logo } from '@/assets';
import { Modal } from '@/components/common';
import { Search, UserModal } from '@/components/home';
import { useState } from 'react';

const HomeHeader = () => {
	const [modal, setModal] = useState(false);
	return (
		<header className='border-b border-n-5'>
			<div className='container-size h-[60px] flex-between'>
				{/* Left Side */}
				<div className='flex items-center gap-3'>
					<Link to={'/'}>
						<img src={Logo} alt='Logo' className='h-[2.5rem]' />
					</Link>
					<Search />
				</div>
				{/* Right Side */}
				<div className='flex items-center gap-3 sm:gap-7'>
					<Link
						to={'/write'}
						className='hidden md:flex items-center justify-start gap-1.5 text-n-8'
					>
						<span className='text-3xl'>
							<MdEditNote />
						</span>
						<span className='text-sm'>Write</span>
					</Link>
					<span className='text-n-8 text-2xl cursor-pointer'>
						<MdNotificationsNone />
					</span>
					<div className='flex items-center relative'>
						<div className='flex items-center' onClick={() => setModal(true)}>
							<img
								src='/profile.jpg'
								alt='Profile'
								className='w-[2.1rem] h-[2.1rem] object-cover rounded-full cursor-pointer'
							/>
							<span className='text-n-8 cursor-pointer'>
								<MdKeyboardArrowDown />
							</span>
						</div>
						<Modal modal={modal} setModal={setModal}>
							<div
								className={`${modal ? 'visible opacity-100' : 'invisible opacity-0'} transition-all duration-200`}
							>
								<UserModal />
							</div>
						</Modal>
					</div>
				</div>
			</div>
		</header>
	);
};

export default HomeHeader;
