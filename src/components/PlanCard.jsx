import { useState } from "react";

const PlanCard = ({
  title,
  description,
  basePrice,
  fastPrice = 0,
  features,
  buttonText = "Get Started",
  badge,
  highlighted = false,
  timeline = "2–3 weeks",
  fastTimeline = "3–5 days"
}) => {
  const [fast, setFast] = useState(false);

  const price = fast ? basePrice + fastPrice : basePrice;
  const activeTimeline = fast ? fastTimeline : timeline;


  return (
    <div className="relative group">
      {/* Glow */}
      <div
        className={`absolute inset-0 rounded-2xl blur-xl transition-all duration-500 group-hover:blur-2xl
        ${highlighted
          ? "bg-gradient-to-br from-zinc-700/60 to-zinc-900/60"
          : "bg-gradient-to-br from-zinc-800/40 to-zinc-900/40"}`}
      />

      {/* Card */}
      <div
        className={`relative bg-white/5 backdrop-blur-sm border rounded-2xl p-6 md:p-8
        transition-all duration-500 hover:scale-[1.05]
        ${highlighted ? "border-white/20" : "border-zinc-800"}`}
      >
        {/* Badge */}
        {badge && (
          <span className="absolute -top-3 left-1/2 -translate-x-1/2 bg-white text-black text-xs font-bold px-3 py-1 rounded-full">
            {badge}
          </span>
        )}

        <div className="mb-6">
          <div className="flex items-center justify-between mb-4">
            <h3 className="font-bold text-xl text-white">{title}</h3>
            <span className="w-3 h-3 bg-white rounded-full" />
          </div>

          <p className="text-white text-sm mb-6">{description}</p>

          {/* Fast Execution */}
          <div className="flex items-center justify-between mb-4 p-3 bg-zinc-800/30 rounded-lg">
            <div>
              <p className="text-white text-sm font-medium">Fast Execution</p>
              <p className="text-zinc-400 text-xs">
                Priority delivery timeline
              </p>
            </div>

            <label className="relative inline-flex items-center cursor-pointer">
              <input
                type="checkbox"
                className="sr-only peer"
                checked={fast}
                onChange={(e) => setFast(e.target.checked)}
              />
              <div className="w-11 h-6 bg-zinc-400 rounded-full peer-checked:bg-black transition-colors" />
              <div
                className="absolute left-1 top-1 w-4 h-4 bg-white rounded-full
                transition-transform peer-checked:translate-x-5"
              />
            </label>
          </div>

          {/* Price */}
         {/* Price */}
<div className="flex items-baseline mb-6">
  {title === "Basic" && !fast ? (
    <>
      <span className="text-3xl md:text-4xl font-bold text-white">
        $100 – $500
      </span>
    </>
  ) : (
    <>
      <span className="text-3xl md:text-4xl font-bold text-white">
        ${price.toLocaleString()}
      </span>
      {title === "Basic"?(""):(
        <>
        <span className="text-white ml-2">starting</span>
        </>
      )}
    </>
  )}
</div>
        </div>

        {/* Timeline */}
<div className="mb-6 p-3 bg-zinc-800/30 rounded-lg">
  <p className="text-white text-sm font-medium">Delivery Timeline</p>
  <p
    className={`text-sm mt-1 transition-colors ${
      fast ? "text-[#DAA520]" : "text-zinc-400"
    }`}
  >
    {activeTimeline}
  </p>
</div>


        {/* Features */}
        <ul className="space-y-3 mb-8 text-sm text-white">
          {features.map((item, i) => (
            <li key={i}>
              <span className="text-[#DAA520] mr-2">•</span>
              {item}
            </li>
          ))}
        </ul>

        <a
  href="#contact"
  className={`w-full font-medium py-3 rounded-lg transition cursor-pointer
    ${highlighted
      ? "bg-white text-black hover:bg-zinc-200"
      : "bg-zinc-800 text-white hover:bg-zinc-700"
    } flex justify-center`}
>
  {buttonText}
</a>

      </div>
    </div>
  );
};

export default PlanCard;
