import { HOME_URL } from '@/constants/paths'
import { Link } from 'react-router-dom'
import { Button } from '../ui/button'
import { Avatar, AvatarFallback, AvatarImage } from '../ui/avatar'
import { Languages, Menu, Paintbrush } from 'lucide-react'
import { Label } from "@/components/ui/label"
import {
    Sheet,
    SheetContent,
    SheetDescription,
    SheetFooter,
    SheetHeader,
    SheetTitle,
    SheetTrigger,
} from "@/components/ui/sheet"
import MaxWidthWrapperNavbar from './MaxWidthWrapperNavbar'
import { useLang } from '@/contexts/LangContext'
import { DropdownMenu, DropdownMenuContent, DropdownMenuLabel, DropdownMenuSeparator, DropdownMenuTrigger } from '../ui/dropdown-menu'

export interface NavLink {
    title: string,
    link: string
}

export interface General {
    name: string,
    bio: string,
    resume: string,
    links: NavLink[]
}
const Header = (props: General) => {
    const { lang, setLang } = useLang();
    return (
        <MaxWidthWrapperNavbar className="flex flex-col sticky top-0 z-50 bg-background">
            <nav className="mt-5 h-20 flex items-center justify-between px-2 md:px-6 border-3 rounded-xl">
                <div className='flex items-center justify-between gap-2 md:gap-16'>
                    <Link to={HOME_URL}>
                        <Avatar className='rounded-sm h-12 w-24'>
                            <AvatarImage src="https://github.com/shadcn.png" className="w-24" alt="@shadcn" />
                            <AvatarFallback>AA</AvatarFallback>
                        </Avatar>
                    </Link>

                    <div className="hidden lg:flex items-center gap-x-2">
                        {props.links.map((lk: NavLink, idx: number) => (
                            <Button key={idx} variant="reverse" className="text-sm font-bold bg-transparent border-0">
                                <Link to={lk.link}>
                                    {lk.title}
                                </Link>
                            </Button>
                        ))}
                    </div>
                </div>
                <div className="flex items-center justify-between gap-4">

                    <div className="flex lg:hidden bg-transparent p-3 rounded h-10 border-3 text-main-foreground border-border shadow-shadow hover:translate-x-boxShadowX hover:translate-y-boxShadowY hover:shadow-none">
                        <Sheet >

                            <SheetTrigger className="flex items-center">
                                <Menu />
                            </SheetTrigger>

                            <SheetContent className='w-full'>
                                <SheetHeader>
                                    <SheetTitle>{props.name}</SheetTitle>
                                    <SheetDescription>
                                        {props.bio}
                                    </SheetDescription>
                                </SheetHeader>
                                <div className="grid flex-1 auto-rows-min gap-6 px-4">
                                    {
                                        props.links.map((lk: NavLink, idx: number) =>
                                            <Link key={idx} to={lk.link} className="grid gap-1 hover:border-3 rounded p-3">
                                                <Label htmlFor="home">{lk.title}</Label>
                                            </Link>
                                        )
                                    }
                                </div>
                                <SheetFooter>
                                    <Button className='bg-ternary font-bold py-2 h-10 border-3'>
                                        {props.resume}
                                    </Button>
                                </SheetFooter>
                            </SheetContent>
                        </Sheet>
                    </div>

                    <Button className='bg-transparent p-2 h-10 border-3'>
                        <Paintbrush />
                    </Button>

                    <Button className='hidden lg:block bg-ternary font-bold py-2 h-10 border-3'>
                        {props.resume}
                    </Button>

                    <DropdownMenu>
                        <DropdownMenuTrigger asChild>
                            <Button className="bg-transparent p-2 h-10 border-3"><Languages /></Button>
                        </DropdownMenuTrigger>
                        <DropdownMenuContent className="w-56">
                            <DropdownMenuLabel className='p-0'>
                                <button onClick={() => setLang("en")} typeof='button' className={`border-0 w-full p-1.5 rounded-lg cursor-pointer ${lang == "en" && "bg-secondary"}`}>
                                    {lang == "en" ? "English" : "إنجليزي"}
                                </button>
                            </DropdownMenuLabel>
                            <DropdownMenuSeparator />
                            <DropdownMenuLabel className='p-0'>
                                <button onClick={() => setLang("ar")} typeof='button'
                                    className={`border-0 w-full p-1.5 rounded-lg cursor-pointer ${lang === "ar" && "bg-secondary"}`}>
                                    {lang == "en" ? "Arabic" : "عربي"}
                                </button>
                            </DropdownMenuLabel>


                        </DropdownMenuContent>
                    </DropdownMenu>

                    <Button className='bg-transparent font-bold py-2 h-10 border-3'>
                        {props.name}
                    </Button>

                </div>
            </nav>

        </MaxWidthWrapperNavbar>
    )
}

export default Header