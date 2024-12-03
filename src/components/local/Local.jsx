import { Hero, Trending, Discover } from '@/components/local';
import { Posts } from '@/components/common/posts';

const Local = () => {
	return (
		<>
			<Hero />
			<Trending />
			<div className='container-size py-7 flex flex-col-reverse md:flex-row gap-24'>
				<div className='flex-[1.5]'>
					<Posts />
				</div>
				<div className='flex-[1] relative'>
					<Discover />
				</div>
			</div>
		</>
	);
};

export default Local;
