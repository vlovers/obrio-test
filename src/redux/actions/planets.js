import { planetsApi, peoplesApi } from "../../utils/api";

const planetsActions = {
    setPlanets: (items) => ({
        type: "PLANETS:SET_ITEMS",
        payload: items
    }),
    fetchPlanets: () => (dispatch, getState) => {
        const { planets } = getState();
        planetsApi
            .getPlanets(planets.planetsPage)
            .then(({ data }) => {
                dispatch(planetsActions.setPlanets(data.results));
            })
    },
    setSelectPlanet: (item) => ({
        type: "PLANETS:SELECT_ITEM",
        payload: item
    }),
    fetchSelectPlanet: (url) => dispatch => {
        
        planetsApi
            .getPlanetByURL(url)
            .then(( planet ) => {
                let postResidents = []
                
                planet.data.residents.map((resident, index) => {
                    peoplesApi
                        .getPeoplesByUrl(resident)
                        .then((resident) => {
                            console.log(planet.data.residents.length , postResidents.length + 1);
                            
                            
                            if(planet.data.residents.length === postResidents.length + 1 ){
                                const postData = Object.assign(planet.data, { residents: [...postResidents] });
                                console.log(postData);
                                dispatch(planetsActions.setSelectPlanet(postData));

                            } else {
                                postResidents = [...postResidents, resident.data]
                                console.log(postResidents);

                            }
                        })
                })
            })
    },
};
  
export default planetsActions;