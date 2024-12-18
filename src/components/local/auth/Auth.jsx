import { useState } from 'react';
import { useNavigate } from 'react-router-dom';
import { LiaTimesSolid } from 'react-icons/lia';
import { FcGoogle } from 'react-icons/fc';
import { MdFacebook } from 'react-icons/md';
import { AiOutlineMail } from 'react-icons/ai';
import { signInWithPopup } from 'firebase/auth';
import { doc, getDoc, setDoc } from 'firebase/firestore';
import { toast } from 'react-toastify';

import { Modal } from '@/components/common';
import { SignIn, SignUp } from '@/components/local';
import { auth, provider, db } from '@/firebase';

const Auth = ({ modal, setModal }) => {
	const [createUser, setCreateUser] = useState(false);
	const [signInReq, setSignInReq] = useState('');
	const navigate = useNavigate();

	const googleAuth = async () => {
		try {
			const createUser = await signInWithPopup(auth, provider);
			const { user } = createUser;
			const userRef = doc(db, 'users', user.uid);
			const userDoc = await getDoc(userRef);

			if (!userDoc.exists()) {
				await setDoc(userRef, {
					userId: user.uid,
					username: user.displayName,
					email: user.email,
					userImg: user.photoURL,
					bio: '',
				});
				navigate('/');
				toast.success('User has been successfully signed in');
				setModal(false);
			}
		} catch (error) {
			toast.error(error.message);
		}
	};

	// Function to handle conditional rendering based on signInReq
	const renderContent = () => {
		switch (signInReq) {
			case '':
				return (
					<div className='flex flex-col gap-12 justify-center items-center'>
						<h3 className='h3 text-n-9'>
							{createUser ? 'Join Blogware' : 'Welcome Back'}
						</h3>
						<div className='flex-col-center gap-4 mx-auto w-fit'>
							<Button
								click={googleAuth}
								icon={<FcGoogle />}
								title={`${createUser ? 'Sign Up' : 'Sign In'} with Google`}
							/>
							<Button
								icon={<MdFacebook className='text-blue-600' />}
								title={`${createUser ? 'Sign Up' : 'Sign In'} with Facebook`}
							/>
							<Button
								click={() => setSignInReq(createUser ? 'sign-up' : 'sign-in')}
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
					</div>
				);

			case 'sign-in':
				return <SignIn setSignInReq={setSignInReq} />;

			case 'sign-up':
				return <SignUp setSignInReq={setSignInReq} />;

			default:
				return null;
		}
	};

	return (
		<Modal modal={modal} setModal={setModal}>
			<section
				className={`fixed z-50 inset-1 md:inset-y-[2rem] md:inset-x-[20rem] bg-n-1 overflow-auto shadow-lg rounded-lg sm:min-w-96 ${modal ? 'visible opacity-100' : 'invisible opacity-0'} transition-all duration-200`}
			>
				<button
					onClick={() => setModal(false)}
					className='absolute top-6 md:top-8 right-4 md:right-8 text-2xl opacity-50 hover:opacity-100'
				>
					<LiaTimesSolid />
				</button>
				<div className='flex-col-center gap-[1.4rem] pt-10 '>
					{renderContent()}
					<p className='w-[90%] mx-auto body-3 text-n-9 text-center mb-5'>
						Click &quot;Sign In&quot; to agree to Blogware's{' '}
						<a href='#' className='text-color-5'>
							Terms of services
						</a>{' '}
						and acknowledge that Blogware's{' '}
						<a href='#' className='text-color-5'>
							Privacy Policy
						</a>{' '}
						applies to you.
					</p>
				</div>
			</section>
		</Modal>
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
