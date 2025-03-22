"use client";

import Image from "next/image";
import Link from "next/link";

export function Hero() {
  return (
    <section className="w-full py-10 md:py-16">
      <div className="container grid grid-cols-1 lg:grid-cols-2 gap-10 items-center">
        <div className="space-y-6">
          <h1 className="text-5xl md:text-6xl font-serif font-semibold leading-tight">
            Your ideas,<br />amplified
          </h1>
          <p className="text-lg md:text-xl text-claude-gray">
            Privacy-first AI that helps you create in confidence.
          </p>

          <div className="bg-white p-6 rounded-lg shadow-sm max-w-md">
            <div className="flex flex-col space-y-4">
              <button className="flex items-center justify-center bg-white border border-gray-300 px-4 py-2 rounded-md text-sm space-x-2 hover:bg-gray-50 transition-colors">
                <Image
                  src="/google-g-logo.png"
                  alt="Google"
                  width={20}
                  height={20}
                  className="w-5 h-5"
                />
                <span>Continue with Google</span>
              </button>

              <div className="relative">
                <div className="absolute inset-0 flex items-center">
                  <div className="w-full border-t border-gray-300"></div>
                </div>
                <div className="relative flex justify-center text-xs">
                  <span className="px-2 bg-white text-gray-500">OR</span>
                </div>
              </div>

              <input
                type="email"
                placeholder="Enter your personal or work email"
                className="border border-gray-300 px-4 py-2 rounded-md text-sm"
              />

              <button className="bg-claude-accent hover:bg-opacity-90 text-white px-4 py-2 rounded-md text-sm font-medium transition-colors">
                Continue with email
              </button>

              <div className="text-xs text-gray-500 mt-2">
                By continuing, you agree to Anthropic's{" "}
                <Link href="/" className="text-claude-accent underline">
                  Consumer Terms
                </Link>{" "}
                and{" "}
                <Link href="/" className="text-claude-accent underline">
                  Usage Policy
                </Link>
                , and acknowledge their{" "}
                <Link href="/" className="text-claude-accent underline">
                  Privacy Policy
                </Link>
                .
              </div>
            </div>
          </div>
        </div>

        <div className="relative h-[400px] lg:h-[500px] bg-claude-accent bg-opacity-10 rounded-xl overflow-hidden">
          <div className="absolute inset-0 p-8 flex items-start">
            <div className="bg-white rounded-lg p-5 shadow-md w-full max-w-md">
              <div className="flex items-center mb-4">
                <div className="mr-2 w-6 h-6 bg-claude-accent rounded-full flex items-center justify-center text-white text-xs">
                  C
                </div>
                <span className="text-sm font-medium">Claude</span>
              </div>
              <p className="text-sm">
                Claude, create a report to analyze product usage and user feedback.
              </p>
            </div>
          </div>
        </div>
      </div>

      <div className="container mt-10 flex justify-center">
        <button className="flex items-center space-x-2 text-claude-text border border-claude-gray px-4 py-2 rounded-lg hover:bg-claude-accent hover:bg-opacity-10 transition-colors">
          <span>Learn more</span>
          <svg
            width="16"
            height="16"
            viewBox="0 0 24 24"
            fill="none"
            xmlns="http://www.w3.org/2000/svg"
            className="text-claude-text"
          >
            <path
              d="M12 4V20M12 20L18 14M12 20L6 14"
              stroke="currentColor"
              strokeWidth="2"
              strokeLinecap="round"
              strokeLinejoin="round"
            />
          </svg>
        </button>
      </div>
    </section>
  );
}
