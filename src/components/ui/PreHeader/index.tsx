
interface PreHeaderProps {
    nameTitle: string;
}

export const PreHeader: React.FC<PreHeaderProps> = ({ nameTitle }) => {
    return (
        <div className='flex gap-1 items-center'>
            <div className="w-5 h-10 bg-red-600 rounded-sm"></div>
            <h3 className=" font-bold text-red-500">{nameTitle}</h3>
        </div>
    );
};
