'use client';
import Header from '../../components/Header';
import Footer from '../../components/Footer';

export default function PrivacyPolicyPage() {
  return (
    <div className="min-h-screen bg-white">
      <Header />
      
      <div className="max-w-4xl mx-auto px-4 sm:px-6 lg:px-8 py-20">
        <div className="bg-white">
          <h1 className="text-4xl font-bold text-gray-900 mb-8">Privacy Policy</h1>
          <p className="text-gray-600 mb-8">Last updated: January 2024</p>
          
          <div className="prose prose-lg max-w-none">
            <section className="mb-8">
              <h2 className="text-2xl font-semibold text-gray-900 mb-4">1. Introduction</h2>
              <p className="text-gray-600 mb-4">
                ACT SCRAP METAL TRADING LTD ("we," "our," or "us") is committed to protecting your privacy. This Privacy Policy explains how we collect, use, disclose, and safeguard your information when you visit our website or use our services.
              </p>
            </section>

            <section className="mb-8">
              <h2 className="text-2xl font-semibold text-gray-900 mb-4">2. Information We Collect</h2>
              <h3 className="text-xl font-medium text-gray-800 mb-3">Personal Information</h3>
              <p className="text-gray-600 mb-4">We may collect the following personal information:</p>
              <ul className="list-disc list-inside text-gray-600 mb-4 space-y-1">
                <li>Name and contact information (email, phone number, address)</li>
                <li>Company information for business transactions</li>
                <li>Details about scrap materials you wish to buy or sell</li>
                <li>Payment information for transactions</li>
                <li>Communication records and correspondence</li>
              </ul>
              
              <h3 className="text-xl font-medium text-gray-800 mb-3">Automatically Collected Information</h3>
              <ul className="list-disc list-inside text-gray-600 mb-4 space-y-1">
                <li>IP address and browser information</li>
                <li>Usage data and website analytics</li>
                <li>Cookies and similar tracking technologies</li>
              </ul>
            </section>

            <section className="mb-8">
              <h2 className="text-2xl font-semibold text-gray-900 mb-4">3. How We Use Your Information</h2>
              <p className="text-gray-600 mb-4">We use your information to:</p>
              <ul className="list-disc list-inside text-gray-600 mb-4 space-y-1">
                <li>Provide scrap metal trading services and process transactions</li>
                <li>Communicate with you about quotes, collections, and payments</li>
                <li>Improve our website and services</li>
                <li>Comply with legal and regulatory requirements</li>
                <li>Send you marketing communications (with your consent)</li>
                <li>Detect and prevent fraud or unauthorized activities</li>
              </ul>
            </section>

            <section className="mb-8">
              <h2 className="text-2xl font-semibold text-gray-900 mb-4">4. Information Sharing and Disclosure</h2>
              <p className="text-gray-600 mb-4">We may share your information with:</p>
              <ul className="list-disc list-inside text-gray-600 mb-4 space-y-1">
                <li>Service providers and business partners who assist in our operations</li>
                <li>Payment processors for transaction processing</li>
                <li>Legal authorities when required by law or to protect our rights</li>
                <li>Business acquirers in case of merger, acquisition, or asset sale</li>
              </ul>
              <p className="text-gray-600 mb-4">
                We do not sell, rent, or lease your personal information to third parties for their marketing purposes.
              </p>
            </section>

            <section className="mb-8">
              <h2 className="text-2xl font-semibold text-gray-900 mb-4">5. Data Security</h2>
              <p className="text-gray-600 mb-4">
                We implement appropriate technical and organizational security measures to protect your personal information against unauthorized access, alteration, disclosure, or destruction. However, no internet transmission is completely secure, and we cannot guarantee absolute security.
              </p>
            </section>

            <section className="mb-8">
              <h2 className="text-2xl font-semibold text-gray-900 mb-4">6. Your Rights</h2>
              <p className="text-gray-600 mb-4">Under UK data protection law, you have the right to:</p>
              <ul className="list-disc list-inside text-gray-600 mb-4 space-y-1">
                <li>Access your personal data</li>
                <li>Correct inaccurate or incomplete data</li>
                <li>Request deletion of your data</li>
                <li>Object to processing of your data</li>
                <li>Request data portability</li>
                <li>Withdraw consent where processing is based on consent</li>
              </ul>
            </section>

            <section className="mb-8">
              <h2 className="text-2xl font-semibold text-gray-900 mb-4">7. Cookies</h2>
              <p className="text-gray-600 mb-4">
                Our website uses cookies to enhance your browsing experience, analyze website traffic, and provide personalized content. You can control cookies through your browser settings, but disabling cookies may affect website functionality.
              </p>
            </section>

            <section className="mb-8">
              <h2 className="text-2xl font-semibold text-gray-900 mb-4">8. Data Retention</h2>
              <p className="text-gray-600 mb-4">
                We retain your personal information only as long as necessary for the purposes outlined in this policy or as required by law. Business transaction records may be retained for up to 7 years for accounting and legal compliance purposes.
              </p>
            </section>

            <section className="mb-8">
              <h2 className="text-2xl font-semibold text-gray-900 mb-4">9. International Transfers</h2>
              <p className="text-gray-600 mb-4">
                We may transfer your data to our operations in Turkey (WE TRADE GENERAL DIS TİCARET LIMITED ŞİRKETİ). All international transfers comply with applicable data protection laws and include appropriate safeguards.
              </p>
            </section>

            <section className="mb-8">
              <h2 className="text-2xl font-semibold text-gray-900 mb-4">10. Changes to This Policy</h2>
              <p className="text-gray-600 mb-4">
                We may update this Privacy Policy periodically. We will notify you of any material changes by posting the new policy on our website and updating the "Last Updated" date.
              </p>
            </section>

            <section className="mb-8">
              <h2 className="text-2xl font-semibold text-gray-900 mb-4">11. Contact Us</h2>
              <p className="text-gray-600 mb-4">
                If you have any questions about this Privacy Policy or wish to exercise your rights, please contact us:
              </p>
              <div className="bg-gray-50 p-4 rounded-lg">
                <p className="text-gray-800 font-medium">ACT SCRAP METAL TRADING LTD</p>
                <p className="text-gray-600">44 F S ACCOUNTANTS LTD YORK STREET</p>
                <p className="text-gray-600">CLITHEROE, ENGLAND BB7 2DL</p>
                <p className="text-gray-600">Phone: +44 7367067827</p>
                <p className="text-gray-600">Email: info@actscrapmetaltradingltd.uk</p>
              </div>
            </section>
          </div>
        </div>
      </div>

      <Footer />
    </div>
  );
}