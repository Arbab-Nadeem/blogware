import { useEffect, useState } from 'react';
import { Link } from 'react-router-dom';

import { Logo } from '@/assets';
import { nav } from '@/utils';
import { Auth } from '@/components/local';
import { Button } from '@/components/common';

const LocalHeader = () => {
	const [isActive, setIsActive] = useState(false);
	const [modal, setModal] = useState(false);

	useEffect(() => {
		const scrollMe = () => {
			window.scrollY > 50 ? setIsActive(true) : setIsActive(false);
		};
		window.addEventListener('scroll', scrollMe);
		return () => window.removeEventListener('scroll', scrollMe);
	}, []);
	return (
		<header
			className={`border-b transition-all duration-200 ${isActive ? 'bg-n-2' : 'bg-n-1'} border-n-7 sticky z-50 top-0`}
		>
			<div className='container-size h-[70px] flex-between'>
				<Link to={'/'}>
					<img src={Logo} alt='Logo' className='h-[2.5rem]' />
				</Link>
				<div className='flex items-center gap-5'>
					<div className='hidden text-sm sm:flex items-center gap-5'>
						{nav.map((link, index) => (
							<Link to={link.path} key={index}>
								{link.title}
							</Link>
						))}
					</div>
					<div className='relative'>
						<button
							className='hidden sm:flex items-center gap-5'
							onClick={() => setModal(true)}
						>
							Sign In
						</button>
						<Auth modal={modal} setModal={setModal} />
					</div>
					<Button
						onClick={() => setModal(true)}
						className={`${isActive ? 'bg-color-3' : 'bg-color-1'}`}
					>
						Get Started
					</Button>
				</div>
			</div>
		</header>
	);
};

export default LocalHeader;
