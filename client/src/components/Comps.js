import React, { Fragment, useEffect } from 'react';
import { useStoreState, useStoreActions } from 'easy-peasy'; 
import Comp from './Comp';

const Comps = () => {
    const comps = useStoreState(state => state.comps);
    const getComps = useStoreActions(actions => actions.getComps);

    useEffect(() => {
        getComps();
        //eslint-disable-next-line
    }, []);

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