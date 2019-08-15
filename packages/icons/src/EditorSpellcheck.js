
/**
 * WordPress dependencies
 */
import { Path, SVG } from '@wordpress/components';

/**
 * Internal dependencies
 */
import { getIconClassName } from '../icon-class';

export default function EditorSpellcheck( { size = 20, className, ariaPressed, ...props } ) {
	const iconClass = getIconClassName( 'editor-spellcheck', className, ariaPressed );
	return (
		<SVG
			aria-hidden
			role="img"
			focusable="false"
			className={ iconClass }
			xmlns="http://www.w3.org/2000/svg"
			width={ size }
			height={ size }
			viewBox="0 0 20 20"
			{ ...props }
		>
			<Path d="M15.84 2.76c.25 0 .49.04.71.11.23.07.44.16.64.25l.35-.81c-.52-.26-1.08-.39-1.69-.39-.58 0-1.09.13-1.52.37-.43.25-.76.61-.99 1.08C13.11 3.83 13 4.38 13 5c0 .99.23 1.75.7 2.28s1.15.79 2.02.79c.6 0 1.13-.09 1.6-.26v-.84c-.26.08-.51.14-.74.19-.24.05-.49.08-.74.08-.59 0-1.04-.19-1.34-.57-.32-.37-.47-.93-.47-1.66 0-.7.16-1.25.48-1.65.33-.4.77-.6 1.33-.6zM6.5 8h1.04L5.3 2H4.24L2 8h1.03l.58-1.66H5.9zM8 2v6h2.17c.67 0 1.19-.15 1.57-.46.38-.3.56-.72.56-1.26 0-.4-.1-.72-.3-.95-.19-.24-.5-.39-.93-.47v-.04c.35-.06.6-.21.78-.44.18-.24.28-.53.28-.88 0-.52-.19-.9-.56-1.14-.36-.24-.96-.36-1.79-.36H8zm.98 2.48V2.82h.85c.44 0 .77.06.97.19.21.12.31.33.31.61 0 .31-.1.53-.29.66-.18.13-.48.2-.89.2h-.95zM5.64 5.5H3.9l.54-1.56c.14-.4.25-.76.32-1.1l.15.52c.07.23.13.4.17.51zm3.34-.23h.99c.44 0 .76.08.98.23.21.15.32.38.32.69 0 .34-.11.59-.32.75s-.52.24-.93.24H8.98V5.27zM4 13l5 5 9-8-1-1-8 6-4-3z" />
		</SVG>
	);
}
