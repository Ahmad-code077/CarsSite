import Image from 'next/image';
import wondersImages, { WonderImage } from '@/app/photo-feed/wonders';
import Modal from '../../Modal';

export default async function PhotoModal({
  params,
}: {
  params: Promise<{ id: string }>;
}) {
  const { id } = await params;

  const photo: WonderImage = wondersImages.find((p) => p.id === id)!;
  console.log('photo', photo);

  return (
    <Modal>
      <h1 className='text-5xl text-red-800'>hello</h1>
      <Image
        alt={photo.name}
        src={photo.src}
        className='w-full object-cover aspect-square'
      />
      <div className='bg-white p-4'>
        <h1 className='text-blue-500 text-2xl'>This is the id main</h1>
        <h2 className='text-xl font-semibold'>{photo.name}</h2>
        <h3>{photo.photographer}</h3>
        <h3>{photo.location}</h3>
      </div>
    </Modal>
  );
}
