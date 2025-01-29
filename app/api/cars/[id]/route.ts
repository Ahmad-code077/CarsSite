import prisma from '@/lib/prisma';
import { NextResponse } from 'next/server';

// PATCH /api/cars/:id - Update car by ID
export async function PATCH(request: Request) {
  const urlParts = request.url.split('/');
  const id = urlParts[urlParts.length - 1]; // Get ID from the request URL

  if (!id) {
    return NextResponse.json({ error: 'Car ID is missing' }, { status: 400 });
  }

  try {
    const body = await request.json();
    const updatedCar = await prisma.car.update({
      where: { id },
      data: body, // Use the full body for update
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
export async function DELETE(request: Request) {
  const urlParts = request.url.split('/');
  const id = urlParts[urlParts.length - 1]; // Get ID from the request URL

  if (!id) {
    return NextResponse.json({ error: 'Car ID is missing' }, { status: 400 });
  }

  try {
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
