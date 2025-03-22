"use client";

import Link from "next/link";
import Image from "next/image";

export function Header() {
  return (
    <header className="w-full py-4 md:py-6">
      <div className="container flex items-center justify-between">
        <Link href="/" className="flex items-center">
          <Image
            src="https://ext.same-assets.com/605431018/1248550479.svg"
            alt="Claude"
            width={24}
            height={24}
            className="mr-2"
          />
          <span className="text-xl font-medium">Claude</span>
        </Link>
        <div className="hidden md:flex items-center space-x-6">
          <Link href="#features" className="text-claude-text hover:text-claude-accent transition-colors">
            Features
          </Link>
          <Link href="#pricing" className="text-claude-text hover:text-claude-accent transition-colors">
            Pricing
          </Link>
          <Link href="#faq" className="text-claude-text hover:text-claude-accent transition-colors">
            FAQ
          </Link>
          <Link
            href="/"
            className="bg-claude-accent hover:bg-opacity-90 text-white px-4 py-2 rounded-lg font-medium transition-colors"
          >
            Get Started
          </Link>
        </div>
      </div>
    </header>
  );
}
