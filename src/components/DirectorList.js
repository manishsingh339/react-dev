import React from 'react';

const DirectorList = (props) => {
    console.log(props);
    const renderDirectors = (directors) => (
        directors ? 
            directors.map((director, $index) => (
                <div key={$index}>{director.name}</div>
            )):null
    )
    return (
        <div>
            {renderDirectors(props.directorslist)}
        </div>
    );
};

export default DirectorList;