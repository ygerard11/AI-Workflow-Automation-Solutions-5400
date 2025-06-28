import React, {useState} from 'react';
import {motion} from 'framer-motion';
import SafeIcon from '../common/SafeIcon';
import * as FiIcons from 'react-icons/fi';

const {FiDollarSign, FiClock, FiCheck, FiSend, FiBarChart3, FiShield, FiUsers, FiTrendingUp, FiDownload, FiFileText, FiMail, FiCalendar, FiArrowRight, FiX} = FiIcons;

const InvoiceAutomationPage = () => {
  const [showContract, setShowContract] = useState(false);
  const [showTerms, setShowTerms] = useState(false);
  const [formData, setFormData] = useState({
    businessName: '',
    clientName: '',
    email: '',
    phone: '',
    address: ''
  });

  const features = [
    {
      icon: FiDollarSign,
      title: 'Automated Invoice Generation',
      description: 'Create recurring and one-off invoices automatically based on your business rules and schedules.',
      color: 'from-green-500 to-emerald-600'
    },
    {
      icon: FiSend,
      title: 'Smart Payment Reminders',
      description: 'Send automated, personalized payment reminders at optimal times to improve collection rates.',
      color: 'from-blue-500 to-cyan-600'
    },
    {
      icon: FiBarChart3,
      title: 'Real-time Tracking',
      description: 'Monitor invoice status, payment history, and cash flow with comprehensive reporting dashboards.',
      color: 'from-purple-500 to-indigo-600'
    },
    {
      icon: FiClock,
      title: 'Time-saving Automation',
      description: 'Reduce manual invoicing work by up to 90% and eliminate human errors in your billing process.',
      color: 'from-orange-500 to-red-600'
    }
  ];

  const benefits = [
    'Reduce invoicing errors by 95%',
    'Save 10+ hours per week on billing tasks',
    'Improve cash flow with faster payments',
    'Automatic late payment tracking',
    'Professional branded invoice templates',
    'Integration with popular accounting software'
  ];

  const testimonials = [
    {
      name: 'Sarah Johnson',
      role: 'Freelance Designer',
      content: 'This workflow transformed my billing process. I went from spending hours on invoices to just setting it up once and forgetting about it.',
      rating: 5
    },
    {
      name: 'Mike Chen',
      role: 'Consulting Agency Owner',
      content: 'Our payment collection improved by 40% since implementing automated reminders. Best $15/month I spend on my business.',
      rating: 5
    }
  ];

  const handleSubscribe = () => {
    // Open Stripe payment link for Invoice Automation
    window.open('https://buy.stripe.com/test_invoice_automation_15', '_blank');
  };

  const ContractModal = () => (
    <div className="fixed inset-0 bg-black bg-opacity-50 flex items-center justify-center z-50 p-4">
      <motion.div
        initial={{opacity: 0, scale: 0.95}}
        animate={{opacity: 1, scale: 1}}
        className="bg-white rounded-xl max-w-4xl w-full max-h-[90vh] overflow-y-auto"
      >
        <div className="p-6 border-b border-gray-200">
          <div className="flex items-center justify-between">
            <h2 className="text-2xl font-bold text-gray-900">Service Agreement - Invoice Automation Workflow</h2>
            <button
              onClick={() => setShowContract(false)}
              className="p-2 text-gray-400 hover:text-gray-600"
            >
              <SafeIcon icon={FiX} className="h-6 w-6" />
            </button>
          </div>
        </div>
        <div className="p-6 space-y-6">
          <div className="bg-gradient-to-r from-primary-50 to-blue-50 p-6 rounded-lg contract-content">
            <h3 className="text-lg font-semibold mb-4">Contract Agreement</h3>
            
            <div className="space-y-4 text-sm">
              <div>
                <h4 className="font-semibold text-gray-900">Parties:</h4>
                <p className="text-gray-700">
                  <strong>Service Provider:</strong> {formData.businessName || '[Your Business Name]'}, hereinafter referred to as "Provider"<br/>
                  <strong>Client:</strong> {formData.clientName || '[Client\'s Name]'}, hereinafter referred to as "Client"
                </p>
              </div>

              <div>
                <h4 className="font-semibold text-gray-900">Service Provided:</h4>
                <p className="text-gray-700">Provider will deliver an automated invoicing workflow which:</p>
                <ul className="list-disc ml-6 mt-2 space-y-1">
                  <li>Generates recurring and one-off invoices</li>
                  <li>Sends automated payment reminders</li>
                  <li>Provides real-time tracking and reporting</li>
                </ul>
              </div>

              <div>
                <h4 className="font-semibold text-gray-900">Fees:</h4>
                <p className="text-gray-700">Client agrees to pay <strong>$15 per month</strong>, billed monthly in advance.</p>
              </div>

              <div>
                <h4 className="font-semibold text-gray-900">Term & Termination:</h4>
                <ul className="list-disc ml-6 space-y-1 text-gray-700">
                  <li>This Agreement begins on the subscription start date and continues on a month-to-month basis</li>
                  <li>Either party may terminate with 30 days' written notice</li>
                  <li>Outstanding payments remain due upon termination</li>
                </ul>
              </div>

              <div>
                <h4 className="font-semibold text-gray-900">Confidentiality & Data:</h4>
                <p className="text-gray-700">Provider agrees to handle Client's business and financial data confidentially and securely.</p>
              </div>

              <div>
                <h4 className="font-semibold text-gray-900">Limitation of Liability:</h4>
                <p className="text-gray-700">Provider shall not be liable for indirect or consequential losses related to the use of the Invoice Automation Workflow.</p>
              </div>

              <div>
                <h4 className="font-semibold text-gray-900">Governing Law:</h4>
                <p className="text-gray-700">This Agreement shall be governed by the laws of [Your State/Country].</p>
              </div>
            </div>
          </div>

          <div className="flex gap-4">
            <button
              onClick={() => {
                const doc = document.createElement('a');
                doc.href = 'data:text/plain;charset=utf-8,' + encodeURIComponent(document.querySelector('.contract-content').innerText);
                doc.download = 'invoice-automation-contract.txt';
                doc.click();
              }}
              className="bg-gray-100 text-gray-700 px-4 py-2 rounded-lg hover:bg-gray-200 transition-colors flex items-center gap-2"
            >
              <SafeIcon icon={FiDownload} className="h-4 w-4" />
              Download Contract
            </button>
            <button
              onClick={handleSubscribe}
              className="bg-gradient-to-r from-primary-500 to-blue-600 text-white px-6 py-2 rounded-lg hover:from-primary-600 hover:to-blue-700 transition-all flex items-center gap-2"
            >
              Accept & Subscribe
              <SafeIcon icon={FiArrowRight} className="h-4 w-4" />
            </button>
          </div>
        </div>
      </motion.div>
    </div>
  );

  const TermsModal = () => (
    <div className="fixed inset-0 bg-black bg-opacity-50 flex items-center justify-center z-50 p-4">
      <motion.div
        initial={{opacity: 0, scale: 0.95}}
        animate={{opacity: 1, scale: 1}}
        className="bg-white rounded-xl max-w-2xl w-full max-h-[90vh] overflow-y-auto"
      >
        <div className="p-6 border-b border-gray-200">
          <div className="flex items-center justify-between">
            <h2 className="text-2xl font-bold text-gray-900">Terms of Agreement</h2>
            <button
              onClick={() => setShowTerms(false)}
              className="p-2 text-gray-400 hover:text-gray-600"
            >
              <SafeIcon icon={FiX} className="h-6 w-6" />
            </button>
          </div>
        </div>
        <div className="p-6">
          <div className="space-y-4 text-sm">
            <div className="bg-green-50 p-4 rounded-lg">
              <h3 className="font-semibold text-green-800 mb-2">✅ Terms of Agreement Summary</h3>
              <ul className="space-y-2 text-green-700">
                <li><strong>Subscription:</strong> $15/month (auto-renewed, cancellable anytime with 30 days' notice)</li>
                <li><strong>Service scope:</strong> Invoice automation features only; customization may incur additional fees</li>
                <li><strong>Client responsibility:</strong> Accuracy of data provided</li>
                <li><strong>Refunds:</strong> Only for service outages longer than 7 consecutive days</li>
              </ul>
              <p className="mt-3 font-medium text-green-800">By subscribing, Client agrees to these terms.</p>
            </div>
          </div>
        </div>
      </motion.div>
    </div>
  );

  return (
    <div className="pt-20 pb-12">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        {/* Hero Section */}
        <section className="text-center mb-16">
          <motion.div
            initial={{opacity: 0, y: 20}}
            animate={{opacity: 1, y: 0}}
            transition={{duration: 0.6}}
          >
            <div className="inline-flex items-center gap-2 bg-green-100 text-green-800 px-4 py-2 rounded-full text-sm font-medium mb-6">
              <SafeIcon icon={FiDollarSign} className="h-4 w-4" />
              Just $15/month - Save 10+ hours weekly
            </div>
            <h1 className="text-5xl md:text-6xl font-bold text-gray-900 mb-6">
              Invoice Automation
              <span className="block bg-gradient-to-r from-green-600 to-blue-600 bg-clip-text text-transparent">
                Workflow
              </span>
            </h1>
            <p className="text-xl text-gray-600 mb-8 max-w-3xl mx-auto">
              Streamline your invoicing process with our Invoice Automation Workflow. 
              Automatically generate, send, and track invoices for your business. 
              Reduce errors, save time, and keep your cash flow predictable.
            </p>
            <div className="flex flex-col sm:flex-row gap-4 justify-center items-center">
              <button
                onClick={handleSubscribe}
                className="bg-gradient-to-r from-green-500 to-blue-600 text-white px-8 py-4 rounded-xl font-semibold text-lg hover:from-green-600 hover:to-blue-700 transition-all transform hover:scale-105 flex items-center gap-2"
              >
                Start Free Trial - $15/month
                <SafeIcon icon={FiArrowRight} className="h-5 w-5" />
              </button>
              <button
                onClick={() => setShowContract(true)}
                className="flex items-center gap-2 text-gray-700 hover:text-primary-600 transition-colors border border-gray-300 px-6 py-4 rounded-xl hover:border-primary-300"
              >
                <SafeIcon icon={FiFileText} className="h-5 w-5" />
                View Contract
              </button>
            </div>
          </motion.div>
        </section>

        {/* Features Grid */}
        <section className="mb-16">
          <div className="text-center mb-12">
            <h2 className="text-3xl font-bold text-gray-900 mb-4">
              Everything You Need for Automated Invoicing
            </h2>
            <p className="text-xl text-gray-600">
              Comprehensive invoice automation that works for businesses of all sizes
            </p>
          </div>
          <div className="grid grid-cols-1 md:grid-cols-2 gap-8">
            {features.map((feature, index) => (
              <motion.div
                key={feature.title}
                initial={{opacity: 0, y: 20}}
                animate={{opacity: 1, y: 0}}
                transition={{duration: 0.6, delay: index * 0.1}}
                className="bg-white rounded-2xl border border-gray-200 p-8 hover:shadow-lg transition-shadow"
              >
                <div className={`inline-flex p-3 rounded-xl bg-gradient-to-r ${feature.color} mb-4`}>
                  <SafeIcon icon={feature.icon} className="h-6 w-6 text-white" />
                </div>
                <h3 className="text-xl font-semibold text-gray-900 mb-3">{feature.title}</h3>
                <p className="text-gray-600">{feature.description}</p>
              </motion.div>
            ))}
          </div>
        </section>

        {/* Benefits Section */}
        <section className="bg-gradient-to-r from-green-50 to-blue-50 rounded-2xl p-8 mb-16">
          <div className="grid grid-cols-1 lg:grid-cols-2 gap-8 items-center">
            <div>
              <h2 className="text-3xl font-bold text-gray-900 mb-6">
                Transform Your Billing Process
              </h2>
              <div className="space-y-3">
                {benefits.map((benefit, index) => (
                  <motion.div
                    key={benefit}
                    initial={{opacity: 0, x: -20}}
                    animate={{opacity: 1, x: 0}}
                    transition={{duration: 0.6, delay: index * 0.1}}
                    className="flex items-center gap-3"
                  >
                    <SafeIcon icon={FiCheck} className="h-5 w-5 text-green-600 flex-shrink-0" />
                    <span className="text-gray-700">{benefit}</span>
                  </motion.div>
                ))}
              </div>
            </div>
            <div className="bg-white rounded-xl p-6 shadow-lg">
              <h3 className="text-lg font-semibold text-gray-900 mb-4">ROI Calculator</h3>
              <div className="space-y-4">
                <div className="flex justify-between">
                  <span className="text-gray-600">Time saved per week:</span>
                  <span className="font-semibold">10+ hours</span>
                </div>
                <div className="flex justify-between">
                  <span className="text-gray-600">Monthly cost:</span>
                  <span className="font-semibold">$15</span>
                </div>
                <div className="flex justify-between">
                  <span className="text-gray-600">Value of time saved:</span>
                  <span className="font-semibold">$500+</span>
                </div>
                <div className="border-t pt-4">
                  <div className="flex justify-between text-lg font-bold text-green-600">
                    <span>Monthly ROI:</span>
                    <span>3,200%+</span>
                  </div>
                </div>
              </div>
            </div>
          </div>
        </section>

        {/* Testimonials */}
        <section className="mb-16">
          <div className="text-center mb-12">
            <h2 className="text-3xl font-bold text-gray-900 mb-4">
              Trusted by Businesses Worldwide
            </h2>
            <p className="text-xl text-gray-600">
              See how Invoice Automation is transforming billing processes
            </p>
          </div>
          <div className="grid grid-cols-1 md:grid-cols-2 gap-8">
            {testimonials.map((testimonial, index) => (
              <motion.div
                key={testimonial.name}
                initial={{opacity: 0, y: 20}}
                animate={{opacity: 1, y: 0}}
                transition={{duration: 0.6, delay: index * 0.1}}
                className="bg-white rounded-2xl border border-gray-200 p-8 shadow-sm"
              >
                <div className="flex items-center mb-4">
                  {[...Array(testimonial.rating)].map((_, i) => (
                    <SafeIcon key={i} icon={FiCheck} className="h-5 w-5 text-yellow-400" />
                  ))}
                </div>
                <p className="text-gray-700 mb-6 italic">"{testimonial.content}"</p>
                <div>
                  <p className="font-semibold text-gray-900">{testimonial.name}</p>
                  <p className="text-sm text-gray-600">{testimonial.role}</p>
                </div>
              </motion.div>
            ))}
          </div>
        </section>

        {/* Pricing CTA */}
        <section className="bg-gradient-to-r from-green-600 to-blue-600 rounded-2xl p-8 text-center text-white">
          <h2 className="text-3xl font-bold mb-4">
            Ready to Automate Your Invoicing?
          </h2>
          <p className="text-xl text-green-100 mb-8">
            Join thousands of businesses saving time and improving cash flow with automated invoicing.
          </p>
          <div className="flex flex-col sm:flex-row gap-4 justify-center items-center">
            <button
              onClick={handleSubscribe}
              className="bg-white text-green-600 px-8 py-4 rounded-xl font-semibold text-lg hover:bg-gray-50 transition-colors flex items-center gap-2"
            >
              Start Free Trial - $15/month
              <SafeIcon icon={FiArrowRight} className="h-5 w-5" />
            </button>
            <button
              onClick={() => setShowTerms(true)}
              className="border-2 border-white text-white px-6 py-4 rounded-xl font-semibold hover:bg-white hover:text-green-600 transition-colors"
            >
              View Terms
            </button>
          </div>
          <p className="text-sm text-green-100 mt-4">
            14-day free trial • Cancel anytime • No setup fees
          </p>
        </section>
      </div>

      {/* Modals */}
      {showContract && <ContractModal />}
      {showTerms && <TermsModal />}
    </div>
  );
};

export default InvoiceAutomationPage;