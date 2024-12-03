import { discover, discoverActions } from '@/utils';

const Discover = () => {
	return (
		<div className='sticky top-[6rem]'>
			<div className='border-b border-b-n-5 pb-7'>
				<h2 className='font-semibold'>Discover more of what matters to you</h2>
				<div className='my-2 flex items-center gap-3 flex-wrap'>
					{discover.map((item, index) => (
						<button
							key={index}
							className='bg-n-5 py-1.5 px-3 text-sm rounded-full'
						>
							{item}
						</button>
					))}
				</div>
				<button className='text-color-1 text-sm py-3 hover:text-color-3 font-semibold'>
					See more topics
				</button>
			</div>
			<div className='flex items-center flex-wrap gap-3 leading-3 pt-8'>
				{discoverActions.map((action, i) => (
					<button key={i} className='text-color-3 text-sm'>
						{action}
					</button>
				))}
			</div>
		</div>
	);
};

export default Discover;
