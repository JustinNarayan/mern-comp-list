import React from 'react';
import { useStoreActions } from 'easy-peasy';

const Comp = ({comp}) => {
    const { remove } = useStoreActions(actions => ({
        remove: actions.remove 
    }));

    return (
        <div>
            <span>{comp.name}</span>
            <button onClick={() => remove(comp.id)}>
                &times;
            </button>
        </div>
    );
};

export default Comp; 