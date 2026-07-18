import type { Route } from '../../../../io/ktor/server/routing/Route.d.ts'
import type { Object } from '../../../../java/lang/Object.d.ts'
import type { Regex } from '../../../../kotlin/text/Regex.d.ts'
export class HostsRoutingBuilderKt extends Object {
    static host(self: Route, host: string, port: number, build: (param0: Route) => void): Route;
    static host(self: Route, hosts: string[], ports: number[], build: (param0: Route) => void): Route;
    static host(self: Route, hosts: string[], hostPatterns: Regex[], ports: number[], build: (param0: Route) => void): Route;
    static host(self: Route, hostPattern: Regex, port: number, build: (param0: Route) => void): Route;
    static port(self: Route, ports: number[], build: (param0: Route) => void): Route;
}