const Navbar = () => (
  <nav className="fixed w-full bg-white/80 backdrop-blur-md shadow-sm z-50">
    <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
      <div className="flex justify-between h-16 items-center">
        <div className="flex-shrink-0">
          <span className="text-2xl font-bold text-accent-600">Ridura</span>
        </div>
        <div className="hidden md:block">
          <div className="ml-10 flex items-center space-x-4">
            {/* Add nav links here if needed */}
          </div>
        </div>
      </div>
    </div>
  </nav>
);

export default Navbar;
