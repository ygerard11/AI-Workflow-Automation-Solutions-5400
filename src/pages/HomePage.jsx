import React from 'react';
import { Link } from 'react-router-dom';
import { motion } from 'framer-motion';
import SafeIcon from '../common/SafeIcon';
import * as FiIcons from 'react-icons/fi';

const { FiZap, FiTrendingUp, FiUsers, FiShield, FiArrowRight, FiPlay, FiCheck, FiStar } = FiIcons;

const HomePage = () => {
  const features = [
    {
      icon: FiZap,
      title: 'Smart Workflow Automation',
      description: 'Automate contract-to-onboarding workflows with AI-powered task creation and management.',
    },
    {
      icon: FiUsers,
      title: 'CRM Integration',
      description: 'Seamlessly sync with your existing CRM and update client data automatically.',
    },
    {
      icon: FiTrendingUp,
      title: 'AI Email Assistant',
      description: 'Generate personalized follow-up emails based on client interaction history.',
    },
    {
      icon: FiShield,
      title: 'Enterprise Security',
      description: 'Bank-grade security with SOC 2 compliance and end-to-end encryption.',
    },
  ];

  const testimonials = [
    {
      name: 'Sarah Chen',
      role: 'Operations Director',
      company: 'TechCorp',
      content: 'AutoFlow AI reduced our onboarding time by 75%. The automated workflows are game-changing.',
      rating: 5,
    },
    {
      name: 'Michael Rodriguez',
      role: 'Founder',
      company: 'StartupXYZ',
      content: 'The AI email drafting feature saves us 10+ hours per week. Incredible ROI.',
      rating: 5,
    },
    {
      name: 'Emily Johnson',
      role: 'Sales Manager',
      company: 'GrowthCo',
      content: 'CRM integration is seamless. Our sales team can focus on selling, not admin work.',
      rating: 5,
    },
  ];

  return (
    <div className="pt-16">
      {/* Hero Section */}
      <section className="relative overflow-hidden">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 py-20">
          <div className="text-center">
            <motion.h1
              initial={{ opacity: 0, y: 20 }}
              animate={{ opacity: 1, y: 0 }}
              transition={{ duration: 0.6 }}
              className="text-5xl md:text-7xl font-bold text-gray-900 mb-6"
            >
              Automate Your
              <span className="bg-gradient-to-r from-primary-600 to-blue-600 bg-clip-text text-transparent block">
                Business Workflows
              </span>
            </motion.h1>
            
            <motion.p
              initial={{ opacity: 0, y: 20 }}
              animate={{ opacity: 1, y: 0 }}
              transition={{ duration: 0.6, delay: 0.1 }}
              className="text-xl text-gray-600 mb-8 max-w-3xl mx-auto"
            >
              From contract signing to client onboarding, let AI handle your repetitive tasks. 
              Generate invoices, update CRM, and craft personalized emails automatically.
            </motion.p>

            <motion.div
              initial={{ opacity: 0, y: 20 }}
              animate={{ opacity: 1, y: 0 }}
              transition={{ duration: 0.6, delay: 0.2 }}
              className="flex flex-col sm:flex-row gap-4 justify-center items-center"
            >
              <Link
                to="/workflows"
                className="bg-gradient-to-r from-primary-500 to-blue-600 text-white px-8 py-4 rounded-xl font-semibold text-lg hover:from-primary-600 hover:to-blue-700 transition-all transform hover:scale-105 flex items-center gap-2"
              >
                Start Automating <SafeIcon icon={FiArrowRight} className="h-5 w-5" />
              </Link>
              <button className="flex items-center gap-2 text-gray-700 hover:text-primary-600 transition-colors">
                <SafeIcon icon={FiPlay} className="h-5 w-5" />
                Watch Demo
              </button>
            </motion.div>

            <motion.div
              initial={{ opacity: 0, y: 20 }}
              animate={{ opacity: 1, y: 0 }}
              transition={{ duration: 0.6, delay: 0.3 }}
              className="mt-12 text-sm text-gray-500"
            >
              Trusted by 10,000+ businesses • Free 14-day trial • No credit card required
            </motion.div>
          </div>
        </div>

        {/* Background Elements */}
        <div className="absolute inset-0 -z-10">
          <div className="absolute top-20 left-20 w-72 h-72 bg-primary-200 rounded-full mix-blend-multiply filter blur-xl opacity-30 animate-pulse-slow"></div>
          <div className="absolute top-40 right-20 w-72 h-72 bg-blue-200 rounded-full mix-blend-multiply filter blur-xl opacity-30 animate-pulse-slow" style={{ animationDelay: '2s' }}></div>
          <div className="absolute bottom-20 left-1/2 w-72 h-72 bg-purple-200 rounded-full mix-blend-multiply filter blur-xl opacity-30 animate-pulse-slow" style={{ animationDelay: '4s' }}></div>
        </div>
      </section>

      {/* Features Section */}
      <section className="py-20 bg-white">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="text-center mb-16">
            <h2 className="text-4xl font-bold text-gray-900 mb-4">
              Powerful Features for Modern Teams
            </h2>
            <p className="text-xl text-gray-600 max-w-2xl mx-auto">
              Everything you need to automate your business processes and scale efficiently.
            </p>
          </div>

          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-8">
            {features.map((feature, index) => (
              <motion.div
                key={feature.title}
                initial={{ opacity: 0, y: 20 }}
                animate={{ opacity: 1, y: 0 }}
                transition={{ duration: 0.6, delay: index * 0.1 }}
                className="bg-white p-8 rounded-2xl border border-gray-200 hover:border-primary-300 hover:shadow-lg transition-all group"
              >
                <div className="p-3 bg-gradient-to-r from-primary-500 to-blue-600 rounded-xl w-fit mb-4 group-hover:scale-110 transition-transform">
                  <SafeIcon icon={feature.icon} className="h-6 w-6 text-white" />
                </div>
                <h3 className="text-xl font-semibold text-gray-900 mb-2">{feature.title}</h3>
                <p className="text-gray-600">{feature.description}</p>
              </motion.div>
            ))}
          </div>
        </div>
      </section>

      {/* Workflow Demo Section */}
      <section className="py-20 bg-gradient-to-r from-primary-50 to-blue-50">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="text-center mb-16">
            <h2 className="text-4xl font-bold text-gray-900 mb-4">
              See Automation in Action
            </h2>
            <p className="text-xl text-gray-600">
              Watch how a single contract signature triggers an entire automated workflow
            </p>
          </div>

          <div className="bg-white rounded-2xl shadow-xl p-8">
            <div className="grid grid-cols-1 md:grid-cols-3 gap-8">
              <div className="text-center">
                <div className="w-16 h-16 bg-green-100 rounded-full flex items-center justify-center mx-auto mb-4">
                  <SafeIcon icon={FiCheck} className="h-8 w-8 text-green-600" />
                </div>
                <h3 className="text-lg font-semibold mb-2">Contract Signed</h3>
                <p className="text-gray-600">Client signs contract through DocuSign or similar platform</p>
              </div>

              <div className="text-center">
                <div className="w-16 h-16 bg-primary-100 rounded-full flex items-center justify-center mx-auto mb-4">
                  <SafeIcon icon={FiZap} className="h-8 w-8 text-primary-600" />
                </div>
                <h3 className="text-lg font-semibold mb-2">AI Automation</h3>
                <p className="text-gray-600">System creates onboarding tasks, generates invoice, updates CRM</p>
              </div>

              <div className="text-center">
                <div className="w-16 h-16 bg-blue-100 rounded-full flex items-center justify-center mx-auto mb-4">
                  <SafeIcon icon={FiUsers} className="h-8 w-8 text-blue-600" />
                </div>
                <h3 className="text-lg font-semibold mb-2">Team Notified</h3>
                <p className="text-gray-600">Relevant team members receive automated notifications and tasks</p>
              </div>
            </div>
          </div>
        </div>
      </section>

      {/* Testimonials */}
      <section className="py-20 bg-white">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="text-center mb-16">
            <h2 className="text-4xl font-bold text-gray-900 mb-4">
              Loved by Teams Worldwide
            </h2>
            <p className="text-xl text-gray-600">
              See how businesses are transforming their operations with AutoFlow AI
            </p>
          </div>

          <div className="grid grid-cols-1 md:grid-cols-3 gap-8">
            {testimonials.map((testimonial, index) => (
              <motion.div
                key={testimonial.name}
                initial={{ opacity: 0, y: 20 }}
                animate={{ opacity: 1, y: 0 }}
                transition={{ duration: 0.6, delay: index * 0.1 }}
                className="bg-white p-8 rounded-2xl border border-gray-200 shadow-sm hover:shadow-lg transition-shadow"
              >
                <div className="flex items-center mb-4">
                  {[...Array(testimonial.rating)].map((_, i) => (
                    <SafeIcon key={i} icon={FiStar} className="h-5 w-5 text-yellow-400 fill-current" />
                  ))}
                </div>
                <p className="text-gray-700 mb-6 italic">"{testimonial.content}"</p>
                <div>
                  <p className="font-semibold text-gray-900">{testimonial.name}</p>
                  <p className="text-sm text-gray-600">{testimonial.role} at {testimonial.company}</p>
                </div>
              </motion.div>
            ))}
          </div>
        </div>
      </section>

      {/* CTA Section */}
      <section className="py-20 bg-gradient-to-r from-primary-600 to-blue-600">
        <div className="max-w-4xl mx-auto text-center px-4 sm:px-6 lg:px-8">
          <h2 className="text-4xl font-bold text-white mb-4">
            Ready to Automate Your Business?
          </h2>
          <p className="text-xl text-primary-100 mb-8">
            Join thousands of teams already saving time with intelligent automation.
          </p>
          <div className="flex flex-col sm:flex-row gap-4 justify-center">
            <Link
              to="/workflows"
              className="bg-white text-primary-600 px-8 py-4 rounded-xl font-semibold text-lg hover:bg-gray-50 transition-colors"
            >
              Start Free Trial
            </Link>
            <Link
              to="/pricing"
              className="border-2 border-white text-white px-8 py-4 rounded-xl font-semibold text-lg hover:bg-white hover:text-primary-600 transition-colors"
            >
              View Pricing
            </Link>
          </div>
        </div>
      </section>
    </div>
  );
};

export default HomePage;