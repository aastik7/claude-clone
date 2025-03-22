"use client";

import { useState } from "react";

type FAQItemProps = {
  question: string;
  answer: React.ReactNode;
};

function FAQItem({ question, answer }: FAQItemProps) {
  const [isOpen, setIsOpen] = useState(false);

  return (
    <div className="border-t border-gray-200 py-6">
      <button
        onClick={() => setIsOpen(!isOpen)}
        className="flex justify-between items-center w-full text-left"
      >
        <h3 className="text-xl font-medium">{question}</h3>
        <span className="text-2xl">
          {isOpen ? (
            <svg width="24" height="24" viewBox="0 0 24 24" fill="none" xmlns="http://www.w3.org/2000/svg">
              <path d="M6 18L18 6M6 6L18 18" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round"/>
            </svg>
          ) : (
            <svg width="24" height="24" viewBox="0 0 24 24" fill="none" xmlns="http://www.w3.org/2000/svg">
              <path d="M12 5V19M5 12H19" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round"/>
            </svg>
          )}
        </span>
      </button>
      {isOpen && (
        <div className="mt-4 text-claude-gray">
          {answer}
        </div>
      )}
    </div>
  );
}

export function FAQ() {
  return (
    <section id="faq" className="w-full py-16 md:py-24">
      <div className="container">
        <h2 className="text-4xl font-serif font-semibold mb-12 text-center">
          Frequently asked questions
        </h2>

        <div className="max-w-3xl mx-auto">
          <FAQItem
            question="What is Claude and how does it work?"
            answer={
              <div className="space-y-4">
                <p>
                  Claude is an AI assistant created by Anthropic to be helpful, harmless, and honest.
                  Claude can engage in natural conversations, answer questions, help with creative tasks, and generate various kinds of content.
                </p>
                <p>
                  Claude is powered by a large language model (LLM) trained on a diverse dataset of text from the internet and other sources.
                  This training enables Claude to understand natural language, maintain context in conversations, and generate human-like responses.
                </p>
              </div>
            }
          />

          <FAQItem
            question="What should I use Claude for?"
            answer={
              <div className="space-y-4">
                <p>Claude excels at a wide range of tasks, including:</p>
                <ul className="list-disc pl-5 space-y-2">
                  <li>Answering questions and providing explanations</li>
                  <li>Creative writing and brainstorming</li>
                  <li>Summarizing and analyzing documents</li>
                  <li>Drafting emails, reports, and other professional content</li>
                  <li>Helping with coding and technical tasks</li>
                  <li>Conversation and language practice</li>
                  <li>Learning about various topics through discussion</li>
                </ul>
                <p>
                  Claude can handle both simple questions and complex, nuanced discussions
                  across a wide variety of domains.
                </p>
              </div>
            }
          />

          <FAQItem
            question="How much does it cost to use?"
            answer={
              <div className="space-y-4">
                <p>
                  Claude offers several pricing tiers:
                </p>
                <ul className="list-disc pl-5 space-y-2">
                  <li>
                    <strong>Free:</strong> Available to everyone with limited usage of Claude and
                    access to one of our latest models
                  </li>
                  <li>
                    <strong>Pro ($18/month):</strong> Increased usage limits, access to additional Claude models,
                    project organization, extended thinking mode, and early access to new features
                  </li>
                  <li>
                    <strong>Team ($25/person/month):</strong> All Pro features plus higher usage limits,
                    central billing, and collaboration features
                  </li>
                  <li>
                    <strong>Enterprise:</strong> Custom pricing with additional features for large organizations,
                    including expanded context window, SSO, role-based access, and audit logs
                  </li>
                </ul>
                <p>
                  Annual subscriptions provide a discount compared to monthly billing.
                </p>
              </div>
            }
          />
        </div>
      </div>
    </section>
  );
}
