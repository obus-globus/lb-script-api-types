import type { Object } from '../../../java/lang/Object.d.ts'
import type { Route } from '../../../okhttp3/Route.d.ts'
export class RouteDatabase extends Object {
    constructor()
    // private _failedRoutes: Route[];
    readonly failedRoutes: Route[];
    connected(route: Route): void;
    failed(failedRoute: Route): void;
    shouldPostpone(route: Route): boolean;
}