import type { TimeUnit } from '../../../java/util/concurrent/TimeUnit.d.ts'
import type { Object } from '../../../java/lang/Object.d.ts'
import type { TaskRunner } from '../../../okhttp3/internal/concurrent/TaskRunner.d.ts'
import type { ExchangeFinder } from '../../../okhttp3/internal/connection/ExchangeFinder.d.ts'
import type { RealConnection } from '../../../okhttp3/internal/connection/RealConnection.d.ts'
import type { RoutePlanner } from '../../../okhttp3/internal/connection/RoutePlanner.d.ts'
import type { RoutePlanner$ConnectResult } from '../../../okhttp3/internal/connection/RoutePlanner$ConnectResult.d.ts'
import type { RoutePlanner$Plan } from '../../../okhttp3/internal/connection/RoutePlanner$Plan.d.ts'
export class FastFallbackExchangeFinder extends Object implements ExchangeFinder {
    constructor(routePlanner: RoutePlanner, taskRunner: TaskRunner)
    // private connectDelayNanos: number;
    // private connectResults: RoutePlanner$ConnectResult[];
    // private nextTcpConnectAtNanos: number;
    readonly routePlanner: RoutePlanner;
    // private taskRunner: TaskRunner;
    // private tcpConnectsInFlight: RoutePlanner$Plan[];
    // private awaitTcpConnect(timeout: number, unit: TimeUnit): RoutePlanner$ConnectResult | null;
    // private cancelInFlightConnects(): void;
    find(): RealConnection;
    // private launchTcpConnect(): RoutePlanner$ConnectResult | null;
}