import React, { useState } from 'react';
import { motion } from 'framer-motion';
import SafeIcon from '../common/SafeIcon';
import * as FiIcons from 'react-icons/fi';

const { FiUsers, FiPlus, FiSearch, FiFilter, FiMail, FiPhone, FiCalendar, FiDollarSign, FiTrendingUp, FiEdit, FiMoreVertical } = FiIcons;

const CRMPage = () => {
  const [activeTab, setActiveTab] = useState('contacts');
  const [searchTerm, setSearchTerm] = useState('');

  const contacts = [
    {
      id: 1,
      name: 'John Doe',
      email: 'john@company.com',
      phone: '+1 (555) 123-4567',
      company: 'TechCorp Inc.',
      status: 'active',
      value: '$15,000',
      lastContact: '2 days ago',
      avatar: 'https://images.unsplash.com/photo-1472099645785-5658abf4ff4e?w=40&h=40&fit=crop&crop=face',
    },
    {
      id: 2,
      name: 'Sarah Chen',
      email: 'sarah@startup.io',
      phone: '+1 (555) 987-6543',
      company: 'StartupXYZ',
      status: 'prospect',
      value: '$8,500',
      lastContact: '1 week ago',
      avatar: 'https://images.unsplash.com/photo-1494790108755-2616b612b786?w=40&h=40&fit=crop&crop=face',
    },
    {
      id: 3,
      name: 'Michael Rodriguez',
      email: 'mike@growth.co',
      phone: '+1 (555) 456-7890',
      company: 'GrowthCo',
      status: 'active',
      value: '$25,000',
      lastContact: '3 days ago',
      avatar: 'https://images.unsplash.com/photo-1507003211169-0a1dd7228f2d?w=40&h=40&fit=crop&crop=face',
    },
    {
      id: 4,
      name: 'Emily Johnson',
      email: 'emily@design.agency',
      phone: '+1 (555) 234-5678',
      company: 'Design Agency',
      status: 'lead',
      value: '$12,000',
      lastContact: '5 days ago',
      avatar: 'https://images.unsplash.com/photo-1438761681033-6461ffad8d80?w=40&h=40&fit=crop&crop=face',
    },
  ];

  const deals = [
    {
      id: 1,
      title: 'Website Redesign Project',
      client: 'TechCorp Inc.',
      value: '$15,000',
      stage: 'negotiation',
      probability: 75,
      closeDate: '2024-02-15',
    },
    {
      id: 2,
      title: 'Marketing Automation Setup',
      client: 'StartupXYZ',
      value: '$8,500',
      stage: 'proposal',
      probability: 60,
      closeDate: '2024-02-28',
    },
    {
      id: 3,
      title: 'Enterprise Integration',
      client: 'GrowthCo',
      value: '$25,000',
      stage: 'discovery',
      probability: 40,
      closeDate: '2024-03-15',
    },
  ];

  const activities = [
    {
      id: 1,
      type: 'email',
      title: 'Email sent to John Doe',
      description: 'Follow-up regarding project proposal',
      time: '2 hours ago',
      contact: 'John Doe',
    },
    {
      id: 2,
      type: 'call',
      title: 'Call with Sarah Chen',
      description: 'Initial discovery call completed',
      time: '1 day ago',
      contact: 'Sarah Chen',
    },
    {
      id: 3,
      type: 'meeting',
      title: 'Meeting scheduled with Michael Rodriguez',
      description: 'Project kickoff meeting',
      time: '3 days ago',
      contact: 'Michael Rodriguez',
    },
  ];

  const getStatusColor = (status) => {
    switch (status) {
      case 'active':
        return 'text-green-600 bg-green-100';
      case 'prospect':
        return 'text-blue-600 bg-blue-100';
      case 'lead':
        return 'text-yellow-600 bg-yellow-100';
      default:
        return 'text-gray-600 bg-gray-100';
    }
  };

  const getStageColor = (stage) => {
    switch (stage) {
      case 'discovery':
        return 'text-blue-600 bg-blue-100';
      case 'proposal':
        return 'text-yellow-600 bg-yellow-100';
      case 'negotiation':
        return 'text-orange-600 bg-orange-100';
      case 'closed':
        return 'text-green-600 bg-green-100';
      default:
        return 'text-gray-600 bg-gray-100';
    }
  };

  const getActivityIcon = (type) => {
    switch (type) {
      case 'email':
        return FiMail;
      case 'call':
        return FiPhone;
      case 'meeting':
        return FiCalendar;
      default:
        return FiUsers;
    }
  };

  const ContactsTab = () => (
    <div className="space-y-4">
      {contacts.map((contact) => (
        <motion.div
          key={contact.id}
          initial={{ opacity: 0, y: 20 }}
          animate={{ opacity: 1, y: 0 }}
          className="bg-white rounded-xl border border-gray-200 p-6 hover:shadow-lg transition-shadow"
        >
          <div className="flex items-center justify-between">
            <div className="flex items-center gap-4">
              <img
                src={contact.avatar}
                alt={contact.name}
                className="w-12 h-12 rounded-full object-cover"
              />
              <div>
                <h3 className="text-lg font-semibold text-gray-900">{contact.name}</h3>
                <p className="text-gray-600">{contact.company}</p>
                <div className="flex items-center gap-4 mt-2 text-sm text-gray-500">
                  <span className="flex items-center gap-1">
                    <SafeIcon icon={FiMail} className="h-4 w-4" />
                    {contact.email}
                  </span>
                  <span className="flex items-center gap-1">
                    <SafeIcon icon={FiPhone} className="h-4 w-4" />
                    {contact.phone}
                  </span>
                </div>
              </div>
            </div>
            <div className="text-right">
              <span className={`px-2 py-1 rounded-full text-xs font-medium ${getStatusColor(contact.status)}`}>
                {contact.status}
              </span>
              <p className="text-lg font-semibold text-gray-900 mt-2">{contact.value}</p>
              <p className="text-sm text-gray-500">Last contact: {contact.lastContact}</p>
            </div>
          </div>
        </motion.div>
      ))}
    </div>
  );

  const DealsTab = () => (
    <div className="space-y-4">
      {deals.map((deal) => (
        <motion.div
          key={deal.id}
          initial={{ opacity: 0, y: 20 }}
          animate={{ opacity: 1, y: 0 }}
          className="bg-white rounded-xl border border-gray-200 p-6 hover:shadow-lg transition-shadow"
        >
          <div className="flex items-center justify-between mb-4">
            <div>
              <h3 className="text-lg font-semibold text-gray-900">{deal.title}</h3>
              <p className="text-gray-600">{deal.client}</p>
            </div>
            <div className="text-right">
              <p className="text-xl font-bold text-gray-900">{deal.value}</p>
              <span className={`px-2 py-1 rounded-full text-xs font-medium ${getStageColor(deal.stage)}`}>
                {deal.stage}
              </span>
            </div>
          </div>
          <div className="flex items-center justify-between">
            <div className="flex items-center gap-4">
              <div className="flex items-center gap-2">
                <span className="text-sm text-gray-600">Probability:</span>
                <span className="font-medium">{deal.probability}%</span>
              </div>
              <div className="w-32 bg-gray-200 rounded-full h-2">
                <div
                  className="bg-primary-500 h-2 rounded-full"
                  style={{ width: `${deal.probability}%` }}
                ></div>
              </div>
            </div>
            <p className="text-sm text-gray-600">Close: {deal.closeDate}</p>
          </div>
        </motion.div>
      ))}
    </div>
  );

  const ActivitiesTab = () => (
    <div className="space-y-4">
      {activities.map((activity) => (
        <motion.div
          key={activity.id}
          initial={{ opacity: 0, y: 20 }}
          animate={{ opacity: 1, y: 0 }}
          className="bg-white rounded-xl border border-gray-200 p-6"
        >
          <div className="flex items-start gap-4">
            <div className="p-2 bg-primary-100 rounded-lg">
              <SafeIcon icon={getActivityIcon(activity.type)} className="h-5 w-5 text-primary-600" />
            </div>
            <div className="flex-1">
              <h3 className="font-semibold text-gray-900">{activity.title}</h3>
              <p className="text-gray-600 text-sm">{activity.description}</p>
              <div className="flex items-center gap-4 mt-2 text-sm text-gray-500">
                <span>{activity.time}</span>
                <span>•</span>
                <span>{activity.contact}</span>
              </div>
            </div>
          </div>
        </motion.div>
      ))}
    </div>
  );

  return (
    <div className="pt-20 pb-12">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        {/* Header */}
        <div className="flex items-center justify-between mb-8">
          <div>
            <h1 className="text-3xl font-bold text-gray-900 mb-2">CRM</h1>
            <p className="text-gray-600">Manage your customer relationships and sales pipeline</p>
          </div>
          <button className="bg-gradient-to-r from-primary-500 to-blue-600 text-white px-6 py-3 rounded-xl font-medium hover:from-primary-600 hover:to-blue-700 transition-all transform hover:scale-105 flex items-center gap-2">
            <SafeIcon icon={FiPlus} className="h-5 w-5" />
            Add Contact
          </button>
        </div>

        {/* Stats */}
        <div className="grid grid-cols-1 md:grid-cols-4 gap-6 mb-8">
          <div className="bg-white rounded-xl border border-gray-200 p-6">
            <div className="flex items-center gap-3">
              <div className="p-2 bg-blue-100 rounded-lg">
                <SafeIcon icon={FiUsers} className="h-6 w-6 text-blue-600" />
              </div>
              <div>
                <div className="text-2xl font-bold text-gray-900">248</div>
                <div className="text-sm text-gray-600">Total Contacts</div>
              </div>
            </div>
          </div>

          <div className="bg-white rounded-xl border border-gray-200 p-6">
            <div className="flex items-center gap-3">
              <div className="p-2 bg-green-100 rounded-lg">
                <SafeIcon icon={FiDollarSign} className="h-6 w-6 text-green-600" />
              </div>
              <div>
                <div className="text-2xl font-bold text-gray-900">$127k</div>
                <div className="text-sm text-gray-600">Pipeline Value</div>
              </div>
            </div>
          </div>

          <div className="bg-white rounded-xl border border-gray-200 p-6">
            <div className="flex items-center gap-3">
              <div className="p-2 bg-yellow-100 rounded-lg">
                <SafeIcon icon={FiTrendingUp} className="h-6 w-6 text-yellow-600" />
              </div>
              <div>
                <div className="text-2xl font-bold text-gray-900">23%</div>
                <div className="text-sm text-gray-600">Conversion Rate</div>
              </div>
            </div>
          </div>

          <div className="bg-white rounded-xl border border-gray-200 p-6">
            <div className="flex items-center gap-3">
              <div className="p-2 bg-purple-100 rounded-lg">
                <SafeIcon icon={FiCalendar} className="h-6 w-6 text-purple-600" />
              </div>
              <div>
                <div className="text-2xl font-bold text-gray-900">15</div>
                <div className="text-sm text-gray-600">Activities Today</div>
              </div>
            </div>
          </div>
        </div>

        {/* Search and Filter */}
        <div className="bg-white rounded-xl border border-gray-200 p-6 mb-6">
          <div className="flex flex-col md:flex-row gap-4">
            <div className="flex-1 relative">
              <SafeIcon icon={FiSearch} className="absolute left-3 top-1/2 transform -translate-y-1/2 h-5 w-5 text-gray-400" />
              <input
                type="text"
                placeholder="Search contacts, deals, or activities..."
                value={searchTerm}
                onChange={(e) => setSearchTerm(e.target.value)}
                className="w-full pl-10 pr-4 py-2 border border-gray-300 rounded-lg focus:ring-2 focus:ring-primary-500 focus:border-transparent"
              />
            </div>
            <button className="flex items-center gap-2 px-4 py-2 border border-gray-300 rounded-lg hover:bg-gray-50 transition-colors">
              <SafeIcon icon={FiFilter} className="h-5 w-5" />
              Filter
            </button>
          </div>
        </div>

        {/* Tabs */}
        <div className="bg-white rounded-xl border border-gray-200 overflow-hidden">
          <div className="border-b border-gray-200">
            <nav className="flex">
              {[
                { id: 'contacts', name: 'Contacts', count: contacts.length },
                { id: 'deals', name: 'Deals', count: deals.length },
                { id: 'activities', name: 'Activities', count: activities.length },
              ].map((tab) => (
                <button
                  key={tab.id}
                  onClick={() => setActiveTab(tab.id)}
                  className={`px-6 py-4 text-sm font-medium border-b-2 transition-colors ${
                    activeTab === tab.id
                      ? 'border-primary-500 text-primary-600'
                      : 'border-transparent text-gray-500 hover:text-gray-700'
                  }`}
                >
                  {tab.name} ({tab.count})
                </button>
              ))}
            </nav>
          </div>

          <div className="p-6">
            {activeTab === 'contacts' && <ContactsTab />}
            {activeTab === 'deals' && <DealsTab />}
            {activeTab === 'activities' && <ActivitiesTab />}
          </div>
        </div>
      </div>
    </div>
  );
};

export default CRMPage;