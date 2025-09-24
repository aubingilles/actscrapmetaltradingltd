
'use client';
import { useState } from 'react';

export default function GetQuotePage() {
  const [formData, setFormData] = useState({
    name: '',
    email: '',
    phone: '',
    company: '',
    location: '',
    materials: '',
    quantity: '',
    description: '',
    urgency: 'standard',
    preferredContact: 'email'
  });

  const [isSubmitting, setIsSubmitting] = useState(false);
  const [isSubmitted, setIsSubmitted] = useState(false);
  const [submitError, setSubmitError] = useState('');

  const handleInputChange = (e) => {
    const { name, value } = e.target;
    setFormData(prev => ({ ...prev, [name]: value }));
  };

  const handleSubmit = async (e) => {
    e.preventDefault();
    setIsSubmitting(true);
    setSubmitError('');

    try {
      const formBody = new FormData();
      formBody.append('access_key', '8fb35564-594f-43ec-915f-637f0394c489'); 
      formBody.append('name', formData.name);
      formBody.append('email', formData.email);
      formBody.append('subject', `Quote Request from ${formData.name} - ${formData.materials}`);
      formBody.append('message', `
Quote Request from ACT Scrap Metal Website:

CUSTOMER INFORMATION:
Name: ${formData.name}
Email: ${formData.email}
Phone: ${formData.phone}
Company: ${formData.company}
Location: ${formData.location}

MATERIAL DETAILS:
Material Type: ${formData.materials}
Quantity: ${formData.quantity}
Description: ${formData.description}

REQUEST DETAILS:
Urgency: ${formData.urgency}
Preferred Contact: ${formData.preferredContact}

Submitted: ${new Date().toLocaleString()}
      `);
      formBody.append('from_name', 'ACT Scrap Metal Website');
      formBody.append('redirect', 'false');

      const response = await fetch('https://api.web3forms.com/submit', {
        method: 'POST',
        body: formBody
      });

      const result = await response.json();

      if (result.success) {
        setIsSubmitted(true);
        setFormData({
          name: '',
          email: '',
          phone: '',
          company: '',
          location: '',
          materials: '',
          quantity: '',
          description: '',
          urgency: 'standard',
          preferredContact: 'email'
        });
      } else {
        throw new Error(result.message || 'Failed to send quote request');
      }
    } catch (error) {
      console.error('Form submission error:', error);
      setSubmitError('Sorry, there was an error submitting your quote request. Please try again or contact us directly at +44 7367067827.');
    } finally {
      setIsSubmitting(false);
    }
  };

  if (isSubmitted) {
    return (
      <>
        <div className="min-h-screen bg-gray-50 py-20">
          <div className="max-w-2xl mx-auto px-4 sm:px-6 lg:px-8 text-center">
            <div className="bg-white rounded-lg shadow-sm border border-gray-200 p-8">
              <div className="w-16 h-16 flex items-center justify-center mx-auto mb-6 bg-green-100 rounded-full">
                <i className="ri-check-line text-3xl text-green-600"></i>
              </div>
              <h1 className="text-3xl font-bold text-gray-900 mb-4">Quote Request Submitted!</h1>
              <p className="text-lg text-gray-600 mb-6">
                Thank you for your interest in our scrap metal trading services. We have received your quote request and will get back to you within 24 hours.
              </p>
              <div className="bg-purple-50 border border-purple-200 rounded-lg p-4 mb-6">
                <p className="text-sm text-purple-800">
                  <strong>What happens next?</strong><br />
                  Our team will review your requirements and contact you with a competitive quote. For urgent requests, please call us directly at +44 7367067827.
                </p>
              </div>
              <button
                onClick={() => window.location.href = '/'}
                className="bg-purple-600 text-white px-6 py-3 rounded-lg text-lg font-semibold hover:bg-purple-700 transition-colors cursor-pointer"
              >
                Return to Homepage
              </button>
            </div>
          </div>
        </div>
      </>
    );
  }

  return (
    <>
      <div className="min-h-screen bg-gray-50 py-20">
        <div className="max-w-4xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="text-center mb-12">
            <h1 className="text-4xl font-bold text-gray-900 mb-4">Get Your Quote</h1>
            <p className="text-xl text-gray-600">
              Request a competitive quote for scrap metal trading services. Our team provides fast, reliable pricing for all material types.
            </p>
          </div>

          <div className="bg-white rounded-lg shadow-sm border border-gray-200 overflow-hidden">
            <div className="bg-purple-600 text-white p-6">
              <h2 className="text-2xl font-semibold">Quote Request Form</h2>
              <p className="mt-2 opacity-90">Fill out the details below and we'll get back to you with a competitive quote</p>
            </div>

            <form id="quote-form" onSubmit={handleSubmit} className="p-8 space-y-6">
              {/* Personal Information */}
              <div className="grid grid-cols-1 md:grid-cols-2 gap-6">
                <div>
                  <label htmlFor="name" className="block text-sm font-medium text-gray-700 mb-2">
                    Full Name *
                  </label>
                  <input
                    type="text"
                    id="name"
                    name="name"
                    value={formData.name}
                    onChange={handleInputChange}
                    required
                    className="w-full px-4 py-3 border border-gray-300 rounded-lg focus:ring-2 focus:ring-purple-500 focus:border-purple-500"
                    placeholder="Enter your full name"
                  />
                </div>

                <div>
                  <label htmlFor="email" className="block text-sm font-medium text-gray-700 mb-2">
                    Email Address *
                  </label>
                  <input
                    type="email"
                    id="email"
                    name="email"
                    value={formData.email}
                    onChange={handleInputChange}
                    required
                    className="w-full px-4 py-3 border border-gray-300 rounded-lg focus:ring-2 focus:ring-purple-500 focus:border-purple-500"
                    placeholder="Enter your email address"
                  />
                </div>
              </div>

              <div className="grid grid-cols-1 md:grid-cols-2 gap-6">
                <div>
                  <label htmlFor="phone" className="block text-sm font-medium text-gray-700 mb-2">
                    Phone Number *
                  </label>
                  <input
                    type="tel"
                    id="phone"
                    name="phone"
                    value={formData.phone}
                    onChange={handleInputChange}
                    required
                    className="w-full px-4 py-3 border border-gray-300 rounded-lg focus:ring-2 focus:ring-purple-500 focus:border-purple-500"
                    placeholder="+44 XXXX XXXXXX"
                  />
                </div>

                <div>
                  <label htmlFor="company" className="block text-sm font-medium text-gray-700 mb-2">
                    Company Name
                  </label>
                  <input
                    type="text"
                    id="company"
                    name="company"
                    value={formData.company}
                    onChange={handleInputChange}
                    className="w-full px-4 py-3 border border-gray-300 rounded-lg focus:ring-2 focus:ring-purple-500 focus:border-purple-500"
                    placeholder="Enter your company name"
                  />
                </div>
              </div>

              <div>
                <label htmlFor="location" className="block text-sm font-medium text-gray-700 mb-2">
                  Location *
                </label>
                <input
                  type="text"
                  id="location"
                  name="location"
                  value={formData.location}
                  onChange={handleInputChange}
                  required
                  className="w-full px-4 py-3 border border-gray-300 rounded-lg focus:ring-2 focus:ring-purple-500 focus:border-purple-500"
                  placeholder="City, Region, UK"
                />
              </div>

              {/* Material Information */}
              <div className="border-t border-gray-200 pt-6">
                <h3 className="text-lg font-semibold text-gray-900 mb-4">Material Details</h3>

                <div className="grid grid-cols-1 md:grid-cols-2 gap-6">
                  <div>
                    <label htmlFor="materials" className="block text-sm font-medium text-gray-700 mb-2">
                      Material Type *
                    </label>
                    <input
                      type="text"
                      id="materials"
                      name="materials"
                      value={formData.materials}
                      onChange={handleInputChange}
                      required
                      className="w-full px-4 py-3 border border-gray-300 rounded-lg focus:ring-2 focus:ring-purple-500 focus:border-purple-500"
                      placeholder="e.g., Copper wire, Steel scrap, Aluminum"
                    />
                  </div>

                  <div>
                    <label htmlFor="quantity" className="block text-sm font-medium text-gray-700 mb-2">
                      Estimated Quantity *
                    </label>
                    <input
                      type="text"
                      id="quantity"
                      name="quantity"
                      value={formData.quantity}
                      onChange={handleInputChange}
                      required
                      className="w-full px-4 py-3 border border-gray-300 rounded-lg focus:ring-2 focus:ring-purple-500 focus:border-purple-500"
                      placeholder="e.g., 500 kg, 10 tonnes"
                    />
                  </div>
                </div>
              </div>

              <div>
                <label htmlFor="description" className="block text-sm font-medium text-gray-700 mb-2">
                  Material Description
                </label>
                <textarea
                  id="description"
                  name="description"
                  value={formData.description}
                  onChange={handleInputChange}
                  rows={4}
                  maxLength={500}
                  className="w-full px-4 py-3 border border-gray-300 rounded-lg focus:ring-2 focus:ring-purple-500 focus:border-purple-500 resize-none"
                  placeholder="Describe the condition, grade, and any specific requirements (max 500 characters)"
                />
                <p className="text-xs text-gray-500 mt-1">{formData.description.length}/500 characters</p>
              </div>

              {/* Preferences */}
              <div className="border-t border-gray-200 pt-6">
                <h3 className="text-lg font-semibold text-gray-900 mb-4">Preferences</h3>

                <div className="grid grid-cols-1 md:grid-cols-2 gap-6">
                  <div>
                    <label htmlFor="urgency" className="block text-sm font-medium text-gray-700 mb-2">
                      Urgency Level
                    </label>
                    <select
                      id="urgency"
                      name="urgency"
                      value={formData.urgency}
                      onChange={handleInputChange}
                      className="w-full px-4 py-3 border border-gray-300 rounded-lg focus:ring-2 focus:ring-purple-500 focus:border-purple-500 cursor-pointer pr-8"
                    >
                      <option value="standard">Standard (2-3 days)</option>
                      <option value="urgent">Urgent (Same day)</option>
                      <option value="asap">ASAP (Within hours)</option>
                    </select>
                  </div>

                  <div>
                    <label htmlFor="preferredContact" className="block text-sm font-medium text-gray-700 mb-2">
                      Preferred Contact Method
                    </label>
                    <select
                      id="preferredContact"
                      name="preferredContact"
                      value={formData.preferredContact}
                      onChange={handleInputChange}
                      className="w-full px-4 py-3 border border-gray-300 rounded-lg focus:ring-2 focus:ring-purple-500 focus:border-purple-500 cursor-pointer pr-8"
                    >
                      <option value="email">Email</option>
                      <option value="phone">Phone Call</option>
                      <option value="whatsapp">WhatsApp</option>
                    </select>
                  </div>
                </div>
              </div>

              {/* Submit Button */}
              <div className="border-t border-gray-200 pt-6">
                <button
                  type="submit"
                  disabled={isSubmitting}
                  className="w-full bg-purple-600 text-white px-6 py-4 rounded-lg text-lg font-semibold hover:bg-purple-700 disabled:opacity-50 disabled:cursor-not-allowed transition-colors cursor-pointer flex items-center justify-center"
                >
                  {isSubmitting ? (
                    <>
                      <div className="w-5 h-5 flex items-center justify-center mr-3">
                        <i className="ri-loader-4-line animate-spin"></i>
                      </div>
                      Submitting Request...
                    </>
                  ) : (
                    <>
                      <div className="w-5 h-5 flex items-center justify-center mr-3">
                        <i className="ri-send-plane-line"></i>
                      </div>
                      Submit Quote Request
                    </>
                  )}
                </button>
              </div>

              {submitError && (
                <div className="p-4 bg-green-50 border border-green-200 rounded-lg">
                  <div className="flex items-center">
                    <div className="w-6 h-6 flex items-center justify-center mr-3">
                      <i className="ri-check-circle-line text-green-600"></i>
                    </div>
                    <p className="text-green-800">Your form has been successfully submitted! We'll get back to you within 24 hours.</p>
                  </div>
                </div>
              )}

              {/* Contact Information */}
              <div className="bg-gray-50 rounded-lg p-6 mt-6">
                <h4 className="font-semibold text-gray-900 mb-3">Need immediate assistance?</h4>
                <div className="space-y-2 text-sm text-gray-600">
                  <div className="flex items-center">
                    <div className="w-4 h-4 flex items-center justify-center mr-3">
                      <i className="ri-phone-line"></i>
                    </div>
                    <span>Phone: +44 7367067827</span>
                  </div>
                  <div className="flex items-center">
                    <div className="w-4 h-4 flex items-center justify-center mr-3">
                      <i className="ri-whatsapp-line"></i>
                    </div>
                    <span>WhatsApp: +44 7367067827</span>
                  </div>
                  <div className="flex items-center">
                    <div className="w-4 h-4 flex items-center justify-center mr-3">
                      <i className="ri-time-line"></i>
                    </div>
                    <span>Response time: Within 24 hours</span>
                  </div>
                </div>
              </div>
            </form>
          </div>
        </div>
      </div>
    </>
  );
}
