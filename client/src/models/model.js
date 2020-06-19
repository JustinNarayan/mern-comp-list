import modelComps from './modelComps';

const { comps, getComps, addComp, setComps, add, remove } = modelComps;

export default {
    // State
    comps,

    // Thunks
    getComps,
    addComp,

    // Actions
    setComps,
    add,
    remove
};