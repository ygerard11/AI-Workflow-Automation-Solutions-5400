import React from 'react';
import { motion } from 'framer-motion';
import SafeIcon from '../common/SafeIcon';
import * as FiIcons from 'react-icons/fi';
import ReactECharts from 'echarts-for-react';

const { FiTrendingUp, FiUsers, FiZap, FiClock, FiCheck, FiX, FiPlay, FiPause, FiActivity } = FiIcons;

const DashboardPage = () => {
  const stats = [
    {
      title: 'Active Workflows',
      value: '12',
      change: '+2',
      changeType: 'positive',
      icon: FiZap,
      color: 'from-primary-500 to-blue-600',
    },
    {
      title: 'Tasks Completed',
      value: '1,247',
      change: '+156',
      changeType: 'positive',
      icon: FiCheck,
      color: 'from-green-500 to-emerald-600',
    },
    {
      title: 'Time Saved',
      value: '156h',
      change: '+23h',
      changeType: 'positive',
      icon: FiClock,
      color: 'from-blue-500 to-cyan-600',
    },
    {
      title: 'Success Rate',
      value: '97.5%',
      change: '+2.1%',
      changeType: 'positive',
      icon: FiTrendingUp,
      color: 'from-purple-500 to-indigo-600',
    },
  ];

  const recentWorkflows = [
    {
      id: 1,
      name: 'Contract to Onboarding',
      status: 'active',
      lastRun: '2 hours ago',
      success: 98,
      tasks: 23,
    },
    {
      id: 2,
      name: 'Invoice Generation',
      status: 'active',
      lastRun: '4 hours ago',
      success: 100,
      tasks: 12,
    },
    {
      id: 3,
      name: 'Follow-up Email Sequence',
      status: 'paused',
      lastRun: '1 day ago',
      success: 95,
      tasks: 8,
    },
    {
      id: 4,
      name: 'Lead Qualification',
      status: 'active',
      lastRun: '6 hours ago',
      success: 92,
      tasks: 45,
    },
  ];

  const recentTasks = [
    {
      id: 1,
      title: 'Send welcome email to John Doe',
      workflow: 'Contract to Onboarding',
      status: 'completed',
      time: '5 minutes ago',
    },
    {
      id: 2,
      title: 'Generate invoice for Project Alpha',
      workflow: 'Invoice Generation',
      status: 'completed',
      time: '15 minutes ago',
    },
    {
      id: 3,
      title: 'Update CRM with new client data',
      workflow: 'Contract to Onboarding',
      status: 'in_progress',
      time: '1 hour ago',
    },
    {
      id: 4,
      title: 'Schedule follow-up call',
      workflow: 'Lead Qualification',
      status: 'failed',
      time: '2 hours ago',
    },
  ];

  // Chart configuration
  const workflowActivityChart = {
    tooltip: {
      trigger: 'axis',
    },
    xAxis: {
      type: 'category',
      data: ['Mon', 'Tue', 'Wed', 'Thu', 'Fri', 'Sat', 'Sun'],
    },
    yAxis: {
      type: 'value',
    },
    series: [
      {
        name: 'Workflows Executed',
        type: 'line',
        smooth: true,
        data: [120, 132, 101, 134, 90, 230, 210],
        itemStyle: {
          color: '#0ea5e9',
        },
        areaStyle: {
          color: {
            type: 'linear',
            x: 0,
            y: 0,
            x2: 0,
            y2: 1,
            colorStops: [
              { offset: 0, color: 'rgba(14, 165, 233, 0.3)' },
              { offset: 1, color: 'rgba(14, 165, 233, 0.05)' },
            ],
          },
        },
      },
    ],
  };

  const successRateChart = {
    tooltip: {
      trigger: 'item',
    },
    series: [
      {
        type: 'pie',
        radius: ['40%', '70%'],
        data: [
          { value: 975, name: 'Successful' },
          { value: 25, name: 'Failed' },
        ],
        itemStyle: {
          color: function(params) {
            const colors = ['#10b981', '#ef4444'];
            return colors[params.dataIndex];
          },
        },
      },
    ],
  };

  const getStatusIcon = (status) => {
    switch (status) {
      case 'active':
        return FiPlay;
      case 'paused':
        return FiPause;
      case 'completed':
        return FiCheck;
      case 'failed':
        return FiX;
      case 'in_progress':
        return FiActivity;
      default:
        return FiActivity;
    }
  };

  const getStatusColor = (status) => {
    switch (status) {
      case 'active':
        return 'text-green-600 bg-green-100';
      case 'paused':
        return 'text-yellow-600 bg-yellow-100';
      case 'completed':
        return 'text-green-600 bg-green-100';
      case 'failed':
        return 'text-red-600 bg-red-100';
      case 'in_progress':
        return 'text-blue-600 bg-blue-100';
      default:
        return 'text-gray-600 bg-gray-100';
    }
  };

  return (
    <div className="pt-20 pb-12">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        {/* Header */}
        <div className="mb-8">
          <h1 className="text-3xl font-bold text-gray-900 mb-2">Dashboard</h1>
          <p className="text-gray-600">Welcome back! Here's what's happening with your workflows.</p>
        </div>

        {/* Stats Grid */}
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-6 mb-8">
          {stats.map((stat, index) => (
            <motion.div
              key={stat.title}
              initial={{ opacity: 0, y: 20 }}
              animate={{ opacity: 1, y: 0 }}
              transition={{ duration: 0.6, delay: index * 0.1 }}
              className="bg-white rounded-xl border border-gray-200 p-6"
            >
              <div className="flex items-center justify-between">
                <div>
                  <p className="text-sm text-gray-600 mb-1">{stat.title}</p>
                  <p className="text-2xl font-bold text-gray-900">{stat.value}</p>
                  <p className={`text-sm ${stat.changeType === 'positive' ? 'text-green-600' : 'text-red-600'}`}>
                    {stat.change} from last week
                  </p>
                </div>
                <div className={`p-3 rounded-xl bg-gradient-to-r ${stat.color}`}>
                  <SafeIcon icon={stat.icon} className="h-6 w-6 text-white" />
                </div>
              </div>
            </motion.div>
          ))}
        </div>

        {/* Charts Row */}
        <div className="grid grid-cols-1 lg:grid-cols-2 gap-6 mb-8">
          {/* Workflow Activity Chart */}
          <div className="bg-white rounded-xl border border-gray-200 p-6">
            <h3 className="text-lg font-semibold text-gray-900 mb-4">Workflow Activity</h3>
            <ReactECharts option={workflowActivityChart} style={{ height: '300px' }} />
          </div>

          {/* Success Rate Chart */}
          <div className="bg-white rounded-xl border border-gray-200 p-6">
            <h3 className="text-lg font-semibold text-gray-900 mb-4">Success Rate</h3>
            <ReactECharts option={successRateChart} style={{ height: '300px' }} />
          </div>
        </div>

        {/* Recent Activity */}
        <div className="grid grid-cols-1 lg:grid-cols-2 gap-6">
          {/* Recent Workflows */}
          <div className="bg-white rounded-xl border border-gray-200 p-6">
            <h3 className="text-lg font-semibold text-gray-900 mb-4">Recent Workflows</h3>
            <div className="space-y-4">
              {recentWorkflows.map((workflow) => (
                <div key={workflow.id} className="flex items-center justify-between p-4 bg-gray-50 rounded-lg">
                  <div className="flex items-center gap-3">
                    <div className={`p-2 rounded-lg ${getStatusColor(workflow.status)}`}>
                      <SafeIcon icon={getStatusIcon(workflow.status)} className="h-4 w-4" />
                    </div>
                    <div>
                      <p className="font-medium text-gray-900">{workflow.name}</p>
                      <p className="text-sm text-gray-600">Last run: {workflow.lastRun}</p>
                    </div>
                  </div>
                  <div className="text-right">
                    <p className="text-sm font-medium text-gray-900">{workflow.success}% success</p>
                    <p className="text-sm text-gray-600">{workflow.tasks} tasks</p>
                  </div>
                </div>
              ))}
            </div>
          </div>

          {/* Recent Tasks */}
          <div className="bg-white rounded-xl border border-gray-200 p-6">
            <h3 className="text-lg font-semibold text-gray-900 mb-4">Recent Tasks</h3>
            <div className="space-y-4">
              {recentTasks.map((task) => (
                <div key={task.id} className="flex items-start gap-3 p-4 bg-gray-50 rounded-lg">
                  <div className={`p-2 rounded-lg ${getStatusColor(task.status)} mt-1`}>
                    <SafeIcon icon={getStatusIcon(task.status)} className="h-4 w-4" />
                  </div>
                  <div className="flex-1">
                    <p className="font-medium text-gray-900">{task.title}</p>
                    <p className="text-sm text-gray-600">{task.workflow}</p>
                    <p className="text-xs text-gray-500">{task.time}</p>
                  </div>
                </div>
              ))}
            </div>
          </div>
        </div>
      </div>
    </div>
  );
};

export default DashboardPage;