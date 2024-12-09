import { NextRequest, NextResponse } from 'next/server';

// Define a type for the adoption application
interface AdoptionApplication {
  firstName: string;
  lastName: string;
  email: string;
  phone: string;
  address: string;
  city: string;
  province: string;
  postalCode: string;
  homeType: string;
  hasYard: boolean;
  yardSize?: string;
  hasOtherPets: boolean;
  otherPetDetails?: string;
  employmentStatus: string;
  workSchedule: string;
  reasonForAdoption: string;
  previousPetExperience: string;
  agreeToHomeVisit: boolean;
  emergencyContactName: string;
  emergencyContactPhone: string;
  petId?: string;
  petName?: string;
  submissionDate: string;
  submissionId: string;
}

// Simulated database or storage mechanism
const adoptionApplications: AdoptionApplication[] = [];

export async function POST(request: NextRequest): Promise<NextResponse> {
  try {
    const applicationData = await request.json();

    // Validate required fields
    const requiredFields: (keyof AdoptionApplication)[] = [
      'firstName', 'lastName', 'email', 'phone', 
      'address', 'city', 'province', 'postalCode',
      'homeType', 'employmentStatus', 'reasonForAdoption',
      'emergencyContactName', 'emergencyContactPhone'
    ];

    const missingFields = requiredFields.filter(field => !applicationData[field]);
    
    if (missingFields.length > 0) {
      return NextResponse.json(
        { error: `Missing required fields: ${missingFields.join(', ')}` }, 
        { status: 400 }
      );
    }

    // Additional validation
    if (!/^[A-Z0-9._%+-]+@[A-Z0-9.-]+\.[A-Z]{2,}$/i.test(applicationData.email)) {
      return NextResponse.json({ error: 'Invalid email format' }, { status: 400 });
    }

    // Store the application
    adoptionApplications.push(applicationData);

    return NextResponse.json(
      { 
        message: 'Adoption application submitted successfully', 
        submissionId: applicationData.submissionId 
      }, 
      { status: 201 }
    );
  } catch (error: unknown) {
    const errorMessage = error instanceof Error ? error.message : 'Unknown error';
    console.error('Adoption application submission error:', errorMessage);
    return NextResponse.json(
      { error: 'Failed to submit adoption application' }, 
      { status: 500 }
    );
  }
}

export async function GET(): Promise<NextResponse> {
  return NextResponse.json(adoptionApplications);
}
