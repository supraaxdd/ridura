const Hero = () => (
  <div className="relative pt-32 pb-16 sm:pt-48">
    <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
      <div className="text-center">
        <h1 className="text-4xl sm:text-6xl font-bold text-primary-900 leading-tight">
          Plan Your Routes with
          <span className="text-accent-500"> Intelligence</span>
        </h1>
        <p className="mt-6 text-xl text-primary-600 max-w-3xl mx-auto">
          Optimize your journey with smart route planning. Save time, reduce costs, and travel efficiently with Ridura's advanced routing algorithm.
        </p>
        <div className="mt-10 flex justify-center gap-4">
          <button className="bg-accent-500 text-white px-8 py-4 rounded-lg text-lg font-semibold hover:bg-accent-600 transition-all transform hover:scale-105">
            Start Planning Now
          </button>
        </div>
      </div>
    </div>
  </div>
);

export default Hero;
