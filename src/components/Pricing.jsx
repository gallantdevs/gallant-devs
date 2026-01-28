import PlanCard from './PlanCard'
const Pricing = () => {
  const essentialPlan = {
  title: "Essential",
  description:
    "Perfect for startups and small businesses looking to establish a professional digital presence.",
  basePrice: 800,
  fastPrice: 10000, // adjust if Fast Execution increases price
  badge: null,
  highlighted: false,
  buttonText: "Get Started",
  features: [
    "Mobile Responsive Design",
    "SEO Optimization",
    "Contact Forms",
    "Social Media Integration",
    "Basic CMS",
    "3 Revisions",
  ],
};
  const enterprisePlan = {
  title: "Enterprise",
  description:
    "For companies requiring complex systems, AI integration, and enterprise-grade solutions.",
  basePrice: 2500,
  fastPrice: 1000, // or set if you want Fast Execution to increase price
  badge: null,
  highlighted: false,
  buttonText: "Contact Sales",
  features: [
    "Everything in Professional",
    "AI Integration",
    "Advanced Security",
    "Custom Integrations",
    "Performance Optimization",
    "Dedicated Support",
    "Unlimited Revisions",
  ],
};
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
        <PlanCard {...essentialPlan} />

        {/* <PlanCard
          title="Essential"
          description="Perfect for startups and small businesses looking to establish a
                professional digital presence."
          basePrice={800}
          fastPrice={200}
          buttonText="Get Started"
          features={[
            " Mobile Responsive Design",
            " SEO Optimization",
            " Contact Forms",
            " Social Media Integration",
            " Basic CMS",
            " 3 Revisions"
          ]}
        /> */}

        {/* PROFESSIONAL
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
                <label className="relative inline-flex items-center cursor-pointer">
                  <input type="checkbox" className="sr-only peer" />

                  <div className="w-11 h-6 bg-zinc-400 rounded-full peer-checked:bg-black transition-colors"></div>

                  <div className="absolute left-1 top-1 w-4 h-4 bg-white rounded-full
                              transition-transform peer-checked:translate-x-5"></div>
                </label>
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
        </div> */}
        <PlanCard
  title="Professional"
  description="Ideal for growing businesses that need advanced functionality and scalability."
  basePrice={1500}
  fastPrice={500}
  badge="POPULAR"
  highlighted
  features={[
    "Everything in Essential",
    "User Authentication",
    "Payment Processing",
    "Database Integration",
    "API Development",
    "Admin Dashboard",
    "5 Revisions",
  ]}
  buttonText="Most Popular"
  />

        <PlanCard {...enterprisePlan} />
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
