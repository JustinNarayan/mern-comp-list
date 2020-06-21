import React, { useState } from 'react';
import { useStoreActions } from 'easy-peasy';
import { Button, Modal, ModalHeader, ModalBody } from 'reactstrap';

const AddComp = () => {
    // Set state variables
    const [modal, setModal] = useState(false);
    const [name, setName] = useState('');

    // Bring in addComp command
    const addComp = useStoreActions(actions => actions.addComp);

    // Define methods
    const toggleModal = () => setModal(!modal);
    const onSubmit = (e) => {
        e.preventDefault();
        addComp({
            name
        })
    }

    return (
        <div>
            <Button color="primary" onClick={toggleModal}>Add New Competition</Button>
            <Modal isOpen={modal} toggle={toggleModal}>
                <form onSubmit={onSubmit}>
                    <input
                        type="text"
                        value={name}
                        onChange={e => setName(e.target.value)}
                        placeholder="Add comp..." />
                    <input type="submit" value="Add Comp" />
                </form>
            </Modal>
        </div>
    );
};

export default AddComp;