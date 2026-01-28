import PlanCard from './PlanCard'
const Pricing = () => {
  const essentialPlan = {
  title: "Essential",
  description:
    "Perfect for startups and small businesses looking to establish a professional digital presence.",
  basePrice: 150,
  fastPrice: 50, // adjust if Fast Execution increases price
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

  const professionalPlan = {
  title: "Professional",
  description:
    "Ideal for growing businesses that need advanced functionality and scalability.",
  basePrice: 300,
  fastPrice: 400, // or set if you want Fast Execution to increase price
  badge: "POPULAR",
  highlighted: true,
  buttonText: "Most Popular",
  features: [
    "Everything in Essential",
    "User Authentication",
    "Payment Processing",
    "Database Integration",
    "API Development",
    "Admin Dashboard",
    "5 Revisions",
    ],
  };

  const enterprisePlan = {
  title: "Enterprise",
  description:
    "For companies requiring complex systems, AI integration, and enterprise-grade solutions.",
  basePrice: 900,
  fastPrice: 200, // or set if you want Fast Execution to increase price
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
        <PlanCard {...professionalPlan} />
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
