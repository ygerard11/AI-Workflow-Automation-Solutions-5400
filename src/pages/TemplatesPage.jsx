import React, { useState } from 'react';
import { motion } from 'framer-motion';
import SafeIcon from '../common/SafeIcon';
import * as FiIcons from 'react-icons/fi';

const { FiSearch, FiFilter, FiStar, FiDownload, FiEye, FiZap, FiUsers, FiMail, FiDollarSign, FiClock, FiTrendingUp } = FiIcons;

const TemplatesPage = () => {
  const [searchTerm, setSearchTerm] = useState('');
  const [selectedCategory, setSelectedCategory] = useState('all');
  const [selectedTier, setSelectedTier] = useState('all');

  const categories = [
    { id: 'all', name: 'All Templates', count: 24 },
    { id: 'sales', name: 'Sales & CRM', count: 8 },
    { id: 'marketing', name: 'Marketing', count: 6 },
    { id: 'finance', name: 'Finance', count: 4 },
    { id: 'hr', name: 'HR & Onboarding', count: 6 },
  ];

  const templates = [
    {
      id: 1,
      name: 'Contract to Onboarding',
      description: 'Automatically create onboarding tasks, send welcome emails, and update CRM when a contract is signed.',
      category: 'sales',
      tier: 'free',
      rating: 4.8,
      downloads: 1247,
      preview: true,
      icon: FiUsers,
      tags: ['CRM', 'Automation', 'Onboarding'],
      features: ['DocuSign Integration', 'Task Creation', 'Email Templates', 'CRM Updates'],
    },
    {
      id: 2,
      name: 'AI Follow-up Email Generator',
      description: 'Generate personalized follow-up emails based on client interaction history and preferences.',
      category: 'marketing',
      tier: 'premium',
      rating: 4.9,
      downloads: 892,
      preview: true,
      icon: FiMail,
      tags: ['AI', 'Email', 'Personalization'],
      features: ['AI Content Generation', 'Client History Analysis', 'A/B Testing', 'Send Scheduling'],
    },
    {
      id: 3,
      name: 'Invoice Automation Workflow',
      description: 'Automatically generate, send, and track invoices based on project milestones and completion.',
      category: 'finance',
      tier: 'free',
      rating: 4.7,
      downloads: 2156,
      preview: true,
      icon: FiDollarSign,
      tags: ['Finance', 'Invoicing', 'Tracking'],
      features: ['Auto Invoice Generation', 'Payment Tracking', 'Reminder Emails', 'Reporting'],
    },
    {
      id: 4,
      name: 'Lead Qualification Pipeline',
      description: 'Score and qualify leads automatically based on behavior, demographics, and engagement.',
      category: 'sales',
      tier: 'premium',
      rating: 4.6,
      downloads: 634,
      preview: false,
      icon: FiTrendingUp,
      tags: ['Lead Scoring', 'CRM', 'Analytics'],
      features: ['Lead Scoring', 'Qualification Rules', 'Pipeline Management', 'Analytics'],
    },
    {
      id: 5,
      name: 'Employee Onboarding Sequence',
      description: 'Streamline new hire onboarding with automated task assignments and progress tracking.',
      category: 'hr',
      tier: 'free',
      rating: 4.5,
      downloads: 1089,
      preview: true,
      icon: FiUsers,
      tags: ['HR', 'Onboarding', 'Tasks'],
      features: ['Task Automation', 'Progress Tracking', 'Document Collection', 'Notifications'],
    },
    {
      id: 6,
      name: 'Social Media Campaign Automation',
      description: 'Schedule and publish social media content across multiple platforms with AI optimization.',
      category: 'marketing',
      tier: 'premium',
      rating: 4.4,
      downloads: 567,
      preview: true,
      icon: FiZap,
      tags: ['Social Media', 'Content', 'Scheduling'],
      features: ['Multi-platform Publishing', 'AI Optimization', 'Analytics', 'Content Calendar'],
    },
  ];

  const filteredTemplates = templates.filter(template => {
    const matchesSearch = template.name.toLowerCase().includes(searchTerm.toLowerCase()) ||
                         template.description.toLowerCase().includes(searchTerm.toLowerCase()) ||
                         template.tags.some(tag => tag.toLowerCase().includes(searchTerm.toLowerCase()));
    const matchesCategory = selectedCategory === 'all' || template.category === selectedCategory;
    const matchesTier = selectedTier === 'all' || template.tier === selectedTier;
    
    return matchesSearch && matchesCategory && matchesTier;
  });

  const TemplateCard = ({ template }) => (
    <motion.div
      initial={{ opacity: 0, y: 20 }}
      animate={{ opacity: 1, y: 0 }}
      className="bg-white rounded-xl border border-gray-200 p-6 hover:shadow-lg transition-all group"
    >
      <div className="flex items-start justify-between mb-4">
        <div className="flex items-center gap-3">
          <div className="p-3 bg-gradient-to-r from-primary-500 to-blue-600 rounded-xl">
            <SafeIcon icon={template.icon} className="h-6 w-6 text-white" />
          </div>
          <div>
            <h3 className="text-lg font-semibold text-gray-900 group-hover:text-primary-600 transition-colors">
              {template.name}
            </h3>
            <div className="flex items-center gap-2 mt-1">
              <div className="flex items-center gap-1">
                <SafeIcon icon={FiStar} className="h-4 w-4 text-yellow-400 fill-current" />
                <span className="text-sm text-gray-600">{template.rating}</span>
              </div>
              <span className="text-gray-300">•</span>
              <span className="text-sm text-gray-600">{template.downloads} downloads</span>
            </div>
          </div>
        </div>
        <div className="flex items-center gap-2">
          {template.tier === 'premium' && (
            <span className="bg-gradient-to-r from-yellow-400 to-orange-500 text-white text-xs font-medium px-2 py-1 rounded-full">
              Premium
            </span>
          )}
          {template.tier === 'free' && (
            <span className="bg-green-100 text-green-800 text-xs font-medium px-2 py-1 rounded-full">
              Free
            </span>
          )}
        </div>
      </div>

      <p className="text-gray-600 text-sm mb-4">{template.description}</p>

      <div className="flex flex-wrap gap-2 mb-4">
        {template.tags.map((tag, index) => (
          <span key={index} className="bg-gray-100 text-gray-700 text-xs px-2 py-1 rounded-md">
            {tag}
          </span>
        ))}
      </div>

      <div className="space-y-2 mb-4">
        <h4 className="text-sm font-medium text-gray-900">Key Features:</h4>
        <ul className="text-xs text-gray-600 space-y-1">
          {template.features.slice(0, 3).map((feature, index) => (
            <li key={index} className="flex items-center gap-2">
              <div className="w-1 h-1 bg-primary-500 rounded-full"></div>
              {feature}
            </li>
          ))}
          {template.features.length > 3 && (
            <li className="text-primary-600">+{template.features.length - 3} more features</li>
          )}
        </ul>
      </div>

      <div className="flex items-center gap-2">
        {template.preview && (
          <button className="flex items-center gap-2 text-primary-600 hover:text-primary-700 text-sm font-medium">
            <SafeIcon icon={FiEye} className="h-4 w-4" />
            Preview
          </button>
        )}
        <button className="flex items-center gap-2 bg-gradient-to-r from-primary-500 to-blue-600 text-white px-4 py-2 rounded-lg text-sm font-medium hover:from-primary-600 hover:to-blue-700 transition-all ml-auto">
          <SafeIcon icon={FiDownload} className="h-4 w-4" />
          Use Template
        </button>
      </div>
    </motion.div>
  );

  return (
    <div className="pt-20 pb-12">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        {/* Header */}
        <div className="text-center mb-12">
          <h1 className="text-4xl font-bold text-gray-900 mb-4">
            Workflow Templates
          </h1>
          <p className="text-xl text-gray-600 max-w-2xl mx-auto">
            Jump-start your automation with pre-built templates designed by experts and the community.
          </p>
        </div>

        {/* Search and Filters */}
        <div className="bg-white rounded-xl border border-gray-200 p-6 mb-8">
          <div className="flex flex-col md:flex-row gap-4">
            {/* Search */}
            <div className="flex-1 relative">
              <SafeIcon icon={FiSearch} className="absolute left-3 top-1/2 transform -translate-y-1/2 h-5 w-5 text-gray-400" />
              <input
                type="text"
                placeholder="Search templates..."
                value={searchTerm}
                onChange={(e) => setSearchTerm(e.target.value)}
                className="w-full pl-10 pr-4 py-2 border border-gray-300 rounded-lg focus:ring-2 focus:ring-primary-500 focus:border-transparent"
              />
            </div>

            {/* Category Filter */}
            <select
              value={selectedCategory}
              onChange={(e) => setSelectedCategory(e.target.value)}
              className="px-4 py-2 border border-gray-300 rounded-lg focus:ring-2 focus:ring-primary-500 focus:border-transparent"
            >
              {categories.map(category => (
                <option key={category.id} value={category.id}>
                  {category.name} ({category.count})
                </option>
              ))}
            </select>

            {/* Tier Filter */}
            <select
              value={selectedTier}
              onChange={(e) => setSelectedTier(e.target.value)}
              className="px-4 py-2 border border-gray-300 rounded-lg focus:ring-2 focus:ring-primary-500 focus:border-transparent"
            >
              <option value="all">All Tiers</option>
              <option value="free">Free</option>
              <option value="premium">Premium</option>
            </select>
          </div>
        </div>

        {/* Stats */}
        <div className="grid grid-cols-1 md:grid-cols-4 gap-6 mb-8">
          <div className="bg-white rounded-xl border border-gray-200 p-6 text-center">
            <div className="text-2xl font-bold text-primary-600 mb-1">24</div>
            <div className="text-sm text-gray-600">Total Templates</div>
          </div>
          <div className="bg-white rounded-xl border border-gray-200 p-6 text-center">
            <div className="text-2xl font-bold text-green-600 mb-1">18</div>
            <div className="text-sm text-gray-600">Free Templates</div>
          </div>
          <div className="bg-white rounded-xl border border-gray-200 p-6 text-center">
            <div className="text-2xl font-bold text-yellow-600 mb-1">6</div>
            <div className="text-sm text-gray-600">Premium Templates</div>
          </div>
          <div className="bg-white rounded-xl border border-gray-200 p-6 text-center">
            <div className="text-2xl font-bold text-blue-600 mb-1">12.4k</div>
            <div className="text-sm text-gray-600">Total Downloads</div>
          </div>
        </div>

        {/* Templates Grid */}
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6">
          {filteredTemplates.map((template) => (
            <TemplateCard key={template.id} template={template} />
          ))}
        </div>

        {filteredTemplates.length === 0 && (
          <div className="text-center py-12">
            <div className="text-gray-400 text-lg mb-2">No templates found</div>
            <p className="text-gray-600">Try adjusting your search or filters</p>
          </div>
        )}

        {/* CTA Section */}
        <div className="bg-gradient-to-r from-primary-50 to-blue-50 rounded-2xl p-8 mt-12 text-center">
          <h2 className="text-2xl font-bold text-gray-900 mb-4">
            Can't Find What You Need?
          </h2>
          <p className="text-gray-600 mb-6">
            Create your own template or request a custom workflow from our experts.
          </p>
          <div className="flex flex-col sm:flex-row gap-4 justify-center">
            <button className="bg-gradient-to-r from-primary-500 to-blue-600 text-white px-6 py-3 rounded-xl font-medium hover:from-primary-600 hover:to-blue-700 transition-all">
              Create Template
            </button>
            <button className="border border-primary-300 text-primary-600 px-6 py-3 rounded-xl font-medium hover:bg-primary-50 transition-colors">
              Request Custom Template
            </button>
          </div>
        </div>
      </div>
    </div>
  );
};

export default TemplatesPage;