const initialState ={
    selectPeople: [],
}

const planets = (state = initialState, {type, payload}) => {
    
    switch (type) {
        case "PEOPLE:SET_ITEMS": 
            return {
                ...state,
                selectPeople: payload
            };
        default:
            return state;
      }
};

export default planets;
