import { action, thunk } from 'easy-peasy';
import axios from 'axios';

const url = '/api/comps';

export default {
    // State
    comps: [],

    // Thunks
    getComps: thunk(async actions => {
        // Handle WS Call   
        const res = await axios.get(url);
        const comps = res.data;

        // Handle state control
        actions.setComps(comps);
    }),
    addComp: thunk(async (actions, comp) => {
        // Handle WS Call
        await axios.post(url, comp);

        actions.getComps();
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