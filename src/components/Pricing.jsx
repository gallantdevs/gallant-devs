const Pricing = () => {
  return (
    <section
      id="pricing"
      className="py-20 md:py-28 px-4 md:px-6 max-w-7xl mx-auto"
    >
      {/* HEADER */}
      <header className="text-center mb-16 md:mb-24">
        <h2 className="font-bold text-3xl md:text-4xl lg:text-5xl mb-4 text-white transition-transform duration-300 hover:scale-[1.03]">
          Pricing
        </h2>
        <p className="text-base md:text-lg text-zinc-400 max-w-3xl mx-auto leading-relaxed">
          Transparent pricing for exceptional results. Choose the package that
          fits your vision and budget.
        </p>
      </header>

      {/* PRICING GRID */}
      <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8">
        {/* ESSENTIAL */}
        <div className="relative group">
          <div className="absolute inset-0 bg-gradient-to-br from-zinc-800/50 to-zinc-900/50 rounded-2xl blur-xl transition-all duration-500 group-hover:blur-2xl" />
          <div className="relative bg-zinc-900/80 backdrop-blur-sm border border-zinc-800 rounded-2xl p-6 md:p-8 transition-all duration-500 hover:scale-[1.03]">
            <div className="mb-6">
              <div className="flex items-center justify-between mb-4">
                <h3 className="font-bold text-xl text-white">Essential</h3>
                <span className="w-3 h-3 bg-zinc-600 rounded-full" />
              </div>
              <p className="text-zinc-300 text-sm mb-6">
                Perfect for startups and small businesses looking to establish a
                professional digital presence.
              </p>

              <div className="flex items-center justify-between mb-4 p-3 bg-zinc-800/30 rounded-lg">
                <div>
                  <p className="text-white text-sm font-medium">
                    Fast Execution
                  </p>
                  <p className="text-zinc-400 text-xs">
                    Priority delivery timeline
                  </p>
                </div>
                <div className="h-6 w-11 rounded-full bg-zinc-600 flex items-center px-1">
                  <span className="h-4 w-4 rounded-full bg-black translate-x-1" />
                </div>
              </div>

              <div className="flex items-baseline mb-6">
                <span className="text-3xl md:text-4xl font-bold text-white">
                  $800
                </span>
                <span className="text-zinc-300 ml-2">starting</span>
              </div>
            </div>

            <ul className="space-y-3 mb-8 text-sm text-zinc-300">
              <li><span className="text-[#DAA520] mr-2">•</span> Mobile Responsive Design</li>
              <li><span className="text-[#DAA520] mr-2">•</span> SEO Optimization</li>
              <li><span className="text-[#DAA520] mr-2">•</span> Contact Forms</li>
              <li><span className="text-[#DAA520] mr-2">•</span> Social Media Integration</li>
              <li><span className="text-[#DAA520] mr-2">•</span> Basic CMS</li>
              <li><span className="text-[#DAA520] mr-2">•</span> 3 Revisions</li>
            </ul>

            <button className="w-full bg-zinc-800 hover:bg-zinc-700 text-white font-medium py-3 rounded-lg transition">
              Get Started
            </button>
          </div>
        </div>

        {/* PROFESSIONAL */}
        <div className="relative group">
          <div className="absolute inset-0 bg-gradient-to-br from-zinc-700/60 to-zinc-900/60 rounded-2xl blur-xl transition-all duration-500 group-hover:blur-2xl" />
          <div className="relative bg-white/5 backdrop-blur-sm border border-white/20 rounded-2xl p-6 md:p-8 transition-all duration-500 hover:scale-[1.05]">
            <span className="absolute -top-3 left-1/2 -translate-x-1/2 bg-white text-black text-xs font-bold px-3 py-1 rounded-full">
              POPULAR
            </span>

            <div className="mb-6">
              <div className="flex items-center justify-between mb-4">
                <h3 className="font-bold text-xl text-white">Professional</h3>
                <span className="w-3 h-3 bg-white rounded-full" />
              </div>

              <p className="text-white text-sm mb-6">
                Ideal for growing businesses that need advanced functionality
                and scalability.
              </p>

              <div className="flex items-center justify-between mb-4 p-3 bg-zinc-800/30 rounded-lg">
                <div>
                  <p className="text-white text-sm font-medium">
                    Fast Execution
                  </p>
                  <p className="text-zinc-400 text-xs">
                    Priority delivery timeline
                  </p>
                </div>
                <div className="h-6 w-11 rounded-full bg-zinc-600 flex items-center px-1">
                  <span className="h-4 w-4 rounded-full bg-black translate-x-1" />
                </div>
              </div>

              <div className="flex items-baseline mb-6">
                <span className="text-3xl md:text-4xl font-bold text-white">
                  $1,500
                </span>
                <span className="text-white ml-2">starting</span>
              </div>
            </div>

            <ul className="space-y-3 mb-8 text-sm text-white">
              <li><span className="text-[#DAA520] mr-2">•</span> Everything in Essential</li>
              <li><span className="text-[#DAA520] mr-2">•</span> User Authentication</li>
              <li><span className="text-[#DAA520] mr-2">•</span> Payment Processing</li>
              <li><span className="text-[#DAA520] mr-2">•</span> Database Integration</li>
              <li><span className="text-[#DAA520] mr-2">•</span> API Development</li>
              <li><span className="text-[#DAA520] mr-2">•</span> Admin Dashboard</li>
              <li><span className="text-[#DAA520] mr-2">•</span> 5 Revisions</li>
            </ul>

            <button className="w-full bg-white text-black hover:bg-zinc-200 font-medium py-3 rounded-lg transition">
              Most Popular
            </button>
          </div>
        </div>

        {/* ENTERPRISE */}
        <div className="relative group md:col-span-2 lg:col-span-1">
          <div className="absolute inset-0 bg-gradient-to-br from-zinc-800/50 to-zinc-900/50 rounded-2xl blur-xl transition-all duration-500 group-hover:blur-2xl" />
          <div className="relative bg-black/80 backdrop-blur-sm border border-zinc-800 rounded-2xl p-6 md:p-8 transition-all duration-500 hover:scale-[1.03]">
            <div className="mb-6">
              <div className="flex items-center justify-between mb-4">
                <h3 className="font-bold text-xl text-white">Enterprise</h3>
                <span className="w-3 h-3 bg-gradient-to-r from-zinc-400 to-zinc-600 rounded-full" />
              </div>

              <p className="text-zinc-300 text-sm mb-6">
                For companies requiring complex systems, AI integration, and
                enterprise-grade solutions.
              </p>

              <div className="flex items-center justify-between mb-4 p-3 bg-zinc-800/30 rounded-lg">
                <div>
                  <p className="text-white text-sm font-medium">
                    Fast Execution
                  </p>
                  <p className="text-zinc-400 text-xs">
                    Priority delivery timeline
                  </p>
                </div>
                <div className="h-6 w-11 rounded-full bg-zinc-600 flex items-center px-1">
                  <span className="h-4 w-4 rounded-full bg-black translate-x-1" />
                </div>
              </div>

              <div className="flex items-baseline mb-6">
                <span className="text-3xl md:text-4xl font-bold text-white">
                  $2,500
                </span>
                <span className="text-zinc-300 ml-2">starting</span>
              </div>
            </div>

            <ul className="space-y-3 mb-8 text-sm text-zinc-300">
              <li><span className="text-[#DAA520] mr-2">•</span> Everything in Professional</li>
              <li><span className="text-[#DAA520] mr-2">•</span> AI Integration</li>
              <li><span className="text-[#DAA520] mr-2">•</span> Advanced Security</li>
              <li><span className="text-[#DAA520] mr-2">•</span> Custom Integrations</li>
              <li><span className="text-[#DAA520] mr-2">•</span> Performance Optimization</li>
              <li><span className="text-[#DAA520] mr-2">•</span> Dedicated Support</li>
              <li><span className="text-[#DAA520] mr-2">•</span> Unlimited Revisions</li>
            </ul>

            <button className="w-full bg-zinc-800 hover:bg-zinc-700 text-white font-medium py-3 rounded-lg transition">
              Contact Sales
            </button>
          </div>
        </div>
      </div>

      {/* FOOTER NOTE */}
      <div className="text-center mt-16">
        <p className="text-zinc-400 text-sm mb-2">
          All packages include hosting setup, SSL certificate, and 30 days of
          post-launch support.
        </p>
        <p className="text-zinc-500 text-xs">
          Prices may vary based on project complexity and requirements.
        </p>
      </div>

      
    </section>
  );
};

export default Pricing;
