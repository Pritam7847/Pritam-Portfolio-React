import React from "react";

function Footer() {
  return (
    <footer className=" text-white mt-10 shadow-lg">
      <div className="max-w-7xl mx-auto px-4 py-6 flex flex-col md:flex-row items-center justify-between">
        
        {/* Left Side */}
        <div className="flex items-center space-x-3">
          <svg
            width="32"
            height="32"
            viewBox="0 0 24 24"
            xmlns="http://www.w3.org/2000/svg"
            fill="currentColor"
            className="text-yellow-400"
          >
            <path d="M22.672 15.226l-2.432.811.841 2.515c.33 1.019-.209 2.127-1.23 2.456-1.15.325-2.148-.321-2.463-1.226l-.84-2.518-5.013 1.677.84 2.517c.391 1.203-.434 2.542-1.831 2.542-.88 0-1.601-.564-1.86-1.314l-.842-2.516-2.431.809c-1.135.328-2.145-.317-2.463-1.229-.329-1.018.211-2.127 1.231-2.456l2.432-.809-1.621-4.823-2.432.808c-1.355.384-2.558-.59-2.558-1.839 0-.817.509-1.582 1.327-1.846l2.433-.809-.842-2.515c-.33-1.02.211-2.129 1.232-2.458 1.02-.329 2.13.209 2.461 1.229l.842 2.515 5.011-1.677-.839-2.517c-.403-1.238.484-2.553 1.843-2.553.819 0 1.585.509 1.85 1.326l.841 2.517 2.431-.81c1.02-.33 2.131.211 2.461 1.229.332 1.018-.21 2.126-1.23 2.456l-2.433.809 1.622 4.823 2.433-.809c1.242-.401 2.557.484 2.557 1.838 0 .819-.51 1.583-1.328 1.847m-8.992-6.428l-5.01 1.675 1.619 4.828 5.011-1.674-1.62-4.829z" />
          </svg>
          <p className="text-sm md:text-base">
            Made with ❤️ by <span className="font-bold">Pritam Anand</span> ©{" "}
            {new Date().getFullYear()}
          </p>
        </div>

        {/* Social Links */}
        <div className="flex space-x-5 mt-4 md:mt-0">
          {/* LinkedIn */}
          <a
            href="https://www.linkedin.com/in/pritam-anand-"
            target="_blank"
            rel="noopener noreferrer"
            className="hover:text-blue-400 transition"
          >
            <svg
              xmlns="http://www.w3.org/2000/svg"
              fill="currentColor"
              viewBox="0 0 24 24"
              width="28"
              height="28"
            >
              <path d="M4.98 3.5C4.98 4.88 3.88 6 2.5 6S0 4.88 0 3.5 1.12 1 2.5 1s2.48 1.12 2.48 2.5zM.5 8h4v12h-4V8zm7.5 0h3.8v1.7h.1c.53-.95 1.82-1.9 3.75-1.9 4 0 4.75 2.6 4.75 5.9V20h-4v-5.7c0-1.36-.02-3.1-2-3.1-2 0-2.3 1.5-2.3 3v5.8h-4V8z" />
            </svg>
          </a>

          {/* GitHub */}
          <a
            href="https://github.com/Pritam7847"
            target="_blank"
            rel="noopener noreferrer"
            className="hover:text-gray-400 transition"
          >
            <svg
              xmlns="http://www.w3.org/2000/svg"
              fill="currentColor"
              viewBox="0 0 24 24"
              width="28"
              height="28"
            >
              <path d="M12 0a12 12 0 00-3.79 23.4c.6.11.82-.26.82-.58v-2.01c-3.34.73-4.04-1.61-4.04-1.61-.55-1.4-1.35-1.78-1.35-1.78-1.1-.76.08-.75.08-.75 1.22.09 1.87 1.25 1.87 1.25 1.08 1.85 2.83 1.32 3.52 1.01.11-.78.42-1.32.76-1.62-2.66-.3-5.47-1.33-5.47-5.92 0-1.31.47-2.38 1.24-3.22-.13-.3-.54-1.52.12-3.16 0 0 1-.32 3.3 1.23a11.5 11.5 0 016 0c2.28-1.55 3.28-1.23 3.28-1.23.67 1.64.26 2.86.13 3.16.77.84 1.24 1.91 1.24 3.22 0 4.6-2.81 5.61-5.49 5.91.43.38.81 1.12.81 2.26v3.35c0 .32.22.7.83.58A12 12 0 0012 0z" />
            </svg>
          </a>
        </div>

        {/* Email */}
        <div className="mt-4 md:mt-0 text-center md:text-right">
          <p className="text-sm md:text-base">
            Email:{" "}
            <span className="font-semibold text-white hover:underline cursor-pointer">
              himanshusingh7847@gmail.com
            </span>
          </p>
        </div>
      </div>
    </footer>
  );
}

export default Footer;
