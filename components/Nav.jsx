import Link from 'next/link'

export default function Nav() {
  return (
    <nav className="w-full py-4 px-6 flex justify-between items-center sticky top-0 bg-white/80 backdrop-blur z-50">
      <div className="flex items-center text-3xl font-semibold">
        {/* Small brand image to the left of the name */}
        <img src="/android-chrome-512x512.png" alt="Vibhor logo" className="h-12 w-12 mr-3 rounded-full" />
        <span>Vibhor Kumbhare</span>
      </div>
      <div className="space-x-8 text-2xl">
        <a href="#about" className="hover:underline">About</a>
        <a href="#projects" className="hover:underline">Projects</a>
        <a href="#contact" className="hover:underline">Contact</a>
      </div>
    </nav>
  )
}
