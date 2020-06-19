/*eslint-disable*/
import React, { Fragment, useEffect } from 'react';
import { useStoreState, useStoreActions } from 'easy-peasy'; 
import Comp from './Comp';

const Comps = () => {
    const comps = useStoreState(state => state.comps);
    const getComps = useStoreActions(actions => actions.getComps);

    // Use Effect will execute certain code whenever a variable in the array is updated
    useEffect(() => {
        getComps();
        console.log("Called");
    }, [getComps]);

    return (
        <Fragment>
            <h1>Comps</h1>
            {comps.map(comp => (
                <Comp comp={comp} key={comp._id} />
            ))}
        </Fragment>
    );
}

export default Comps;