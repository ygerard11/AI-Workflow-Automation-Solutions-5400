import React from 'react';
import { Link } from 'react-router-dom';
import SafeIcon from '../common/SafeIcon';
import * as FiIcons from 'react-icons/fi';

const { FiZap, FiTwitter, FiLinkedin, FiGithub, FiMail } = FiIcons;

const Footer = () => {
  return (
    <footer className="bg-dark-900 text-white">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 py-12">
        <div className="grid grid-cols-1 md:grid-cols-4 gap-8">
          {/* Brand */}
          <div className="col-span-1 md:col-span-1">
            <div className="flex items-center space-x-2 mb-4">
              <div className="p-2 bg-gradient-to-r from-primary-500 to-blue-600 rounded-lg">
                <SafeIcon icon={FiZap} className="h-6 w-6 text-white" />
              </div>
              <span className="text-xl font-bold">AutoFlow AI</span>
            </div>
            <p className="text-gray-400 text-sm mb-4">
              Intelligent automation for modern businesses. Streamline workflows, boost productivity, and scale effortlessly.
            </p>
            <div className="flex space-x-4">
              <SafeIcon icon={FiTwitter} className="h-5 w-5 text-gray-400 hover:text-primary-400 cursor-pointer transition-colors" />
              <SafeIcon icon={FiLinkedin} className="h-5 w-5 text-gray-400 hover:text-primary-400 cursor-pointer transition-colors" />
              <SafeIcon icon={FiGithub} className="h-5 w-5 text-gray-400 hover:text-primary-400 cursor-pointer transition-colors" />
              <SafeIcon icon={FiMail} className="h-5 w-5 text-gray-400 hover:text-primary-400 cursor-pointer transition-colors" />
            </div>
          </div>

          {/* Product */}
          <div>
            <h3 className="text-lg font-semibold mb-4">Product</h3>
            <ul className="space-y-2 text-sm">
              <li><Link to="/workflows" className="text-gray-400 hover:text-white transition-colors">Workflows</Link></li>
              <li><Link to="/templates" className="text-gray-400 hover:text-white transition-colors">Templates</Link></li>
              <li><Link to="/crm" className="text-gray-400 hover:text-white transition-colors">CRM Integration</Link></li>
              <li><Link to="/analytics" className="text-gray-400 hover:text-white transition-colors">Analytics</Link></li>
            </ul>
          </div>

          {/* Company */}
          <div>
            <h3 className="text-lg font-semibold mb-4">Company</h3>
            <ul className="space-y-2 text-sm">
              <li><a href="#" className="text-gray-400 hover:text-white transition-colors">About</a></li>
              <li><a href="#" className="text-gray-400 hover:text-white transition-colors">Blog</a></li>
              <li><a href="#" className="text-gray-400 hover:text-white transition-colors">Careers</a></li>
              <li><a href="#" className="text-gray-400 hover:text-white transition-colors">Contact</a></li>
            </ul>
          </div>

          {/* Support */}
          <div>
            <h3 className="text-lg font-semibold mb-4">Support</h3>
            <ul className="space-y-2 text-sm">
              <li><a href="#" className="text-gray-400 hover:text-white transition-colors">Documentation</a></li>
              <li><a href="#" className="text-gray-400 hover:text-white transition-colors">API Reference</a></li>
              <li><a href="#" className="text-gray-400 hover:text-white transition-colors">Help Center</a></li>
              <li><a href="#" className="text-gray-400 hover:text-white transition-colors">Status</a></li>
            </ul>
          </div>
        </div>

        <div className="border-t border-gray-800 mt-8 pt-8 flex flex-col md:flex-row justify-between items-center">
          <p className="text-gray-400 text-sm">
            © 2024 AutoFlow AI. All rights reserved.
          </p>
          <div className="flex space-x-6 mt-4 md:mt-0">
            <a href="#" className="text-gray-400 hover:text-white text-sm transition-colors">Privacy Policy</a>
            <a href="#" className="text-gray-400 hover:text-white text-sm transition-colors">Terms of Service</a>
            <a href="#" className="text-gray-400 hover:text-white text-sm transition-colors">Cookie Policy</a>
          </div>
        </div>
      </div>
    </footer>
  );
};

export default Footer;