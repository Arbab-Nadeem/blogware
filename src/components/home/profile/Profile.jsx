import { useState } from 'react';
import { LiaTimesSolid } from 'react-icons/lia';
import { GoSidebarExpand } from 'react-icons/go';

import {
	ProfileHome,
	ProfileLists,
	ProfileAbout,
} from '@/components/home/profile';
import { EditProfile } from '@/components/home';
import { Modal } from '@/components/common';
import { discoverActions } from '@/utils';

const Profile = () => {
	const activities = [
		{
			id: 1,
			title: 'Home',
			component: ProfileHome,
		},
		{
			id: 2,
			title: 'Lists',
			component: ProfileLists,
		},
		{
			id: 3,
			title: 'About',
			component: ProfileAbout,
		},
	];

	const [currentActive, setCurrentActive] = useState(activities[0]);
	const [modal, setModal] = useState(false);
	const [editModal, setEditModal] = useState(false);
	return (
		<section className='container-size flex gap-[4rem] relative'>
			<div className='mt-[5rem] flex-[2]'>
				<div className='flex items-end gap-4'>
					<h2 className='text-3xl sm:text-5xl font-bold capitalize'>
						Rafhi Meer
					</h2>
					<p className='text-n-7 font-semibold text-xs sm:text-sm'>
						Followers (2)
					</p>
					<p className='text-n-7 font-semibold text-xs sm:text-sm'>
						Followings (4)
					</p>
				</div>
				<div
					className={`flex items-center gap-5 mt-[1rem] mb-[3rem] border-b border-n-5`}
				>
					{activities.map((activity) => (
						<div
							key={activity.id}
							className={`py-[0.5rem] ${activity.title === currentActive.title ? 'border-b-[0.08rem] border-color-1/70 text-color-1' : 'text-n-9/90'} transition-all duration-200`}
						>
							<button
								onClick={() => setCurrentActive(activity)}
								className='font-semibold'
							>
								{activity.title}
							</button>
						</div>
					))}
				</div>
				<currentActive.component />
			</div>
			{/* Icon to open the sidebar modal */}
			<button
				className='fixed top-[50%] right-0 w-[2rem] h-[2rem] bg-n-5 text-n-9/80 grid place-items-center rounded-[4px] md:hidden'
				onClick={() => setModal(true)}
			>
				<GoSidebarExpand size={24} />
			</button>

			<Modal modal={modal} setModal={setModal}>
				<div
					className={`flex-[1] border-l border-n-5 p-[2rem] z-10 fixed right-0 top-0 bottom-0 w-[18rem] bg-n-1 md:relative ${modal ? 'translate-x-0' : 'translate-x-[100%] md:translate-x-0'} transition-all duration-500`}
				>
					{/* Icon to close the modal */}
					<div className='pb-4 text-right'>
						<button
							className='inline-block md:hidden'
							onClick={() => setModal(false)}
						>
							<LiaTimesSolid />
						</button>
					</div>
					{/* User Details */}
					<div className='sticky top-7 flex flex-col justify-between'>
						<img
							src='/profile.jpg'
							alt='Profile'
							className='w-[3.5rem] h-[3.5rem] object-cover rounded-full'
						/>
						<h2 className='py-2 font-semibold capitalize'> Rafhi meer</h2>
						<p className='text-n-7 first-letter:uppercase text-sm'>
							i'm wordpress developer.
						</p>
						<button
							onClick={() => setEditModal(true)}
							className='text-color-1 pt-6 text-sm w-fit font-semibold'
						>
							Edit Profile
						</button>
						<div className='flex-[1] flex items-center flex-wrap gap-3 pt-8'>
							{discoverActions.map((action, i) => (
								<button key={i} className='text-xs text-color-3'>
									{action}
								</button>
							))}
						</div>
					</div>
				</div>
			</Modal>
			{editModal && (
				<EditProfile editModal={editModal} setEditModal={setEditModal} />
			)}
		</section>
	);
};

export default Profile;
