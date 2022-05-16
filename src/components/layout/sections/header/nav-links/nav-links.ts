import { routes } from "@shared/routes";

interface INavLinks {
    display: boolean;
    routeName: string;
    routeLink: string;
}

export const navLinks: INavLinks[] = [
    {
        display: true,
        routeName: 'State Hook',
        routeLink: routes['use-state']
    },
    {
        display: true,
        routeName: 'Use Reducer',
        routeLink: routes['use-reducer']
    },
    {
        display: true,
        routeName: 'Use Effect',
        routeLink: routes['use-effect']
    },
    {
        display: true,
        routeName: 'Use Ref',
        routeLink: routes['use-ref']
    },
]