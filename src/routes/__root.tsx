import { createRootRoute, Link, Outlet } from '@tanstack/react-router'

export const Route = createRootRoute({
  component: () => (
    <>
<nav className="p-4 flex gap-4 bg-slate-800 text-white">
        {/* The "to" prop matches your route paths */}
        <Link to="/" className="[&.active]:font-bold">
          Home
        </Link>
        <Link to="/about" className="[&.active]:font-bold">
          About
        </Link>
      </nav>
      <hr />
      {/* Outlet is where the Home or About content will render */}
      <Outlet />
    </>
  ),
})
