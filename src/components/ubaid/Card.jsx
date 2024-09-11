import React, { useContext } from 'react';
import { CartContext } from '../contextt/Context';

const Card = ({ item, onDetailsClick, showDetails = false }) => {
  const shortDescription = item.description.split(' ').slice(0, 3).join(' ') + '...';
const {addToCart} = useContext(CartContext)
  return (
    <div className='px-2 mb-6'>
        <hr/>
        <h1 className='text-2xl text-white pt-6 pb-6'>Services : </h1>
      <div className="card bg-base-100 w-80 shadow-xl">
        <figure>
          <img className='p-2 max-h-40' src={item.image} alt={item.title} />
        </figure>
        <div className="card-body">
          <h2 className="card-title">
            {item.title}
            <div className="badge badge-secondary">NEW</div>
          </h2>
          <p>{showDetails ? item.description : shortDescription}</p>
          <div className="card-actions justify-center items-center">
          {!showDetails && (
            <button onClick={onDetailsClick} className="btn btn-primary mt-2">
              View Details
            </button>
          )}
          <button className='btn btn-success mt-2' onClick={()=> addToCart(item)}>Add-T-Cart</button>
          </div>

        </div>
      </div>
    </div>
  );
};

export default Card;
