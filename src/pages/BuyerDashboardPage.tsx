import React from 'react';
import { useTranslation } from 'react-i18next';
import Layout from '../components/layout/Layout';
import { BarChart, Bar, XAxis, YAxis, CartesianGrid, Tooltip, ResponsiveContainer } from 'recharts';
import { BarChart2, Users, Store, Bell, BookOpen, Heart } from 'lucide-react';

const BuyerDashboardPage: React.FC = () => {
  const { t } = useTranslation();
  
  // Mock data for chart
  const cropAvailabilityData = [
    { name: 'Wheat', available: 4000 },
    { name: 'Rice', available: 3000 },
    { name: 'Corn', available: 2000 },
    { name: 'Soybean', available: 2780 },
    { name: 'Potato', available: 1890 },
    { name: 'Tomato', available: 2390 },
  ];

  // Mock farmers data
  const nearbyFarmers = [
    { 
      id: 1, 
      name: 'Rajesh Kumar', 
      location: 'Punjab', 
      distance: '15 km',
      crop: 'Wheat',
      harvestDate: '2023-08-15',
      quantity: '5 tons',
      image: 'https://images.pexels.com/photos/220453/pexels-photo-220453.jpeg?auto=compress&cs=tinysrgb&w=1260&h=750&dpr=2',
      rating: 4.8
    },
    { 
      id: 2, 
      name: 'Priya Sharma', 
      location: 'Tamil Nadu', 
      distance: '22 km',
      crop: 'Rice',
      harvestDate: '2023-07-01',
      quantity: '3 tons',
      image: 'https://images.pexels.com/photos/774909/pexels-photo-774909.jpeg?auto=compress&cs=tinysrgb&w=1260&h=750&dpr=2',
      rating: 4.5
    },
    { 
      id: 3, 
      name: 'Vijay Patel', 
      location: 'Gujarat', 
      distance: '30 km',
      crop: 'Cotton',
      harvestDate: '2023-09-10',
      quantity: '2 tons',
      image: 'https://images.pexels.com/photos/2379004/pexels-photo-2379004.jpeg?auto=compress&cs=tinysrgb&w=1260&h=750&dpr=2',
      rating: 4.2
    },
  ];

  // Mock notifications
  const notifications = [
    { id: 1, message: 'Rajesh Kumar will harvest wheat in 3 days', time: '2 hours ago', isNew: true },
    { id: 2, message: 'New rice farmers available in your area', time: '1 day ago', isNew: false },
    { id: 3, message: 'Price alert: Wheat prices dropped by 5%', time: '2 days ago', isNew: false },
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
                  <div className="h-12 w-12 rounded-full bg-secondary-100 flex items-center justify-center">
                    <User className="h-6 w-6 text-secondary-600" />
                  </div>
                  <div>
                    <h2 className="text-lg font-semibold">Amit Patel</h2>
                    <p className="text-gray-600 text-sm">Food Processor, Gujarat</p>
                  </div>
                </div>
                
                <div className="space-y-1 mb-6">
                  <button className="w-full flex items-center space-x-3 px-4 py-2.5 rounded-md bg-secondary-50 text-secondary-700">
                    <BarChart2 className="h-5 w-5" />
                    <span>Dashboard</span>
                  </button>
                  <button className="w-full flex items-center space-x-3 px-4 py-2.5 rounded-md text-gray-700 hover:bg-gray-50">
                    <Store className="h-5 w-5" />
                    <span>Find Farmers</span>
                  </button>
                  <button className="w-full flex items-center space-x-3 px-4 py-2.5 rounded-md text-gray-700 hover:bg-gray-50">
                    <BookOpen className="h-5 w-5" />
                    <span>Pre-Bookings</span>
                  </button>
                  <button className="w-full flex items-center space-x-3 px-4 py-2.5 rounded-md text-gray-700 hover:bg-gray-50">
                    <Heart className="h-5 w-5" />
                    <span>Wishlist</span>
                  </button>
                  <button className="w-full flex items-center space-x-3 px-4 py-2.5 rounded-md text-gray-700 hover:bg-gray-50">
                    <Users className="h-5 w-5" />
                    <span>Community</span>
                  </button>
                </div>
                
                {/* Notifications */}
                <div className="border-t border-gray-200 pt-4">
                  <h3 className="font-medium mb-3 flex items-center">
                    <Bell className="h-4 w-4 mr-2" />
                    Recent Notifications
                  </h3>
                  <div className="space-y-3">
                    {notifications.map(notification => (
                      <div key={notification.id} className={`text-sm p-2 rounded-md ${notification.isNew ? 'bg-blue-50' : ''}`}>
                        <p className="text-gray-800">{notification.message}</p>
                        <p className="text-gray-500 text-xs mt-1">{notification.time}</p>
                      </div>
                    ))}
                  </div>
                  <button className="text-secondary-600 text-sm mt-3 hover:underline w-full text-center">
                    View All Notifications
                  </button>
                </div>
              </div>
            </div>
            
            {/* Main Content */}
            <div className="lg:col-span-3 space-y-8">
              {/* Welcome Message */}
              <div className="bg-white rounded-lg shadow-md p-6">
                <h1 className="text-2xl font-bold mb-2">
                  {t('dashboard.welcome')}, Amit
                </h1>
                <p className="text-gray-600">
                  Discover pre-harvest opportunities and connect with farmers in your region.
                </p>
              </div>
              
              {/* Stats Overview */}
              <div className="grid grid-cols-1 md:grid-cols-3 gap-4">
                <div className="bg-white rounded-lg shadow-md p-6">
                  <h3 className="text-gray-500 text-sm font-medium mb-1">NEARBY FARMERS</h3>
                  <p className="text-2xl font-bold">28</p>
                  <div className="flex items-center mt-2 text-success-600 text-sm">
                    <span className="flex items-center">
                      <svg xmlns="http://www.w3.org/2000/svg" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round" className="h-4 w-4 mr-1">
                        <path d="m18 15-6-6-6 6"></path>
                      </svg>
                      3 new this week
                    </span>
                  </div>
                </div>
                
                <div className="bg-white rounded-lg shadow-md p-6">
                  <h3 className="text-gray-500 text-sm font-medium mb-1">ACTIVE PRE-BOOKINGS</h3>
                  <p className="text-2xl font-bold">7</p>
                  <div className="flex items-center mt-2 text-primary-600 text-sm">
                    <span className="flex items-center">
                      <svg xmlns="http://www.w3.org/2000/svg" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round" className="h-4 w-4 mr-1">
                        <path d="m18 15-6-6-6 6"></path>
                      </svg>
                      2 pending harvest
                    </span>
                  </div>
                </div>
                
                <div className="bg-white rounded-lg shadow-md p-6">
                  <h3 className="text-gray-500 text-sm font-medium mb-1">SAVED SEARCHES</h3>
                  <p className="text-2xl font-bold">4</p>
                  <div className="flex items-center mt-2 text-gray-600 text-sm">
                    <span className="flex items-center">
                      Last updated 2 days ago
                    </span>
                  </div>
                </div>
              </div>
              
              {/* Crop Availability Chart */}
              <div className="bg-white rounded-lg shadow-md p-6">
                <h2 className="text-lg font-semibold mb-4">Upcoming Crop Availability</h2>
                <div className="h-64">
                  <ResponsiveContainer width="100%" height="100%">
                    <BarChart data={cropAvailabilityData}>
                      <CartesianGrid strokeDasharray="3 3" />
                      <XAxis dataKey="name" />
                      <YAxis />
                      <Tooltip />
                      <Bar dataKey="available" fill="#8D6E63" />
                    </BarChart>
                  </ResponsiveContainer>
                </div>
              </div>
              
              {/* Nearby Farmers */}
              <div className="bg-white rounded-lg shadow-md overflow-hidden">
                <div className="px-6 py-4 border-b border-gray-200 flex justify-between items-center">
                  <h2 className="text-lg font-semibold">Farmers with Upcoming Harvests</h2>
                  <button className="btn bg-secondary-600 text-white hover:bg-secondary-700 py-1.5 px-3 text-sm">
                    View All
                  </button>
                </div>
                
                <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-4 p-6">
                  {nearbyFarmers.map(farmer => (
                    <div key={farmer.id} className="border border-gray-200 rounded-lg overflow-hidden hover:shadow-md transition-shadow">
                      <div className="p-4">
                        <div className="flex items-center mb-3">
                          <img src={farmer.image} alt={farmer.name} className="h-10 w-10 rounded-full object-cover mr-3" />
                          <div>
                            <h3 className="font-medium text-gray-900">{farmer.name}</h3>
                            <p className="text-gray-600 text-xs flex items-center">
                              <svg xmlns="http://www.w3.org/2000/svg" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round" className="h-3 w-3 mr-1">
                                <path d="M20 10c0 6-8 12-8 12s-8-6-8-12a8 8 0 0 1 16 0Z"></path>
                                <circle cx="12" cy="10" r="3"></circle>
                              </svg>
                              {farmer.location} ({farmer.distance})
                            </p>
                          </div>
                        </div>
                        
                        <div className="grid grid-cols-2 gap-x-4 gap-y-2 text-sm mb-4">
                          <div>
                            <p className="text-gray-500">Crop</p>
                            <p className="font-medium">{farmer.crop}</p>
                          </div>
                          <div>
                            <p className="text-gray-500">Harvest Date</p>
                            <p className="font-medium">{farmer.harvestDate}</p>
                          </div>
                          <div>
                            <p className="text-gray-500">Quantity</p>
                            <p className="font-medium">{farmer.quantity}</p>
                          </div>
                          <div>
                            <p className="text-gray-500">Rating</p>
                            <p className="font-medium flex items-center">
                              {farmer.rating}
                              <svg xmlns="http://www.w3.org/2000/svg" viewBox="0 0 24 24" fill="currentColor" className="h-4 w-4 text-yellow-400 ml-1">
                                <path fillRule="evenodd" d="M10.788 3.21c.448-1.077 1.976-1.077 2.424 0l2.082 5.007 5.404.433c1.164.093 1.636 1.545.749 2.305l-4.117 3.527 1.257 5.273c.271 1.136-.964 2.033-1.96 1.425L12 18.354 7.373 21.18c-.996.608-2.231-.29-1.96-1.425l1.257-5.273-4.117-3.527c-.887-.76-.415-2.212.749-2.305l5.404-.433 2.082-5.006z" clipRule="evenodd" />
                              </svg>
                            </p>
                          </div>
                        </div>
                        
                        <div className="flex space-x-2">
                          <button className="flex-1 bg-secondary-600 hover:bg-secondary-700 text-white text-sm py-2 rounded-md">
                            Pre-Book
                          </button>
                          <button className="w-10 aspect-square flex items-center justify-center text-gray-600 hover:text-red-500 border border-gray-200 rounded-md">
                            <Heart className="h-5 w-5" />
                          </button>
                        </div>
                      </div>
                    </div>
                  ))}
                </div>
              </div>
              
              {/* Quick Search */}
              <div className="bg-white rounded-lg shadow-md p-6">
                <h2 className="text-lg font-semibold mb-4">Quick Search</h2>
                <div className="flex flex-wrap gap-2">
                  <button className="px-4 py-2 bg-gray-100 hover:bg-gray-200 rounded-md text-gray-700 text-sm">Wheat</button>
                  <button className="px-4 py-2 bg-gray-100 hover:bg-gray-200 rounded-md text-gray-700 text-sm">Rice</button>
                  <button className="px-4 py-2 bg-gray-100 hover:bg-gray-200 rounded-md text-gray-700 text-sm">Organic</button>
                  <button className="px-4 py-2 bg-gray-100 hover:bg-gray-200 rounded-md text-gray-700 text-sm">Within 30km</button>
                  <button className="px-4 py-2 bg-gray-100 hover:bg-gray-200 rounded-md text-gray-700 text-sm">Harvest in July</button>
                  <button className="px-4 py-2 bg-gray-100 hover:bg-gray-200 rounded-md text-gray-700 text-sm">Top Rated</button>
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

export default BuyerDashboardPage;