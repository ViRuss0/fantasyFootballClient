import { useContext, useState, useEffect } from 'react';
import { PlayersContext } from '../context/PlayersProvider';

///HANDLES A SINGLE FILTER INPUT

function FilterInput({ option }) {
	const { filtered } = useContext(PlayersContext);
	const [val, setVal] = useState('');

	useEffect(() => {
		if (filtered === false) setVal('');
	}, [filtered]);

	return (
		<div className='flex gap-2 items-center text-slate-100 justify-between w-64  md:border-r border-slate-100 p-3 md:p-6 text-xs xl:text-sm  appearance-none'>
			<label className=' text-slate-100 outline-none'>{option.label}</label>
			<input
				type='number'
				value={val}
				onChange={(e) => setVal(e.target.value)}
				step='0.1'
				className='rounded-full p-2 w-16 outline-none text-center bg-slate-700 border border-slate-400'
				placeholder={`Max`}
				name={option.value}
			/>
		</div>
	);
}

export default FilterInput;
