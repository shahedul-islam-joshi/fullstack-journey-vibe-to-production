import { createRootRoute, Link, Outlet } from '@tanstack/react-router'

export const Route = createRootRoute({
  component: () => (
    <>
      <header className="flex justify-between p-4 bg-slate-800 text-white">
        <h1 className="text-5xl">tapaScript | prod ready architecture</h1>
        <nav className="text-3xl space-x-4 m-2">
          <Link to="/" className="[&.active]:font-bold">
            Home
          </Link>
          <Link to="/components-playground" className="[&.active]:font-bold">
            Play Ground
          </Link>
          <Link to="/about" className="[&.active]:font-bold">
            About
          </Link>
        </nav>
      </header>
      <main className="p-8">
        <Outlet />
      </main>
    </>
  ),
})
