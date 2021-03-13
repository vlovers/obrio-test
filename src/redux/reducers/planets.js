const initialState ={
    items: [],
    selectPlanet: [],
    planetsPage: 0,
    planetsCount: 0,
    nextPageErr: false
}

const planets = (state = initialState, {type, payload}) => {
    
    switch (type) {
        case "PLANETS:SET_ITEMS": 
            return {
                ...state,
                items: payload.items ? [...state.items, ...payload.items] : [...state.items],
                planetsPage: !payload.nextPageErr ? state.planetsPage + 1 : state.planetsPage,
                planetsCount: payload.items ? (state.planetsCount + payload.items.length) : state.planetsCount,
                nextPageErr: payload.nextPageErr

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
