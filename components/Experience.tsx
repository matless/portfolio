import { workExperience } from '@/data'
import React from 'react'
import { Button } from './ui/MovingBorders'

const Experience = () => {
  return (
    <div className="py-20" id="testimonials">
        <h1 className="heading">
        My
            <span className="text-purple"> work Experience</span>
        </h1>
         <div className="w-full mt-12 grid lg:grid-cols-4 grid-cols-1 gap-10">
            {workExperience.map((card) => (
                <Button
                key={card.id}
                duration={Math.floor(Math.random() * 10000) + 10000}>
                    <div className="flex lg:flex-row flex-col lg:items-center p-3 py-6 md:p-5 lg:p-10 gap-2">
                        <img src={card.thumbnail} alt={card.thumbnail} className='"lg:w-32 md:w-20 w-16' />
                    </div>
                </Button>
            ))}
        </div>
    </div>
  )
}

export default Experience