import { toast } from "react-toastify";
import { FaInstagram, FaXTwitter } from "react-icons/fa6";
import { FiCopy } from "react-icons/fi";
export default function Footer() {
  return (
    <footer
      className="relative z-10 py-8 md:py-12 px-4 md:px-6 mb-20"
    >
      <div className="max-w-7xl mx-auto">
        <div className="grid grid-cols-1 md:grid-cols-3 gap-8 text-white">
          {/* Brand */}
          <div>
            <h3 className="font-bold text-xl md:text-2xl mb-4 transition-transform hover:scale-105">
              Gallant Dev
            </h3>
            <p className="text-zinc-400 mb-4 hover:text-zinc-300 transition-colors">
              Engineering digital experiences, one breakthrough at a time.
            </p>
            <p className="text-sm text-zinc-500">
              © 2026 Gallant. All rights reserved.
            </p>
          </div>

          {/* Contact */}
          <div>
            <h4 className="font-semibold text-lg mb-4">Contact</h4>
            <address className="not-italic flex flex-col gap-3">
              
              <div className="flex items-center gap-2 text-zinc-400">
                <span>gallantdevs@gmail.com</span>

                <FiCopy
                  onClick={() => {
                    navigator.clipboard.writeText("gallantdev@gmail.com")
                    toast.success("Email copied to clipboard 📋");
                  }}
                  className="cursor-pointer text-md transition-colors
                            hover:text-white active:scale-75"
                  title="Copy"
                />
              </div>
              <div className="flex items-center gap-2 text-zinc-400">
                <span>+91 83578107773</span>

                <FiCopy
                  onClick={() => {
                    navigator.clipboard.writeText("+91 83578107773")
                    toast.success("Phone number copied to clipboard 📋");
                }}
                  className="cursor-pointer text-md transition-colors
                            hover:text-white active:scale-75"
                  title="Copy"
                />
              </div>
              <div className="flex items-center gap-6">
                {/* Instagram */}
                <a
                  href="https://www.instagram.com/gallantdevs"
                  target="_blank"
                  className="group flex h-12 w-12 items-center justify-center rounded-full 
                            bg-black/10 transition-all duration-300
                            hover:scale-110 hover:bg-pink-500/20"
                >
                  <FaInstagram
                    className="text-2xl text-pink-500 transition-all duration-300
                              group-hover:text-pink-600 group-hover:drop-shadow-[0_0_8px_rgba(236,72,153,0.8)]"
                  />
                </a>

                {/* X / Twitter */}
                <a
                  href="https://www.instagram.com/gallantdevs"
                  target="_blank"
                  className="group flex h-12 w-12 items-center justify-center rounded-full 
                            bg-black/10 transition-all duration-300
                            hover:scale-110 hover:bg-sky-500/20"
                >
                  <FaXTwitter
                    className="text-2xl text-sky-500 transition-all duration-300
                              group-hover:text-sky-600 group-hover:drop-shadow-[0_0_8px_rgba(14,165,233,0.8)]"
                  />
                </a>
              </div>
            </address>
          </div>

          {/* Hire */}
          <div>
            <h4 className="font-semibold text-lg mb-4">Hire Us</h4>

            <a
              href={`#contact`}
              className="flex items-center justify-center w-full max-w-[200px] min-h-[50px] rounded-lg bg-white text-black font-medium hover:bg-zinc-200 hover:scale-105 transition"
            >
              Hire Us
            </a>

            <p className="text-zinc-400 mt-4 hover:text-white transition-colors">
              Ready to start your next project?
            </p>
            <p className="text-sm font-mono text-zinc-500 mt-2 hover:text-white transition-colors">
              Web Developer • Web Designer • AI Developer
            </p>
          </div>
        </div>
      </div>
    </footer>
  );
}
