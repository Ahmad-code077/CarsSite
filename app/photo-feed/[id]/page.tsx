import Image from 'next/image';
import wondersImages, { WonderImage } from '../wonders';

export default async function PhotoPage({
  params,
}: {
  params: Promise<{ id: string }>;
}) {
  const { id } = await params;
  const photo: WonderImage = wondersImages.find((p) => p.id === id)!;
  if (!photo) {
    return <div>Not found</div>;
  }

  return (
    <div className='container mx-auto my-10'>
      <h1 className='text-yellow-500 text-2xl'>This is the id main</h1>
      <div className='w-1/2 mx-auto'>
        <div>
          <h1 className='text-center text-3xl font-bold my-4'>{photo.name}</h1>
        </div>
        <Image
          alt={photo.name}
          src={photo.src}
          className='w-full object-cover aspect-square '
        />

        <div className='bg-white text-black py-4'>
          <h3>{photo.photographer}</h3>
          <h3>{photo.location}</h3>
        </div>
      </div>
    </div>
  );
}
