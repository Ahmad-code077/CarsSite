import prisma from '@/lib/prisma';
import { NextResponse } from 'next/server';

// PATCH /api/cars/:id - Update car by ID
export async function PATCH(
  request: Request,
  {
    params,
  }: {
    params: Promise<{ id: string }>;
  }
) {
  try {
    const { id } = await params;
    console.log('Received ID:', id);

    const body = await request.json();

    const updatedCar = await prisma.car.update({
      where: { id },
      data: body,
    });

    return NextResponse.json(updatedCar, { status: 200 });
  } catch (error: unknown) {
    return NextResponse.json(
      {
        error: error instanceof Error ? error.message : 'Failed to update car',
      },
      { status: 500 }
    );
  }
}

// DELETE /api/cars/:id - Delete car by ID
export async function DELETE(
  request: Request,
  {
    params,
  }: {
    params: Promise<{ id: string }>;
  }
) {
  try {
    const { id } = await params;
    console.log('Deleting car with ID:', id);

    if (!id) {
      return NextResponse.json(
        { error: 'Car ID is required' },
        { status: 400 }
      );
    }

    const deletedCar = await prisma.car.delete({
      where: { id },
    });

    return NextResponse.json(deletedCar, { status: 200 });
  } catch (error: unknown) {
    return NextResponse.json(
      {
        error: error instanceof Error ? error.message : 'Failed to delete car',
      },
      { status: 500 }
    );
  }
}
