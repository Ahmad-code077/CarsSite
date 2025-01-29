import prisma from '@/lib/prisma';
import { NextResponse } from 'next/server';

export async function GET() {
  try {
    const cars = await prisma.car.findMany();
    return NextResponse.json(cars);
  } catch (error: unknown) {
    if (error instanceof Error) {
      return NextResponse.json(
        { error: error.message || 'Failed to fetch cars' },
        { status: 500 }
      );
    }
    return NextResponse.json(
      { error: 'An unknown error occurred' },
      { status: 500 }
    );
  }
}

// POST /api/cars - Create a new car
export async function POST(request: Request) {
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

    const newCar = await prisma.car.create({
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

    return NextResponse.json(newCar, { status: 201 });
  } catch (error: unknown) {
    if (error instanceof Error) {
      return NextResponse.json(
        { error: error.message || 'Failed to create car' },
        { status: 500 }
      );
    }
    return NextResponse.json(
      { error: 'An unknown error occurred' },
      { status: 500 }
    );
  }
}
// export async function PATCH(
//   request: Request,
//   { params }: { params: { id: string } }
// ) {
//   try {
//     const {
//       name,
//       model,
//       dailyRate,
//       seats,
//       numberPlate,
//       image,
//       brand,
//       availability,
//     } = await request.json();

//     const { id } = params;
//     console.log('id in the api file ', id);
//     const updatedCar = await prisma.car.update({
//       where: { id },
//       data: {
//         name,
//         model,
//         dailyRate,
//         seats,
//         numberPlate,
//         image,
//         brand,
//         availability,
//       },
//     });

//     return NextResponse.json(updatedCar, { status: 200 });
//   } catch (error: unknown) {
//     if (error instanceof Error) {
//       return NextResponse.json(
//         {
//           error: error.message || 'Failed to update car',
//         },
//         { status: 500 }
//       );
//     }
//     return NextResponse.json(
//       {
//         error: 'Unknown Error Occurred while updating the car',
//       },
//       { status: 500 }
//     );
//   }
// }
