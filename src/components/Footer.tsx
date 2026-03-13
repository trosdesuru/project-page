import Link from 'next/link';

export default function Footer() {
  return (
    <footer className="mx-auto max-w-6xl px-4 py-12 sm:px-6 lg:px-8">
      <div className="flex flex-col items-center justify-between gap-6 border-t border-gray-200 pt-12 sm:flex-row">
        <div className="flex flex-col items-center gap-1 sm:items-start">
          <h2 className="text-lg font-semibold text-gray-900">Let's connect</h2>
          <a
            href="mailto:tuemail@ejemplo.com"
            className="text-base text-gray-600 transition-colors hover:text-gray-900"
          >
            eduardhernandezventos@gmail.com
          </a>
        </div>
        <div className="flex gap-6">
          <Link
            href="/"
            className="text-base font-medium text-gray-500 transition-colors hover:text-gray-900"
          >
            work
          </Link>
          <Link
            href="/about"
            className="text-base font-medium text-gray-500 transition-colors hover:text-gray-900"
          >
            about
          </Link>
        </div>
      </div>
    </footer>
  );
}
