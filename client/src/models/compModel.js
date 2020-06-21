import { action, thunk } from 'easy-peasy';
import axios from 'axios';

const url = '/api/comps/';

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
    removeComp: thunk(async (actions, id) => {
        // Handle WS Call
        await axios.delete(`${url}${id}`);

        actions.getComps();
    }),

    // Actions
    setComps: action((state, comps) => {
        state.comps = comps;
    })
};