import React from 'react';
import { useStoreActions } from 'easy-peasy';

const Comp = ({comp}) => {
    const removeComp = useStoreActions(actions => actions.removeComp);

    return (
        <div>
            <span>{comp.name}</span>
            <button onClick={() => removeComp(comp._id)}>
                &times;
            </button>
        </div>
    );
};

export default Comp; 