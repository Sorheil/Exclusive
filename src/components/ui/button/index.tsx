interface TextButtonProps {
    textButton: string;
    color?: string;
}

export const Button: React.FC<TextButtonProps> = ({ textButton, color }) => {
    const buttonColorClass = color ? `bg-${color}-500` : 'bg-red-500';

    return (
        <button
            className={`${buttonColorClass} text-white px-3 py-2 rounded w-min h-min text-nowrap`}
        >
            {textButton}
        </button>
    );
};
