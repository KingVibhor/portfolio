import Link from 'next/link'

export default function Nav() {
  return (
    <nav className="w-full py-4 px-6 flex justify-between items-center sticky top-0 bg-white/80 backdrop-blur z-50">
      <div className="text-xl font-semibold">Vibhor</div>
      <div className="space-x-4">
        <a href="#about" className="hover:underline">About</a>
        <a href="#projects" className="hover:underline">Projects</a>
        <a href="#contact" className="hover:underline">Contact</a>
      </div>
    </nav>
  )
}
