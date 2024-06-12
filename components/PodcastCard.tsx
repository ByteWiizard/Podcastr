import React from 'react'
import Image from 'next/image'
const PodcastCard = ({ PodcastId, title, description, imgURL }: {
  PodcastId: number,
  title: string,
  description: string,
  imgURL: string,
}) => {
  return (
    <div className='cursor-pointer'>

      <figure className='flex flex-col gap-2 '>
        <Image
          src={imgURL}
          width={174}
          height={174}
          alt={title}
          className='aspect-sqaure h-fit w-full rounded-2xl 2xl:size-[200px] hover:scale-105 '
        />

        <div className='flex flex-col'>
          <h1 className='text-16 font-bold text-white-1 truncate'>{title}</h1>
          <h2 className='text-12 truncate font-normal capitalize text-white-4'>{description}</h2>
        </div>

      </figure>

    </div>
  )
}

export default PodcastCard
