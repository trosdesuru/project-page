import Link from 'next/link';

export default function Navbar() {
  return (
    <nav className="mx-auto flex max-w-6xl items-center justify-between px-4 py-8 sm:px-6 lg:px-8">
      <Link
        href="/"
        className="text-xl font-semibold text-gray-900 transition-colors hover:text-gray-600"
      >
        Eduard Hernández
      </Link>
      <div className="flex gap-6">
        <Link href="/" className="text-base font-medium text-gray-900">
          Trabajos
        </Link>
        <Link
          href="/about"
          className="text-base font-medium text-gray-500 transition-colors hover:text-gray-900"
        >
          About
        </Link>
      </div>
    </nav>
  );
}
