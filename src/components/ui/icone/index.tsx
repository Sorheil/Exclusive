import icons from './icons';
interface IconComponentProps {
    name: string;
    size?: number;
    color?: string;
}
const Icon: React.FC<IconComponentProps> = ({ name, size, color, ...props }) => {
    const SvgIcon = icons[name];
    
    if (!SvgIcon) {
        console.error(`Icône "${name}" non trouvée.`);
        return null;
    }

    return <SvgIcon size={size} color={color} {...props} />;
};

export default Icon;
