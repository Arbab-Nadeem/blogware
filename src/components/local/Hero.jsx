import { Button } from '@/components/common';

const Hero = () => {
	return (
		<div className='w-full h-[calc(100vh-80px)] bg-gray-50'>
			<div className='flex flex-col md:flex-row items-center justify-between w-full container mx-auto px-4 h-full container-size'>
				{/* Left Section */}
				<div className='flex flex-col justify-center gap-8 w-full text-left mt-28 md:mt-0'>
					<h1 className='text-[80px] md:text-8xl lg:text-[100px] leading-none text-gray-900 font-serif'>
						Human <br />
						stories &amp; ideas
					</h1>
					<h3 className='text-xl md:text-2xl text-gray-600'>
						A place to read, write, and deepen your understanding
					</h3>
					<Button href='#' className='max-w-[150px]'>
						Start reading
					</Button>
				</div>

				{/* Right Section */}
				<div className='w-full md:w-1/2 flex justify-end relative'>
					<img
						alt='Brand illustration'
						src='https://miro.medium.com/v2/format:webp/4*SdjkdS98aKH76I8eD0_qjw.png'
						loading='eager'
						className='max-h-[400px] md:max-h-[500px] object-contain hidden md:block '
					/>
				</div>
			</div>
		</div>
	);
};

export default Hero;
