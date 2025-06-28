import React from 'react';
import {HashRouter as Router,Routes,Route} from 'react-router-dom';
import {QuestProvider} from '@questlabs/react-sdk';
import '@questlabs/react-sdk/dist/style.css';
import {motion} from 'framer-motion';
import {AuthProvider} from './contexts/AuthContext';
import ProtectedRoute from './components/ProtectedRoute';
import Header from './components/Header';
import Footer from './components/Footer';
import AISalesAgent from './components/AISalesAgent';
import HomePage from './pages/HomePage';
import LoginPage from './pages/LoginPage';
import OnboardingPage from './pages/OnboardingPage';
import WorkflowsPage from './pages/WorkflowsPage';
import TemplatesPage from './pages/TemplatesPage';
import PricingPage from './pages/PricingPage';
import DashboardPage from './pages/DashboardPage';
import CRMPage from './pages/CRMPage';
import AnalyticsPage from './pages/AnalyticsPage';
import InvoiceAutomationPage from './pages/InvoiceAutomationPage';
import questConfig from './config/questConfig';
import './index.css';

function App() {
  return (
    <QuestProvider
      apiKey={questConfig.APIKEY}
      entityId={questConfig.ENTITYID}
      apiType="PRODUCTION"
    >
      <AuthProvider>
        <Router>
          <div className="min-h-screen bg-gradient-to-br from-slate-50 to-blue-50">
            <Routes>
              {/* Public Routes */}
              <Route path="/login" element={<LoginPage />} />
              <Route path="/invoice-automation" element={<InvoiceAutomationPage />} />
              
              <Route path="/onboarding" element={
                <ProtectedRoute>
                  <OnboardingPage />
                </ProtectedRoute>
              } />

              {/* Protected Routes with Header/Footer */}
              <Route path="/*" element={
                <ProtectedRoute>
                  <>
                    <Header />
                    <motion.main
                      initial={{opacity: 0}}
                      animate={{opacity: 1}}
                      transition={{duration: 0.5}}
                      className="min-h-screen"
                    >
                      <Routes>
                        <Route path="/" element={<HomePage />} />
                        <Route path="/workflows" element={<WorkflowsPage />} />
                        <Route path="/templates" element={<TemplatesPage />} />
                        <Route path="/pricing" element={<PricingPage />} />
                        <Route path="/dashboard" element={<DashboardPage />} />
                        <Route path="/crm" element={<CRMPage />} />
                        <Route path="/analytics" element={<AnalyticsPage />} />
                      </Routes>
                    </motion.main>
                    <Footer />
                    <AISalesAgent />
                  </>
                </ProtectedRoute>
              } />
            </Routes>
          </div>
        </Router>
      </AuthProvider>
    </QuestProvider>
  );
}

export default App;