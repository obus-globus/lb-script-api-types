import type { ContentType } from '../../../../io/ktor/http/ContentType.d.ts'
import type { HttpMethod } from '../../../../io/ktor/http/HttpMethod.d.ts'
import type { Route } from '../../../../io/ktor/server/routing/Route.d.ts'
import type { RoutingContext } from '../../../../io/ktor/server/routing/RoutingContext.d.ts'
import type { Object } from '../../../../java/lang/Object.d.ts'
export class RoutingBuilderKt extends Object {
    static accept(self: Route, contentTypes: ContentType[], build: (param0: Route) => void): Route;
    static contentType(self: Route, contentType: ContentType, build: (param0: Route) => void): Route;
    static contentType(self: Route, contentTypes: ContentType[], build: (param0: Route) => void): Route;
    static createRouteFromPath(self: Route, path: string): Route;
    static delete(self: Route, path: string, body: (param0: RoutingContext) => void): Route;
    static delete(self: Route, body: (param0: RoutingContext) => void): Route;
    static get(self: Route, path: string, body: (param0: RoutingContext) => void): Route;
    static get(self: Route, body: (param0: RoutingContext) => void): Route;
    static head(self: Route, path: string, body: (param0: RoutingContext) => void): Route;
    static head(self: Route, body: (param0: RoutingContext) => void): Route;
    static header(self: Route, name: string, value: string, build: (param0: Route) => void): Route;
    static method(self: Route, method: HttpMethod, body: (param0: Route) => void): Route;
    static optionalParam(self: Route, name: string, build: (param0: Route) => void): Route;
    static options(self: Route, path: string, body: (param0: RoutingContext) => void): Route;
    static options(self: Route, body: (param0: RoutingContext) => void): Route;
    static param(self: Route, name: string, value: string, build: (param0: Route) => void): Route;
    static param(self: Route, name: string, build: (param0: Route) => void): Route;
    static patch(self: Route, path: string, body: (param0: RoutingContext) => void): Route;
    static patch(self: Route, body: (param0: RoutingContext) => void): Route;
    static patchTyped<R extends unknown>(self: Route, body: (param0: RoutingContext, param1: R) => void): Route;
    static patchTypedPath<R extends unknown>(self: Route, path: string, body: (param0: RoutingContext, param1: R) => void): Route;
    static post(self: Route, path: string, body: (param0: RoutingContext) => void): Route;
    static post(self: Route, body: (param0: RoutingContext) => void): Route;
    static postTyped<R extends unknown>(self: Route, body: (param0: RoutingContext, param1: R) => void): Route;
    static postTypedPath<R extends unknown>(self: Route, path: string, body: (param0: RoutingContext, param1: R) => void): Route;
    static put(self: Route, path: string, body: (param0: RoutingContext) => void): Route;
    static put(self: Route, body: (param0: RoutingContext) => void): Route;
    static putTyped<R extends unknown>(self: Route, body: (param0: RoutingContext, param1: R) => void): Route;
    static putTypedPath<R extends unknown>(self: Route, path: string, body: (param0: RoutingContext, param1: R) => void): Route;
    static query(self: Route, path: string, body: (param0: RoutingContext) => void): Route;
    static query(self: Route, body: (param0: RoutingContext) => void): Route;
    static queryTyped<R extends unknown>(self: Route, body: (param0: RoutingContext, param1: R) => void): Route;
    static queryTypedPath<R extends unknown>(self: Route, path: string, body: (param0: RoutingContext, param1: R) => void): Route;
    static route(self: Route, path: string, method: HttpMethod, build: (param0: Route) => void): Route;
    static route(self: Route, path: string, build: (param0: Route) => void): Route;
}