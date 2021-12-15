import React, { Fragment } from 'react';

export default function Cow ({ cowObj, nameClick }) {

    return (
      <Fragment>
        <div>
          <li onClick={() => nameClick(cowObj)}>
            {cowObj.name}
          </li>
        </div>
      </Fragment>
    );
}