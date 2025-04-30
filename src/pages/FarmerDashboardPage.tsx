import React from 'react';
import { useTranslation } from 'react-i18next';
import Layout from '../components/layout/Layout';
import { LineChart, Line, XAxis, YAxis, CartesianGrid, Tooltip, ResponsiveContainer } from 'recharts';
import { BarChart2, CloudSun, Users, Sprout, AlertCircle, ShoppingCart } from 'lucide-react';

const FarmerDashboardPage: React.FC = () => {
  const { t } = useTranslation();
  
  // Mock data for charts
  const marketTrendData = [
    { name: 'Jan', price: 4000 },
    { name: 'Feb', price: 3000 },
    { name: 'Mar', price: 2000 },
    { name: 'Apr', price: 2780 },
    { name: 'May', price: 1890 },
    { name: 'Jun', price: 2390 },
  ];

  // Mock crop data
  const crops = [
    { id: 1, name: 'Wheat', status: 'Growing', harvestDate: '2023-08-15', health: 'Good', preBooked: '70%' },
    { id: 2, name: 'Rice', status: 'Ready to Harvest', harvestDate: '2023-07-01', health: 'Excellent', preBooked: '50%' },
    { id: 3, name: 'Corn', status: 'Growing', harvestDate: '2023-09-20', health: 'Fair', preBooked: '30%' },
  ];

  // Mock weather data
  const weatherForecast = [
    { day: 'Today', temp: '32°C', condition: 'Sunny' },
    { day: 'Tomorrow', temp: '30°C', condition: 'Partly Cloudy' },
    { day: 'Wednesday', temp: '28°C', condition: 'Rain' },
  ];

  return (
    <Layout>
      <div className="bg-gray-50 py-8">
        <div className="container mx-auto px-4">
          <div className="grid grid-cols-1 lg:grid-cols-4 gap-8">
            {/* Sidebar */}
            <div className="lg:col-span-1">
              <div className="bg-white rounded-lg shadow-md p-6">
                <div className="flex items-center space-x-4 mb-6">
                  <div className="h-12 w-12 rounded-full bg-primary-100 flex items-center justify-center">
                    <User className="h-6 w-6 text-primary-600" />
                  </div>
                  <div>
                    <h2 className="text-lg font-semibold">Rajesh Kumar</h2>
                    <p className="text-gray-600 text-sm">Wheat Farmer, Punjab</p>
                  </div>
                </div>
                
                <div className="space-y-1 mb-6">
                  <button className="w-full flex items-center space-x-3 px-4 py-2.5 rounded-md bg-primary-50 text-primary-700">
                    <BarChart2 className="h-5 w-5" />
                    <span>Dashboard</span>
                  </button>
                  <button className="w-full flex items-center space-x-3 px-4 py-2.5 rounded-md text-gray-700 hover:bg-gray-50">
                    <Sprout className="h-5 w-5" />
                    <span>My Crops</span>
                  </button>
                  <button className="w-full flex items-center space-x-3 px-4 py-2.5 rounded-md text-gray-700 hover:bg-gray-50">
                    <CloudSun className="h-5 w-5" />
                    <span>Weather</span>
                  </button>
                  <button className="w-full flex items-center space-x-3 px-4 py-2.5 rounded-md text-gray-700 hover:bg-gray-50">
                    <ShoppingCart className="h-5 w-5" />
                    <span>Market Prices</span>
                  </button>
                  <button className="w-full flex items-center space-x-3 px-4 py-2.5 rounded-md text-gray-700 hover:bg-gray-50">
                    <Users className="h-5 w-5" />
                    <span>Community</span>
                  </button>
                </div>
                
                <div className="bg-yellow-50 border border-yellow-100 rounded-md p-4">
                  <div className="flex items-start">
                    <AlertCircle className="h-5 w-5 text-yellow-500 mt-0.5 mr-3 flex-shrink-0" />
                    <div>
                      <h4 className="font-medium text-yellow-800 text-sm">Weather Alert</h4>
                      <p className="text-yellow-700 text-xs mt-1">Heavy rainfall expected in your region in the next 48 hours. Plan your harvesting accordingly.</p>
                    </div>
                  </div>
                </div>
              </div>
            </div>
            
            {/* Main Content */}
            <div className="lg:col-span-3 space-y-8">
              {/* Welcome Message */}
              <div className="bg-white rounded-lg shadow-md p-6">
                <h1 className="text-2xl font-bold mb-2">
                  {t('dashboard.welcome')}, Rajesh
                </h1>
                <p className="text-gray-600">
                  Here's what's happening with your crops and local market today.
                </p>
              </div>
              
              {/* Stats Overview */}
              <div className="grid grid-cols-1 md:grid-cols-3 gap-4">
                <div className="bg-white rounded-lg shadow-md p-6">
                  <h3 className="text-gray-500 text-sm font-medium mb-1">ACTIVE CROPS</h3>
                  <p className="text-2xl font-bold">3</p>
                  <div className="flex items-center mt-2 text-success-600 text-sm">
                    <span className="flex items-center">
                      <svg xmlns="http://www.w3.org/2000/svg" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round" className="h-4 w-4 mr-1">
                        <path d="m18 15-6-6-6 6"></path>
                      </svg>
                      Healthy
                    </span>
                  </div>
                </div>
                
                <div className="bg-white rounded-lg shadow-md p-6">
                  <h3 className="text-gray-500 text-sm font-medium mb-1">PRE-BOOKINGS</h3>
                  <p className="text-2xl font-bold">12</p>
                  <div className="flex items-center mt-2 text-primary-600 text-sm">
                    <span className="flex items-center">
                      <svg xmlns="http://www.w3.org/2000/svg" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round" className="h-4 w-4 mr-1">
                        <path d="m18 15-6-6-6 6"></path>
                      </svg>
                      5 new this week
                    </span>
                  </div>
                </div>
                
                <div className="bg-white rounded-lg shadow-md p-6">
                  <h3 className="text-gray-500 text-sm font-medium mb-1">MARKET PRICE (WHEAT)</h3>
                  <p className="text-2xl font-bold">₹2,450/q</p>
                  <div className="flex items-center mt-2 text-success-600 text-sm">
                    <span className="flex items-center">
                      <svg xmlns="http://www.w3.org/2000/svg" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round" className="h-4 w-4 mr-1">
                        <path d="m18 15-6-6-6 6"></path>
                      </svg>
                      ₹120 from last week
                    </span>
                  </div>
                </div>
              </div>
              
              {/* My Crops */}
              <div className="bg-white rounded-lg shadow-md overflow-hidden">
                <div className="px-6 py-4 border-b border-gray-200 flex justify-between items-center">
                  <h2 className="text-lg font-semibold">My Crops</h2>
                  <button className="btn btn-primary py-1.5 px-3 text-sm">
                    + Add Crop
                  </button>
                </div>
                <div className="overflow-x-auto">
                  <table className="min-w-full divide-y divide-gray-200">
                    <thead className="bg-gray-50">
                      <tr>
                        <th scope="col" className="px-6 py-3 text-left text-xs font-medium text-gray-500 uppercase tracking-wider">
                          Crop
                        </th>
                        <th scope="col" className="px-6 py-3 text-left text-xs font-medium text-gray-500 uppercase tracking-wider">
                          Status
                        </th>
                        <th scope="col" className="px-6 py-3 text-left text-xs font-medium text-gray-500 uppercase tracking-wider">
                          Harvest Date
                        </th>
                        <th scope="col" className="px-6 py-3 text-left text-xs font-medium text-gray-500 uppercase tracking-wider">
                          Health
                        </th>
                        <th scope="col" className="px-6 py-3 text-left text-xs font-medium text-gray-500 uppercase tracking-wider">
                          Pre-Booked
                        </th>
                      </tr>
                    </thead>
                    <tbody className="bg-white divide-y divide-gray-200">
                      {crops.map((crop) => (
                        <tr key={crop.id}>
                          <td className="px-6 py-4 whitespace-nowrap">
                            <div className="font-medium text-gray-900">{crop.name}</div>
                          </td>
                          <td className="px-6 py-4 whitespace-nowrap">
                            <span className={`px-2 py-1 text-xs rounded-full ${
                              crop.status === 'Ready to Harvest' 
                                ? 'bg-success-100 text-success-800' 
                                : 'bg-primary-100 text-primary-800'
                            }`}>
                              {crop.status}
                            </span>
                          </td>
                          <td className="px-6 py-4 whitespace-nowrap text-gray-700">
                            {crop.harvestDate}
                          </td>
                          <td className="px-6 py-4 whitespace-nowrap text-gray-700">
                            {crop.health}
                          </td>
                          <td className="px-6 py-4 whitespace-nowrap text-gray-700">
                            <div className="w-full bg-gray-200 rounded-full h-2">
                              <div 
                                className="bg-primary-600 h-2 rounded-full" 
                                style={{ width: crop.preBooked }}
                              ></div>
                            </div>
                            <span className="text-xs text-gray-500 mt-1">{crop.preBooked}</span>
                          </td>
                        </tr>
                      ))}
                    </tbody>
                  </table>
                </div>
              </div>
              
              {/* Market Trends & Weather */}
              <div className="grid grid-cols-1 md:grid-cols-2 gap-6">
                <div className="bg-white rounded-lg shadow-md p-6">
                  <h3 className="text-lg font-semibold mb-4">Market Trends</h3>
                  <div className="h-64">
                    <ResponsiveContainer width="100%" height="100%">
                      <LineChart data={marketTrendData}>
                        <CartesianGrid strokeDasharray="3 3" />
                        <XAxis dataKey="name" />
                        <YAxis />
                        <Tooltip />
                        <Line type="monotone" dataKey="price" stroke="#4a9d45" strokeWidth={2} />
                      </LineChart>
                    </ResponsiveContainer>
                  </div>
                </div>
                
                <div className="bg-white rounded-lg shadow-md p-6">
                  <h3 className="text-lg font-semibold mb-4">Weather Forecast</h3>
                  <div className="space-y-4">
                    {weatherForecast.map((day, index) => (
                      <div key={index} className="flex items-center justify-between p-3 border border-gray-100 rounded-lg">
                        <div>
                          <h4 className="font-medium">{day.day}</h4>
                          <p className="text-gray-600 text-sm">{day.condition}</p>
                        </div>
                        <div className="text-xl font-semibold">{day.temp}</div>
                      </div>
                    ))}
                  </div>
                  <button className="text-primary-600 text-sm mt-4 hover:underline">
                    View Detailed Forecast →
                  </button>
                </div>
              </div>
            </div>
          </div>
        </div>
      </div>
    </Layout>
  );
};

// Helper component for user icon
const User = (props: React.SVGProps<SVGSVGElement>) => {
  return (
    <svg
      xmlns="http://www.w3.org/2000/svg"
      viewBox="0 0 24 24"
      fill="none"
      stroke="currentColor"
      strokeWidth="2"
      strokeLinecap="round"
      strokeLinejoin="round"
      {...props}
    >
      <path d="M19 21v-2a4 4 0 0 0-4-4H9a4 4 0 0 0-4 4v2"></path>
      <circle cx="12" cy="7" r="4"></circle>
    </svg>
  );
};

export default FarmerDashboardPage;