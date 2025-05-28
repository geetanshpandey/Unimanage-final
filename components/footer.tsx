import Link from 'next/link';

export default function Footer() {
  return (
    <footer className="bg-neutral-900 text-white px-6 py-10">
      <div className="max-w-7xl mx-auto flex flex-col md:flex-row items-center justify-between">
        <div className="flex items-center space-x-3 mb-6 md:mb-0">
          <div className="w-8 h-8 rounded-full bg-white text-black flex items-center justify-center text-xl font-bold">
            <span className="text-xl">⬢</span>
          </div>
          <span className="text-xl font-semibold tracking-wide">UNIMANAGE</span>
        </div>

        <nav className="flex flex-wrap justify-center md:justify-end gap-4 text-sm">
          <Link href="/howitworks" className="hover:underline">How it Works</Link>
          <Link href="/features" className="hover:underline">Features</Link>
          <Link href="/pricing" className="hover:underline">Pricing</Link>
          <Link href="/showcase" className="hover:underline">Showcase</Link>
          <Link href="#contact" className="hover:underline">Contact</Link>
        </nav>
      </div>

      <hr className="my-6 border-neutral-700" />

      <div className="max-w-7xl mx-auto flex flex-col md:flex-row items-center justify-between text-sm">
        <Link href="/privacy-policy" className="hover:underline mb-2 md:mb-0">Privacy Policy</Link>
        <Link href="/terms-conditions" className="hover:underline">Terms & Conditions</Link>
      </div>
    </footer>
  );
}
