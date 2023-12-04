import Link from "next/link";

export default function Home() {
  return (
    <div className="flex-grow p-6">
      Login. Ingresa al dashboard <Link href='/dashboard'> aqui </Link>
    </div>
  )
}
