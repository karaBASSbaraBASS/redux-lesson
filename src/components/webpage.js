import React from 'react';
import CartList from '../containers/carlist';
import Details from '../containers/details';

const WebPage = () => {
  return (
    <div>
      <h3>Cars:</h3>
      <CartList />
      <hr />
      <h3>Details:</h3>
      <Details />
    </div>
  )
};
export default WebPage;