import type { HttpMethod } from '../../../../io/ktor/http/HttpMethod.d.ts'
import type { Route } from '../../../../io/ktor/server/routing/Route.d.ts'
import type { RoutingContext } from '../../../../io/ktor/server/routing/RoutingContext.d.ts'
import type { Object } from '../../../../java/lang/Object.d.ts'
import type { Regex } from '../../../../kotlin/text/Regex.d.ts'
export class RegexRoutingKt extends Object {
    static delete(self: Route, path: Regex, body: (param0: RoutingContext) => void): Route;
    static get(self: Route, path: Regex, body: (param0: RoutingContext) => void): Route;
    static head(self: Route, path: Regex, body: (param0: RoutingContext) => void): Route;
    static options(self: Route, path: Regex, body: (param0: RoutingContext) => void): Route;
    static patch(self: Route, path: Regex, body: (param0: RoutingContext) => void): Route;
    static patchTypedPath<R extends unknown>(self: Route, path: Regex, body: (param0: RoutingContext, param1: R) => void): Route;
    static post(self: Route, path: Regex, body: (param0: RoutingContext) => void): Route;
    static postTypedPath<R extends unknown>(self: Route, path: Regex, body: (param0: RoutingContext, param1: R) => void): Route;
    static put(self: Route, path: Regex, body: (param0: RoutingContext) => void): Route;
    static putTypedPath<R extends unknown>(self: Route, path: Regex, body: (param0: RoutingContext, param1: R) => void): Route;
    static query(self: Route, path: Regex, body: (param0: RoutingContext) => void): Route;
    static queryTypedPath<R extends unknown>(self: Route, path: Regex, body: (param0: RoutingContext, param1: R) => void): Route;
    static route(self: Route, path: Regex, method: HttpMethod, build: (param0: Route) => void): Route;
    static route(self: Route, path: Regex, build: (param0: Route) => void): Route;
}