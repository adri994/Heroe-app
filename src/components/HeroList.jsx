import React, {useMemo} from 'react'
import { getHeroesByPublisher } from '../selectors/getHeroeByPublisher'
import HeroCard from './HeroCard'

const HeroList = ({publisher}) => {

  const heroes = useMemo(()=>getHeroesByPublisher(publisher), [publisher])

  return (
    <div className="card-columns animate__animated animate__bounce animate__delay-2s">
      {
        heroes.map(hero=>
          <HeroCard
            key={hero.id}
            {
            ...hero} />
        )
      }
    </div>
  )
}

export default HeroList
