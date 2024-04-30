export default function Navbar() {
    return (
      <nav className="bg-black border-transparent w-full h-16 pt-5 z-0">
        <div className="flex fixed left-8 space-x-8 text-gray-300 text-lg font-Poppins z-1">
          <a href="" className="hover:text-white hover:underline">
            <p>
              Blog
            </p>
          </a>
          <a href="" className="hover:text-white hover:underline">
            <p>
              Help
            </p>
          </a>
          <a href="" className="hover:text-white hover:underline">
            <p>
              Community
            </p>
          </a>
        </div>
        <div className="flex fixed right-8 space-x-8 text-gray-300 text-lg font-Poppins z-1">
          <a href="/login" className="hover:text-white hover:underline">
            <p>
              Login
            </p>
          </a>
          <a href="/signup" className="hover:text-white hover:underline">
            <p>
              Sign Up
            </p>
          </a>
        </div>
      </nav>
    )
}
