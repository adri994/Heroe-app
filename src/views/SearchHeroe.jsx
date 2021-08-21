import React, { useMemo, useState } from 'react'
import HeroCard from '../components/HeroCard';
import queryString from 'query-string'

import { useLocation } from 'react-router-dom';
import { getHeroesByName } from '../selectors/getHeroeByName';

const SearchHeroe = ({history}) => {

  
  const { search } =useLocation()
  const { q='' } = useMemo(() => queryString.parse(search), [search])

  const [{name}, setNameHero] = useState({
    name:q
  })
  // para que no se actualice cada vez que cambias en el input
  const filteredHero =  useMemo(() => getHeroesByName(q), [q])

  const handleInputChange = ({target}) =>{
    setNameHero({
      ...name,
      [target.name]:target.value
    })
  }

  const handleSubmit = (e) =>{
    e.preventDefault()
    history.push(`?q=${name}`)
  }
  return (
    <div>
      <h3>Search Views</h3>
      <hr />
      <div className="row">
        <div className="col-5">
          <h4>Search Form</h4>
          <hr />
          <form onSubmit= {handleSubmit}>
            <input
              type="text"
              name="name"
              onChange = { handleInputChange }
              placeholder="heroe"
              className="form-control" />
            
            <button
              type="submit"
              className="btn mt-1 btn-primary">
              Search
            </button>
          </form>
        </div>
        <div className="col-7">
          <h4>Results</h4>
          <hr />
          {
            filteredHero.map(hero=>(
              <HeroCard
                key={hero.id}
                {...hero} />
            ))
          }
        </div>
      </div>
    </div>
  )
}

export default SearchHeroe
