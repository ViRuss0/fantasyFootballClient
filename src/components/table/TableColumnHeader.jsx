import { useState, useContext } from 'react';
import { PlayersContext } from '../../context/PlayersProvider';

function TableColumnHaeader({ option }) {
	///SETS IF THE SORTING ORDER IS DESCENDING
	const [isDescending, setIsDescending] = useState(true);

	const { sortPlayers } = useContext(PlayersContext);

	const sortingHandler = () => {
		sortPlayers(option.value, isDescending);
		setIsDescending((prev) => !prev);
	};
	return (
		<th
			className={`p-2 text-center border-b border-slate-100 ${
				option.value === 'name' && 'sticky left-0 z-1 bg-slate-700 px-4'
			}`}
		>
			<button
				onClick={sortingHandler}
				className='flex gap-2 w-full items-center justify-center text-center whitespace-nowrap'
			>
				{option.label}
				{/* IT RENDERS A DIFFERENT ICON BASED ON THE SORTING ORDER - IF THERE ARE NO SORTING OPTIONS, THE ICON IS HIDDEN */}
				<span className='hover:text-white'>
					{isDescending ? (
						<svg
							xmlns='http://www.w3.org/2000/svg'
							fill='none'
							viewBox='0 0 24 24'
							strokeWidth={1.5}
							stroke='currentColor'
							className={`w-3 h-3 ${
								(option.value === 'position' ||
									option.value === 'name' ||
									option.value === 'team') &&
								'hidden'
							}`}
						>
							<path
								strokeLinecap='round'
								strokeLinejoin='round'
								d='M19.5 8.25l-7.5 7.5-7.5-7.5'
							/>
						</svg>
					) : (
						<svg
							xmlns='http://www.w3.org/2000/svg'
							fill='none'
							viewBox='0 0 24 24'
							strokeWidth={1.5}
							stroke='currentColor'
							className='w-3 h-3'
						>
							<path
								strokeLinecap='round'
								strokeLinejoin='round'
								d='M4.5 15.75l7.5-7.5 7.5 7.5'
							/>
						</svg>
					)}
				</span>
			</button>
		</th>
	);
}

export default TableColumnHaeader;
