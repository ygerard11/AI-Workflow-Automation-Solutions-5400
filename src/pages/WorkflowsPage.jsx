import React, { useState } from 'react';
import { motion } from 'framer-motion';
import SafeIcon from '../common/SafeIcon';
import * as FiIcons from 'react-icons/fi';

const { FiPlus, FiPlay, FiPause, FiEdit, FiTrash2, FiZap, FiClock, FiCheck, FiX, FiSettings } = FiIcons;

const WorkflowsPage = () => {
  const [workflows, setWorkflows] = useState([
    {
      id: 1,
      name: 'Contract to Onboarding',
      description: 'Automate client onboarding when contract is signed',
      status: 'active',
      triggers: 3,
      actions: 7,
      lastRun: '2 hours ago',
      success_rate: 98,
    },
    {
      id: 2,
      name: 'Invoice Generation',
      description: 'Auto-generate and send invoices after project completion',
      status: 'active',
      triggers: 1,
      actions: 4,
      lastRun: '1 day ago',
      success_rate: 100,
    },
    {
      id: 3,
      name: 'Follow-up Email Sequence',
      description: 'AI-powered personalized follow-up emails',
      status: 'paused',
      triggers: 2,
      actions: 5,
      lastRun: '3 days ago',
      success_rate: 95,
    },
  ]);

  const [showCreateModal, setShowCreateModal] = useState(false);

  const toggleWorkflow = (id) => {
    setWorkflows(workflows.map(workflow => 
      workflow.id === id 
        ? { ...workflow, status: workflow.status === 'active' ? 'paused' : 'active' }
        : workflow
    ));
  };

  const getStatusColor = (status) => {
    return status === 'active' ? 'text-green-600 bg-green-100' : 'text-yellow-600 bg-yellow-100';
  };

  const WorkflowCard = ({ workflow }) => (
    <motion.div
      initial={{ opacity: 0, y: 20 }}
      animate={{ opacity: 1, y: 0 }}
      className="bg-white rounded-xl border border-gray-200 p-6 hover:shadow-lg transition-shadow"
    >
      <div className="flex items-start justify-between mb-4">
        <div>
          <h3 className="text-lg font-semibold text-gray-900 mb-1">{workflow.name}</h3>
          <p className="text-gray-600 text-sm">{workflow.description}</p>
        </div>
        <span className={`px-2 py-1 rounded-full text-xs font-medium ${getStatusColor(workflow.status)}`}>
          {workflow.status}
        </span>
      </div>

      <div className="grid grid-cols-3 gap-4 mb-4">
        <div className="text-center">
          <div className="text-2xl font-bold text-primary-600">{workflow.triggers}</div>
          <div className="text-xs text-gray-500">Triggers</div>
        </div>
        <div className="text-center">
          <div className="text-2xl font-bold text-blue-600">{workflow.actions}</div>
          <div className="text-xs text-gray-500">Actions</div>
        </div>
        <div className="text-center">
          <div className="text-2xl font-bold text-green-600">{workflow.success_rate}%</div>
          <div className="text-xs text-gray-500">Success</div>
        </div>
      </div>

      <div className="flex items-center justify-between text-sm text-gray-500 mb-4">
        <span>Last run: {workflow.lastRun}</span>
      </div>

      <div className="flex items-center gap-2">
        <button
          onClick={() => toggleWorkflow(workflow.id)}
          className={`p-2 rounded-lg transition-colors ${
            workflow.status === 'active' 
              ? 'bg-yellow-100 text-yellow-600 hover:bg-yellow-200' 
              : 'bg-green-100 text-green-600 hover:bg-green-200'
          }`}
        >
          <SafeIcon icon={workflow.status === 'active' ? FiPause : FiPlay} className="h-4 w-4" />
        </button>
        <button className="p-2 bg-gray-100 text-gray-600 rounded-lg hover:bg-gray-200 transition-colors">
          <SafeIcon icon={FiEdit} className="h-4 w-4" />
        </button>
        <button className="p-2 bg-gray-100 text-gray-600 rounded-lg hover:bg-gray-200 transition-colors">
          <SafeIcon icon={FiSettings} className="h-4 w-4" />
        </button>
        <button className="p-2 bg-red-100 text-red-600 rounded-lg hover:bg-red-200 transition-colors ml-auto">
          <SafeIcon icon={FiTrash2} className="h-4 w-4" />
        </button>
      </div>
    </motion.div>
  );

  const CreateWorkflowModal = () => (
    <div className="fixed inset-0 bg-black bg-opacity-50 flex items-center justify-center z-50 p-4">
      <motion.div
        initial={{ opacity: 0, scale: 0.95 }}
        animate={{ opacity: 1, scale: 1 }}
        className="bg-white rounded-xl max-w-2xl w-full max-h-[90vh] overflow-y-auto"
      >
        <div className="p-6 border-b border-gray-200">
          <div className="flex items-center justify-between">
            <h2 className="text-2xl font-bold text-gray-900">Create New Workflow</h2>
            <button
              onClick={() => setShowCreateModal(false)}
              className="p-2 text-gray-400 hover:text-gray-600"
            >
              <SafeIcon icon={FiX} className="h-6 w-6" />
            </button>
          </div>
        </div>

        <div className="p-6">
          <div className="grid grid-cols-1 md:grid-cols-2 gap-4">
            {/* Predefined Templates */}
            <div className="border border-gray-200 rounded-lg p-4 hover:border-primary-300 cursor-pointer transition-colors">
              <div className="flex items-center gap-3 mb-2">
                <div className="p-2 bg-primary-100 rounded-lg">
                  <SafeIcon icon={FiZap} className="h-5 w-5 text-primary-600" />
                </div>
                <h3 className="font-semibold">Contract Automation</h3>
              </div>
              <p className="text-sm text-gray-600">Auto-create onboarding tasks when contracts are signed</p>
            </div>

            <div className="border border-gray-200 rounded-lg p-4 hover:border-primary-300 cursor-pointer transition-colors">
              <div className="flex items-center gap-3 mb-2">
                <div className="p-2 bg-green-100 rounded-lg">
                  <SafeIcon icon={FiCheck} className="h-5 w-5 text-green-600" />
                </div>
                <h3 className="font-semibold">Invoice Workflow</h3>
              </div>
              <p className="text-sm text-gray-600">Generate and send invoices automatically</p>
            </div>

            <div className="border border-gray-200 rounded-lg p-4 hover:border-primary-300 cursor-pointer transition-colors">
              <div className="flex items-center gap-3 mb-2">
                <div className="p-2 bg-blue-100 rounded-lg">
                  <SafeIcon icon={FiClock} className="h-5 w-5 text-blue-600" />
                </div>
                <h3 className="font-semibold">Follow-up Sequence</h3>
              </div>
              <p className="text-sm text-gray-600">AI-powered email follow-ups based on client history</p>
            </div>

            <div className="border border-gray-200 rounded-lg p-4 hover:border-primary-300 cursor-pointer transition-colors">
              <div className="flex items-center gap-3 mb-2">
                <div className="p-2 bg-purple-100 rounded-lg">
                  <SafeIcon icon={FiPlus} className="h-5 w-5 text-purple-600" />
                </div>
                <h3 className="font-semibold">Custom Workflow</h3>
              </div>
              <p className="text-sm text-gray-600">Build your own workflow from scratch</p>
            </div>
          </div>
        </div>
      </motion.div>
    </div>
  );

  return (
    <div className="pt-20 pb-12">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        {/* Header */}
        <div className="flex items-center justify-between mb-8">
          <div>
            <h1 className="text-3xl font-bold text-gray-900 mb-2">Workflows</h1>
            <p className="text-gray-600">Automate your business processes with intelligent workflows</p>
          </div>
          <button
            onClick={() => setShowCreateModal(true)}
            className="bg-gradient-to-r from-primary-500 to-blue-600 text-white px-6 py-3 rounded-xl font-medium hover:from-primary-600 hover:to-blue-700 transition-all transform hover:scale-105 flex items-center gap-2"
          >
            <SafeIcon icon={FiPlus} className="h-5 w-5" />
            Create Workflow
          </button>
        </div>

        {/* Stats */}
        <div className="grid grid-cols-1 md:grid-cols-4 gap-6 mb-8">
          <div className="bg-white rounded-xl border border-gray-200 p-6">
            <div className="flex items-center gap-3">
              <div className="p-2 bg-primary-100 rounded-lg">
                <SafeIcon icon={FiZap} className="h-6 w-6 text-primary-600" />
              </div>
              <div>
                <div className="text-2xl font-bold text-gray-900">12</div>
                <div className="text-sm text-gray-600">Active Workflows</div>
              </div>
            </div>
          </div>

          <div className="bg-white rounded-xl border border-gray-200 p-6">
            <div className="flex items-center gap-3">
              <div className="p-2 bg-green-100 rounded-lg">
                <SafeIcon icon={FiCheck} className="h-6 w-6 text-green-600" />
              </div>
              <div>
                <div className="text-2xl font-bold text-gray-900">1,247</div>
                <div className="text-sm text-gray-600">Tasks Completed</div>
              </div>
            </div>
          </div>

          <div className="bg-white rounded-xl border border-gray-200 p-6">
            <div className="flex items-center gap-3">
              <div className="p-2 bg-blue-100 rounded-lg">
                <SafeIcon icon={FiClock} className="h-6 w-6 text-blue-600" />
              </div>
              <div>
                <div className="text-2xl font-bold text-gray-900">156h</div>
                <div className="text-sm text-gray-600">Time Saved</div>
              </div>
            </div>
          </div>

          <div className="bg-white rounded-xl border border-gray-200 p-6">
            <div className="flex items-center gap-3">
              <div className="p-2 bg-yellow-100 rounded-lg">
                <SafeIcon icon={FiZap} className="h-6 w-6 text-yellow-600" />
              </div>
              <div>
                <div className="text-2xl font-bold text-gray-900">97.5%</div>
                <div className="text-sm text-gray-600">Success Rate</div>
              </div>
            </div>
          </div>
        </div>

        {/* Workflows Grid */}
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6">
          {workflows.map((workflow) => (
            <WorkflowCard key={workflow.id} workflow={workflow} />
          ))}
        </div>

        {/* Create Workflow Modal */}
        {showCreateModal && <CreateWorkflowModal />}
      </div>
    </div>
  );
};

export default WorkflowsPage;