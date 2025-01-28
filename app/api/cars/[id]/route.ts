import { PrismaClient } from '@prisma/client';
import { NextResponse } from 'next/server';

const prisma = new PrismaClient();

// PATCH /api/cars/:id - Update car by ID
export async function PATCH(
  request: Request,
  { params }: { params: { id: string } }
) {
  try {
    const {
      name,
      model,
      dailyRate,
      seats,
      numberPlate,
      image,
      brand,
      availability,
    } = await request.json();

    const { id } = params;
    console.log('id in the api file ', id);

    const updatedCar = await prisma.car.update({
      where: { id },
      data: {
        name,
        model,
        dailyRate,
        seats,
        numberPlate,
        image,
        brand,
        availability,
      },
    });

    return NextResponse.json(updatedCar, { status: 200 });
  } catch (error: unknown) {
    if (error instanceof Error) {
      return NextResponse.json(
        { error: error.message || 'Failed to update car' },
        { status: 500 }
      );
    }
    return NextResponse.json(
      { error: 'Unknown Error Occurred while updating the car' },
      { status: 500 }
    );
  }
}

// DELETE /api/cars/:id - Delete car by ID
export async function DELETE(
  request: Request,
  context: { params: { id: string } }
) {
  const { id } = await context.params; // Await the params before using its properties
  try {
    const deleteCar = await prisma.car.delete({
      where: { id },
    });
    return NextResponse.json(deleteCar, { status: 200 });
  } catch (error: unknown) {
    if (error instanceof Error) {
      return NextResponse.json(
        { error: error.message || 'Failed to delete car' },
        { status: 500 }
      );
    }
    return NextResponse.json(
      { error: 'An unknown error occurred while deleting the car' },
      { status: 500 }
    );
  }
}
