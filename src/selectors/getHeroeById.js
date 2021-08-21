import { heroes } from "../data/heroe";

export const getHeroByPublisher = (id) =>{

  return heroes.find( hero => hero.id === id )
}