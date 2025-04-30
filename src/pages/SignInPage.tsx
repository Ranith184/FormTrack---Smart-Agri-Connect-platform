import React, { useState, useEffect } from 'react';
import { useLocation, Link, useNavigate } from 'react-router-dom';
import { useTranslation } from 'react-i18next';
import Layout from '../components/layout/Layout';
import { User, Store, Eye, EyeOff } from 'lucide-react';

const SignInPage: React.FC = () => {
  const { t } = useTranslation();
  const location = useLocation();
  const navigate = useNavigate();
  const queryParams = new URLSearchParams(location.search);
  const [role, setRole] = useState<'farmer' | 'buyer'>(
    (queryParams.get('role') as 'farmer' | 'buyer') || 'farmer'
  );
  const [showPassword, setShowPassword] = useState(false);
  const [email, setEmail] = useState('');
  const [password, setPassword] = useState('');
  const [error, setError] = useState('');
  
  useEffect(() => {
    const roleParam = queryParams.get('role') as 'farmer' | 'buyer';
    if (roleParam && (roleParam === 'farmer' || roleParam === 'buyer')) {
      setRole(roleParam);
    }
  }, [location.search]);
  
  const togglePasswordVisibility = () => {
    setShowPassword(!showPassword);
  };

  const handleSubmit = (e: React.FormEvent) => {
    e.preventDefault();
    setError('');

    // Basic validation
    if (!email || !password) {
      setError('Please fill in all fields');
      return;
    }

    // For demo purposes, we'll use some test credentials
    const testCredentials = {
      farmer: { email: 'gmail@example.com', password: 'password' },
      buyer: { email: 'gmail@example.com', password: 'password' }
    };

    const credentials = role === 'farmer' ? testCredentials.farmer : testCredentials.buyer;

    if (email === credentials.email && password === credentials.password) {
      // Redirect to appropriate dashboard
      navigate(role === 'farmer' ? '/farmer-dashboard' : '/buyer-dashboard');
    } else {
      setError('Invalid credentials. For demo, use test@example.com / password');
    }
  };
  
  return (
    <Layout>
      <div className="bg-gray-50 py-16">
        <div className="container mx-auto px-4">
          <div className="max-w-md mx-auto bg-white rounded-lg shadow-md overflow-hidden">
            <div className="p-8">
              <div className="text-center mb-8">
                <h1 className="text-2xl font-bold text-gray-900">
                  {t('auth.signin')}
                </h1>
                <p className="text-gray-600 mt-2">
                  Sign in to access your {role === 'farmer' ? 'farmer' : 'buyer'} dashboard
                </p>
              </div>
              
              <div className="flex rounded-md bg-gray-100 p-1 mb-8">
                <button 
                  className={`flex-1 py-2 rounded-md text-center text-sm font-medium transition-colors ${
                    role === 'farmer' 
                      ? 'bg-primary-600 text-white' 
                      : 'text-gray-700 hover:text-primary-600'
                  }`}
                  onClick={() => setRole('farmer')}
                >
                  <User className="inline-block h-4 w-4 mr-1" />
                  {t('auth.farmer')}
                </button>
                
                <button 
                  className={`flex-1 py-2 rounded-md text-center text-sm font-medium transition-colors ${
                    role === 'buyer' 
                      ? 'bg-secondary-600 text-white' 
                      : 'text-gray-700 hover:text-secondary-600'
                  }`}
                  onClick={() => setRole('buyer')}
                >
                  <Store className="inline-block h-4 w-4 mr-1" />
                  {t('auth.buyer')}
                </button>
              </div>
              
              {error && (
                <div className="mb-4 p-3 bg-error-50 border border-error-200 text-error-700 rounded-md text-sm">
                  {error}
                </div>
              )}
              
              <form onSubmit={handleSubmit} className="space-y-6">
                <div>
                  <label htmlFor="email" className="block text-sm font-medium text-gray-700 mb-1">
                    {t('auth.email')}
                  </label>
                  <input 
                    type="email" 
                    id="email" 
                    value={email}
                    onChange={(e) => setEmail(e.target.value)}
                    className="input" 
                    placeholder="gmail@example.com"
                  />
                </div>
                
                <div>
                  <label htmlFor="password" className="block text-sm font-medium text-gray-700 mb-1">
                    {t('auth.password')}
                  </label>
                  <div className="relative">
                    <input 
                      type={showPassword ? "text" : "password"} 
                      id="password" 
                      value={password}
                      onChange={(e) => setPassword(e.target.value)}
                      className="input pr-10" 
                      placeholder="password"
                    />
                    <button 
                      type="button"
                      className="absolute right-3 top-2.5 text-gray-400 hover:text-gray-600"
                      onClick={togglePasswordVisibility}
                    >
                      {showPassword ? (
                        <EyeOff className="h-5 w-5" />
                      ) : (
                        <Eye className="h-5 w-5" />
                      )}
                    </button>
                  </div>
                  <div className="mt-1 text-right">
                    <a href="#" className="text-sm text-primary-600 hover:text-primary-700">
                      {t('auth.forgot')}
                    </a>
                  </div>
                </div>
                
                <button 
                  type="submit" 
                  className={`w-full py-2.5 rounded-md text-white font-medium transition-colors ${
                    role === 'farmer' 
                      ? 'bg-primary-600 hover:bg-primary-700' 
                      : 'bg-secondary-600 hover:bg-secondary-700'
                  }`}
                >
                  {t('auth.submit')}
                </button>
              </form>
              
              <div className="mt-6 text-center">
                <p className="text-sm text-gray-600">
                  Don't have an account?{' '}
                  <Link to="/register" className="text-primary-600 hover:text-primary-700 font-medium">
                    {t('auth.register')}
                  </Link>
                </p>
              </div>
            </div>
          </div>
        </div>
      </div>
    </Layout>
  );
};

export default SignInPage;