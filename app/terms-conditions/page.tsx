'use client';
import Header from '../../components/Header';
import Footer from '../../components/Footer';

export default function TermsConditionsPage() {
  return (
    <div className="min-h-screen bg-white">
      <Header />
      
      <div className="max-w-4xl mx-auto px-4 sm:px-6 lg:px-8 py-20">
        <div className="bg-white">
          <h1 className="text-4xl font-bold text-gray-900 mb-8">Terms & Conditions</h1>
          <p className="text-gray-600 mb-8">Last updated: January 2024</p>
          
          <div className="prose prose-lg max-w-none">
            <section className="mb-8">
              <h2 className="text-2xl font-semibold text-gray-900 mb-4">1. Agreement to Terms</h2>
              <p className="text-gray-600 mb-4">
                By accessing and using the services of ACT SCRAP METAL TRADING LTD ("Company," "we," "our," or "us"), you agree to be bound by these Terms and Conditions. If you do not agree to these terms, please do not use our services.
              </p>
            </section>

            <section className="mb-8">
              <h2 className="text-2xl font-semibold text-gray-900 mb-4">2. Company Information</h2>
              <div className="bg-gray-50 p-4 rounded-lg mb-4">
                <p className="text-gray-800 font-medium">ACT SCRAP METAL TRADING LTD</p>
                <p className="text-gray-600">Registered in England and Wales</p>
                <p className="text-gray-600">Address: 44 F S ACCOUNTANTS LTD YORK STREET, CLITHEROE, ENGLAND BB7 2DL</p>
                <p className="text-gray-600">Turkey Operations: WE TRADE GENERAL DIS TİCARET LIMITED ŞİRKETİ</p>
                <p className="text-gray-600">5219/1 Sok: No:8 İzmir Turkey</p>
              </div>
            </section>

            <section className="mb-8">
              <h2 className="text-2xl font-semibold text-gray-900 mb-4">3. Services</h2>
              <p className="text-gray-600 mb-4">We provide scrap metal trading services including:</p>
              <ul className="list-disc list-inside text-gray-600 mb-4 space-y-1">
                <li>Purchase of ferrous and non-ferrous metals</li>
                <li>Collection and transportation services</li>
                <li>Material processing and recycling</li>
                <li>Market price consultation and quotes</li>
                <li>International trading services</li>
              </ul>
            </section>

            <section className="mb-8">
              <h2 className="text-2xl font-semibold text-gray-900 mb-4">4. Buying and Selling Terms</h2>
              
              <h3 className="text-xl font-medium text-gray-800 mb-3">Material Requirements</h3>
              <ul className="list-disc list-inside text-gray-600 mb-4 space-y-1">
                <li>All materials must be legally owned by the seller</li>
                <li>Materials must be free from hazardous substances unless declared</li>
                <li>Accurate description of material type, grade, and condition required</li>
                <li>We reserve the right to inspect and verify materials before purchase</li>
              </ul>

              <h3 className="text-xl font-medium text-gray-800 mb-3">Pricing and Payment</h3>
              <ul className="list-disc list-inside text-gray-600 mb-4 space-y-1">
                <li>Prices are based on current market rates and material quality</li>
                <li>Final prices determined after weighing and quality assessment</li>
                <li>Payment made upon completion of transaction verification</li>
                <li>We reserve the right to reject materials that don't meet specifications</li>
              </ul>
            </section>

            <section className="mb-8">
              <h2 className="text-2xl font-semibold text-gray-900 mb-4">5. Collection Services</h2>
              <ul className="list-disc list-inside text-gray-600 mb-4 space-y-1">
                <li>Collection appointments subject to availability and minimum quantities</li>
                <li>Access requirements and safety conditions must be communicated in advance</li>
                <li>Customer responsible for ensuring safe access to materials</li>
                <li>Collection may be rescheduled due to weather or safety concerns</li>
              </ul>
            </section>

            <section className="mb-8">
              <h2 className="text-2xl font-semibold text-gray-900 mb-4">6. Compliance and Legal Requirements</h2>
              <ul className="list-disc list-inside text-gray-600 mb-4 space-y-1">
                <li>All transactions comply with UK waste management regulations</li>
                <li>Sellers must provide valid identification and proof of ownership</li>
                <li>We maintain required licenses for waste carrier and metal dealer activities</li>
                <li>Suspicious transactions reported to relevant authorities as required by law</li>
              </ul>
            </section>

            <section className="mb-8">
              <h2 className="text-2xl font-semibold text-gray-900 mb-4">7. Limitation of Liability</h2>
              <p className="text-gray-600 mb-4">
                To the maximum extent permitted by law, ACT SCRAP METAL TRADING LTD shall not be liable for any indirect, incidental, special, or consequential damages arising from the use of our services. Our total liability is limited to the value of the specific transaction in question.
              </p>
            </section>

            <section className="mb-8">
              <h2 className="text-2xl font-semibold text-gray-900 mb-4">8. Force Majeure</h2>
              <p className="text-gray-600 mb-4">
                We shall not be liable for any failure to perform our obligations due to circumstances beyond our reasonable control, including but not limited to natural disasters, government actions, labor disputes, or equipment failures.
              </p>
            </section>

            <section className="mb-8">
              <h2 className="text-2xl font-semibold text-gray-900 mb-4">9. Privacy and Data Protection</h2>
              <p className="text-gray-600 mb-4">
                Your personal information is protected in accordance with our Privacy Policy and applicable data protection laws. We collect and use information only as necessary to provide our services and comply with legal requirements.
              </p>
            </section>

            <section className="mb-8">
              <h2 className="text-2xl font-semibold text-gray-900 mb-4">10. Intellectual Property</h2>
              <p className="text-gray-600 mb-4">
                All content on our website and materials, including logos, text, images, and software, are protected by intellectual property rights and remain the property of ACT SCRAP METAL TRADING LTD or our licensors.
              </p>
            </section>

            <section className="mb-8">
              <h2 className="text-2xl font-semibold text-gray-900 mb-4">11. Dispute Resolution</h2>
              <p className="text-gray-600 mb-4">
                Any disputes arising from these terms or our services shall be resolved through good faith negotiation. If resolution cannot be reached, disputes will be subject to the jurisdiction of English courts.
              </p>
            </section>

            <section className="mb-8">
              <h2 className="text-2xl font-semibold text-gray-900 mb-4">12. Modifications</h2>
              <p className="text-gray-600 mb-4">
                We reserve the right to modify these Terms and Conditions at any time. Changes will be effective immediately upon posting on our website. Continued use of our services constitutes acceptance of modified terms.
              </p>
            </section>

            <section className="mb-8">
              <h2 className="text-2xl font-semibold text-gray-900 mb-4">13. Termination</h2>
              <p className="text-gray-600 mb-4">
                We may terminate or suspend access to our services immediately for any breach of these terms or for any other reason at our sole discretion.
              </p>
            </section>

            <section className="mb-8">
              <h2 className="text-2xl font-semibold text-gray-900 mb-4">14. Contact Information</h2>
              <p className="text-gray-600 mb-4">
                For questions about these Terms and Conditions, please contact us:
              </p>
              <div className="bg-gray-50 p-4 rounded-lg">
                <p className="text-gray-600">Phone: +44 7367067827</p>
                <p className="text-gray-600">WhatsApp: +44 7367067827</p>
                <p className="text-gray-600">Email: info@actscrapmetaltradingltd.uk</p>
                <p className="text-gray-600">Address: 44 F S ACCOUNTANTS LTD YORK STREET, CLITHEROE, ENGLAND BB7 2DL</p>
              </div>
            </section>
          </div>
        </div>
      </div>

      <Footer />
    </div>
  );
}