import React from 'react';
import {Link} from 'react-router-dom';

function CardItem(props) {
  return (
    <>
      <li className="cards__items">
        <Link to={props.path}
        className="cards__item__link">
          <figure className='cards__item_pic-wrap' data-category={props.label}>
           <img src={props.src} alt="Theater"
           className='cards__item__img'>
           </img>
          </figure>
          <div className="cards__item__info">
            <h5 className="cards__item__text" > 
            {props.text}
            </h5>
          </div>
        </Link>
      </li>
    </>
  )
}

export default CardItem