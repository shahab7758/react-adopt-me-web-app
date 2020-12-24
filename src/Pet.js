import React from 'react';

const Pet = (props) => {
    const {name, animal, breed} = props
    return ( 
        <div>
            <h2>{animal}</h2>
            <h4>{name}</h4>
            <h4>{breed}</h4>

        </div>
     );
}
 
export default Pet;