import React, { useState, useEffect, useRef } from 'react';
import { motion, AnimatePresence } from 'framer-motion';
import SafeIcon from '../common/SafeIcon';
import * as FiIcons from 'react-icons/fi';

const { FiMessageCircle, FiX, FiSend, FiCalendar, FiUser, FiMail, FiPhone, FiCheck, FiClock } = FiIcons;

const AISalesAgent = () => {
  const [isOpen, setIsOpen] = useState(false);
  const [messages, setMessages] = useState([]);
  const [inputValue, setInputValue] = useState('');
  const [isTyping, setIsTyping] = useState(false);
  const [showAppointmentForm, setShowAppointmentForm] = useState(false);
  const [appointmentData, setAppointmentData] = useState({
    name: '',
    email: '',
    phone: '',
    company: '',
    date: '',
    time: '',
    timezone: 'EST',
    message: ''
  });
  const [currentStep, setCurrentStep] = useState('chat');
  const messagesEndRef = useRef(null);

  const availableSlots = [
    { date: '2024-02-15', times: ['09:00', '10:30', '14:00', '15:30'] },
    { date: '2024-02-16', times: ['09:00', '11:00', '13:00', '16:00'] },
    { date: '2024-02-17', times: ['10:00', '14:30', '16:00'] },
    { date: '2024-02-18', times: ['09:30', '11:30', '15:00'] },
    { date: '2024-02-19', times: ['09:00', '10:00', '14:00', '15:30'] }
  ];

  const initialMessage = {
    id: 1,
    text: "Hi! I'm Alex, your AI sales assistant for AutoFlow AI. I'm here to help you discover how our intelligent automation platform can transform your business. What brings you here today?",
    sender: 'agent',
    timestamp: new Date(),
    suggestions: [
      "I want to learn about workflow automation",
      "I need help with CRM integration",
      "I'd like to schedule a demo",
      "Tell me about pricing"
    ]
  };

  useEffect(() => {
    if (isOpen && messages.length === 0) {
      setMessages([initialMessage]);
    }
  }, [isOpen]);

  useEffect(() => {
    scrollToBottom();
  }, [messages]);

  const scrollToBottom = () => {
    messagesEndRef.current?.scrollIntoView({ behavior: 'smooth' });
  };

  const handleSendMessage = (text = inputValue) => {
    if (!text.trim()) return;

    const userMessage = {
      id: Date.now(),
      text: text.trim(),
      sender: 'user',
      timestamp: new Date()
    };

    setMessages(prev => [...prev, userMessage]);
    setInputValue('');
    setIsTyping(true);

    // Simulate AI response
    setTimeout(() => {
      const response = generateAIResponse(text.trim());
      setMessages(prev => [...prev, response]);
      setIsTyping(false);
    }, 1000 + Math.random() * 1000);
  };

  const generateAIResponse = (userInput) => {
    const input = userInput.toLowerCase();
    let responseText = '';
    let suggestions = [];
    let showBooking = false;

    if (input.includes('demo') || input.includes('schedule') || input.includes('meeting') || input.includes('appointment')) {
      responseText = "Perfect! I'd love to schedule a personalized demo for you. Our demos typically last 30 minutes and cover:\n\n• Custom workflow automation for your business\n• Live CRM integration walkthrough\n• AI-powered email generation\n• ROI analysis specific to your use case\n\nShall we find a time that works for you?";
      suggestions = ["Yes, let's schedule a demo", "Tell me more first", "What times are available?"];
      showBooking = true;
    } else if (input.includes('pricing') || input.includes('cost') || input.includes('price')) {
      responseText = "Great question! Our pricing is designed to scale with your business:\n\n💼 **Freelancer** - $59/month\n• 5 Active Workflows\n• 100 Tasks/month\n• Basic CRM Integration\n\n🚀 **SMB** - $197/month (Most Popular)\n• 25 Active Workflows\n• 1,000 Tasks/month\n• AI Email Generation\n\n🏢 **Enterprise** - $397/month\n• Unlimited Workflows\n• Custom AI Models\n• Dedicated Support\n\nWould you like to see a live demo of how this could work for your specific use case?";
      suggestions = ["Schedule a demo", "Tell me about the SMB plan", "What's included in Enterprise?"];
    } else if (input.includes('workflow') || input.includes('automation')) {
      responseText = "Excellent! AutoFlow AI specializes in intelligent workflow automation. Here's what makes us different:\n\n✨ **Smart Triggers**: Contract signatures, form submissions, calendar events\n🤖 **AI Actions**: Generate emails, update CRM, create tasks, send invoices\n📊 **Analytics**: Track performance, success rates, and time saved\n\nFor example, when a client signs a contract, we can automatically:\n• Create onboarding tasks\n• Generate personalized welcome emails\n• Update your CRM with client data\n• Schedule follow-up meetings\n\nWhat type of workflows would benefit your business most?";
      suggestions = ["Contract to onboarding", "Lead qualification", "Invoice automation", "Schedule a demo"];
    } else if (input.includes('crm') || input.includes('integration')) {
      responseText = "Our CRM integration is seamless and powerful! We connect with:\n\n🔗 **Popular CRMs**: Salesforce, HubSpot, Pipedrive, Zoho\n⚡ **Real-time Sync**: Automatic data updates\n🎯 **Smart Mapping**: AI matches fields intelligently\n📈 **Enhanced Data**: Enriches contacts with interaction history\n\nThe best part? Setup takes just 5 minutes with our guided wizard. Your existing data stays exactly where it is, but now it works smarter.\n\nWant to see how this would work with your current CRM?";
      suggestions = ["Yes, show me a demo", "Which CRMs do you support?", "How long does setup take?"];
    } else if (input.includes('yes') && messages[messages.length - 1]?.text.includes('find a time')) {
      setShowAppointmentForm(true);
      responseText = "Fantastic! Let me help you schedule that demo. I'll need a few quick details to ensure we make the most of our time together.";
      suggestions = [];
    } else if (input.includes('roi') || input.includes('save') || input.includes('time')) {
      responseText = "Great question! Our clients typically see impressive results:\n\n⏱️ **Time Savings**: 15-25 hours per week\n💰 **Cost Reduction**: 40-60% on manual processes\n📈 **Productivity Boost**: 3x faster task completion\n🎯 **Error Reduction**: 95% fewer manual mistakes\n\nFor example, a marketing agency with 10 employees saved 156 hours monthly and increased client capacity by 40% without hiring new staff.\n\nEvery business is different though. In our demo, I can show you a personalized ROI calculator based on your specific workflows.";
      suggestions = ["That sounds great, let's schedule", "Tell me about the marketing agency case", "What workflows save the most time?"];
    } else {
      responseText = "I'd love to help you with that! AutoFlow AI is designed to streamline your business operations through intelligent automation. \n\nHere are some ways we typically help businesses like yours:\n\n🚀 **Automate repetitive tasks** - Save 15-25 hours per week\n🤖 **AI-powered workflows** - From contract to customer success\n📊 **Smart analytics** - Track performance and optimize processes\n🔗 **Seamless integrations** - Works with your existing tools\n\nWhat specific challenge would you like to solve first?";
      suggestions = ["Workflow automation", "CRM integration", "Pricing information", "Schedule a demo"];
    }

    return {
      id: Date.now(),
      text: responseText,
      sender: 'agent',
      timestamp: new Date(),
      suggestions: suggestions,
      showBooking: showBooking
    };
  };

  const handleAppointmentSubmit = (e) => {
    e.preventDefault();
    
    // Here you would typically send the appointment data to your backend
    console.log('Appointment booked:', appointmentData);
    
    setCurrentStep('confirmation');
    
    const confirmationMessage = {
      id: Date.now(),
      text: `Perfect! Your demo is scheduled for ${appointmentData.date} at ${appointmentData.time} ${appointmentData.timezone}.\n\nI've sent a calendar invite to ${appointmentData.email} with:\n✅ Meeting link\n✅ Agenda\n✅ Preparation materials\n\nLooking forward to showing you how AutoFlow AI can transform your business!`,
      sender: 'agent',
      timestamp: new Date(),
      suggestions: []
    };
    
    setMessages(prev => [...prev, confirmationMessage]);
    setShowAppointmentForm(false);
  };

  const formatDate = (dateString) => {
    const date = new Date(dateString);
    return date.toLocaleDateString('en-US', { 
      weekday: 'long', 
      year: 'numeric', 
      month: 'long', 
      day: 'numeric' 
    });
  };

  const AppointmentForm = () => (
    <motion.div
      initial={{ opacity: 0, y: 20 }}
      animate={{ opacity: 1, y: 0 }}
      className="bg-white rounded-lg border border-gray-200 p-6 mt-4"
    >
      <h3 className="text-lg font-semibold text-gray-900 mb-4">Schedule Your Demo</h3>
      <form onSubmit={handleAppointmentSubmit} className="space-y-4">
        <div className="grid grid-cols-2 gap-4">
          <div>
            <label className="block text-sm font-medium text-gray-700 mb-1">Name *</label>
            <input
              type="text"
              required
              value={appointmentData.name}
              onChange={(e) => setAppointmentData({...appointmentData, name: e.target.value})}
              className="w-full px-3 py-2 border border-gray-300 rounded-md focus:ring-2 focus:ring-primary-500 focus:border-transparent text-sm"
            />
          </div>
          <div>
            <label className="block text-sm font-medium text-gray-700 mb-1">Company</label>
            <input
              type="text"
              value={appointmentData.company}
              onChange={(e) => setAppointmentData({...appointmentData, company: e.target.value})}
              className="w-full px-3 py-2 border border-gray-300 rounded-md focus:ring-2 focus:ring-primary-500 focus:border-transparent text-sm"
            />
          </div>
        </div>
        
        <div>
          <label className="block text-sm font-medium text-gray-700 mb-1">Email *</label>
          <input
            type="email"
            required
            value={appointmentData.email}
            onChange={(e) => setAppointmentData({...appointmentData, email: e.target.value})}
            className="w-full px-3 py-2 border border-gray-300 rounded-md focus:ring-2 focus:ring-primary-500 focus:border-transparent text-sm"
          />
        </div>
        
        <div>
          <label className="block text-sm font-medium text-gray-700 mb-1">Phone</label>
          <input
            type="tel"
            value={appointmentData.phone}
            onChange={(e) => setAppointmentData({...appointmentData, phone: e.target.value})}
            className="w-full px-3 py-2 border border-gray-300 rounded-md focus:ring-2 focus:ring-primary-500 focus:border-transparent text-sm"
          />
        </div>

        <div>
          <label className="block text-sm font-medium text-gray-700 mb-2">Preferred Date *</label>
          <div className="grid grid-cols-1 gap-2 max-h-32 overflow-y-auto">
            {availableSlots.map((slot) => (
              <div key={slot.date} className="border rounded-md p-2">
                <div className="font-medium text-sm text-gray-900 mb-2">
                  {formatDate(slot.date)}
                </div>
                <div className="grid grid-cols-4 gap-1">
                  {slot.times.map((time) => (
                    <button
                      key={time}
                      type="button"
                      onClick={() => setAppointmentData({
                        ...appointmentData, 
                        date: slot.date, 
                        time: time
                      })}
                      className={`px-2 py-1 text-xs rounded ${
                        appointmentData.date === slot.date && appointmentData.time === time
                          ? 'bg-primary-500 text-white'
                          : 'bg-gray-100 text-gray-700 hover:bg-gray-200'
                      }`}
                    >
                      {time}
                    </button>
                  ))}
                </div>
              </div>
            ))}
          </div>
        </div>

        <div>
          <label className="block text-sm font-medium text-gray-700 mb-1">Timezone</label>
          <select
            value={appointmentData.timezone}
            onChange={(e) => setAppointmentData({...appointmentData, timezone: e.target.value})}
            className="w-full px-3 py-2 border border-gray-300 rounded-md focus:ring-2 focus:ring-primary-500 focus:border-transparent text-sm"
          >
            <option value="EST">Eastern Time (EST)</option>
            <option value="CST">Central Time (CST)</option>
            <option value="MST">Mountain Time (MST)</option>
            <option value="PST">Pacific Time (PST)</option>
          </select>
        </div>

        <div>
          <label className="block text-sm font-medium text-gray-700 mb-1">What would you like to focus on?</label>
          <textarea
            value={appointmentData.message}
            onChange={(e) => setAppointmentData({...appointmentData, message: e.target.value})}
            placeholder="e.g., CRM integration, workflow automation for sales team..."
            className="w-full px-3 py-2 border border-gray-300 rounded-md focus:ring-2 focus:ring-primary-500 focus:border-transparent text-sm"
            rows="3"
          />
        </div>

        <button
          type="submit"
          disabled={!appointmentData.name || !appointmentData.email || !appointmentData.date}
          className="w-full bg-gradient-to-r from-primary-500 to-blue-600 text-white py-2 px-4 rounded-md font-medium hover:from-primary-600 hover:to-blue-700 transition-all disabled:opacity-50 disabled:cursor-not-allowed"
        >
          Schedule Demo
        </button>
      </form>
    </motion.div>
  );

  return (
    <>
      {/* Chat Button */}
      <motion.button
        onClick={() => setIsOpen(true)}
        className={`fixed bottom-6 right-6 bg-gradient-to-r from-primary-500 to-blue-600 text-white p-4 rounded-full shadow-lg hover:shadow-xl transition-all z-50 ${isOpen ? 'hidden' : 'flex'} items-center gap-2`}
        whileHover={{ scale: 1.05 }}
        whileTap={{ scale: 0.95 }}
      >
        <SafeIcon icon={FiMessageCircle} className="h-6 w-6" />
        <span className="hidden sm:block text-sm font-medium">Chat with Alex</span>
      </motion.button>

      {/* Chat Widget */}
      <AnimatePresence>
        {isOpen && (
          <motion.div
            initial={{ opacity: 0, y: 20, scale: 0.95 }}
            animate={{ opacity: 1, y: 0, scale: 1 }}
            exit={{ opacity: 0, y: 20, scale: 0.95 }}
            className="fixed bottom-6 right-6 w-96 h-[600px] bg-white rounded-xl shadow-2xl border border-gray-200 z-50 flex flex-col"
          >
            {/* Header */}
            <div className="bg-gradient-to-r from-primary-500 to-blue-600 text-white p-4 rounded-t-xl flex items-center justify-between">
              <div className="flex items-center gap-3">
                <div className="w-8 h-8 bg-white/20 rounded-full flex items-center justify-center">
                  <SafeIcon icon={FiUser} className="h-4 w-4" />
                </div>
                <div>
                  <div className="font-semibold">Alex</div>
                  <div className="text-sm text-primary-100">AI Sales Assistant</div>
                </div>
              </div>
              <button
                onClick={() => setIsOpen(false)}
                className="p-1 hover:bg-white/20 rounded-lg transition-colors"
              >
                <SafeIcon icon={FiX} className="h-5 w-5" />
              </button>
            </div>

            {/* Messages */}
            <div className="flex-1 overflow-y-auto p-4 space-y-4">
              {messages.map((message) => (
                <div key={message.id} className={`flex ${message.sender === 'user' ? 'justify-end' : 'justify-start'}`}>
                  <div className={`max-w-[80%] p-3 rounded-lg ${
                    message.sender === 'user' 
                      ? 'bg-primary-500 text-white' 
                      : 'bg-gray-100 text-gray-900'
                  }`}>
                    <div className="whitespace-pre-line text-sm">{message.text}</div>
                    {message.suggestions && message.suggestions.length > 0 && (
                      <div className="mt-3 space-y-2">
                        {message.suggestions.map((suggestion, index) => (
                          <button
                            key={index}
                            onClick={() => handleSendMessage(suggestion)}
                            className="block w-full text-left p-2 bg-white/20 hover:bg-white/30 rounded-md text-sm transition-colors"
                          >
                            {suggestion}
                          </button>
                        ))}
                      </div>
                    )}
                  </div>
                </div>
              ))}
              
              {isTyping && (
                <div className="flex justify-start">
                  <div className="bg-gray-100 p-3 rounded-lg">
                    <div className="flex space-x-1">
                      <div className="w-2 h-2 bg-gray-400 rounded-full animate-bounce"></div>
                      <div className="w-2 h-2 bg-gray-400 rounded-full animate-bounce" style={{animationDelay: '0.1s'}}></div>
                      <div className="w-2 h-2 bg-gray-400 rounded-full animate-bounce" style={{animationDelay: '0.2s'}}></div>
                    </div>
                  </div>
                </div>
              )}
              
              {showAppointmentForm && <AppointmentForm />}
              
              <div ref={messagesEndRef} />
            </div>

            {/* Input */}
            <div className="p-4 border-t border-gray-200">
              <div className="flex gap-2">
                <input
                  type="text"
                  value={inputValue}
                  onChange={(e) => setInputValue(e.target.value)}
                  onKeyPress={(e) => e.key === 'Enter' && handleSendMessage()}
                  placeholder="Type your message..."
                  className="flex-1 px-3 py-2 border border-gray-300 rounded-lg focus:ring-2 focus:ring-primary-500 focus:border-transparent text-sm"
                />
                <button
                  onClick={() => handleSendMessage()}
                  className="bg-primary-500 text-white p-2 rounded-lg hover:bg-primary-600 transition-colors"
                >
                  <SafeIcon icon={FiSend} className="h-4 w-4" />
                </button>
              </div>
            </div>
          </motion.div>
        )}
      </AnimatePresence>
    </>
  );
};

export default AISalesAgent;