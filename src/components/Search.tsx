'use client';

import { MagnifyingGlassIcon } from "@heroicons/react/24/outline";
import { usePathname, useRouter, useSearchParams } from "next/navigation";
import { useDebouncedCallback } from "use-debounce";

const TIME_DEBOUNCE = 300

export default function Search({ placeholder = 'Search' }: { placeholder: string }) {

    const searchParams = useSearchParams()
    const pathName = usePathname()
    const { replace } = useRouter()
    const handleChange = useDebouncedCallback((search: string) => {
        const params = new URLSearchParams(searchParams)
        if (search) {
            params.set('query', search)
        } else {
            params.delete('query')
        }
        replace(`${pathName}?${params.toString()}`)
    }, TIME_DEBOUNCE)
    return (
        <div className="relative flex flex-1 flex-shrink-0 w-1/2">
            <label htmlFor="search" className="sr-only">
                Search
            </label>
            <input
                onChange={(e) => handleChange(e.target.value)}
                className="peer block w-full rounded-md border border-gray-200 py-[9px] pl-10 text-sm outline-2 placeholder:text-gray-500"
                placeholder={placeholder}
                defaultValue={searchParams.get('query')?.toString()}
            />
            <MagnifyingGlassIcon className="absolute left-3 top-1/2 h-[18px] w-[18px] -translate-y-1/2 text-gray-500 peer-focus:text-gray-900" />

        </div>
    );
}
