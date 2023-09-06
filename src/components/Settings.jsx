import { useContext, useState } from 'react';
import { UsersContext } from '../context/UsersProvider';
import { Link } from 'react-router-dom';
import { toast } from 'react-toastify';

import axios from 'axios';

import UploadForm from './UploadForm';
import RoundedButton from './RoundedButton';
import Setting from './Setting';
import { home } from '../icons/icons';
import Accordion from './Accordion';

function Settings() {
	const { setIsLoggedIn, userSettings } = useContext(UsersContext);

	const logoutHandler = async () => {
		console.log('logout');
		try {
			const respObj = await toast.promise(
				axios.get('http://localhost:8080/api/users/logout', {
					withCredentials: true,
				}),
				{
					pending: 'Verifica credenziali',
					success: `Logout effettuato con successo!`,
					error: {
						render({ data }) {
							return;
						},
					},
				}
			);
			setIsLoggedIn(false);
		} catch (err) {
			alert(err.message);
		}
	};

	const items = [
		{
			title: 'Modifica budget',
			id: 'budget',
			content: <Setting setting={'budget'} value={userSettings.budget} />,
		},
		{
			title: 'Modifica numero giocatori',
			id: 'Giocatori',
			content: <Setting setting={'players'} value={userSettings.players} />,
		},
		{ title: 'Aggiorna lista', id: 'update', content: <UploadForm /> },
		{
			title: 'Logout',
			id: 'logout',
			content: (
				<button
					onClick={logoutHandler}
					className='font-semibold text-md text-blue-600 hover:text-blue-800 hover:underline'
				>
					Esegui logout
				</button>
			),
		},
	];
	return (
		<div className='w-full h-screen flex items-center justify-center gap-2 flex-col text-slate-700'>
			<div className='p-10 w-96  bg-slate-100 rounded flex items-center flex-col justify-center gap-10'>
				<Accordion items={items} />
			</div>
			<div className='fixed flex flex-col gap-4 top-1 left-1 md:top-auto md:left-auto md:bottom-6 md:right-6'>
				<Link to='/'>
					<RoundedButton icon={home} size='lg' color='light' />
				</Link>
			</div>
		</div>
	);
}

export default Settings;
