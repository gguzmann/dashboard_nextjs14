import Search from "@/components/Search";
import { Table } from "@/components/Table";
import { getData } from "@/lib/data";

export default async function FacturasPage({ searchParams }: { searchParams?: { query?: string, page: number } }) {
    const currentPage = searchParams?.page || 1
    const query = searchParams?.query || ''

    const { data } = await getData()
    return (
        <>

            <div className="flex justify-between items-center mb-4">
                <h1 className="text-lg font-medium">Facturas </h1>
                <span
                    className="justify-center font-medium ring-offset-background transition-colors focus-visible:outline-none focus-visible:ring-2 focus-visible:ring-ring focus-visible:ring-offset-2 disabled:pointer-events-none disabled:opacity-50 hover:bg-primary/90 h-10 px-2 py-1 bg-gray-800 text-white rounded-lg flex items-center space-x-2 text-sm"
                >
                    <svg xmlns="http://www.w3.org/2000/svg" width="24" height="24" viewBox="0 0 24 24"
                        fill="none" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round"
                        className="w-4 h-4">
                        <path d="M21 15v4a2 2 0 0 1-2 2H5a2 2 0 0 1-2-2v-4"></path>
                        <polyline points="7 10 12 15 17 10"></polyline>
                        <line x1="12" x2="12" y1="15" y2="3"></line>
                    </svg>
                    <span>Download</span></span>
            </div>
            <Search placeholder="Search Facturas" />

            <Table query={query} currentPage={currentPage} />
        </>
    )
}