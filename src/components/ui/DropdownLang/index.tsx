import './../../../assets/global.css'
import {
    DropdownMenu,
    DropdownMenuContent,
    DropdownMenuItem,
    DropdownMenuLabel,
    DropdownMenuSeparator,
    DropdownMenuTrigger,
} from "@/components/ui/dropdown-menu"

const DropdownLang: React.FC = () => {
    return (
        <DropdownMenu>
            <DropdownMenuTrigger>English</DropdownMenuTrigger>
            <DropdownMenuContent>
                <DropdownMenuItem>French</DropdownMenuItem>
            </DropdownMenuContent>
        </DropdownMenu>

    )
}
export default DropdownLang