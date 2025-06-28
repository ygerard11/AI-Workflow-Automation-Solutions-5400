import React, { useState } from 'react';
import { motion } from 'framer-motion';
import SafeIcon from '../common/SafeIcon';
import * as FiIcons from 'react-icons/fi';
import ReactECharts from 'echarts-for-react';

const { FiTrendingUp, FiActivity, FiClock, FiZap, FiCalendar, FiDownload, FiFilter } = FiIcons;

const AnalyticsPage = () => {
  const [dateRange, setDateRange] = useState('7d');
  const [selectedMetric, setSelectedMetric] = useState('workflows');

  const metrics = [
    {
      title: 'Workflow Executions',
      value: '1,247',
      change: '+12.5%',
      changeType: 'positive',
      icon: FiZap,
      color: 'from-primary-500 to-blue-600',
    },
    {
      title: 'Success Rate',
      value: '97.5%',
      change: '+2.1%',
      changeType: 'positive',
      icon: FiTrendingUp,
      color: 'from-green-500 to-emerald-600',
    },
    {
      title: 'Time Saved',
      value: '156 hours',
      change: '+18.7%',
      changeType: 'positive',
      icon: FiClock,
      color: 'from-blue-500 to-cyan-600',
    },
    {
      title: 'Active Workflows',
      value: '12',
      change: '+2',
      changeType: 'positive',
      icon: FiActivity,
      color: 'from-purple-500 to-indigo-600',
    },
  ];

  // Workflow Performance Chart
  const workflowPerformanceChart = {
    title: {
      text: 'Workflow Performance Over Time',
      left: 'center',
    },
    tooltip: {
      trigger: 'axis',
      axisPointer: {
        type: 'cross',
      },
    },
    legend: {
      data: ['Executions', 'Success Rate'],
      top: 30,
    },
    xAxis: {
      type: 'category',
      data: ['Mon', 'Tue', 'Wed', 'Thu', 'Fri', 'Sat', 'Sun'],
    },
    yAxis: [
      {
        type: 'value',
        name: 'Executions',
        position: 'left',
      },
      {
        type: 'value',
        name: 'Success Rate (%)',
        position: 'right',
        min: 90,
        max: 100,
      },
    ],
    series: [
      {
        name: 'Executions',
        type: 'bar',
        data: [120, 132, 101, 134, 90, 230, 210],
        itemStyle: {
          color: '#0ea5e9',
        },
      },
      {
        name: 'Success Rate',
        type: 'line',
        yAxisIndex: 1,
        data: [95, 97, 98, 96, 99, 97, 98],
        itemStyle: {
          color: '#10b981',
        },
        smooth: true,
      },
    ],
  };

  // Top Workflows Chart
  const topWorkflowsChart = {
    title: {
      text: 'Top Performing Workflows',
      left: 'center',
    },
    tooltip: {
      trigger: 'item',
      formatter: '{a} <br/>{b}: {c} ({d}%)',
    },
    series: [
      {
        name: 'Executions',
        type: 'pie',
        radius: '50%',
        data: [
          { value: 450, name: 'Contract to Onboarding' },
          { value: 320, name: 'Invoice Generation' },
          { value: 280, name: 'Follow-up Emails' },
          { value: 197, name: 'Lead Qualification' },
        ],
        emphasis: {
          itemStyle: {
            shadowBlur: 10,
            shadowOffsetX: 0,
            shadowColor: 'rgba(0, 0, 0, 0.5)',
          },
        },
      },
    ],
  };

  // Time Saved Chart
  const timeSavedChart = {
    title: {
      text: 'Time Saved by Category',
      left: 'center',
    },
    tooltip: {
      trigger: 'axis',
      axisPointer: {
        type: 'shadow',
      },
    },
    xAxis: {
      type: 'category',
      data: ['Email Automation', 'CRM Updates', 'Invoice Generation', 'Task Creation', 'Follow-ups'],
    },
    yAxis: {
      type: 'value',
      name: 'Hours Saved',
    },
    series: [
      {
        type: 'bar',
        data: [45, 38, 32, 28, 13],
        itemStyle: {
          color: function(params) {
            const colors = ['#0ea5e9', '#10b981', '#f59e0b', '#8b5cf6', '#ef4444'];
            return colors[params.dataIndex];
          },
        },
      },
    ],
  };

  // Error Rate Trend Chart
  const errorRateChart = {
    title: {
      text: 'Error Rate Trend',
      left: 'center',
    },
    tooltip: {
      trigger: 'axis',
    },
    xAxis: {
      type: 'category',
      data: ['Week 1', 'Week 2', 'Week 3', 'Week 4', 'Week 5', 'Week 6'],
    },
    yAxis: {
      type: 'value',
      name: 'Error Rate (%)',
      max: 10,
    },
    series: [
      {
        type: 'line',
        data: [5.2, 4.8, 3.9, 3.2, 2.8, 2.5],
        itemStyle: {
          color: '#ef4444',
        },
        areaStyle: {
          color: {
            type: 'linear',
            x: 0,
            y: 0,
            x2: 0,
            y2: 1,
            colorStops: [
              { offset: 0, color: 'rgba(239, 68, 68, 0.3)' },
              { offset: 1, color: 'rgba(239, 68, 68, 0.05)' },
            ],
          },
        },
        smooth: true,
      },
    ],
  };

  const workflowDetails = [
    {
      name: 'Contract to Onboarding',
      executions: 450,
      successRate: 98.2,
      avgTime: '12 min',
      timeSaved: '45 hours',
      status: 'healthy',
    },
    {
      name: 'Invoice Generation',
      executions: 320,
      successRate: 99.1,
      avgTime: '8 min',
      timeSaved: '32 hours',
      status: 'healthy',
    },
    {
      name: 'Follow-up Emails',
      executions: 280,
      successRate: 96.4,
      avgTime: '5 min',
      timeSaved: '38 hours',
      status: 'warning',
    },
    {
      name: 'Lead Qualification',
      executions: 197,
      successRate: 94.8,
      avgTime: '15 min',
      timeSaved: '28 hours',
      status: 'healthy',
    },
  ];

  const getStatusColor = (status) => {
    switch (status) {
      case 'healthy':
        return 'text-green-600 bg-green-100';
      case 'warning':
        return 'text-yellow-600 bg-yellow-100';
      case 'error':
        return 'text-red-600 bg-red-100';
      default:
        return 'text-gray-600 bg-gray-100';
    }
  };

  return (
    <div className="pt-20 pb-12">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        {/* Header */}
        <div className="flex items-center justify-between mb-8">
          <div>
            <h1 className="text-3xl font-bold text-gray-900 mb-2">Analytics</h1>
            <p className="text-gray-600">Track performance and optimize your automation workflows</p>
          </div>
          <div className="flex items-center gap-4">
            <select
              value={dateRange}
              onChange={(e) => setDateRange(e.target.value)}
              className="px-4 py-2 border border-gray-300 rounded-lg focus:ring-2 focus:ring-primary-500 focus:border-transparent"
            >
              <option value="7d">Last 7 days</option>
              <option value="30d">Last 30 days</option>
              <option value="90d">Last 90 days</option>
              <option value="1y">Last year</option>
            </select>
            <button className="bg-gradient-to-r from-primary-500 to-blue-600 text-white px-6 py-3 rounded-xl font-medium hover:from-primary-600 hover:to-blue-700 transition-all flex items-center gap-2">
              <SafeIcon icon={FiDownload} className="h-5 w-5" />
              Export
            </button>
          </div>
        </div>

        {/* Metrics Grid */}
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-6 mb-8">
          {metrics.map((metric, index) => (
            <motion.div
              key={metric.title}
              initial={{ opacity: 0, y: 20 }}
              animate={{ opacity: 1, y: 0 }}
              transition={{ duration: 0.6, delay: index * 0.1 }}
              className="bg-white rounded-xl border border-gray-200 p-6"
            >
              <div className="flex items-center justify-between">
                <div>
                  <p className="text-sm text-gray-600 mb-1">{metric.title}</p>
                  <p className="text-2xl font-bold text-gray-900">{metric.value}</p>
                  <p className={`text-sm ${metric.changeType === 'positive' ? 'text-green-600' : 'text-red-600'}`}>
                    {metric.change} from last period
                  </p>
                </div>
                <div className={`p-3 rounded-xl bg-gradient-to-r ${metric.color}`}>
                  <SafeIcon icon={metric.icon} className="h-6 w-6 text-white" />
                </div>
              </div>
            </motion.div>
          ))}
        </div>

        {/* Charts Grid */}
        <div className="grid grid-cols-1 lg:grid-cols-2 gap-6 mb-8">
          {/* Workflow Performance */}
          <div className="bg-white rounded-xl border border-gray-200 p-6">
            <ReactECharts option={workflowPerformanceChart} style={{ height: '400px' }} />
          </div>

          {/* Top Workflows */}
          <div className="bg-white rounded-xl border border-gray-200 p-6">
            <ReactECharts option={topWorkflowsChart} style={{ height: '400px' }} />
          </div>

          {/* Time Saved */}
          <div className="bg-white rounded-xl border border-gray-200 p-6">
            <ReactECharts option={timeSavedChart} style={{ height: '400px' }} />
          </div>

          {/* Error Rate */}
          <div className="bg-white rounded-xl border border-gray-200 p-6">
            <ReactECharts option={errorRateChart} style={{ height: '400px' }} />
          </div>
        </div>

        {/* Workflow Details Table */}
        <div className="bg-white rounded-xl border border-gray-200 overflow-hidden">
          <div className="p-6 border-b border-gray-200">
            <h3 className="text-lg font-semibold text-gray-900">Workflow Performance Details</h3>
          </div>
          <div className="overflow-x-auto">
            <table className="w-full">
              <thead className="bg-gray-50">
                <tr>
                  <th className="px-6 py-3 text-left text-xs font-medium text-gray-500 uppercase tracking-wider">
                    Workflow
                  </th>
                  <th className="px-6 py-3 text-left text-xs font-medium text-gray-500 uppercase tracking-wider">
                    Executions
                  </th>
                  <th className="px-6 py-3 text-left text-xs font-medium text-gray-500 uppercase tracking-wider">
                    Success Rate
                  </th>
                  <th className="px-6 py-3 text-left text-xs font-medium text-gray-500 uppercase tracking-wider">
                    Avg Time
                  </th>
                  <th className="px-6 py-3 text-left text-xs font-medium text-gray-500 uppercase tracking-wider">
                    Time Saved
                  </th>
                  <th className="px-6 py-3 text-left text-xs font-medium text-gray-500 uppercase tracking-wider">
                    Status
                  </th>
                </tr>
              </thead>
              <tbody className="bg-white divide-y divide-gray-200">
                {workflowDetails.map((workflow, index) => (
                  <motion.tr
                    key={workflow.name}
                    initial={{ opacity: 0, y: 20 }}
                    animate={{ opacity: 1, y: 0 }}
                    transition={{ duration: 0.6, delay: index * 0.1 }}
                    className="hover:bg-gray-50"
                  >
                    <td className="px-6 py-4 whitespace-nowrap">
                      <div className="text-sm font-medium text-gray-900">{workflow.name}</div>
                    </td>
                    <td className="px-6 py-4 whitespace-nowrap">
                      <div className="text-sm text-gray-900">{workflow.executions}</div>
                    </td>
                    <td className="px-6 py-4 whitespace-nowrap">
                      <div className="text-sm text-gray-900">{workflow.successRate}%</div>
                    </td>
                    <td className="px-6 py-4 whitespace-nowrap">
                      <div className="text-sm text-gray-900">{workflow.avgTime}</div>
                    </td>
                    <td className="px-6 py-4 whitespace-nowrap">
                      <div className="text-sm text-gray-900">{workflow.timeSaved}</div>
                    </td>
                    <td className="px-6 py-4 whitespace-nowrap">
                      <span className={`px-2 py-1 rounded-full text-xs font-medium ${getStatusColor(workflow.status)}`}>
                        {workflow.status}
                      </span>
                    </td>
                  </motion.tr>
                ))}
              </tbody>
            </table>
          </div>
        </div>
      </div>
    </div>
  );
};

export default AnalyticsPage;