import { Metadata } from 'next'

export const metadata: Metadata = {
  title: 'Privacy Policy | DevToolsBox',
  description: 'Privacy Policy for DevToolsBox - Learn how we handle your data and use Google AdSense for monetization.',
  openGraph: {
    title: 'Privacy Policy | DevToolsBox',
    description: 'Privacy Policy for DevToolsBox - Learn how we handle your data and use Google AdSense for monetization.',
    type: 'website',
  },
}

export default function PrivacyPage() {
  return (
    <div className="min-h-screen bg-gray-50">
      <div className="max-w-4xl mx-auto px-4 py-12">
        <article className="bg-white rounded-xl shadow-sm border border-gray-200 p-8 md:p-12">
          <h1 className="text-3xl md:text-4xl font-bold text-gray-900 mb-6">
            Privacy Policy
          </h1>
          
          <div className="prose prose-lg max-w-none text-gray-700">
            <p className="text-lg text-gray-600 mb-8">
              Last updated: {new Date().toLocaleDateString('en-US', { year: 'numeric', month: 'long', day: 'numeric' })}
            </p>

            <section className="mb-8">
              <h2 className="text-2xl font-semibold text-gray-900 mb-4">
                1. Introduction
              </h2>
              <p>
                Welcome to DevToolsBox ("we," "our," or "us"). We are committed to protecting your privacy. 
                This Privacy Policy explains how your personal information is collected, used, and disclosed by DevToolsBox 
                when you use our website and developer tools.
              </p>
            </section>

            <section className="mb-8">
              <h2 className="text-2xl font-semibold text-gray-900 mb-4">
                2. Information We Collect
              </h2>
              <p className="mb-4">
                DevToolsBox is a client-side tool platform. This means:
              </p>
              <ul className="list-disc pl-6 space-y-2">
                <li>
                  <strong>No Server Storage:</strong> All tool operations (JSON formatting, password generation, 
                  Base64 encoding, etc.) run entirely in your browser.
                </li>
                <li>
                  <strong>No Personal Data Collection:</strong> We do not collect, store, or transmit any personal 
                  information you input into our tools.
                </li>
                <li>
                  <strong>No User Accounts:</strong> We do not require registration or login to use our tools.
                </li>
              </ul>
            </section>

            <section className="mb-8">
              <h2 className="text-2xl font-semibold text-gray-900 mb-4">
                3. Google AdSense
              </h2>
              <p className="mb-4">
                We use Google AdSense to monetize our service and keep our tools free. Here's what you need to know:
              </p>
              <ul className="list-disc pl-6 space-y-2">
                <li>
                  <strong>Automated Ad Placement:</strong> Google displays ads on our website through their network. 
                  These ads are served by Google and may use cookies to show relevant advertisements.
                </li>
                <li>
                  <strong>Cookies:</strong> Google AdSense uses cookies to help serve ads based on your interests. 
                  You can opt out of personalized advertising by visiting{' '}
                  <a 
                    href="https://www.google.com/settings/ads" 
                    target="_blank" 
                    rel="noopener noreferrer"
                    className="text-blue-600 hover:text-blue-800 underline"
                  >
                    Google Ads Settings
                  </a>.
                </li>
                <li>
                  <strong>Third-Party Vendors:</strong> Google uses third-party vendors to serve ads. These vendors 
                  may collect information about your visits to our site and other websites to provide advertisements.
                </li>
                <li>
                  <strong>No Personal Data to Us:</strong> We do not provide any personal information to Google AdSense. 
                  Any data collection is governed by Google's Privacy Policy.
                </li>
              </ul>
            </section>

            <section className="mb-8">
              <h2 className="text-2xl font-semibold text-gray-900 mb-4">
                4. Cookies and Tracking Technologies
              </h2>
              <p>
                Our website may use cookies for analytics purposes to understand how visitors use our site. 
                These analytics help us improve our tools and user experience. The analytics data is aggregated 
                and does not identify individual users.
              </p>
            </section>

            <section className="mb-8">
              <h2 className="text-2xl font-semibold text-gray-900 mb-4">
                5. Third-Party Links
              </h2>
              <p>
                Our website may contain links to third-party websites. We are not responsible for the privacy 
                practices or content of these websites. We encourage you to review the privacy policies of any 
                third-party sites you visit.
              </p>
            </section>

            <section className="mb-8">
              <h2 className="text-2xl font-semibold text-gray-900 mb-4">
                6. Children's Privacy
              </h2>
              <p>
                Our service is not intended for children under 13. We do not knowingly collect personal information 
                from children under 13. If you believe we have collected information from a child under 13, please 
                contact us so we can remove it.
              </p>
            </section>

            <section className="mb-8">
              <h2 className="text-2xl font-semibold text-gray-900 mb-4">
                7. Changes to This Policy
              </h2>
              <p>
                We may update this Privacy Policy from time to time. We will post any changes on this page and 
                update the "Last updated" date at the top. Your continued use of our service after any changes 
                constitutes acceptance of the new policy.
              </p>
            </section>

            <section className="mb-8">
              <h2 className="text-2xl font-semibold text-gray-900 mb-4">
                8. Contact Us
              </h2>
              <p>
                If you have any questions about this Privacy Policy, please contact us at:{' '}
                <a 
                  href="mailto:privacy@devtoolsbox.com" 
                  className="text-blue-600 hover:text-blue-800 underline"
                >
                  privacy@devtoolsbox.com
                </a>
              </p>
            </section>
          </div>
        </article>

        <div className="mt-8 text-center">
          <a 
            href="/"
            className="inline-flex items-center text-blue-600 hover:text-blue-800 font-medium"
          >
            ← Back to Home
          </a>
        </div>
      </div>
    </div>
  )
}
