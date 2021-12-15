import React, { Fragment } from 'react';
import Cow from './Cow.jsx';

export default function Cows ({ cows, nameClick }) {

    const mappedCows = cows.map(cow => (
      <Cow
        key={cow.id}
        cowObj={cow}
        nameClick={nameClick}
      />
    ));
    return (
      <Fragment>
        <h1>Welcome to the Farm!</h1>
        {mappedCows}
      </Fragment>
    );
}