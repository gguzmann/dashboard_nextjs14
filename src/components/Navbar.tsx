'use client'
import Image from "next/image"
import Link from "next/link"
import { IconHome } from "./icons/IconHome"
import { IconTransaction } from "./icons/IconTransaction"
import { IconAccounts } from "./icons/IconAccounts"
import { usePathname } from "next/navigation"

const links = [
    { name: 'Home', href: '/dashboard/home', icon: <IconHome /> },
    { name: 'Facturas', href: '/dashboard/facturas', icon: <IconTransaction /> },
    { name: 'Librerias', href: '/dashboard/librerias', icon: <IconAccounts /> },
]
export const Navbar = () => {
    const pathname = usePathname()


    return (
        <aside className="sticky top-0 h-screen w-56 bg-gray-100 text-gray-800 p-4">
            <div className="flex items-center mb-4 space-x-1"><Image src="/placeholder.svg" width="30" height="30"
                alt="Company Logo" />
                <h1 className="text-lg font-medium">Acme</h1>
            </div>
            <nav className="space-y-2">
                {
                    links.map(link => <Link key={link.name} href={link.href}
                        className={`w-full flex items-center space-x-2 hover:bg-gray-200 ${pathname == link.href && 'bg-gray-300'} py-2 px-2 rounded-lg text-gray-500`}>
                        {link.icon}
                        <span className="text-sm font-medium">{link.name}</span>
                    </Link>)
                }
                <Link href='/'
                    className="w-full flex items-center space-x-2 hover:bg-gray-200 active:bg-gray-300 py-2 px-2 rounded-lg text-gray-500"><span className="text-sm font-medium">Salir</span></Link>
            </nav>
        </aside>
    )
}