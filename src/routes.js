import Main from './components/Main.vue';
import StateStations from './components/StateStations.vue';
import StationInfo from './components/StationInfo.vue';

export const routes = [{
    path: '/',
    name: "Main",
    component: Main
}, {
    path: '/:state',
    name: "StateStations",
    component: StateStations,
},
{
    path: '/:state/:station',
    name: "StationInfo",
    component: StationInfo
}
]