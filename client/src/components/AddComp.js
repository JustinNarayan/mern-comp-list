import React, { useState } from 'react';
import { useStoreActions } from 'easy-peasy';

const AddComp = () => {
    const [name, setName] = useState('');

    const add = useStoreActions(actions => actions.add);

    const onSubmit = (e) => {
        e.preventDefault();
        add({
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