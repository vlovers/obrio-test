import { planetsApi, peoplesApi } from "../../utils/api";

const planetsActions = {
    //Передача планет в стор
    setPlanets: (items, nextPageErr) => ({
        type: "PLANETS:SET_ITEMS",
        payload: {
            items: items,
            nextPageErr: nextPageErr
        }
    }),

    
    //Получение планет
    fetchPlanets: () => (dispatch, getState) => {
        const { planets } = getState();
        planetsApi
            .getPlanets(planets.planetsPage + 1)
            .then(({ data }) => {
                dispatch(planetsActions.setPlanets(data.results, false));
            }).catch(() => {
                dispatch(planetsActions.setPlanets(null, true));
                
            })
        return "err"
    },
    //Выбраная планета
    setSelectPlanet: (item) => ({
        type: "PLANETS:SELECT_ITEM",
        payload: item
    }),
    //Получение выбранной планеты вместе с известными жителями
    fetchSelectPlanet: (url) => dispatch => {
        
        planetsApi
            .getPlanetByURL(url)
            .then(( planet ) => {
                let postResidents = []
                
                if(planet.data.residents.length > 0) {
                    planet.data.residents.map((resident) => {
                        peoplesApi
                            .getPeoplesByUrl(resident)
                            .then((resident) => {

                                if(planet.data.residents.length === postResidents.length + 1){

                                    postResidents = [...postResidents, resident.data]
                                    
                                    const postData = Object.assign(planet.data, { residents: [...postResidents] });
                                    dispatch(planetsActions.setSelectPlanet(postData));

                                } else {
                                    postResidents = [...postResidents, resident.data]

                                }

                            })
                    })
                } else {
                    dispatch(planetsActions.setSelectPlanet(planet.data));
                }
            })
    },
};
  
export default planetsActions;