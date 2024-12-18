import { LiaTimesSolid } from 'react-icons/lia';

import { Modal } from '@/components/common';
import { useRef } from 'react';
import { useState } from 'react';

const EditProfile = ({ editModal, setEditModal }) => {
	const [imgUrl, setImgUrl] = useState('');
	const imgRef = useRef(null);

	const openFile = () => {
		imgRef.current.click();
	};
	return (
		<Modal modal={editModal} setModal={setEditModal}>
			<div className='fixed top-[50%] left-[50%] transform -translate-x-1/2 -translate-y-1/2 w-[95%] md:w-[45rem] bg-n-1 mx-auto shadow-sm mt-[1rem] mb-[3rem] z-20 p-[2rem]'>
				<div className='flex justify-between items-center'>
					{/* header */}
					<div className='flex justify-between items-center w-full'>
						<h2 className='text-lg md:text-xl font-semibold md:font-bold'>
							Profile Information
						</h2>
						<button className='text-xl' onClick={() => setEditModal(false)}>
							{' '}
							<LiaTimesSolid />
						</button>
					</div>
				</div>
				{/* body */}
				<div className='mt-6'>
					<p className='pb-3 text-sm text-n-7'>Photo</p>
					<div className='flex gap-[2rem]'>
						<div className='w-[5rem]'>
							<img
								src={imgUrl ? imgUrl : '/profile.jpg'}
								alt='Profile'
								className='min-h-[3rem] min-w-[3rem] object-cover border border-n-6 rounded-full'
							/>
							<input
								type='file'
								hidden
								ref={imgRef}
								onChange={(e) =>
									setImgUrl(URL.createObjectURL(e.target.files[0]))
								}
								accept='image/jpeg, image/webp, image/png, image/jpg'
							/>
						</div>
						<div>
							<div className='flex gap-4 text-sm'>
								<button className='text-color-1' onClick={openFile}>
									Update
								</button>
								<button className='text-color-6'>Remove</button>
							</div>
							<p className='w-full sm:w-[20rem] text-n-7 text-sm pt-2'>
								Recommended: Square JPG, PNG, or GIF, at least 1,000 pixels per
								side.
							</p>
						</div>
					</div>
				</div>
				<div className='pt-[1rem] text-sm'>
					<div className='pb-2'>
						<label htmlFor='name' className='block pb-3'>
							Name<span className='mb-[0.1rem] text-color-6'>*</span>
						</label>
						<div className='px-3 py-2 rounded-[4px] border bg-n-2 w-full flex group focus-within:border-n-9 focus-within:ring-1 focus-within:ring-n-9 focus-within:outline-none'>
							<input
								type='text'
								placeholder='Your name'
								name='name'
								maxLength={32}
								className='p-0 flex-1 outline-none border-none w-full m-0 bg-transparent'
							/>
						</div>
						<p className='text-xs text-n-7 text-right pt-1'>
							Appears on your profile and in your responses. 3/32
						</p>
					</div>
					<div className='pb-2'>
						<label htmlFor='username' className='block pb-3'>
							Username
						</label>
						<div className='px-3 py-2 rounded-[4px] border bg-n-2 w-full flex group focus-within:border-n-9 focus-within:ring-1 focus-within:ring-n-9 focus-within:outline-none'>
							<input
								type='text'
								placeholder='Your username'
								name='username'
								maxLength={32}
								className='p-0 flex-1 outline-none border-none w-full m-0 bg-transparent'
							/>
						</div>
					</div>
					<div className='pb-2'>
						<label htmlFor='bio' className='block pb-3'>
							Short Bio<span className='mb-[0.1rem] text-color-6'>*</span>
						</label>
						<div className='px-3 py-2 rounded-[4px] border bg-n-2 w-full flex group focus-within:border-n-9 focus-within:ring-1 focus-within:ring-n-9 focus-within:outline-none'>
							<textarea
								placeholder='Your bio'
								name='bio'
								rows={3}
								maxLength={320}
								className='p-0 flex-1 outline-none border-none w-full m-0 bg-transparent resize-none'
							></textarea>
						</div>
						<p className='text-xs text-n-7 text-right pt-1'>
							Appears on your profile and next to your stories. 42/320
						</p>
					</div>
				</div>
				{/* footer */}
				<div className='flex items-center justify-end gap-4 pt-[2rem]'>
					<button className='border border-color-1 py-2 px-3 rounded-full text-color-1'>
						Cancel
					</button>
					<button className='bg-color-1 py-2 px-3 hover:bg-color-7 text-n-1 rounded-full font-semibold'>
						Save
					</button>
				</div>
			</div>
		</Modal>
	);
};

export default EditProfile;
