import React from 'react';

const Country = (props) => {
    console.log(props);
    const {name} = props.country;
    const countryStyle = {border: '1px solid gray', margin: '10px', padding: '10px'};
    return (
        <div style={countryStyle}>
            <h4>{name.common}</h4>
            <h4>{props.country.flag}</h4>
        </div>
    );
};

export default Country;