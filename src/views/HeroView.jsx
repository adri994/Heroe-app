import React from 'react'
import { Redirect, useParams } from 'react-router-dom'
import { getHeroByPublisher } from '../selectors/getHeroeById'

const HeroView = ({history}) => {

  // Nos permite conseguir los parametros
  const { heroeId } = useParams()

  const hero = getHeroByPublisher(heroeId)

  if (!hero) return <Redirect to="/" />

  const { superhero,
    publisher,
    alter_ego,
    first_appearance,
    characters } = hero

  const handleReturn = () =>{

    // para saber las navegacion que ha tenido la persona en la apgina
    if( history.length <= 2) history.push('/')
    else history.goBack() 
  }

  return (
    <div>
      <div className="row mt-5">
        <div className="col-4">
          <img
            src={`../assets/heroes/${heroeId}.jpg`}
            alt={superhero}
            className="img-thumbnail animate__animated animate__fadeInLeft"
          />
        </div>

        <div className="col-8 animate__animated animate__fadeIn">
          <h3> {superhero} </h3>
          <ul className="list-group list-group-flush">
            <li className="list-group-item"> <b> Alter ego: </b> {alter_ego} </li>
            <li className="list-group-item"> <b> Publisher: </b> {publisher} </li>
            <li className="list-group-item"> <b> First appearance: </b> {first_appearance} </li>
          </ul>

          <h5> Characters </h5>
          <p> {characters} </p>

          <button
            className="btn btn-outline-info"
            onClick={handleReturn}
          >
            Return
          </button>

        </div>

      </div>

    </div>
  )
}

export default HeroView
