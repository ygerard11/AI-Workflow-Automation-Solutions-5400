import React, { useState } from 'react';
import { useNavigate } from 'react-router-dom';
import { motion } from 'framer-motion';
import { OnBoarding } from '@questlabs/react-sdk';
import questConfig from '../config/questConfig';
import SafeIcon from '../common/SafeIcon';
import * as FiIcons from 'react-icons/fi';

const { FiZap, FiTarget, FiUsers, FiTrendingUp, FiCheck } = FiIcons;

const OnboardingPage = () => {
  const navigate = useNavigate();
  const userId = localStorage.getItem('userId');
  const token = localStorage.getItem('token');
  const [answers, setAnswers] = useState({});

  const getAnswers = () => {
    // Navigate to dashboard after onboarding completion
    navigate('/dashboard');
  };

  const onboardingSteps = [
    {
      icon: FiTarget,
      title: 'Define Your Goals',
      description: 'Tell us about your business objectives and automation needs'
    },
    {
      icon: FiUsers,
      title: 'Team Setup',
      description: 'Configure your team structure and collaboration preferences'
    },
    {
      icon: FiTrendingUp,
      title: 'Workflow Preferences',
      description: 'Choose your preferred automation templates and integrations'
    },
    {
      icon: FiCheck,
      title: 'Ready to Go',
      description: 'Your personalized automation environment is being prepared'
    }
  ];

  return (
    <div className="min-h-screen bg-gradient-to-br from-slate-50 to-blue-50 flex">
      {/* Left Section - Onboarding Visual */}
      <div className="hidden lg:flex lg:w-1/2 bg-gradient-to-br from-green-500 to-emerald-600 relative overflow-hidden">
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
              Let's Get You
              <span className="block text-emerald-200">Set Up for Success</span>
            </h2>
            
            <p className="text-xl text-emerald-100 mb-12 leading-relaxed">
              We'll customize your automation experience based on your specific needs and preferences. This will only take a few minutes.
            </p>

            <div className="space-y-6">
              {onboardingSteps.map((step, index) => (
                <motion.div
                  key={step.title}
                  initial={{ opacity: 0, x: -20 }}
                  animate={{ opacity: 1, x: 0 }}
                  transition={{ duration: 0.6, delay: 0.2 + index * 0.1 }}
                  className="flex items-start space-x-4"
                >
                  <div className="p-2 bg-white/20 backdrop-blur-sm rounded-lg">
                    <SafeIcon icon={step.icon} className="h-5 w-5 text-white" />
                  </div>
                  <div>
                    <h3 className="font-semibold text-lg">{step.title}</h3>
                    <p className="text-emerald-100 text-sm">{step.description}</p>
                  </div>
                </motion.div>
              ))}
            </div>

            <div className="mt-12 p-6 bg-white/10 backdrop-blur-sm rounded-xl">
              <p className="text-emerald-100 text-sm">
                💡 <strong>Pro Tip:</strong> The more information you provide, the better we can tailor your automation workflows to your specific business needs.
              </p>
            </div>
          </motion.div>
        </div>

        {/* Background Elements */}
        <div className="absolute top-20 right-20 w-64 h-64 bg-white/10 rounded-full blur-3xl"></div>
        <div className="absolute bottom-20 left-20 w-48 h-48 bg-emerald-300/20 rounded-full blur-2xl"></div>
      </div>

      {/* Right Section - Onboarding Component */}
      <div className="w-full lg:w-1/2 flex items-center justify-center p-8">
        <motion.div
          initial={{ opacity: 0, scale: 0.95 }}
          animate={{ opacity: 1, scale: 1 }}
          transition={{ duration: 0.6 }}
          className="w-full max-w-md"
        >
          <div className="bg-white rounded-2xl shadow-xl border border-gray-100 overflow-hidden">
            <div className="lg:hidden bg-gradient-to-r from-green-500 to-emerald-600 p-6 text-white text-center">
              <div className="flex items-center justify-center space-x-2 mb-4">
                <div className="p-2 bg-white/20 backdrop-blur-sm rounded-lg">
                  <SafeIcon icon={FiZap} className="h-6 w-6 text-white" />
                </div>
                <span className="text-xl font-bold">AutoFlow AI</span>
              </div>
              <h2 className="text-2xl font-bold mb-2">Welcome Aboard!</h2>
              <p className="text-emerald-100">Let's personalize your experience</p>
            </div>

            <div className="quest-onboarding-container" style={{ width: '400px', margin: '0 auto' }}>
              <OnBoarding
                userId={userId}
                token={token}
                questId={questConfig.QUEST_ONBOARDING_QUESTID}
                answer={answers}
                setAnswer={setAnswers}
                getAnswers={getAnswers}
                accent={questConfig.PRIMARY_COLOR}
                singleChoose="modal1"
                multiChoice="modal2"
              >
                <OnBoarding.Header />
                <OnBoarding.Content />
                <OnBoarding.Footer />
              </OnBoarding>
            </div>
          </div>

          <div className="mt-6 text-center">
            <p className="text-sm text-gray-500">
              Need help?{' '}
              <a href="#" className="text-primary-600 hover:text-primary-700 font-medium">
                Contact our support team
              </a>
            </p>
          </div>
        </motion.div>
      </div>
    </div>
  );
};

export default OnboardingPage;