import { Model } from '@/components';
import { LiaTimesSolid } from 'react-icons/lia';
import { FcGoogle } from 'react-icons/fc';
import { MdFacebook } from 'react-icons/md';
import { AiOutlineMail } from 'react-icons/ai';
import { useState } from 'react';

const Auth = () => {
	const [createUser, setCreateUser] = useState(false);
	return (
		<Model>
			<section className='fixed z-50 inset-10 md:inset-y-[5rem] md:inset-x-[20rem] bg-n-1 overflow-auto shadow-lg rounded-lg'>
				<button className='absolute top-8 right-8 text-2xl opacity-50 hover:opacity-100'>
					<LiaTimesSolid />
				</button>

				<div className='flex-col-center gap-[2rem] pt-10'>
					<>
						<h3 className='h3 text-n-9'>
							{createUser ? 'Join Blogware' : 'Welcome Back'}
						</h3>
						<div className='flex-col-center gap-4 mx-auto w-fit'>
							<Button
								icon={<FcGoogle />}
								title={`${createUser ? 'Sign Up' : 'Sign In'} with Google`}
							/>
							<Button
								icon={<MdFacebook className='text-blue-600' />}
								title={`${createUser ? 'Sign Up' : 'Sign In'} with Facebook`}
							/>
							<Button
								icon={<AiOutlineMail className='text-rose-800' />}
								title={`${createUser ? 'Sign Up' : 'Sign In'} with Email`}
							/>
						</div>
						<p className=''>
							{createUser ? 'Already have an account?' : 'No Account?'}
							<button
								className='text-color-1 opacity-90 hover:opacity-100 font-semibold ml-2'
								onClick={() => setCreateUser(!createUser)}
							>
								{createUser ? 'Sign In' : 'Create One'}
							</button>
						</p>
						<p className='md:w-[30rem] mx-auto body-3 text-n-9 text-center mb-5'>
							Click &quot;Sign In&quot; to agree the Blogware's{' '}
							<a href='#' className='text-color-5'>
								Terms of services
							</a>{' '}
							and acknowledge that Blogware's{' '}
							<a href='#' className='text-color-5'>
								Privacy Policy
							</a>{' '}
							applies to you.
						</p>
					</>
				</div>
			</section>
		</Model>
	);
};

export default Auth;

const Button = ({ icon, title, click }) => {
	return (
		<button
			className='flex gap-4 items-center text-xl sm:w-[18rem] text-n-10  bg-n-1 hover:bg-n-2 rounded-full px-3 py-2 border border-n-8'
			onClick={click}
		>
			{icon}
			<span>{title}</span>
		</button>
	);
};
