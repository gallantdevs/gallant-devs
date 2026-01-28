import PlanCard from './PlanCard'
const Pricing = () => {
  const basicPlan = {
  title: "Basic",
  description:
    "Ideal for individuals and small brands seeking a fast, polished online presence.",
  basePrice: 100,
  fastPrice: 400,
  badge: "BASIC",
  highlighted: false,
  buttonText: "Get Started",
  features: [
    "Fully Responsive, Mobile-First Design",
    "Search Engine Optimization (SEO)",
    "Integrated Contact Forms",
    "Social Media Connectivity",
    "Lightweight Content Management System",
    "Up to 2 Revision Rounds",
    "Delivery Timeline: 5–7 Business Days",
  ],
};

const essentialPlan = {
  title: "Essential",
  description:
    "Perfect for startups and small businesses building a strong, professional digital foundation.",
  basePrice: 800,
  fastPrice: 400,
  badge: null,
  highlighted: false,
  buttonText: "Get Started",
  features: [
    "Fully Responsive, Mobile-First Design",
    "On-Page SEO Optimization",
    "Custom Contact Forms",
    "Social Media Integration",
    "User-Friendly CMS",
    "Up to 3 Revision Rounds",
    "Delivery Timeline: 7–10 Business Days",
  ],
};

const professionalPlan = {
  title: "Professional",
  description:
    "Designed for growing businesses requiring advanced features and scalable architecture.",
  basePrice: 1500,
  fastPrice: 500,
  badge: "POPULAR",
  highlighted: true,
  buttonText: "Most Popular",
  features: [
    "All Essential Plan Features Included",
    "Secure User Authentication",
    "Online Payment Processing",
    "Database Architecture & Integration",
    "Custom API Development",
    "Administrative Control Dashboard",
    "Up to 5 Revision Rounds",
    "Delivery Timeline: 2–3 Weeks",
  ],
};

const enterprisePlan = {
  title: "Enterprise",
  description:
    "Built for organizations needing complex systems, AI capabilities, and enterprise-grade performance.",
  basePrice: 2500,
  fastPrice: 3500,
  badge: null,
  highlighted: false,
  buttonText: "Contact Sales",
  features: [
    "All Professional Plan Features Included",
    "AI-Powered Integrations",
    "Advanced Security & Compliance Measures",
    "Custom Third-Party Integrations",
    "Performance & Scalability Optimization",
    "Priority Dedicated Support",
    "Unlimited Revisions",
    "Delivery Timeline: 4–6 Weeks",
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
      <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-8">
        {/* ESSENTIAL */}
        <PlanCard {...basicPlan} />
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
