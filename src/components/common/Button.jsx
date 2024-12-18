const Button = ({ children, className, onClick, href }) => {
	return (
		<>
			{onClick && (
				<a
					onClick={onClick}
					className={`${className}  rounded-full px-5 py-2.5 overflow-hidden group bg-color-1 relative hover:bg-gradient-to-r hover:from-black hover:to-color-3 text-n-1 hover:ring-2 hover:ring-offset-2 hover:ring-color-3 transition-all ease-out duration-100`}
				>
					<span className='absolute right-0 w-8 h-32 -mt-12 transition-all duration-1000 transform translate-x-12 bg-n-1 opacity-10 rotate-12 group-hover:-translate-x-40 ease' />
					<span className='relative'>{children}</span>
				</a>
			)}
			{href && (
				<a
					href={href}
					className={`${className}  rounded-full px-5 py-2.5 overflow-hidden group bg-color-1 relative hover:bg-gradient-to-r hover:from-black hover:to-color-3 text-n-1 hover:ring-2 hover:ring-offset-2 hover:ring-color-3 transition-all ease-out duration-100`}
				>
					<span className='absolute right-0 w-8 h-32 -mt-12 transition-all duration-1000 transform translate-x-12 bg-n-1 opacity-10 rotate-12 group-hover:-translate-x-40 ease' />
					<span className='relative'>{children}</span>
				</a>
			)}
		</>
	);
};

export default Button;
