import { Navbar } from "@/components/Navbar"

export default function RootLayout({
    children
}: {
    children: React.ReactNode
}) {
    return (
        <section className="flex w-full">

            <Navbar />
            <main className="flex-grow p-6">
                {children}
            </main>
        </section>
    )
}