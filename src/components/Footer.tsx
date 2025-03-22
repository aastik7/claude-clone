"use client";

import Link from "next/link";
import Image from "next/image";

export function Footer() {
  return (
    <footer className="w-full py-12 bg-black text-white">
      <div className="container">
        <div className="flex flex-col md:flex-row justify-between">
          <div className="mb-8 md:mb-0">
            <Link href="/" className="flex items-center mb-6">
              <Image
                src="https://ext.same-assets.com/605431018/1248550479.svg"
                alt="Claude"
                width={24}
                height={24}
                className="mr-2"
              />
              <span className="text-xl font-medium">Claude</span>
            </Link>
          </div>

          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-x-12 gap-y-8">
            <div className="space-y-4">
              <h3 className="text-sm font-semibold text-gray-400">Company</h3>
              <ul className="space-y-3">
                <li>
                  <Link href="/" className="text-sm hover:text-gray-300 transition-colors">
                    Product
                  </Link>
                </li>
                <li>
                  <Link href="/" className="text-sm hover:text-gray-300 transition-colors">
                    Research
                  </Link>
                </li>
                <li>
                  <Link href="/" className="text-sm hover:text-gray-300 transition-colors">
                    Careers
                  </Link>
                </li>
                <li>
                  <Link href="/" className="text-sm hover:text-gray-300 transition-colors">
                    Company
                  </Link>
                </li>
                <li>
                  <Link href="/" className="text-sm hover:text-gray-300 transition-colors">
                    News
                  </Link>
                </li>
              </ul>
            </div>

            <div className="space-y-4">
              <h3 className="text-sm font-semibold text-gray-400">Legal</h3>
              <ul className="space-y-3">
                <li>
                  <Link href="/" className="text-sm hover:text-gray-300 transition-colors">
                    Terms of Service
                  </Link>
                </li>
                <li>
                  <Link href="/" className="text-sm hover:text-gray-300 transition-colors">
                    Privacy Policy
                  </Link>
                </li>
                <li>
                  <Link href="/" className="text-sm hover:text-gray-300 transition-colors">
                    Your Privacy Choices
                  </Link>
                </li>
                <li>
                  <Link href="/" className="text-sm hover:text-gray-300 transition-colors">
                    Responsible Disclosure Policy
                  </Link>
                </li>
                <li>
                  <Link href="/" className="text-sm hover:text-gray-300 transition-colors">
                    Compliance
                  </Link>
                </li>
              </ul>
            </div>
          </div>
        </div>

        <div className="mt-12 pt-8 border-t border-gray-800 text-xs text-gray-500">
          <p>
            This site is protected by reCAPTCHA Enterprise. The Google{" "}
            <Link href="/" className="underline hover:text-gray-400 transition-colors">
              Privacy Policy
            </Link>{" "}
            and{" "}
            <Link href="/" className="underline hover:text-gray-400 transition-colors">
              Terms of Service
            </Link>{" "}
            apply.
          </p>
        </div>
      </div>
    </footer>
  );
}
