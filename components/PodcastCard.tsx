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

      <figure className='flex flex-col gap-2'>
        <Image
          src={imgURL}
          width={174}
          height={174}
          alt={title}
        />

      </figure>

    </div>
  )
}

export default PodcastCard
