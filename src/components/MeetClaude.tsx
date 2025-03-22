"use client";

import Image from "next/image";

export function MeetClaude() {
  return (
    <section className="w-full py-16 md:py-24">
      <div className="container space-y-6 text-center">
        <h2 className="text-4xl md:text-5xl font-serif font-semibold">
          Meet Claude
        </h2>
        <p className="text-lg md:text-xl text-claude-gray max-w-3xl mx-auto">
          Claude is a next generation AI assistant built by Anthropic and trained to be safe, accurate, and secure to help you do your best work.
        </p>

        <div className="grid grid-cols-1 lg:grid-cols-2 gap-10 mt-16 text-left">
          <div className="bg-gray-100 rounded-lg p-4 h-[300px] flex justify-center items-center">
            <div className="bg-[#f9f3f2] rounded-lg w-full h-full flex flex-col">
              <div className="p-3 border-b border-gray-200">
                <span className="text-sm font-medium">Claude</span>
              </div>
              <div className="flex-1 p-4">
                {/* Chat interface placeholder */}
              </div>
              <div className="p-3 border-t border-gray-200 flex items-center">
                <input
                  type="text"
                  placeholder="Reply to Claude..."
                  className="flex-1 bg-transparent outline-none text-sm"
                />
                <button className="w-6 h-6 ml-2 bg-claude-accent rounded-full flex items-center justify-center">
                  <svg
                    width="14"
                    height="14"
                    viewBox="0 0 24 24"
                    fill="none"
                    xmlns="http://www.w3.org/2000/svg"
                    className="text-white"
                  >
                    <path
                      d="M2 12l10 10v-6.5c0-0.28 0.22-0.5 0.5-0.5h6.5l-10-10-7 7z"
                      stroke="currentColor"
                      fill="currentColor"
                    />
                  </svg>
                </button>
              </div>
            </div>
          </div>

          <div className="space-y-8">
            <div className="space-y-4">
              <div className="flex items-start">
                <span className="p-2 bg-gray-100 rounded-lg mr-4">
                  <svg
                    width="24"
                    height="24"
                    viewBox="0 0 24 24"
                    fill="none"
                    xmlns="http://www.w3.org/2000/svg"
                    className="text-claude-text"
                  >
                    <path
                      d="M22 9L12 5L2 9L12 13L22 9ZM22 9V15"
                      stroke="currentColor"
                      strokeWidth="2"
                      strokeLinecap="round"
                      strokeLinejoin="round"
                    />
                    <path
                      d="M6 11.5V16.5C6 18.71 8.69 20.5 12 20.5C15.31 20.5 18 18.71 18 16.5V11.5"
                      stroke="currentColor"
                      strokeWidth="2"
                      strokeLinecap="round"
                      strokeLinejoin="round"
                    />
                  </svg>
                </span>
                <div>
                  <h3 className="text-xl font-medium">Create with Claude</h3>
                  <p className="text-claude-gray mt-1">
                    Draft and iterate on websites, graphics, documents, and code alongside your chat with Artifacts.
                  </p>
                </div>
              </div>
            </div>

            <div className="space-y-4">
              <div className="flex items-start">
                <span className="p-2 bg-gray-100 rounded-lg mr-4">
                  <svg
                    width="24"
                    height="24"
                    viewBox="0 0 24 24"
                    fill="none"
                    xmlns="http://www.w3.org/2000/svg"
                    className="text-claude-text"
                  >
                    <path
                      d="M12 16L4 10L12 4L20 10L12 16Z"
                      stroke="currentColor"
                      strokeWidth="2"
                      strokeLinecap="round"
                      strokeLinejoin="round"
                    />
                    <path
                      d="M4 15L12 21L20 15"
                      stroke="currentColor"
                      strokeWidth="2"
                      strokeLinecap="round"
                      strokeLinejoin="round"
                    />
                  </svg>
                </span>
                <div>
                  <h3 className="text-xl font-medium">Bring your knowledge</h3>
                  <p className="text-claude-gray mt-1">
                    Upload documents, images, and other files to leverage your own content and data.
                  </p>
                </div>
              </div>
            </div>

            <div className="space-y-4">
              <div className="flex items-start">
                <span className="p-2 bg-gray-100 rounded-lg mr-4">
                  <svg
                    width="24"
                    height="24"
                    viewBox="0 0 24 24"
                    fill="none"
                    xmlns="http://www.w3.org/2000/svg"
                    className="text-claude-text"
                  >
                    <path
                      d="M17 21V19C17 17.9391 16.5786 16.9217 15.8284 16.1716C15.0783 15.4214 14.0609 15 13 15H5C3.93913 15 2.92172 15.4214 2.17157 16.1716C1.42143 16.9217 1 17.9391 1 19V21"
                      stroke="currentColor"
                      strokeWidth="2"
                      strokeLinecap="round"
                      strokeLinejoin="round"
                    />
                    <path
                      d="M9 11C11.2091 11 13 9.20914 13 7C13 4.79086 11.2091 3 9 3C6.79086 3 5 4.79086 5 7C5 9.20914 6.79086 11 9 11Z"
                      stroke="currentColor"
                      strokeWidth="2"
                      strokeLinecap="round"
                      strokeLinejoin="round"
                    />
                    <path
                      d="M23 21V19C22.9993 18.1137 22.7044 17.2528 22.1614 16.5523C21.6184 15.8519 20.8581 15.3516 20 15.13"
                      stroke="currentColor"
                      strokeWidth="2"
                      strokeLinecap="round"
                      strokeLinejoin="round"
                    />
                    <path
                      d="M16 3.13C16.8604 3.35031 17.623 3.85071 18.1676 4.55232C18.7122 5.25392 19.0078 6.11683 19.0078 7.005C19.0078 7.89318 18.7122 8.75608 18.1676 9.45769C17.623 10.1593 16.8604 10.6597 16 10.88"
                      stroke="currentColor"
                      strokeWidth="2"
                      strokeLinecap="round"
                      strokeLinejoin="round"
                    />
                  </svg>
                </span>
                <div>
                  <h3 className="text-xl font-medium">Share and collaborate with your team</h3>
                  <p className="text-claude-gray mt-1">
                    Work together on projects and share resources with your team members.
                  </p>
                </div>
              </div>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
}
