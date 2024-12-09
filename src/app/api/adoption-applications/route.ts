import { NextRequest, NextResponse } from 'next/server';
import { PrismaClient } from '@prisma/client';

const prisma = new PrismaClient();

// Create a new adoption application
export async function POST(request: NextRequest): Promise<NextResponse> {
  try {
    // Parse the request body
    const applicationData: { [key: string]: any } = await request.json();

    // Validate required fields
    const requiredFields: string[] = [
      'userId', 
      'animalId', 
      'animalType',
      'notes'
    ];

    // Check for missing required fields
    for (const field of requiredFields) {
      if (!applicationData[field]) {
        return NextResponse.json(
          { error: `Missing required field: ${field}` }, 
          { status: 400 }
        );
      }
    }

    // Create new adoption application
    const newApplication = await prisma.adoption.create({
      data: {
        userId: applicationData.userId,
        animalId: applicationData.animalId,
        animalType: applicationData.animalType,
        status: 'PENDING',
        notes: applicationData.notes
      }
    });

    // Return the saved application
    return NextResponse.json(
      { 
        message: 'Adoption application submitted successfully', 
        application: newApplication 
      }, 
      { status: 201 }
    );

  } catch (error: any) {
    console.error('Adoption application submission error:', error);
    
    // Generic error response
    return NextResponse.json(
      { error: 'Failed to submit adoption application' }, 
      { status: 500 }
    );
  }
}

// Retrieve adoption applications
export async function GET(request: NextRequest): Promise<NextResponse> {
  try {
    // Optional query parameters for filtering
    const { searchParams } = new URL(request.url);
    const status: string | null = searchParams.get('status');
    const userId: string | null = searchParams.get('userId');

    // Build query object
    const query: any = {};
    if (status) query.status = status;
    if (userId) query.userId = userId;

    // Retrieve applications with optional filtering
    const applications = await prisma.adoption.findMany({
      where: query,
      orderBy: { applicationDate: 'desc' },
      take: 50  // Limit to prevent overwhelming response
    });

    return NextResponse.json(
      { 
        message: 'Adoption applications retrieved', 
        applications 
      }, 
      { status: 200 }
    );
  } catch (error: any) {
    console.error('Error retrieving adoption applications:', error);
    return NextResponse.json(
      { error: 'Failed to retrieve adoption applications' }, 
      { status: 500 }
    );
  }
}
