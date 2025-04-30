import React, { useState } from 'react';
import { useTranslation } from 'react-i18next';
import Layout from '../components/layout/Layout';
import { Filter, Search, MapPin, ChevronDown, ArrowUpDown, Check } from 'lucide-react';

const DemandSupplyPage: React.FC = () => {
  const { t } = useTranslation();
  const [viewMode, setViewMode] = useState<'demand' | 'supply'>('supply');
  const [isFilterOpen, setIsFilterOpen] = useState(false);
  
  // Mock crop data for supply view
  const supplyCrops = [
    {
      id: 1,
      cropName: 'Wheat',
      variety: 'HD-2967',
      farmer: 'Rajesh Kumar',
      location: 'Punjab',
      distance: '15 km',
      harvestDate: '2023-08-15',
      quantity: '5 tons',
      price: '₹2,450/q',
      organic: true,
      certification: 'NPOP',
      image: 'https://images.pexels.com/photos/326082/pexels-photo-326082.jpeg?auto=compress&cs=tinysrgb&w=1260&h=750&dpr=2'
    },
    {
      id: 2,
      cropName: 'Rice',
      variety: 'Basmati-1121',
      farmer: 'Priya Sharma',
      location: 'Tamil Nadu',
      distance: '22 km',
      harvestDate: '2023-07-01',
      quantity: '3 tons',
      price: '₹3,200/q',
      organic: false,
      certification: '',
      image: 'https://images.pexels.com/photos/1359321/pexels-photo-1359321.jpeg?auto=compress&cs=tinysrgb&w=1260&h=750&dpr=2'
    },
    {
      id: 3,
      cropName: 'Cotton',
      variety: 'DCH-32',
      farmer: 'Vijay Patel',
      location: 'Gujarat',
      distance: '30 km',
      harvestDate: '2023-09-10',
      quantity: '2 tons',
      price: '₹6,800/q',
      organic: true,
      certification: 'USDA',
      image: 'https://images.pexels.com/photos/7543641/pexels-photo-7543641.jpeg?auto=compress&cs=tinysrgb&w=1260&h=750&dpr=2'
    },
    {
      id: 4,
      cropName: 'Soybean',
      variety: 'JS-335',
      farmer: 'Amit Singh',
      location: 'Madhya Pradesh',
      distance: '45 km',
      harvestDate: '2023-10-05',
      quantity: '4 tons',
      price: '₹4,100/q',
      organic: false,
      certification: '',
      image: 'https://images.pexels.com/photos/5560763/pexels-photo-5560763.jpeg?auto=compress&cs=tinysrgb&w=1260&h=750&dpr=2'
    },
  ];
  
  // Mock buyer requests for demand view
  const buyerRequests = [
    {
      id: 1,
      cropName: 'Wheat',
      variety: 'Any',
      buyer: 'Agrotech Foods Ltd.',
      location: 'Delhi NCR',
      requiredBy: '2023-09-15',
      quantity: '50 tons',
      offeredPrice: '₹2,500/q',
      organicOnly: false,
      additionalNotes: 'Looking for consistent supply for food processing'
    },
    {
      id: 2,
      cropName: 'Organic Rice',
      variety: 'Basmati',
      buyer: 'Natural Exports Inc.',
      location: 'Mumbai',
      requiredBy: '2023-08-10',
      quantity: '20 tons',
      offeredPrice: '₹3,500/q',
      organicOnly: true,
      additionalNotes: 'USDA or NPOP certification required for export'
    },
    {
      id: 3,
      cropName: 'Potato',
      variety: 'Kufri Jyoti',
      buyer: 'SnackTime Foods',
      location: 'Punjab',
      requiredBy: '2023-07-25',
      quantity: '30 tons',
      offeredPrice: '₹1,800/q',
      organicOnly: false,
      additionalNotes: 'Size consistency important for processing'
    }
  ];
  
  return (
    <Layout>
      <div className="bg-gray-50 py-8">
        <div className="container mx-auto px-4">
          <div className="mb-8">
            <h1 className="text-3xl font-bold mb-2">
              {t('demand.title')}
            </h1>
            <p className="text-gray-600">
              Connect directly with farmers and buyers to find the best opportunities for your agricultural business.
            </p>
          </div>
          
          {/* View Toggle & Filters */}
          <div className="bg-white rounded-lg shadow-md p-4 mb-8">
            <div className="flex flex-col md:flex-row justify-between items-start md:items-center gap-4">
              {/* View Toggle */}
              <div className="inline-flex rounded-md border border-gray-200 p-1">
                <button 
                  className={`px-4 py-2 text-sm font-medium rounded-md ${
                    viewMode === 'supply' 
                      ? 'bg-primary-600 text-white' 
                      : 'text-gray-700 hover:bg-gray-50'
                  }`}
                  onClick={() => setViewMode('supply')}
                >
                  Available Crops
                </button>
                <button 
                  className={`px-4 py-2 text-sm font-medium rounded-md ${
                    viewMode === 'demand' 
                      ? 'bg-secondary-600 text-white' 
                      : 'text-gray-700 hover:bg-gray-50'
                  }`}
                  onClick={() => setViewMode('demand')}
                >
                  Buyer Requests
                </button>
              </div>
              
              <div className="flex items-center gap-3 w-full md:w-auto">
                {/* Search Bar */}
                <div className="relative flex-grow">
                  <input
                    type="text"
                    placeholder="Search crops, regions..."
                    className="input pl-10 py-2 text-sm"
                  />
                  <Search className="absolute left-3 top-2.5 h-4 w-4 text-gray-400" />
                </div>
                
                {/* Filter Button */}
                <button 
                  className="btn btn-secondary py-2 flex items-center gap-2"
                  onClick={() => setIsFilterOpen(!isFilterOpen)}
                >
                  <Filter className="h-4 w-4" />
                  <span>Filters</span>
                </button>
              </div>
            </div>
            
            {/* Filter Options */}
            {isFilterOpen && (
              <div className="mt-4 pt-4 border-t border-gray-200 grid grid-cols-1 md:grid-cols-3 gap-4 animate-fade-in">
                <div>
                  <label className="block text-sm font-medium text-gray-700 mb-1">
                    {t('demand.region')}
                  </label>
                  <div className="relative">
                    <select className="select pl-10 pr-10 py-2 text-sm appearance-none">
                      <option value="">All Regions</option>
                      <option value="punjab">Punjab</option>
                      <option value="haryana">Haryana</option>
                      <option value="tamil-nadu">Tamil Nadu</option>
                      <option value="gujarat">Gujarat</option>
                    </select>
                    <MapPin className="absolute left-3 top-2.5 h-4 w-4 text-gray-400" />
                    <ChevronDown className="absolute right-3 top-2.5 h-4 w-4 text-gray-400" />
                  </div>
                </div>
                
                <div>
                  <label className="block text-sm font-medium text-gray-700 mb-1">
                    {t('demand.crop')}
                  </label>
                  <div className="relative">
                    <select className="select pl-10 pr-10 py-2 text-sm appearance-none">
                      <option value="">All Crops</option>
                      <option value="wheat">Wheat</option>
                      <option value="rice">Rice</option>
                      <option value="cotton">Cotton</option>
                      <option value="soybean">Soybean</option>
                    </select>
                    <svg xmlns="http://www.w3.org/2000/svg" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round" className="absolute left-3 top-2.5 h-4 w-4 text-gray-400">
                      <path d="M11 4c0 2.5-1 3-3 3h-.5C5 7 5 8 5 9.5V10c0 .5 0 1-1 1"></path>
                      <path d="M16 4c0 2.5 1 3 3 3h.5c2.5 0 2.5 1 2.5 2.5V10c0 .5 0 1 1 1"></path>
                      <path d="M9 4c0 1-1 2-1 3 0 1 1 2 1 3 0 1-1 2-1 3 0 1 1 2 1 3"></path>
                      <path d="M12 4c0 1 1 2 1 3 0 1-1 2-1 3 0 1 1 2 1 3 0 1-1 2-1 3"></path>
                      <path d="M15 4c0 1 1 2 1 3 0 1-1 2-1 3 0 1 1 2 1 3 0 1-1 2-1 3"></path>
                      <path d="M12 20v-6"></path>
                      <path d="M8 7H4a1 1 0 0 0-1 1v7c0 .6.4 1 1 1h16c.6 0 1-.4 1-1V8c0-.6-.4-1-1-1h-4"></path>
                    </svg>
                    <ChevronDown className="absolute right-3 top-2.5 h-4 w-4 text-gray-400" />
                  </div>
                </div>
                
                <div>
                  <label className="block text-sm font-medium text-gray-700 mb-1">
                    Harvest Period
                  </label>
                  <div className="relative">
                    <select className="select pl-10 pr-10 py-2 text-sm appearance-none">
                      <option value="">Any Time</option>
                      <option value="this-week">This Week</option>
                      <option value="this-month">This Month</option>
                      <option value="next-month">Next Month</option>
                      <option value="next-3-months">Next 3 Months</option>
                    </select>
                    <svg xmlns="http://www.w3.org/2000/svg" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round" className="absolute left-3 top-2.5 h-4 w-4 text-gray-400">
                      <rect width="18" height="18" x="3" y="4" rx="2" ry="2"></rect>
                      <line x1="16" x2="16" y1="2" y2="6"></line>
                      <line x1="8" x2="8" y1="2" y2="6"></line>
                      <line x1="3" x2="21" y1="10" y2="10"></line>
                    </svg>
                    <ChevronDown className="absolute right-3 top-2.5 h-4 w-4 text-gray-400" />
                  </div>
                </div>
                
                <div className="flex items-center">
                  <input
                    type="checkbox"
                    id="organic-only"
                    className="h-4 w-4 text-primary-600 border-gray-300 rounded focus:ring-primary-500"
                  />
                  <label htmlFor="organic-only" className="ml-2 text-sm text-gray-700">
                    Organic Only
                  </label>
                </div>
                
                <div className="flex items-center">
                  <input
                    type="checkbox"
                    id="certified-only"
                    className="h-4 w-4 text-primary-600 border-gray-300 rounded focus:ring-primary-500"
                  />
                  <label htmlFor="certified-only" className="ml-2 text-sm text-gray-700">
                    Certified Only
                  </label>
                </div>
                
                <div className="md:col-span-3 flex justify-end mt-2">
                  <button className="text-gray-600 text-sm hover:text-gray-800 mr-4">
                    Reset Filters
                  </button>
                  <button className="btn btn-primary py-1.5 px-4 text-sm">
                    Apply Filters
                  </button>
                </div>
              </div>
            )}
          </div>
          
          {/* Content Area */}
          {viewMode === 'supply' ? (
            <>
              <div className="flex justify-between items-center mb-4">
                <h2 className="text-xl font-semibold">Available Crops ({supplyCrops.length})</h2>
                <div className="flex items-center">
                  <span className="text-sm text-gray-600 mr-2">Sort By:</span>
                  <div className="relative">
                    <select className="select py-1.5 pl-3 pr-8 text-sm appearance-none">
                      <option value="harvest-date">Harvest Date</option>
                      <option value="price-low">Price: Low to High</option>
                      <option value="price-high">Price: High to Low</option>
                      <option value="distance">Distance</option>
                    </select>
                    <ArrowUpDown className="absolute right-2 top-2 h-4 w-4 text-gray-400" />
                  </div>
                </div>
              </div>
              
              <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 xl:grid-cols-4 gap-6">
                {supplyCrops.map(crop => (
                  <div key={crop.id} className="bg-white rounded-lg shadow-md overflow-hidden">
                    <div className="relative h-40">
                      <img 
                        src={crop.image} 
                        alt={crop.cropName} 
                        className="w-full h-full object-cover"
                      />
                      <div className="absolute top-2 right-2">
                        {crop.organic && (
                          <span className="badge badge-success">
                            Organic
                          </span>
                        )}
                      </div>
                    </div>
                    
                    <div className="p-4">
                      <div className="flex justify-between items-start mb-2">
                        <h3 className="text-lg font-semibold text-gray-900">
                          {crop.cropName}
                        </h3>
                        <span className="text-primary-600 font-bold">
                          {crop.price}
                        </span>
                      </div>
                      <p className="text-gray-600 text-sm">
                        Variety: {crop.variety}
                      </p>
                      
                      <div className="mt-3 pt-3 border-t border-gray-100">
                        <div className="flex justify-between text-sm">
                          <div>
                            <p className="text-gray-500">Harvesting on</p>
                            <p className="font-medium">{crop.harvestDate}</p>
                          </div>
                          <div>
                            <p className="text-gray-500">Quantity</p>
                            <p className="font-medium">{crop.quantity}</p>
                          </div>
                        </div>
                      </div>
                      
                      <div className="mt-3 pt-3 border-t border-gray-100 flex items-center">
                        <div className="flex-1">
                          <p className="text-gray-700 text-sm font-medium">
                            {crop.farmer}
                          </p>
                          <p className="text-gray-500 text-xs flex items-center">
                            <MapPin className="h-3 w-3 mr-1" />
                            {crop.location} ({crop.distance})
                          </p>
                        </div>
                        <button className="btn btn-primary py-1.5 px-3 text-sm">
                          Pre-Book
                        </button>
                      </div>
                    </div>
                  </div>
                ))}
              </div>
            </>
          ) : (
            <>
              <div className="flex justify-between items-center mb-4">
                <h2 className="text-xl font-semibold">Buyer Requests ({buyerRequests.length})</h2>
                <div className="flex items-center">
                  <span className="text-sm text-gray-600 mr-2">Sort By:</span>
                  <div className="relative">
                    <select className="select py-1.5 pl-3 pr-8 text-sm appearance-none">
                      <option value="date-needed">Date Needed</option>
                      <option value="price-high">Price: High to Low</option>
                      <option value="price-low">Price: Low to High</option>
                      <option value="quantity">Quantity</option>
                    </select>
                    <ArrowUpDown className="absolute right-2 top-2 h-4 w-4 text-gray-400" />
                  </div>
                </div>
              </div>
              
              <div className="space-y-4">
                {buyerRequests.map(request => (
                  <div key={request.id} className="bg-white rounded-lg shadow-md p-5">
                    <div className="flex flex-col md:flex-row justify-between">
                      <div>
                        <div className="flex items-center gap-3 mb-2">
                          <h3 className="text-lg font-semibold text-gray-900">
                            {request.cropName}
                          </h3>
                          {request.organicOnly && (
                            <span className="badge badge-success">
                              Organic Only
                            </span>
                          )}
                        </div>
                        <p className="text-gray-600 text-sm mb-4">
                          Variety: {request.variety} • Quantity: {request.quantity}
                        </p>
                        
                        <div className="space-y-2">
                          <div className="flex items-center">
                            <svg xmlns="http://www.w3.org/2000/svg" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round" className="h-4 w-4 text-gray-400 mr-2">
                              <path d="M19 21v-2a4 4 0 0 0-4-4H9a4 4 0 0 0-4 4v2"></path>
                              <circle cx="12" cy="7" r="4"></circle>
                            </svg>
                            <p className="text-gray-700 text-sm">
                              <span className="font-medium">{request.buyer}</span>
                            </p>
                          </div>
                          
                          <div className="flex items-center">
                            <MapPin className="h-4 w-4 text-gray-400 mr-2" />
                            <p className="text-gray-700 text-sm">
                              {request.location}
                            </p>
                          </div>
                          
                          <div className="flex items-center">
                            <svg xmlns="http://www.w3.org/2000/svg" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round" className="h-4 w-4 text-gray-400 mr-2">
                              <rect width="18" height="18" x="3" y="4" rx="2" ry="2"></rect>
                              <line x1="16" x2="16" y1="2" y2="6"></line>
                              <line x1="8" x2="8" y1="2" y2="6"></line>
                              <line x1="3" x2="21" y1="10" y2="10"></line>
                            </svg>
                            <p className="text-gray-700 text-sm">
                              Required by: <span className="font-medium">{request.requiredBy}</span>
                            </p>
                          </div>
                        </div>
                      </div>
                      
                      <div className="md:text-right mt-4 md:mt-0">
                        <p className="text-lg font-bold text-secondary-600">
                          {request.offeredPrice}
                        </p>
                        <p className="text-gray-600 text-sm">Offered Price</p>
                        
                        <button className="btn bg-secondary-600 hover:bg-secondary-700 text-white py-2 px-4 mt-4">
                          Contact Buyer
                        </button>
                      </div>
                    </div>
                    
                    {request.additionalNotes && (
                      <div className="mt-4 pt-4 border-t border-gray-100">
                        <p className="text-gray-600 text-sm">
                          <span className="font-medium">Additional Notes:</span> {request.additionalNotes}
                        </p>
                      </div>
                    )}
                  </div>
                ))}
              </div>
            </>
          )}
          
          {/* Pagination */}
          <div className="mt-8 flex justify-center">
            <nav className="inline-flex rounded-md shadow-sm -space-x-px" aria-label="Pagination">
              <a href="#" className="relative inline-flex items-center px-2 py-2 rounded-l-md border border-gray-300 bg-white text-sm font-medium text-gray-500 hover:bg-gray-50">
                <span className="sr-only">Previous</span>
                <svg className="h-5 w-5" xmlns="http://www.w3.org/2000/svg" viewBox="0 0 20 20" fill="currentColor" aria-hidden="true">
                  <path fillRule="evenodd" d="M12.707 5.293a1 1 0 010 1.414L9.414 10l3.293 3.293a1 1 0 01-1.414 1.414l-4-4a1 1 0 010-1.414l4-4a1 1 0 011.414 0z" clipRule="evenodd" />
                </svg>
              </a>
              
              <a href="#" className="relative inline-flex items-center px-4 py-2 border border-gray-300 bg-primary-50 text-sm font-medium text-primary-600">
                1
              </a>
              <a href="#" className="relative inline-flex items-center px-4 py-2 border border-gray-300 bg-white text-sm font-medium text-gray-700 hover:bg-gray-50">
                2
              </a>
              <a href="#" className="relative inline-flex items-center px-4 py-2 border border-gray-300 bg-white text-sm font-medium text-gray-700 hover:bg-gray-50">
                3
              </a>
              
              <a href="#" className="relative inline-flex items-center px-2 py-2 rounded-r-md border border-gray-300 bg-white text-sm font-medium text-gray-500 hover:bg-gray-50">
                <span className="sr-only">Next</span>
                <svg className="h-5 w-5" xmlns="http://www.w3.org/2000/svg" viewBox="0 0 20 20" fill="currentColor" aria-hidden="true">
                  <path fillRule="evenodd" d="M7.293 14.707a1 1 0 010-1.414L10.586 10 7.293 6.707a1 1 0 011.414-1.414l4 4a1 1 0 010 1.414l-4 4a1 1 0 01-1.414 0z" clipRule="evenodd" />
                </svg>
              </a>
            </nav>
          </div>
        </div>
      </div>
    </Layout>
  );
};

export default DemandSupplyPage;