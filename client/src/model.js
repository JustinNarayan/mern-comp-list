import { action, thunk } from 'easy-peasy';
import axios from 'axios';

const url = '/api/comps';

export default {
    comps: [],

    //Thunks
    getComps: thunk(async actions => {
        const res = await axios.get(url);
        const comps = res.data;

        actions.setComps(comps);
    }),

    // Actions
    setComps: action((state, comps) => {
        state.comps = comps;
    }),
    add: action((state, comp) => {
        comp.id = state.comps.length + 1;
        state.comps = [...state.comps, comp];
    }),
    remove: action((state, id) => {
        state.comps = state.comps.filter(comp => comp.id !== id);
    })
};