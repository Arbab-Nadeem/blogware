import { useState } from 'react';
import { useNavigate } from 'react-router-dom';
import { toast } from 'react-toastify';
import { signInWithEmailAndPassword } from 'firebase/auth';

import { auth } from '@/firebase';

const SignIn = ({ setSignInReq }) => {
	const [formData, setFormData] = useState({
		email: '',
		password: '',
	});
	const [error, setError] = useState({});
	const [success, setSuccess] = useState(false);
	const [loading, setLoading] = useState(false);
	const navigate = useNavigate();

	const handleChange = (e) => {
		const { name, value } = e.target;
		setFormData((prev) => ({ ...prev, [name]: value }));

		setError((prevErrors) => {
			const updatedErrors = { ...prevErrors };
			delete updatedErrors[name];
			return updatedErrors;
		});
	};

	const handleSubmit = async (e) => {
		e.preventDefault();
		setSuccess(false);
		const { email, password } = formData;
		const newErrors = {};

		if (!email.trim()) newErrors.email = 'Email is required';
		if (!password.trim()) newErrors.password = 'Password is required';

		if (Object.keys(newErrors).length > 0) {
			setError(newErrors);
			return;
		}

		setError({});

		try {
			setLoading(true);
			await signInWithEmailAndPassword(auth, email, password);

			navigate('/');
			toast.success('User has been successfully signed In');
			setLoading(false);
		} catch (error) {
			toast.error(error.message);
			setLoading(false);
		}
	};
	return (
		<section className='py-3 w-full'>
			<div className='px-4 mx-auto max-w-7xl sm:px-6 lg:px-8'>
				<div className='max-w-2xl mx-auto text-center'>
					<h2 className='text-xl font-bold leading-tight text-black sm:text-2xl lg:text-3xl'>
						Welcome Back!
					</h2>
					<p className='max-w-xl mx-auto mt-4 text-base leading-relaxed text-n-7'>
						Login to your account
					</p>
				</div>

				<div className='relative max-w-md mx-auto mt-4'>
					<div className='overflow-hidden rounded-md'>
						<div className='px-4 py-4 sm:px-8'>
							{success && (
								<p className='success'>
									Sign up successful! You can now log in.
								</p>
							)}
							<form onSubmit={handleSubmit} method='POST'>
								<div className='space-y-5'>
									<div>
										<label
											htmlFor='email'
											className='text-base font-medium text-n-9'
										>
											{' '}
											Email address{' '}
										</label>
										<div className='mt-2 relative text-gray-400 focus-within:text-gray-600'>
											<div className='absolute inset-y-0 left-0 flex items-center pl-3 pointer-events-none'>
												<svg
													className='w-5 h-5'
													xmlns='http://www.w3.org/2000/svg'
													fill='none'
													viewBox='0 0 24 24'
													stroke='currentColor'
												>
													<path
														strokeLinejoin='round'
														strokeWidth='2'
														d='M16 12a4 4 0 10-8 0 4 4 0 008 0zm0 0v1.5a2.5 2.5 0 005 0V12a9 9 0 10-9 9m4.5-1.206a8.959 8.959 0 01-4.5 1.207'
													/>
												</svg>
											</div>

											<input
												type='email'
												name='email'
												id='email'
												value={formData.email}
												onChange={handleChange}
												placeholder='Enter email to get started'
												className='block w-full py-4 pl-10 pr-4 text-color-3 placeholder-n-7 transition-all duration-200 bg-n-1 border border-n-5 rounded-md focus:outline-none focus:border-color-3 caret-color-3'
											/>
										</div>
										{error.email && (
											<p className='text-red-600 text-xs px-2 pt-1'>
												{error.email}
											</p>
										)}
									</div>

									<div>
										<div className='flex items-center justify-between'>
											<label
												htmlFor='password'
												className='text-base font-medium text-gray-900'
											>
												{' '}
												Password{' '}
											</label>

											<a
												href='#'
												title=''
												className='text-xs font-medium text-color-5 transition-all duration-200 hover:text-color-1 focus:text-color-1 hover:underline'
											>
												{' '}
												Forgot password?{' '}
											</a>
										</div>
										<div className='mt-2 relative text-gray-400 focus-within:text-gray-600'>
											<div className='absolute inset-y-0 left-0 flex items-center pl-3 pointer-events-none'>
												<svg
													className='w-5 h-5'
													xmlns='http://www.w3.org/2000/svg'
													fill='none'
													viewBox='0 0 24 24'
													stroke='currentColor'
												>
													<path
														strokeLinejoin='round'
														strokeWidth='2'
														d='M12 11c0 3.517-1.009 6.799-2.753 9.571m-3.44-2.04l.054-.09A13.916 13.916 0 008 11a4 4 0 118 0c0 1.017-.07 2.019-.203 3m-2.118 6.844A21.88 21.88 0 0015.171 17m3.839 1.132c.645-2.266.99-4.659.99-7.132A8 8 0 008 4.07M3 15.364c.64-1.319 1-2.8 1-4.364 0-1.457.39-2.823 1.07-4'
													/>
												</svg>
											</div>

											<input
												type='password'
												name='password'
												id='password'
												value={formData.password}
												onChange={handleChange}
												placeholder='Enter your password'
												className='block w-full py-4 pl-10 pr-4 text-color-3 placeholder-n-7 transition-all duration-200 bg-n-1 border border-n-5 rounded-md focus:outline-none focus:border-color-3 caret-color-3'
											/>
										</div>{' '}
										{error.password && (
											<p className='text-red-600 text-xs px-2 pt-1'>
												{error.password}
											</p>
										)}
									</div>

									<div className='flex flex-row gap-3 justify-between items-baseline'>
										<button
											type='submit'
											className={`inline-flex items-center justify-center w-1/2 px-4 py-3 text-base font-semibold text-n-1 transition-all duration-200 bg-color-3 border border-transparent rounded-md focus:outline-none hover:bg-color-1 focus:bg-color-1 ${loading ? 'opacity-40 pointer-events-none' : ''}`}
										>
											Log in
										</button>
										<button
											onClick={() => setSignInReq('')}
											className='w-1/2 text-md text-end text-color-1 font-bold'
										>
											More Options?
										</button>
									</div>

									<div className='text-center'>
										<p className='text-base w-full text-gray-600'>
											Don’t have an account?{' '}
											<a
												href='#'
												title=''
												className='font-medium text-color-5 transition-all duration-200 hover:text-color-3 hover:underline'
											>
												Create a free account
											</a>
										</p>
									</div>
								</div>
							</form>
						</div>
					</div>
				</div>
			</div>
		</section>
	);
};

export default SignIn;
