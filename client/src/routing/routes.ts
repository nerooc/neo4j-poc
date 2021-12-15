import { SingleDriver, SingleRacetrack, SingleTeam } from "../components";
import { Drivers, Racetracks, Teams } from "../pages";
import { IRoute } from "../types";

export const routes: IRoute[] = [
  {
    path: "/",
    exact: true,
    component: Drivers,
  },
  {
    path: "/drivers",
    exact: true,
    component: Drivers,
  },
  {
    path: "/racetracks",
    exact: true,
    component: Racetracks,
  },
  {
    path: "/teams",
    exact: true,
    component: Teams,
  },
  {
    path: "/drivers/:id",
    exact: true,
    component: SingleDriver,
  },
  {
    path: "/racetrack/:id",
    exact: true,
    component: SingleRacetrack,
  },
  {
    path: "/team/:id",
    exact: true,
    component: SingleTeam,
  },
];
