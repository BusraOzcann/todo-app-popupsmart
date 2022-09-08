import {SAYAC_ARTTIR, SAYAC_AZALT} from "../types"

const default_state = 0

const reducer = (state = default_state, action) => {
    switch(action.type){
        //he zaman state'i return etmelisin
        case SAYAC_ARTTIR:
            return state + 1;
            break;
        case SAYAC_AZALT:
            return state - 1;
            break;
        default:
            return state;
    }
}

export default reducer;