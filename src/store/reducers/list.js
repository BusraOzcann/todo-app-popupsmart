import {LISTE_EKLE} from "../types"

const default_state = [];

const reducer = (state = default_state, action) => {
    switch(action.type){
        //he zaman state'i return etmelisin
        case LISTE_EKLE:
            return [...state, action.payload];
            break;
        default:
            return state;
    }
}

export default reducer;