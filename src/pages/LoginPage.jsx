import React from 'react';
import { useNavigate } from 'react-router-dom';
import { motion } from 'framer-motion';
import { QuestLogin } from '@questlabs/react-sdk';
import { useAuth } from '../contexts/AuthContext';
import questConfig from '../config/questConfig';
import SafeIcon from '../common/SafeIcon';
import * as FiIcons from 'react-icons/fi';

const { FiZap, FiShield, FiTrendingUp, FiUsers } = FiIcons;

const LoginPage = () => {
  const navigate = useNavigate();
  const { login } = useAuth();

  const handleLogin = ({ userId, token, newUser }) => {
    login({ userId, token });
    
    if (newUser) {
      navigate('/onboarding');
    } else {
      navigate('/dashboard');
    }
  };

  const features = [
    {
      icon: FiZap,
      title: 'Smart Automation',
      description: 'AI-powered workflows that adapt to your business needs'
    },
    {
      icon: FiShield,
      title: 'Enterprise Security',
      description: 'Bank-grade security with SOC 2 compliance'
    },
    {
      icon: FiTrendingUp,
      title: 'Advanced Analytics',
      description: 'Real-time insights to optimize your processes'
    },
    {
      icon: FiUsers,
      title: 'Team Collaboration',
      description: 'Seamless integration with your existing tools'
    }
  ];

  return (
    <div className="min-h-screen bg-gradient-to-br from-slate-50 to-blue-50 flex">
      {/* Left Section - Branding */}
      <div className="hidden lg:flex lg:w-1/2 bg-gradient-to-br from-primary-600 to-blue-700 relative overflow-hidden">
        <div className="absolute inset-0 bg-black/10"></div>
        <div className="relative z-10 flex flex-col justify-center px-12 text-white">
          <motion.div
            initial={{ opacity: 0, y: 20 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.6 }}
          >
            <div className="flex items-center space-x-3 mb-8">
              <div className="p-3 bg-white/20 backdrop-blur-sm rounded-xl">
                <SafeIcon icon={FiZap} className="h-8 w-8 text-white" />
              </div>
              <h1 className="text-3xl font-bold">AutoFlow AI</h1>
            </div>
            
            <h2 className="text-4xl font-bold mb-6 leading-tight">
              Welcome to the Future of
              <span className="block text-blue-200">Business Automation</span>
            </h2>
            
            <p className="text-xl text-blue-100 mb-12 leading-relaxed">
              Streamline your workflows, boost productivity, and scale your business with intelligent automation that works for you.
            </p>

            <div className="space-y-6">
              {features.map((feature, index) => (
                <motion.div
                  key={feature.title}
                  initial={{ opacity: 0, x: -20 }}
                  animate={{ opacity: 1, x: 0 }}
                  transition={{ duration: 0.6, delay: 0.2 + index * 0.1 }}
                  className="flex items-start space-x-4"
                >
                  <div className="p-2 bg-white/20 backdrop-blur-sm rounded-lg">
                    <SafeIcon icon={feature.icon} className="h-5 w-5 text-white" />
                  </div>
                  <div>
                    <h3 className="font-semibold text-lg">{feature.title}</h3>
                    <p className="text-blue-100 text-sm">{feature.description}</p>
                  </div>
                </motion.div>
              ))}
            </div>
          </motion.div>
        </div>

        {/* Background Elements */}
        <div className="absolute top-20 right-20 w-64 h-64 bg-white/10 rounded-full blur-3xl"></div>
        <div className="absolute bottom-20 left-20 w-48 h-48 bg-blue-300/20 rounded-full blur-2xl"></div>
      </div>

      {/* Right Section - Login Form */}
      <div className="w-full lg:w-1/2 flex items-center justify-center p-8">
        <motion.div
          initial={{ opacity: 0, scale: 0.95 }}
          animate={{ opacity: 1, scale: 1 }}
          transition={{ duration: 0.6 }}
          className="w-full max-w-md"
        >
          <div className="bg-white rounded-2xl shadow-xl p-8 border border-gray-100">
            <div className="text-center mb-8">
              <div className="lg:hidden flex items-center justify-center space-x-2 mb-6">
                <div className="p-2 bg-gradient-to-r from-primary-500 to-blue-600 rounded-lg">
                  <SafeIcon icon={FiZap} className="h-6 w-6 text-white" />
                </div>
                <span className="text-xl font-bold bg-gradient-to-r from-primary-600 to-blue-600 bg-clip-text text-transparent">
                  AutoFlow AI
                </span>
              </div>
              
              <h2 className="text-3xl font-bold text-gray-900 mb-2">Welcome Back</h2>
              <p className="text-gray-600">Sign in to your account to continue</p>
            </div>

            <div className="quest-login-container">
              <QuestLogin
                onSubmit={handleLogin}
                email={true}
                google={false}
                accent={questConfig.PRIMARY_COLOR}
              />
            </div>

            <div className="mt-8 text-center">
              <p className="text-sm text-gray-500">
                By signing in, you agree to our{' '}
                <a href="#" className="text-primary-600 hover:text-primary-700 font-medium">
                  Terms of Service
                </a>{' '}
                and{' '}
                <a href="#" className="text-primary-600 hover:text-primary-700 font-medium">
                  Privacy Policy
                </a>
              </p>
            </div>
          </div>

          <div className="mt-6 text-center">
            <p className="text-sm text-gray-500">
              New to AutoFlow AI?{' '}
              <a href="#" className="text-primary-600 hover:text-primary-700 font-medium">
                Start your free trial
              </a>
            </p>
          </div>
        </motion.div>
      </div>
    </div>
  );
};

export default LoginPage;