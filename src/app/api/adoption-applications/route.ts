import { NextRequest, NextResponse } from 'next/server';
import connectMongoDB from '@/lib/mongodb';
import AdoptionApplication from '@/models/AdoptionApplication';

// Create a new adoption application
export async function POST(request: NextRequest) {
  try {
    // Connect to MongoDB
    await connectMongoDB();

    // Parse the request body
    const applicationData = await request.json();

    // Validate required fields
    const requiredFields = [
      'petId', 
      'petName', 
      'personalInfo.firstName', 
      'personalInfo.lastName', 
      'personalInfo.email', 
      'personalInfo.phone',
      'homeInfo.address',
      'homeInfo.city',
      'homeInfo.state',
      'homeInfo.zipCode',
      'homeInfo.homeType',
      'employmentInfo.employmentStatus',
      'additionalInfo.reasonForAdoption'
    ];

    // Check for missing required fields
    for (const field of requiredFields) {
      const value = field.split('.').reduce((obj, key) => obj?.[key], applicationData);
      if (!value) {
        return NextResponse.json(
          { error: `Missing required field: ${field}` }, 
          { status: 400 }
        );
      }
    }

    // Create new adoption application
    const newApplication = new AdoptionApplication(applicationData);
    await newApplication.save();

    // Return the saved application
    return NextResponse.json(
      { 
        message: 'Adoption application submitted successfully', 
        application: newApplication 
      }, 
      { status: 201 }
    );

  } catch (error) {
    console.error('Adoption application submission error:', error);
    
    // Handle specific MongoDB validation errors
    if (error instanceof Error && error.name === 'ValidationError') {
      return NextResponse.json(
        { error: 'Invalid application data', details: error.message }, 
        { status: 400 }
      );
    }

    // Generic error response
    return NextResponse.json(
      { error: 'Failed to submit adoption application' }, 
      { status: 500 }
    );
  }
}

// Retrieve adoption applications (optional)
export async function GET(request: NextRequest) {
  try {
    // Connect to MongoDB
    await connectMongoDB();

    // Optional query parameters for filtering
    const { searchParams } = new URL(request.url);
    const status = searchParams.get('status');
    const email = searchParams.get('email');

    // Build query object
    const query: any = {};
    if (status) query['status'] = status;
    if (email) query['personalInfo.email'] = email;

    // Retrieve applications with optional filtering
    const applications = await AdoptionApplication.find(query)
      .sort({ submissionDate: -1 })
      .limit(50);  // Limit to prevent overwhelming response

    return NextResponse.json(
      { 
        message: 'Adoption applications retrieved', 
        applications 
      }, 
      { status: 200 }
    );

  } catch (error) {
    console.error('Error retrieving adoption applications:', error);
    return NextResponse.json(
      { error: 'Failed to retrieve adoption applications' }, 
      { status: 500 }
    );
  }
}
