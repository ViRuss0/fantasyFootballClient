import { addLarge, addSmall } from '../../icons/icons';
//ROUNDEDN BUTTON USED IN THE APP - BY THE FAULT IT USES A "+" ICON BUT IT CAN BE CHANGED BY PASSING ANOTHER ICON AS A PROP. STYLE AND SIZE ICONS CAN BE USED TO CHANGE THE BUTTON LOOK. IT ALSO ACCEPTS OTHER PROPS, SUCH AS EVENTHANDLERS

function RoundedButton({ size, color, icon, ...rest }) {
	let styles;
	switch (color) {
		case 'green':
			styles = 'bg-emerald-600 hover:bg-emerald-800 text-slate-100';
			break;
		case 'light':
			styles = 'bg-slate-100 hover:bg-slate-300 text-slate-700';
			break;
		case 'red':
			styles = 'bg-red-500 hover:bg-red-700 text-white';
			break;
		default:
			styles = 'bg-slate-700 text-slate-100 hover:bg-slate-500';
	}
	return (
		<button
			{...rest}
			className={`${styles} flex items-center justify-center shadow ${
				size === 'lg' ? 'h-12 w-12' : 'h-6 w-6 '
			} rounded-full`}
		>
			{icon ? icon : size === 'lg' ? addLarge : addSmall}
		</button>
	);
}

export default RoundedButton;
