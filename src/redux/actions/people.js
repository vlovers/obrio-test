import { planetsApi, peoplesApi } from "../../utils/api";


const planetsActions = {
    setPeople: (items) => ({
        type: "PEOPLE:SET_ITEMS",
        payload: items
    }),
    fetchPeople: () => dispatch => {
        planetsApi
            .getPlanets()
            .then(({ data }) => {
                dispatch(planetsActions.setPeople(data.results));
            })
    }
};
  
export default planetsActions;