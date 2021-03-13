const initialState ={
    items: [],
    selectPlanet: [],
    planetsPage: 1,
    planetsCount: 0
}

const planets = (state = initialState, {type, payload}) => {
    
    switch (type) {
        case "PLANETS:SET_ITEMS": 
            return {
                ...state,
                items: [...state.items, ...payload],
                planetsPage: state.planetsPage + 1,
                planetsCount: state.planetsCount + payload.length
            };
        case "PLANETS:SELECT_ITEM": 
            return {
                ...state,
                selectPlanet: payload
            };
        default:
            return state;
      }
};

export default planets;
