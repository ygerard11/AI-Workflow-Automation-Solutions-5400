import React, { useState } from 'react';
import { motion } from 'framer-motion';
import SafeIcon from '../common/SafeIcon';
import * as FiIcons from 'react-icons/fi';

const { FiCheck, FiZap, FiTrendingUp, FiShield, FiUsers, FiCode, FiStar } = FiIcons;

const PricingPage = () => {
  const [billingCycle, setBillingCycle] = useState('monthly');

  const plans = [
    {
      name: 'Freelancer',
      description: 'Perfect for solo entrepreneurs and freelancers',
      price: { monthly: 29, annual: 290 },
      features: [
        '5 Active Workflows',
        '100 Tasks/month',
        'Basic CRM Integration',
        'Email Templates',
        'Community Support',
        'API Access (Limited)',
      ],
      popular: false,
      icon: FiUsers,
      color: 'from-gray-500 to-gray-600',
    },
    {
      name: 'SMB',
      description: 'Ideal for small to medium businesses',
      price: { monthly: 99, annual: 990 },
      features: [
        '25 Active Workflows',
        '1,000 Tasks/month',
        'Advanced CRM Integration',
        'AI Email Generation',
        'Priority Support',
        'Custom Integrations',
        'Team Collaboration',
        'Analytics Dashboard',
      ],
      popular: true,
      icon: FiTrendingUp,
      color: 'from-primary-500 to-blue-600',
    },
    {
      name: 'Enterprise',
      description: 'For large organizations with complex needs',
      price: { monthly: 299, annual: 2990 },
      features: [
        'Unlimited Workflows',
        'Unlimited Tasks',
        'White-label Solution',
        'Custom AI Models',
        'Dedicated Support',
        'Advanced Security',
        'On-premise Deployment',
        'Custom Development',
        'SLA Guarantee',
      ],
      popular: false,
      icon: FiShield,
      color: 'from-purple-500 to-indigo-600',
    },
  ];

  const addOns = [
    {
      name: 'White-label License',
      description: 'Rebrand the platform for your agency',
      price: 199,
      icon: FiStar,
    },
    {
      name: 'Template Marketplace',
      description: 'Access to premium workflow templates',
      price: 49,
      icon: FiZap,
    },
    {
      name: 'Advanced API',
      description: 'Extended API limits and webhooks',
      price: 99,
      icon: FiCode,
    },
  ];

  const getPrice = (plan) => {
    const price = billingCycle === 'monthly' ? plan.price.monthly : plan.price.annual;
    return billingCycle === 'monthly' ? price : Math.round(price / 12);
  };

  const getSavings = (plan) => {
    const monthlyTotal = plan.price.monthly * 12;
    const annualPrice = plan.price.annual;
    return Math.round(((monthlyTotal - annualPrice) / monthlyTotal) * 100);
  };

  return (
    <div className="pt-20 pb-12">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        {/* Header */}
        <div className="text-center mb-16">
          <h1 className="text-4xl md:text-5xl font-bold text-gray-900 mb-4">
            Simple, Transparent Pricing
          </h1>
          <p className="text-xl text-gray-600 mb-8 max-w-2xl mx-auto">
            Choose the perfect plan for your business. Scale as you grow with flexible pricing options.
          </p>

          {/* Billing Toggle */}
          <div className="flex items-center justify-center gap-4 mb-8">
            <span className={`text-sm font-medium ${billingCycle === 'monthly' ? 'text-gray-900' : 'text-gray-500'}`}>
              Monthly
            </span>
            <button
              onClick={() => setBillingCycle(billingCycle === 'monthly' ? 'annual' : 'monthly')}
              className="relative inline-flex h-6 w-11 items-center rounded-full bg-gray-200 transition-colors focus:outline-none focus:ring-2 focus:ring-primary-500 focus:ring-offset-2"
            >
              <span
                className={`inline-block h-4 w-4 transform rounded-full bg-white transition-transform ${
                  billingCycle === 'annual' ? 'translate-x-6' : 'translate-x-1'
                }`}
              />
            </button>
            <span className={`text-sm font-medium ${billingCycle === 'annual' ? 'text-gray-900' : 'text-gray-500'}`}>
              Annual
            </span>
            {billingCycle === 'annual' && (
              <span className="bg-green-100 text-green-800 text-xs font-medium px-2 py-1 rounded-full">
                Save up to 17%
              </span>
            )}
          </div>
        </div>

        {/* Pricing Cards */}
        <div className="grid grid-cols-1 md:grid-cols-3 gap-8 mb-16">
          {plans.map((plan, index) => (
            <motion.div
              key={plan.name}
              initial={{ opacity: 0, y: 20 }}
              animate={{ opacity: 1, y: 0 }}
              transition={{ duration: 0.6, delay: index * 0.1 }}
              className={`relative bg-white rounded-2xl border-2 p-8 ${
                plan.popular ? 'border-primary-500 shadow-xl scale-105' : 'border-gray-200 shadow-sm'
              }`}
            >
              {plan.popular && (
                <div className="absolute -top-4 left-1/2 transform -translate-x-1/2">
                  <span className="bg-gradient-to-r from-primary-500 to-blue-600 text-white px-4 py-2 rounded-full text-sm font-medium">
                    Most Popular
                  </span>
                </div>
              )}

              <div className="text-center mb-6">
                <div className={`inline-flex p-3 rounded-xl bg-gradient-to-r ${plan.color} mb-4`}>
                  <SafeIcon icon={plan.icon} className="h-6 w-6 text-white" />
                </div>
                <h3 className="text-2xl font-bold text-gray-900 mb-2">{plan.name}</h3>
                <p className="text-gray-600 mb-4">{plan.description}</p>
                <div className="flex items-baseline justify-center gap-1">
                  <span className="text-4xl font-bold text-gray-900">${getPrice(plan)}</span>
                  <span className="text-gray-500">/{billingCycle === 'monthly' ? 'month' : 'month'}</span>
                </div>
                {billingCycle === 'annual' && (
                  <p className="text-sm text-green-600 mt-1">
                    Save {getSavings(plan)}% annually
                  </p>
                )}
              </div>

              <ul className="space-y-3 mb-8">
                {plan.features.map((feature, i) => (
                  <li key={i} className="flex items-center gap-3">
                    <SafeIcon icon={FiCheck} className="h-5 w-5 text-green-500 flex-shrink-0" />
                    <span className="text-gray-700">{feature}</span>
                  </li>
                ))}
              </ul>

              <button
                className={`w-full py-3 px-4 rounded-xl font-semibold transition-all ${
                  plan.popular
                    ? 'bg-gradient-to-r from-primary-500 to-blue-600 text-white hover:from-primary-600 hover:to-blue-700 transform hover:scale-105'
                    : 'bg-gray-100 text-gray-900 hover:bg-gray-200'
                }`}
              >
                Get Started
              </button>
            </motion.div>
          ))}
        </div>

        {/* Add-ons */}
        <div className="bg-white rounded-2xl border border-gray-200 p-8">
          <h2 className="text-2xl font-bold text-gray-900 mb-6 text-center">Add-ons & Extensions</h2>
          <div className="grid grid-cols-1 md:grid-cols-3 gap-6">
            {addOns.map((addon, index) => (
              <motion.div
                key={addon.name}
                initial={{ opacity: 0, y: 20 }}
                animate={{ opacity: 1, y: 0 }}
                transition={{ duration: 0.6, delay: index * 0.1 }}
                className="border border-gray-200 rounded-xl p-6 hover:border-primary-300 transition-colors"
              >
                <div className="flex items-center gap-3 mb-3">
                  <div className="p-2 bg-primary-100 rounded-lg">
                    <SafeIcon icon={addon.icon} className="h-5 w-5 text-primary-600" />
                  </div>
                  <h3 className="font-semibold text-gray-900">{addon.name}</h3>
                </div>
                <p className="text-gray-600 text-sm mb-4">{addon.description}</p>
                <div className="flex items-center justify-between">
                  <span className="text-lg font-bold text-gray-900">${addon.price}/month</span>
                  <button className="text-primary-600 hover:text-primary-700 font-medium text-sm">
                    Add to Plan
                  </button>
                </div>
              </motion.div>
            ))}
          </div>
        </div>

        {/* FAQ */}
        <div className="mt-16 text-center">
          <h2 className="text-2xl font-bold text-gray-900 mb-4">Frequently Asked Questions</h2>
          <p className="text-gray-600 mb-8">
            Have questions? We're here to help. Contact our sales team for a personalized demo.
          </p>
          <button className="bg-gradient-to-r from-primary-500 to-blue-600 text-white px-8 py-3 rounded-xl font-semibold hover:from-primary-600 hover:to-blue-700 transition-all">
            Contact Sales
          </button>
        </div>
      </div>
    </div>
  );
};

export default PricingPage;