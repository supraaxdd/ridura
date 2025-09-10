const Features = () => (
  <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 mt-24">
    <div className="grid md:grid-cols-3 gap-8">
      {/* Card 1 */}
      <div className="bg-white p-8 rounded-2xl shadow-lg hover:shadow-xl transition-shadow">
        <div className="w-12 h-12 bg-accent-500/10 rounded-lg flex items-center justify-center mb-6">
          {/* Icon can go here */}
        </div>
        <h3 className="text-xl font-semibold text-primary-900 mb-3">Smart Routing</h3>
        <p className="text-primary-600">Advanced algorithms to find the most efficient routes based on real-time data and conditions.</p>
      </div>
      {/* Card 2 */}
      <div className="bg-white p-8 rounded-2xl shadow-lg hover:shadow-xl transition-shadow">
        <div className="w-12 h-12 bg-accent-500/10 rounded-lg flex items-center justify-center mb-6">
          {/* Icon can go here */}
        </div>
        <h3 className="text-xl font-semibold text-primary-900 mb-3">Time Optimization</h3>
        <p className="text-primary-600">Save valuable time with our intelligent route optimization and real-time traffic updates.</p>
      </div>
      {/* Card 3 */}
      <div className="bg-white p-8 rounded-2xl shadow-lg hover:shadow-xl transition-shadow">
        <div className="w-12 h-12 bg-accent-500/10 rounded-lg flex items-center justify-center mb-6">
          {/* Icon can go here */}
        </div>
        <h3 className="text-xl font-semibold text-primary-900 mb-3">Multiple Stops</h3>
        <p className="text-primary-600">Easily plan routes with multiple destinations and optimize the order automatically.</p>
      </div>
    </div>
  </div>
);

export default Features;
