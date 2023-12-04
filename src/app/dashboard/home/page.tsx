export default function HomePage() {
    return (
        <main className="p-6 flex-1">
            <h1 className="text-2xl font-semibold mb-4">Welcome back, Admin!</h1>
            <div className="grid grid-cols-1 gap-4 md:grid-cols-3">
                <div className="rounded-lg border bg-card text-card-foreground shadow-sm" data-v0-t="card">
                    <div className="flex flex-col space-y-1.5 p-6 pb-4">
                        <h3 className="text-2xl font-semibold leading-none tracking-tight">Total Users</h3>
                    </div>
                    <div className="p-6">
                        <div className="text-3xl font-bold">2,356</div>
                    </div>
                </div>
                <div className="rounded-lg border bg-card text-card-foreground shadow-sm" data-v0-t="card">
                    <div className="flex flex-col space-y-1.5 p-6 pb-4">
                        <h3 className="text-2xl font-semibold leading-none tracking-tight">Total Products</h3>
                    </div>
                    <div className="p-6">
                        <div className="text-3xl font-bold">183</div>
                    </div>
                </div>
                <div className="rounded-lg border bg-card text-card-foreground shadow-sm" data-v0-t="card">
                    <div className="flex flex-col space-y-1.5 p-6 pb-4">
                        <h3 className="text-2xl font-semibold leading-none tracking-tight">Total Orders</h3>
                    </div>
                    <div className="p-6">
                        <div className="text-3xl font-bold">1,245</div>
                    </div>
                </div>
            </div>
        </main>
    )
}