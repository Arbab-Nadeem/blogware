import { GoSearch } from 'react-icons/go';
import { Modal } from '@/components/common';
import { useState } from 'react';

const Search = ({ modal, setModal }) => {
	return (
		<>
			{/* Modal Component */}
			<Modal modal={modal} setModal={setModal}>
				<div
					className={`absolute sm:relative inset-x-4 top-[4rem] sm:left-0 sm:top-0 
          ${
						modal
							? 'visible opacity-100'
							: 'invisible sm:visible sm:opacity-100 opacity-0'
					} transition-all duration-200`}
				>
					<div className='flex items-center gap-1 bg-n-4 px-2 rounded-full relative border border-n-5 z-10'>
						<div className='absolute top-1/2 transform -translate-y-1/2 left-4'>
							<span className='text-xl text-n-7'>
								<GoSearch />
							</span>
						</div>
						<input
							type='text'
							placeholder='Search Medium'
							className='w-full py-2 pl-10 rounded-full bg-transparent outline-none placeholder-n-7 text-gray-800 transition-all duration-300'
						/>
					</div>
				</div>
			</Modal>
		</>
	);
};

export default Search;
