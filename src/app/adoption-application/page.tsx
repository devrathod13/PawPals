"use client";

import { useState, FormEvent, useEffect, useCallback } from 'react';
import { useSearchParams, useRouter } from 'next/navigation';
import { toast, ToastContainer } from 'react-toastify';
import 'react-toastify/dist/ReactToastify.css';

// Define types for better type safety
interface AdoptionFormData {
  firstName: string;
  lastName: string;
  email: string;
  phone: string;
  address: string;
  city: string;
  state: string;
  zipCode: string;
  homeType: string;
  hasYard: boolean;
  yardSize: string;
  hasOtherPets: boolean;
  otherPetDetails: string;
  employmentStatus: string;
  workSchedule: string;
  reasonForAdoption: string;
  previousPetExperience: string;
  agreeToHomeVisit: boolean;
  emergencyContactName: string;
  emergencyContactPhone: string;
}

// US States for dropdown
const US_STATES = [
  'Alabama', 'Alaska', 'Arizona', 'Arkansas', 'California', 'Colorado', 'Connecticut', 
  'Delaware', 'Florida', 'Georgia', 'Hawaii', 'Idaho', 'Illinois', 'Indiana', 'Iowa', 
  'Kansas', 'Kentucky', 'Louisiana', 'Maine', 'Maryland', 'Massachusetts', 'Michigan', 
  'Minnesota', 'Mississippi', 'Missouri', 'Montana', 'Nebraska', 'Nevada', 
  'New Hampshire', 'New Jersey', 'New Mexico', 'New York', 'North Carolina', 
  'North Dakota', 'Ohio', 'Oklahoma', 'Oregon', 'Pennsylvania', 'Rhode Island', 
  'South Carolina', 'South Dakota', 'Tennessee', 'Texas', 'Utah', 'Vermont', 
  'Virginia', 'Washington', 'West Virginia', 'Wisconsin', 'Wyoming'
];

export default function AdoptionApplicationPage() {
  const router = useRouter();
  const searchParams = useSearchParams();
  const [isClient, setIsClient] = useState(false);
  const [isSubmitting, setIsSubmitting] = useState(false);
  const [submissionMessage, setSubmissionMessage] = useState<string | null>(null);

  const petId = searchParams.get('petId');
  const petName = searchParams.get('petName');

  // Initial form state with improved typing
  const [formData, setFormData] = useState<AdoptionFormData>({
    firstName: '',
    lastName: '',
    email: '',
    phone: '',
    address: '',
    city: '',
    state: '',
    zipCode: '',
    homeType: '',
    hasYard: false,
    yardSize: '',
    hasOtherPets: false,
    otherPetDetails: '',
    employmentStatus: '',
    workSchedule: '',
    reasonForAdoption: '',
    previousPetExperience: '',
    agreeToHomeVisit: false,
    emergencyContactName: '',
    emergencyContactPhone: ''
  });

  // Format phone number as user types
  const formatPhoneNumber = useCallback((value: string) => {
    const phoneNumber = value.replace(/\D/g, '');
    const formattedNumber = phoneNumber.replace(
      /^(\d{3})(\d{3})(\d{4})$/,
      '($1) $2-$3'
    );
    return formattedNumber;
  }, []);

  useEffect(() => {
    setIsClient(true);
  }, []);

  useEffect(() => {
    if (submissionMessage) {
      const handleScreenClick = () => {
        setSubmissionMessage(null);
      };

      // Add event listener to the entire document
      document.addEventListener('click', handleScreenClick);

      // Cleanup event listener
      return () => {
        document.removeEventListener('click', handleScreenClick);
      };
    }
  }, [submissionMessage]);

  const handleChange = (e: React.ChangeEvent<HTMLInputElement | HTMLTextAreaElement | HTMLSelectElement>) => {
    const { name, value, type } = e.target;
    
    if (type === 'checkbox') {
      setFormData(prev => ({
        ...prev,
        [name]: (e.target as HTMLInputElement).checked
      }));
    } else {
      // Special handling for phone number formatting
      const processedValue = name === 'phone' 
        ? formatPhoneNumber(value) 
        : value;

      setFormData(prev => ({
        ...prev,
        [name]: processedValue
      }));
    }
  };

  const validateForm = useCallback(() => {
    const requiredFields: (keyof AdoptionFormData)[] = [
      'firstName', 'lastName', 'email', 'phone', 
      'address', 'city', 'state', 'zipCode', 
      'homeType', 'employmentStatus', 'reasonForAdoption'
    ];

    for (let field of requiredFields) {
      if (!formData[field]) {
        toast.error(`Please fill out the ${field.replace(/([A-Z])/g, ' $1').toLowerCase()} field`);
        return false;
      }
    }

    if (!formData.agreeToHomeVisit) {
      toast.error('Please agree to the potential home visit');
      return false;
    }

    // Email validation
    const emailRegex = /^[^\s@]+@[^\s@]+\.[^\s@]+$/;
    if (!emailRegex.test(formData.email)) {
      toast.error('Please enter a valid email address');
      return false;
    }

    // Phone validation
    const phoneRegex = /^\(\d{3}\) \d{3}-\d{4}$/;
    if (!phoneRegex.test(formData.phone)) {
      toast.error('Please enter a valid phone number');
      return false;
    }

    // Zip code validation
    const zipRegex = /^\d{5}(-\d{4})?$/;
    if (!zipRegex.test(formData.zipCode)) {
      toast.error('Please enter a valid zip code');
      return false;
    }

    return true;
  }, [formData]);

  const handleSubmit = async (e: FormEvent) => {
    e.preventDefault();
    setIsSubmitting(true);

    try {
      // Prepare submission data with timestamp and unique ID
      const submissionData = {
        ...formData,
        petId,
        petName,
        submissionDate: new Date().toISOString(),
        submissionId: `APP-${Date.now()}-${Math.random().toString(36).substr(2, 9)}`
      };

      // Store in localStorage with more robust handling
      const applications = JSON.parse(localStorage.getItem('petApplications') || '[]');
      applications.push(submissionData);
      localStorage.setItem('petApplications', JSON.stringify(applications));

      // Success notification with submission ID
      toast.success(
        `Thank you for your application for ${petName}! 
        Your application ID is ${submissionData.submissionId}. 
        We will review your submission and contact you soon.`,
        { autoClose: 7000 }
      );

      // Set submission message
      setSubmissionMessage('Your adoption application has been successfully submitted!');

      // Reset form fields
      setFormData({
        firstName: '',
        lastName: '',
        email: '',
        phone: '',
        address: '',
        city: '',
        state: '',
        zipCode: '',
        homeType: '',
        hasYard: false,
        yardSize: '',
        hasOtherPets: false,
        otherPetDetails: '',
        employmentStatus: '',
        workSchedule: '',
        reasonForAdoption: '',
        previousPetExperience: '',
        agreeToHomeVisit: false,
        emergencyContactName: '',
        emergencyContactPhone: ''
      });

    } catch (error) {
      toast.error('There was an error submitting your application. Please try again.');
      console.error(error);
    } finally {
      setIsSubmitting(false);
    }
  };

  const resetForm = () => {
    // Reset all form fields
    setFormData({
      firstName: '',
      lastName: '',
      email: '',
      phone: '',
      address: '',
      city: '',
      state: '',
      zipCode: '',
      homeType: '',
      hasYard: false,
      yardSize: '',
      hasOtherPets: false,
      otherPetDetails: '',
      employmentStatus: '',
      workSchedule: '',
      reasonForAdoption: '',
      previousPetExperience: '',
      agreeToHomeVisit: false,
      emergencyContactName: '',
      emergencyContactPhone: ''
    });
  }

  if (!isClient) return null;

  return (
    <div className="min-h-screen bg-gradient-to-br from-gray-50 to-primary-50 py-12 px-4 sm:px-6 lg:px-8">
      <ToastContainer 
        position="top-right"
        autoClose={5000}
        hideProgressBar={false}
        newestOnTop={false}
        closeOnClick
        rtl={false}
        pauseOnFocusLoss
        draggable
        pauseOnHover
      />
      
      {/* Submission Message Overlay */}
      {submissionMessage && (
        <div 
          className="fixed inset-0 z-50 flex items-center justify-center bg-black bg-opacity-50 animate-fade-in"
          onClick={(e) => e.stopPropagation()} // Prevent this div from closing itself
        >
          <div className="bg-white p-8 rounded-2xl shadow-2xl text-center max-w-md animate-bounce">
            <div className="text-6xl mb-4 text-green-500">
              ✅
            </div>
            <h2 className="text-2xl font-bold text-gray-800 mb-4">
              Application Submitted
            </h2>
            <p className="text-gray-600 mb-6">
              {submissionMessage}
            </p>
            <p className="text-sm text-gray-500">
              Click anywhere to continue
            </p>
          </div>
        </div>
      )}

      <div className="max-w-4xl mx-auto bg-white shadow-2xl rounded-2xl overflow-hidden transform transition-all hover:scale-[1.01]">
        <div className="p-8 bg-primary-600 text-white flex items-center justify-between">
          <div>
            <h1 className="text-4xl font-extrabold">
              Adoption Application for {petName || 'a Pet'}
            </h1>
            <p className="mt-2 text-primary-100">
              Take the first step towards bringing a new furry friend home!
            </p>
          </div>
          {petId && (
            <div className="bg-white/20 p-4 rounded-xl">
              <span className="text-sm font-medium">Pet ID: {petId}</span>
            </div>
          )}
        </div>

        <form onSubmit={handleSubmit} className="p-8 space-y-6">
          {/* Personal Information Section */}
          <div>
            <h2 className="text-2xl font-semibold text-gray-800 mb-4">Personal Information</h2>
            <div className="grid md:grid-cols-2 gap-4">
              <div>
                <label htmlFor="firstName" className="block text-sm font-medium text-gray-700">
                  First Name *
                </label>
                <input
                  type="text"
                  id="firstName"
                  name="firstName"
                  required
                  value={formData.firstName}
                  onChange={handleChange}
                  className="mt-1 block w-full rounded-md border-gray-300 shadow-sm focus:border-primary-500 focus:ring-primary-500"
                />
              </div>
              <div>
                <label htmlFor="lastName" className="block text-sm font-medium text-gray-700">
                  Last Name *
                </label>
                <input
                  type="text"
                  id="lastName"
                  name="lastName"
                  required
                  value={formData.lastName}
                  onChange={handleChange}
                  className="mt-1 block w-full rounded-md border-gray-300 shadow-sm focus:border-primary-500 focus:ring-primary-500"
                />
              </div>
            </div>

            <div className="grid md:grid-cols-2 gap-4 mt-4">
              <div>
                <label htmlFor="email" className="block text-sm font-medium text-gray-700">
                  Email *
                </label>
                <input
                  type="email"
                  id="email"
                  name="email"
                  required
                  value={formData.email}
                  onChange={handleChange}
                  className="mt-1 block w-full rounded-md border-gray-300 shadow-sm focus:border-primary-500 focus:ring-primary-500"
                />
              </div>
              <div>
                <label htmlFor="phone" className="block text-sm font-medium text-gray-700">
                  Phone Number *
                </label>
                <input
                  type="tel"
                  id="phone"
                  name="phone"
                  required
                  value={formData.phone}
                  onChange={handleChange}
                  className="mt-1 block w-full rounded-md border-gray-300 shadow-sm focus:border-primary-500 focus:ring-primary-500"
                />
              </div>
            </div>
          </div>

          {/* Address Section */}
          <div className="mt-8">
            <h2 className="text-2xl font-semibold text-gray-800 mb-4">Address</h2>
            <div className="space-y-4">
              <div>
                <label htmlFor="address" className="block text-sm font-medium text-gray-700">
                  Street Address *
                </label>
                <input
                  type="text"
                  id="address"
                  name="address"
                  required
                  value={formData.address}
                  onChange={handleChange}
                  className="mt-1 block w-full rounded-md border-gray-300 shadow-sm focus:border-primary-500 focus:ring-primary-500"
                />
              </div>
              <div className="grid md:grid-cols-3 gap-4">
                <div>
                  <label htmlFor="city" className="block text-sm font-medium text-gray-700">
                    City *
                  </label>
                  <input
                    type="text"
                    id="city"
                    name="city"
                    required
                    value={formData.city}
                    onChange={handleChange}
                    className="mt-1 block w-full rounded-md border-gray-300 shadow-sm focus:border-primary-500 focus:ring-primary-500"
                  />
                </div>
                <div>
                  <label htmlFor="state" className="block text-sm font-medium text-gray-700">
                    State *
                  </label>
                  <select
                    id="state"
                    name="state"
                    required
                    value={formData.state}
                    onChange={handleChange}
                    className="mt-1 block w-full rounded-md border-gray-300 shadow-sm focus:border-primary-500 focus:ring-primary-500"
                  >
                    <option value="">Select State</option>
                    {US_STATES.map(state => (
                      <option key={state} value={state}>{state}</option>
                    ))}
                  </select>
                </div>
                <div>
                  <label htmlFor="zipCode" className="block text-sm font-medium text-gray-700">
                    Zip Code *
                  </label>
                  <input
                    type="text"
                    id="zipCode"
                    name="zipCode"
                    pattern="\d{5}(-\d{4})?"
                    placeholder="12345 or 12345-6789"
                    required
                    value={formData.zipCode}
                    onChange={handleChange}
                    className="mt-1 block w-full rounded-md border-gray-300 shadow-sm focus:border-primary-500 focus:ring-primary-500"
                  />
                </div>
              </div>
            </div>
          </div>

          {/* Home and Pet Information */}
          <div className="mt-8">
            <h2 className="text-2xl font-semibold text-gray-800 mb-4">Home and Pet Information</h2>
            <div className="space-y-4">
              <div>
                <label htmlFor="homeType" className="block text-sm font-medium text-gray-700">
                  Type of Home *
                </label>
                <select
                  id="homeType"
                  name="homeType"
                  required
                  value={formData.homeType}
                  onChange={handleChange}
                  className="mt-1 block w-full rounded-md border-gray-300 shadow-sm focus:border-primary-500 focus:ring-primary-500"
                >
                  <option value="">Select Home Type</option>
                  <option value="house">House</option>
                  <option value="apartment">Apartment</option>
                  <option value="condo">Condo</option>
                </select>
              </div>

              <div className="flex items-center">
                <input
                  type="checkbox"
                  id="hasYard"
                  name="hasYard"
                  checked={formData.hasYard}
                  onChange={handleChange}
                  className="h-4 w-4 text-primary-600 focus:ring-primary-500 border-gray-300 rounded"
                />
                <label htmlFor="hasYard" className="ml-2 block text-sm text-gray-900">
                  Do you have a yard?
                </label>
              </div>

              {formData.hasYard && (
                <div>
                  <label htmlFor="yardSize" className="block text-sm font-medium text-gray-700">
                    Yard Size
                  </label>
                  <select
                    id="yardSize"
                    name="yardSize"
                    value={formData.yardSize}
                    onChange={handleChange}
                    className="mt-1 block w-full rounded-md border-gray-300 shadow-sm focus:border-primary-500 focus:ring-primary-500"
                  >
                    <option value="">Select Yard Size</option>
                    <option value="small">Small (less than 500 sq ft)</option>
                    <option value="medium">Medium (500-1000 sq ft)</option>
                    <option value="large">Large (over 1000 sq ft)</option>
                  </select>
                </div>
              )}

              <div className="flex items-center">
                <input
                  type="checkbox"
                  id="hasOtherPets"
                  name="hasOtherPets"
                  checked={formData.hasOtherPets}
                  onChange={handleChange}
                  className="h-4 w-4 text-primary-600 focus:ring-primary-500 border-gray-300 rounded"
                />
                <label htmlFor="hasOtherPets" className="ml-2 block text-sm text-gray-900">
                  Do you currently have other pets?
                </label>
              </div>

              {formData.hasOtherPets && (
                <div>
                  <label htmlFor="otherPetDetails" className="block text-sm font-medium text-gray-700">
                    Details about other pets
                  </label>
                  <textarea
                    id="otherPetDetails"
                    name="otherPetDetails"
                    value={formData.otherPetDetails}
                    onChange={handleChange}
                    rows={3}
                    className="mt-1 block w-full rounded-md border-gray-300 shadow-sm focus:border-primary-500 focus:ring-primary-500"
                  />
                </div>
              )}

              <div>
                <label htmlFor="employmentStatus" className="block text-sm font-medium text-gray-700">
                  Employment Status *
                </label>
                <select
                  id="employmentStatus"
                  name="employmentStatus"
                  required
                  value={formData.employmentStatus}
                  onChange={handleChange}
                  className="mt-1 block w-full rounded-md border-gray-300 shadow-sm focus:border-primary-500 focus:ring-primary-500"
                >
                  <option value="">Select Employment Status</option>
                  <option value="employed">Employed Full-Time</option>
                  <option value="partTime">Employed Part-Time</option>
                  <option value="selfEmployed">Self-Employed</option>
                  <option value="student">Student</option>
                  <option value="retired">Retired</option>
                </select>
              </div>

              <div>
                <label htmlFor="workSchedule" className="block text-sm font-medium text-gray-700">
                  Work Schedule
                </label>
                <select
                  id="workSchedule"
                  name="workSchedule"
                  value={formData.workSchedule}
                  onChange={handleChange}
                  className="mt-1 block w-full rounded-md border-gray-300 shadow-sm focus:border-primary-500 focus:ring-primary-500"
                >
                  <option value="">Select Work Schedule</option>
                  <option value="fullTime">Full-Time (Away 8-10 hrs/day)</option>
                  <option value="partTime">Part-Time</option>
                  <option value="workFromHome">Work from Home</option>
                  <option value="flexibleSchedule">Flexible Schedule</option>
                </select>
              </div>

              <div>
                <label htmlFor="previousPetExperience" className="block text-sm font-medium text-gray-700">
                  Previous Pet Experience
                </label>
                <textarea
                  id="previousPetExperience"
                  name="previousPetExperience"
                  value={formData.previousPetExperience}
                  onChange={handleChange}
                  rows={3}
                  className="mt-1 block w-full rounded-md border-gray-300 shadow-sm focus:border-primary-500 focus:ring-primary-500"
                  placeholder="Tell us about your experience with pets (if any)"
                />
              </div>

              <div>
                <label htmlFor="reasonForAdoption" className="block text-sm font-medium text-gray-700">
                  Why do you want to adopt this pet? *
                </label>
                <textarea
                  id="reasonForAdoption"
                  name="reasonForAdoption"
                  required
                  value={formData.reasonForAdoption}
                  onChange={handleChange}
                  rows={4}
                  className="mt-1 block w-full rounded-md border-gray-300 shadow-sm focus:border-primary-500 focus:ring-primary-500"
                />
              </div>

              <div className="flex items-center">
                <input
                  type="checkbox"
                  id="agreeToHomeVisit"
                  name="agreeToHomeVisit"
                  checked={formData.agreeToHomeVisit}
                  onChange={handleChange}
                  required
                  className="h-4 w-4 text-primary-600 focus:ring-primary-500 border-gray-300 rounded"
                />
                <label htmlFor="agreeToHomeVisit" className="ml-2 block text-sm text-gray-900">
                  I agree to a potential home visit by the shelter *
                </label>
              </div>

              <div className="grid md:grid-cols-2 gap-4">
                <div>
                  <label htmlFor="emergencyContactName" className="block text-sm font-medium text-gray-700">
                    Emergency Contact Name
                  </label>
                  <input
                    type="text"
                    id="emergencyContactName"
                    name="emergencyContactName"
                    value={formData.emergencyContactName}
                    onChange={handleChange}
                    className="mt-1 block w-full rounded-md border-gray-300 shadow-sm focus:border-primary-500 focus:ring-primary-500"
                  />
                </div>
                <div>
                  <label htmlFor="emergencyContactPhone" className="block text-sm font-medium text-gray-700">
                    Emergency Contact Phone
                  </label>
                  <input
                    type="tel"
                    id="emergencyContactPhone"
                    name="emergencyContactPhone"
                    value={formData.emergencyContactPhone}
                    onChange={handleChange}
                    className="mt-1 block w-full rounded-md border-gray-300 shadow-sm focus:border-primary-500 focus:ring-primary-500"
                  />
                </div>
              </div>
            </div>
          </div>

          <div className="pt-5">
            <div className="flex justify-end">
              <button
                type="submit"
                disabled={isSubmitting}
                className={`inline-flex justify-center py-4 px-8 border border-transparent shadow-sm text-lg font-bold rounded-full text-white 
                ${isSubmitting 
                  ? 'bg-gray-400 cursor-not-allowed' 
                  : 'bg-primary-600 hover:bg-primary-700 focus:outline-none focus:ring-2 focus:ring-offset-2 focus:ring-primary-500'}`}
              >
                {isSubmitting ? 'Submitting...' : 'Submit Application'}
              </button>
            </div>
          </div>
        </form>
      </div>
    </div>
  );
}
