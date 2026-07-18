import type { Route } from '../../../../io/ktor/server/routing/Route.d.ts'
import type { RouteSelector } from '../../../../io/ktor/server/routing/RouteSelector.d.ts'
import type { RoutingResolveTrace } from '../../../../io/ktor/server/routing/RoutingResolveTrace.d.ts'
import type { Object } from '../../../../java/lang/Object.d.ts'
export interface Routing extends Route, Object {
    createChild(selector: RouteSelector): Route;
    trace(block: (param0: RoutingResolveTrace) => void): void;
}