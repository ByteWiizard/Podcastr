import React from 'react'
import { Button } from "@/components/ui/button"
import { podcastData } from '@/constants'
import PodcastCard from '@/components/PodcastCard'

// reactArrowFunctionExportComponent (rafce)


const Home = () => {
  return (
    <div className='mt-9 flex flex-col gap-9'>
      <section className='flex flex-col gap-5'>
        <h1 className='text-20 font-bold text-white-1'>
          Trending Podcasts
        </h1>

        <div className='podcast_grid'>
          {
            podcastData.map(({ id, title, description, imgURL }) => {
              return (
                <PodcastCard
                  key={id}
                  PodcastId={id}
                  imgURL={imgURL}
                  title={title}
                  description={description}
                />
              );
            })
          }
        </div>


      </section>
    </div>
  )
}

export default Home
