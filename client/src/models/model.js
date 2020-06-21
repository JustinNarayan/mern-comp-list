import compModel from './compModel';

const { comps, getComps, addComp, removeComp, setComps } = compModel;

export default {
    // State
    comps,

    // Thunks
    getComps,
    addComp,
    removeComp,

    // Actions
    setComps
};