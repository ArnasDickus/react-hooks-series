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
    }
]