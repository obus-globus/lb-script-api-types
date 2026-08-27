import type { Proxy } from '../../../java/net/Proxy.d.ts'
import type { Object } from '../../../java/lang/Object.d.ts'
import type { Address } from '../../../okhttp3/Address.d.ts'
import type { HttpUrl } from '../../../okhttp3/HttpUrl.d.ts'
import type { Route } from '../../../okhttp3/Route.d.ts'
import type { RealCall } from '../../../okhttp3/internal/connection/RealCall.d.ts'
import type { RouteDatabase } from '../../../okhttp3/internal/connection/RouteDatabase.d.ts'
import type { RouteSelector$Companion } from '../../../okhttp3/internal/connection/RouteSelector$Companion.d.ts'
import type { RouteSelector$Selection } from '../../../okhttp3/internal/connection/RouteSelector$Selection.d.ts'
export class RouteSelector extends Object {
    static Companion: RouteSelector$Companion;
    constructor(address: Address, routeDatabase: RouteDatabase, call: RealCall, fastFallback: boolean)
    // private address: Address;
    // private call: RealCall;
    // private fastFallback: boolean;
    // private nextProxyIndex: number;
    // private postponedRoutes: Route[];
    // private proxies: Proxy[];
    // private routeDatabase: RouteDatabase;
    // private dnsLookup(proxy: Proxy, socketHost: string, socketPort: number): Route[];
    hasNext(): boolean;
    // private hasNextProxy(): boolean;
    next(): RouteSelector$Selection;
    // private nextProxy(): Route[];
    // private nextRoutes(proxy: Proxy): Route[];
    // private resetNextProxy(url: HttpUrl, proxy: Proxy | null): void;
}