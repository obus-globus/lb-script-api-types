import type { Route } from '../../../../io/ktor/server/routing/Route.d.ts'
import type { Object } from '../../../../java/lang/Object.d.ts'
export class LocalPortRoutingBuilderKt extends Object {
    static localPort(self: Route, port: number, build: (param0: Route) => void): Route;
}