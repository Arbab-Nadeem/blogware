const Modal = ({ modal, setModal, children }) => {
	return (
		<>
			<div
				onClick={() => setModal(false)}
				className={`bg-n-1/80 fixed inset-0 z-10 ${modal ? 'visible opacity-100' : 'invisible opacity-0'} transition-all duration-200`}
			/>
			{children}
		</>
	);
};

export default Modal;
