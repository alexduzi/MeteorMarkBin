import React from 'react';

import Header from './Header';

export default App = (props) => {
    return (
        <div>
            <Header />
            {props.children}
        </div>
    );
};