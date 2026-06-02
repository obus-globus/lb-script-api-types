import type { Object } from '../../../java/lang/Object.d.ts'
import type { Address } from '../../../okhttp3/Address.d.ts'
import type { HttpUrl } from '../../../okhttp3/HttpUrl.d.ts'
import type { Request } from '../../../okhttp3/Request.d.ts'
import type { Route } from '../../../okhttp3/Route.d.ts'
import type { TaskRunner } from '../../../okhttp3/internal/concurrent/TaskRunner.d.ts'
import type { ConnectPlan } from '../../../okhttp3/internal/connection/ConnectPlan.d.ts'
import type { RealCall } from '../../../okhttp3/internal/connection/RealCall.d.ts'
import type { RealConnection } from '../../../okhttp3/internal/connection/RealConnection.d.ts'
import type { RealConnectionPool } from '../../../okhttp3/internal/connection/RealConnectionPool.d.ts'
import type { ReusePlan } from '../../../okhttp3/internal/connection/ReusePlan.d.ts'
import type { RouteDatabase } from '../../../okhttp3/internal/connection/RouteDatabase.d.ts'
import type { RoutePlanner } from '../../../okhttp3/internal/connection/RoutePlanner.d.ts'
import type { RoutePlanner$Plan } from '../../../okhttp3/internal/connection/RoutePlanner$Plan.d.ts'
import type { RouteSelector } from '../../../okhttp3/internal/connection/RouteSelector.d.ts'
import type { RouteSelector$Selection } from '../../../okhttp3/internal/connection/RouteSelector$Selection.d.ts'
export class RealRoutePlanner extends Object implements RoutePlanner {
    constructor(taskRunner: TaskRunner, connectionPool: RealConnectionPool, readTimeoutMillis: number, writeTimeoutMillis: number, socketConnectTimeoutMillis: number, socketReadTimeoutMillis: number, pingIntervalMillis: number, retryOnConnectionFailure: boolean, fastFallback: boolean, address: Address, routeDatabase: RouteDatabase, call: RealCall, request: Request)
    readonly address: Address;
    // private call: RealCall;
    // private connectionPool: RealConnectionPool;
    readonly deferredPlans: RoutePlanner$Plan[];
    // private doExtensiveHealthChecks: boolean;
    // private fastFallback: boolean;
    // private nextRouteToTry: Route | null;
    // private pingIntervalMillis: number;
    // private readTimeoutMillis: number;
    // private retryOnConnectionFailure: boolean;
    // private routeDatabase: RouteDatabase;
    // private routeSelection: RouteSelector$Selection | null;
    // private routeSelector: RouteSelector | null;
    // private socketConnectTimeoutMillis: number;
    // private socketReadTimeoutMillis: number;
    // private taskRunner: TaskRunner;
    // private writeTimeoutMillis: number;
    // private createTunnelRequest(route: Route): Request;
    hasNext(failedConnection: RealConnection | null): boolean;
    isCanceled(): boolean;
    plan(): RoutePlanner$Plan;
    planConnect(): ConnectPlan;
    planConnectToRoute(route: Route, routes: Route[] | null): ConnectPlan;
    // private planReuseCallConnection(): ReusePlan | null;
    planReusePooledConnection(planToReplace: ConnectPlan | null, routes: Route[] | null): ReusePlan | null;
    // private retryRoute(connection: RealConnection): Route | null;
    sameHostAndPort(url: HttpUrl): boolean;
}