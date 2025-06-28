import React from 'react';
import SafeIcon from '../common/SafeIcon';
import * as FiIcons from 'react-icons/fi';

const { FiFileText, FiDollarSign, FiCalendar, FiMail, FiPhone, FiMapPin } = FiIcons;

const InvoiceTemplate = ({ invoiceData = {} }) => {
  const defaultData = {
    invoiceNumber: 'INV-2024-001',
    date: new Date().toLocaleDateString(),
    dueDate: new Date(Date.now() + 30 * 24 * 60 * 60 * 1000).toLocaleDateString(),
    businessName: 'Your Business Name',
    businessAddress: '123 Business St, City, State 12345',
    businessEmail: 'billing@yourbusiness.com',
    businessPhone: '+1 (555) 123-4567',
    clientName: 'Client Name',
    clientAddress: '456 Client Ave, City, State 67890',
    clientEmail: 'client@email.com',
    items: [
      {
        description: 'Invoice Automation Workflow Subscription',
        quantity: 1,
        rate: 15.00,
        amount: 15.00
      }
    ],
    subtotal: 15.00,
    tax: 0.00,
    total: 15.00,
    notes: 'Thank you for your business! Payment is due within 30 days.',
    paymentTerms: 'Net 30'
  };

  const data = { ...defaultData, ...invoiceData };

  return (
    <div className="max-w-4xl mx-auto bg-white shadow-lg">
      {/* Header */}
      <div className="bg-gradient-to-r from-primary-600 to-blue-600 text-white p-8">
        <div className="flex justify-between items-start">
          <div>
            <div className="flex items-center gap-3 mb-4">
              <div className="p-2 bg-white/20 rounded-lg">
                <SafeIcon icon={FiFileText} className="h-6 w-6" />
              </div>
              <h1 className="text-3xl font-bold">INVOICE</h1>
            </div>
            <div className="text-primary-100">
              <p className="text-sm">Invoice #: {data.invoiceNumber}</p>
              <p className="text-sm">Date: {data.date}</p>
              <p className="text-sm">Due Date: {data.dueDate}</p>
            </div>
          </div>
          <div className="text-right">
            <h2 className="text-2xl font-bold mb-2">{data.businessName}</h2>
            <div className="text-primary-100 text-sm space-y-1">
              <p>{data.businessAddress}</p>
              <p className="flex items-center gap-2 justify-end">
                <SafeIcon icon={FiMail} className="h-4 w-4" />
                {data.businessEmail}
              </p>
              <p className="flex items-center gap-2 justify-end">
                <SafeIcon icon={FiPhone} className="h-4 w-4" />
                {data.businessPhone}
              </p>
            </div>
          </div>
        </div>
      </div>

      {/* Bill To Section */}
      <div className="p-8 border-b border-gray-200">
        <div className="grid grid-cols-1 md:grid-cols-2 gap-8">
          <div>
            <h3 className="text-lg font-semibold text-gray-900 mb-3">Bill To:</h3>
            <div className="text-gray-700">
              <p className="font-medium text-lg">{data.clientName}</p>
              <p className="mt-2">{data.clientAddress}</p>
              <p className="flex items-center gap-2 mt-1">
                <SafeIcon icon={FiMail} className="h-4 w-4 text-gray-400" />
                {data.clientEmail}
              </p>
            </div>
          </div>
          <div>
            <h3 className="text-lg font-semibold text-gray-900 mb-3">Payment Terms:</h3>
            <div className="bg-gray-50 p-4 rounded-lg">
              <p className="text-gray-700">
                <span className="font-medium">Terms:</span> {data.paymentTerms}
              </p>
              <p className="text-gray-700 mt-1">
                <span className="font-medium">Due Date:</span> {data.dueDate}
              </p>
            </div>
          </div>
        </div>
      </div>

      {/* Items Table */}
      <div className="p-8">
        <table className="w-full">
          <thead>
            <tr className="border-b-2 border-gray-200">
              <th className="text-left py-3 text-gray-900 font-semibold">Description</th>
              <th className="text-center py-3 text-gray-900 font-semibold w-20">Qty</th>
              <th className="text-right py-3 text-gray-900 font-semibold w-24">Rate</th>
              <th className="text-right py-3 text-gray-900 font-semibold w-24">Amount</th>
            </tr>
          </thead>
          <tbody>
            {data.items.map((item, index) => (
              <tr key={index} className="border-b border-gray-100">
                <td className="py-4 text-gray-700">{item.description}</td>
                <td className="py-4 text-center text-gray-700">{item.quantity}</td>
                <td className="py-4 text-right text-gray-700">${item.rate.toFixed(2)}</td>
                <td className="py-4 text-right text-gray-700 font-medium">${item.amount.toFixed(2)}</td>
              </tr>
            ))}
          </tbody>
        </table>

        {/* Totals */}
        <div className="mt-8 flex justify-end">
          <div className="w-80">
            <div className="space-y-2">
              <div className="flex justify-between py-2">
                <span className="text-gray-600">Subtotal:</span>
                <span className="text-gray-900">${data.subtotal.toFixed(2)}</span>
              </div>
              {data.tax > 0 && (
                <div className="flex justify-between py-2">
                  <span className="text-gray-600">Tax:</span>
                  <span className="text-gray-900">${data.tax.toFixed(2)}</span>
                </div>
              )}
              <div className="border-t border-gray-200 pt-2">
                <div className="flex justify-between py-2">
                  <span className="text-lg font-semibold text-gray-900">Total:</span>
                  <span className="text-lg font-bold text-primary-600">${data.total.toFixed(2)}</span>
                </div>
              </div>
            </div>
          </div>
        </div>

        {/* Notes */}
        {data.notes && (
          <div className="mt-8 pt-8 border-t border-gray-200">
            <h4 className="text-lg font-semibold text-gray-900 mb-3">Notes:</h4>
            <p className="text-gray-700">{data.notes}</p>
          </div>
        )}

        {/* Footer */}
        <div className="mt-8 pt-8 border-t border-gray-200 text-center">
          <p className="text-gray-600 text-sm">
            This invoice was generated automatically by AutoFlow AI Invoice Automation Workflow
          </p>
          <div className="flex items-center justify-center gap-2 mt-2 text-primary-600">
            <SafeIcon icon={FiDollarSign} className="h-4 w-4" />
            <span className="text-sm font-medium">Powered by AutoFlow AI</span>
          </div>
        </div>
      </div>
    </div>
  );
};

export default InvoiceTemplate;