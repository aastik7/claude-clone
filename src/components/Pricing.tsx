"use client";

import Link from "next/link";
import Image from "next/image";

export function Pricing() {
  return (
    <section id="pricing" className="w-full py-16 md:py-24 bg-white">
      <div className="container space-y-12">
        <div className="text-center space-y-4">
          <h2 className="text-4xl font-serif font-semibold">
            Explore plans
          </h2>
        </div>

        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-6">
          {/* Free Plan */}
          <div className="bg-claude-background p-6 rounded-xl border border-gray-200 flex flex-col h-full">
            <div className="mb-6">
              <h3 className="text-xl font-semibold mb-1">Free</h3>
              <p className="text-sm text-claude-gray">For individuals to get started</p>
            </div>

            <div className="space-y-4 flex-1">
              <div className="flex items-start">
                <Image
                  src="https://ext.same-assets.com/605431018/1248550479.svg"
                  alt="Checkmark"
                  width={20}
                  height={20}
                  className="mr-3 mt-1"
                />
                <span className="text-sm">Talk to Claude on the web, iOS, and Android</span>
              </div>

              <div className="flex items-start">
                <Image
                  src="https://ext.same-assets.com/605431018/1248550479.svg"
                  alt="Checkmark"
                  width={20}
                  height={20}
                  className="mr-3 mt-1"
                />
                <span className="text-sm">Ask about images and docs</span>
              </div>

              <div className="flex items-start">
                <Image
                  src="https://ext.same-assets.com/605431018/1248550479.svg"
                  alt="Checkmark"
                  width={20}
                  height={20}
                  className="mr-3 mt-1"
                />
                <span className="text-sm">Access to one of our latest models</span>
              </div>
            </div>

            <div className="mt-6">
              <p className="text-2xl font-bold mb-1">$0</p>
              <p className="text-sm text-claude-gray">Free for everyone</p>
            </div>
          </div>

          {/* Pro Plan */}
          <div className="bg-claude-background p-6 rounded-xl border border-gray-200 flex flex-col h-full">
            <div className="mb-6">
              <h3 className="text-xl font-semibold mb-1">Pro</h3>
              <p className="text-sm text-claude-gray">For Claude power users</p>
            </div>

            <div className="space-y-4 flex-1">
              <p className="text-sm font-medium">Everything in Free, plus:</p>

              <div className="flex items-start">
                <Image
                  src="https://ext.same-assets.com/605431018/1248550479.svg"
                  alt="Checkmark"
                  width={20}
                  height={20}
                  className="mr-3 mt-1"
                />
                <span className="text-sm">More usage than Free</span>
              </div>

              <div className="flex items-start">
                <Image
                  src="https://ext.same-assets.com/605431018/1248550479.svg"
                  alt="Checkmark"
                  width={20}
                  height={20}
                  className="mr-3 mt-1"
                />
                <span className="text-sm">Organize documents and chats with Projects</span>
              </div>

              <div className="flex items-start">
                <Image
                  src="https://ext.same-assets.com/605431018/1248550479.svg"
                  alt="Checkmark"
                  width={20}
                  height={20}
                  className="mr-3 mt-1"
                />
                <span className="text-sm">Access additional Claude models</span>
              </div>

              <div className="flex items-start">
                <Image
                  src="https://ext.same-assets.com/605431018/1248550479.svg"
                  alt="Checkmark"
                  width={20}
                  height={20}
                  className="mr-3 mt-1"
                />
                <span className="text-sm">Use Claude 3.7 Sonnet with extended thinking mode</span>
              </div>

              <div className="flex items-start">
                <Image
                  src="https://ext.same-assets.com/605431018/1248550479.svg"
                  alt="Checkmark"
                  width={20}
                  height={20}
                  className="mr-3 mt-1"
                />
                <span className="text-sm">Early access to new features</span>
              </div>
            </div>

            <div className="mt-6">
              <p className="text-2xl font-bold mb-1">$18</p>
              <p className="text-sm text-claude-gray">Per month with annual subscription discount; $216 billed up front. $20 if billed monthly.</p>
            </div>
          </div>

          {/* Team Plan */}
          <div className="bg-claude-background p-6 rounded-xl border border-gray-200 flex flex-col h-full">
            <div className="mb-6">
              <h3 className="text-xl font-semibold mb-1">Team</h3>
              <p className="text-sm text-claude-gray">For fast-growing teams</p>
            </div>

            <div className="space-y-4 flex-1">
              <p className="text-sm font-medium">Everything in Pro, plus:</p>

              <div className="flex items-start">
                <Image
                  src="https://ext.same-assets.com/605431018/1248550479.svg"
                  alt="Checkmark"
                  width={20}
                  height={20}
                  className="mr-3 mt-1"
                />
                <span className="text-sm">More usage than Pro</span>
              </div>

              <div className="flex items-start">
                <Image
                  src="https://ext.same-assets.com/605431018/1248550479.svg"
                  alt="Checkmark"
                  width={20}
                  height={20}
                  className="mr-3 mt-1"
                />
                <span className="text-sm">Central billing and administration</span>
              </div>

              <div className="flex items-start">
                <Image
                  src="https://ext.same-assets.com/605431018/1248550479.svg"
                  alt="Checkmark"
                  width={20}
                  height={20}
                  className="mr-3 mt-1"
                />
                <span className="text-sm">Early access to collaboration features</span>
              </div>
            </div>

            <div className="mt-6">
              <p className="text-2xl font-bold mb-1">$25</p>
              <p className="text-sm text-claude-gray">Per person / month with annual subscription discount. $30 if billed monthly. Minimum 5 members.</p>
            </div>
          </div>

          {/* Enterprise Plan */}
          <div className="bg-claude-background p-6 rounded-xl border border-gray-200 flex flex-col h-full">
            <div className="mb-6">
              <h3 className="text-xl font-semibold mb-1">Enterprise</h3>
              <p className="text-sm text-claude-gray">For businesses operating at scale</p>
            </div>

            <div className="space-y-4 flex-1">
              <p className="text-sm font-medium">Everything in Team, plus:</p>

              <div className="flex items-start">
                <Image
                  src="https://ext.same-assets.com/605431018/1248550479.svg"
                  alt="Checkmark"
                  width={20}
                  height={20}
                  className="mr-3 mt-1"
                />
                <span className="text-sm">More usage than Team</span>
              </div>

              <div className="flex items-start">
                <Image
                  src="https://ext.same-assets.com/605431018/1248550479.svg"
                  alt="Checkmark"
                  width={20}
                  height={20}
                  className="mr-3 mt-1"
                />
                <span className="text-sm">Expanded context window</span>
              </div>

              <div className="flex items-start">
                <Image
                  src="https://ext.same-assets.com/605431018/1248550479.svg"
                  alt="Checkmark"
                  width={20}
                  height={20}
                  className="mr-3 mt-1"
                />
                <span className="text-sm">Single sign-on (SSO) and domain capture</span>
              </div>

              <div className="flex items-start">
                <Image
                  src="https://ext.same-assets.com/605431018/1248550479.svg"
                  alt="Checkmark"
                  width={20}
                  height={20}
                  className="mr-3 mt-1"
                />
                <span className="text-sm">Role-based access with fine grained permissioning</span>
              </div>

              <div className="flex items-start">
                <Image
                  src="https://ext.same-assets.com/605431018/1248550479.svg"
                  alt="Checkmark"
                  width={20}
                  height={20}
                  className="mr-3 mt-1"
                />
                <span className="text-sm">System for Cross-domain Identity Management (SCIM)</span>
              </div>

              <div className="flex items-start">
                <Image
                  src="https://ext.same-assets.com/605431018/1248550479.svg"
                  alt="Checkmark"
                  width={20}
                  height={20}
                  className="mr-3 mt-1"
                />
                <span className="text-sm">Audit logs</span>
              </div>
            </div>

            <div className="mt-6">
              <Link
                href="/"
                className="block text-center bg-claude-accent hover:bg-opacity-90 text-white py-2 px-4 rounded-lg transition-colors"
              >
                Contact sales
              </Link>
            </div>
          </div>
        </div>

        <p className="text-center text-sm text-claude-gray">
          Prices shown do not include applicable tax.
        </p>
      </div>
    </section>
  );
}
