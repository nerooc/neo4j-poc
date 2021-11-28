import { Drivers, Home, Racetracks, Teams } from "../pages";
import { IRoute } from "../types";

export const routes: IRoute[] = [
    {
        path: '/',
        exact: true,
        component: Home
    },
    {
        path: '/drivers',
        exact: true,
        component: Drivers
    },
    {
        path: '/racetracks',
        exact: true,
        component: Racetracks
    },
    {
        path: '/teams',
        exact: true,
        component: Teams
    },
]