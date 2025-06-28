import React,{useState} from 'react';
import {Link,useLocation,useNavigate} from 'react-router-dom';
import {motion} from 'framer-motion';
import {useAuth} from '../contexts/AuthContext';
import SafeIcon from '../common/SafeIcon';
import * as FiIcons from 'react-icons/fi';

const {FiMenu,FiX,FiZap,FiLogOut,FiUser}=FiIcons;

const Header=()=> {
  const [isOpen,setIsOpen]=useState(false);
  const [showUserMenu,setShowUserMenu]=useState(false);
  const location=useLocation();
  const navigate=useNavigate();
  const {logout,user}=useAuth();

  const navigation=[
    {name: 'Home',href: '/'},
    {name: 'Workflows',href: '/workflows'},
    {name: 'Templates',href: '/templates'},
    {name: 'Dashboard',href: '/dashboard'},
    {name: 'CRM',href: '/crm'},
    {name: 'Analytics',href: '/analytics'},
    {name: 'Invoice Automation',href: '/invoice-automation'},
    {name: 'Pricing',href: '/pricing'},
  ];

  const isActive=(path)=> location.pathname===path;

  const handleLogout=()=> {
    logout();
    navigate('/login');
  };

  return (
    <header className="bg-white/80 backdrop-blur-md border-b border-gray-200 sticky top-0 z-50">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="flex justify-between items-center h-16">
          {/* Logo */}
          <Link to="/" className="flex items-center space-x-2">
            <div className="p-2 bg-gradient-to-r from-primary-500 to-blue-600 rounded-lg">
              <SafeIcon icon={FiZap} className="h-6 w-6 text-white" />
            </div>
            <span className="text-xl font-bold bg-gradient-to-r from-primary-600 to-blue-600 bg-clip-text text-transparent">
              AutoFlow AI
            </span>
          </Link>

          {/* Desktop Navigation */}
          <nav className="hidden md:flex space-x-8">
            {navigation.map((item)=> (
              <Link
                key={item.name}
                to={item.href}
                className={`px-3 py-2 rounded-md text-sm font-medium transition-colors ${
                  isActive(item.href)
                    ? 'text-primary-600 bg-primary-50'
                    : 'text-gray-600 hover:text-primary-600 hover:bg-gray-50'
                }`}
              >
                {item.name}
              </Link>
            ))}
          </nav>

          {/* User Menu */}
          <div className="hidden md:flex items-center space-x-4">
            <div className="relative">
              <button
                onClick={()=> setShowUserMenu(!showUserMenu)}
                className="flex items-center space-x-2 p-2 rounded-lg hover:bg-gray-100 transition-colors"
              >
                <div className="w-8 h-8 bg-gradient-to-r from-primary-500 to-blue-600 rounded-full flex items-center justify-center">
                  <SafeIcon icon={FiUser} className="h-4 w-4 text-white" />
                </div>
              </button>

              {showUserMenu && (
                <motion.div
                  initial={{opacity: 0,y: -10}}
                  animate={{opacity: 1,y: 0}}
                  exit={{opacity: 0,y: -10}}
                  className="absolute right-0 mt-2 w-48 bg-white rounded-lg shadow-lg border border-gray-200 py-2"
                >
                  <div className="px-4 py-2 border-b border-gray-100">
                    <p className="text-sm text-gray-500">Signed in as</p>
                    <p className="text-sm font-medium text-gray-900 truncate">{user?.userId}</p>
                  </div>
                  <button
                    onClick={handleLogout}
                    className="w-full text-left px-4 py-2 text-sm text-gray-700 hover:bg-gray-100 flex items-center space-x-2"
                  >
                    <SafeIcon icon={FiLogOut} className="h-4 w-4" />
                    <span>Sign out</span>
                  </button>
                </motion.div>
              )}
            </div>
          </div>

          {/* Mobile menu button */}
          <div className="md:hidden">
            <button
              onClick={()=> setIsOpen(!isOpen)}
              className="p-2 rounded-md text-gray-600 hover:text-gray-900 hover:bg-gray-100"
            >
              <SafeIcon icon={isOpen ? FiX : FiMenu} className="h-6 w-6" />
            </button>
          </div>
        </div>

        {/* Mobile Navigation */}
        {isOpen && (
          <motion.div
            initial={{opacity: 0,y: -10}}
            animate={{opacity: 1,y: 0}}
            exit={{opacity: 0,y: -10}}
            className="md:hidden py-4 border-t border-gray-200"
          >
            <div className="flex flex-col space-y-2">
              {navigation.map((item)=> (
                <Link
                  key={item.name}
                  to={item.href}
                  onClick={()=> setIsOpen(false)}
                  className={`px-3 py-2 rounded-md text-sm font-medium transition-colors ${
                    isActive(item.href)
                      ? 'text-primary-600 bg-primary-50'
                      : 'text-gray-600 hover:text-primary-600 hover:bg-gray-50'
                  }`}
                >
                  {item.name}
                </Link>
              ))}
              <button
                onClick={handleLogout}
                className="mt-4 text-left px-3 py-2 text-sm text-red-600 hover:bg-red-50 rounded-md flex items-center space-x-2"
              >
                <SafeIcon icon={FiLogOut} className="h-4 w-4" />
                <span>Sign out</span>
              </button>
            </div>
          </motion.div>
        )}
      </div>
    </header>
  );
};

export default Header;