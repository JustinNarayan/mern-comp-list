import React, { useState } from 'react';
import { useStoreActions } from 'easy-peasy';

const AddComp = () => {
    const [name, setName] = useState('');

    const addComp = useStoreActions(actions => actions.addComp);

    const onSubmit = (e) => {
        e.preventDefault();
        addComp({
            name
        })
    }

    return (
        <div>
            <form onSubmit={onSubmit}>
                <input
                    type="text"
                    value={name}
                    onChange={e => setName(e.target.value)}
                    placeholder="Add comp..." />
                <input type="submit" value="Add Comp" />
            </form>
        </div>
    );
};

export default AddComp;