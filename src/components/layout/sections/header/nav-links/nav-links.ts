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
    {
        display: true,
        routeName: 'Use Layout Effect',
        routeLink: routes['use-layout-effect']
    },
    {
        display: true,
        routeName: 'Use Imperative Handle',
        routeLink: routes['use-imperative-handle']
    },
    {
        display: true,
        routeName: 'Use Context Hook',
        routeLink: routes['use-context']
    },
    {
        display: true,
        routeName: 'Use Memo Hook',
        routeLink: routes['use-memo']
    },
]