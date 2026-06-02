import type { Object } from '../../../java/lang/Object.d.ts'
import type { Route } from '../../../okhttp3/Route.d.ts'
export class RouteSelector$Selection extends Object {
    constructor(routes: Route[])
    // private nextRouteIndex: number;
    readonly routes: Route[];
    hasNext(): boolean;
    next(): Route;
}