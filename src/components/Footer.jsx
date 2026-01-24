export default function Footer() {
  return (
    <footer
      role="contentinfo"
      className="relative z-10 border-t border-zinc-800 py-8 md:py-12 px-4 md:px-6 mb-20"
    >
      <div className="max-w-7xl mx-auto">
        <div className="grid grid-cols-1 md:grid-cols-3 gap-8 text-white">
          {/* Brand */}
          <div>
            <h3 className="font-bold text-xl md:text-2xl mb-4 transition-transform hover:scale-105">
              Gallant Dev
            </h3>
            <p className="text-zinc-400 mb-4 hover:text-zinc-300 transition-colors">
              Building the future, one paradigm shift at a time.
            </p>
            <p className="text-sm text-zinc-500">
              © 2025 Gallant. All rights reserved.
            </p>
          </div>

          {/* Contact */}
          <div>
            <h4 className="font-semibold text-lg mb-4">Contact</h4>
            <address className="not-italic flex flex-col gap-3">
              <a
                href="/"
                className="text-zinc-400 hover:text-white transition-colors"
              >
                gallantdev@gmail.com
              </a>
              <a
                href="/"
                target="_blank"
                rel="noopener noreferrer"
                className="text-zinc-400 hover:text-white transition-colors"
              >
                Twitter
              </a>
              <a
                href="/"
                target="_blank"
                rel="noopener noreferrer"
                className="text-zinc-400 hover:text-white transition-colors"
              >
                Behance
              </a>
            </address>
          </div>

          {/* Hire */}
          <div>
            <h4 className="font-semibold text-lg mb-4">Hire Us</h4>

            <a
              href="/"
              target="_blank"
              rel="noopener noreferrer"
              className="flex items-center justify-center w-full max-w-[200px] min-h-[50px] rounded-lg bg-white text-black font-medium hover:bg-zinc-200 hover:scale-105 transition"
            >
              Hire Us on Blah Blah
            </a>

            <p className="text-zinc-400 mt-4 hover:text-zinc-300 transition-colors">
              Ready to start your next project?
            </p>
            <p className="text-sm font-mono text-zinc-500 mt-2">
              Web Developer • Web Designer • AI Developer
            </p>
          </div>
        </div>
      </div>
    </footer>
  );
}
