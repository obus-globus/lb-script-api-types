import type { RealConnectionPool$cleanupTask$1 } from '../../../net/ccbluex/liquidbounce/features/module/modules/player/cheststealer/features/FeatureSilentScreen$drawInventoryTag$1.d.ts'
import type { TimeUnit } from '../../../java/util/concurrent/TimeUnit.d.ts'
import type { Object } from '../../../java/lang/Object.d.ts'
import type { Address } from '../../../okhttp3/Address.d.ts'
import type { Route } from '../../../okhttp3/Route.d.ts'
import type { TaskQueue } from '../../../okhttp3/internal/concurrent/TaskQueue.d.ts'
import type { TaskRunner } from '../../../okhttp3/internal/concurrent/TaskRunner.d.ts'
import type { ConnectionListener } from '../../../okhttp3/internal/connection/ConnectionListener.d.ts'
import type { RealCall } from '../../../okhttp3/internal/connection/RealCall.d.ts'
import type { RealConnection } from '../../../okhttp3/internal/connection/RealConnection.d.ts'
import type { RealConnectionPool$Companion } from '../../../okhttp3/internal/connection/RealConnectionPool$Companion.d.ts'
export class RealConnectionPool extends Object {
    static Companion: RealConnectionPool$Companion;
    constructor(taskRunner: TaskRunner, maxIdleConnections: number, keepAliveDuration: number, timeUnit: TimeUnit, connectionListener: ConnectionListener)
    // private cleanupQueue: TaskQueue;
    // private cleanupTask: RealConnectionPool$cleanupTask$1;
    // private connectionListener: ConnectionListener;
    /*not mapped: */ getConnectionListener$okhttp(): ConnectionListener;
    // private connections: RealConnection[];
    // private keepAliveDurationNs: number;
    /*not mapped: */ getKeepAliveDurationNs$okhttp(): number;
    // private maxIdleConnections: number;
    callAcquirePooledConnection(doExtensiveHealthChecks: boolean, address: Address, call: RealCall, routes: Route[] | null, requireMultiplexed: boolean): RealConnection | null;
    closeConnections(now: number): number;
    connectionBecameIdle(connection: RealConnection): boolean;
    connectionCount(): number;
    evictAll(): void;
    idleConnectionCount(): number;
    // private pruneAndGetAllocationCount(connection: RealConnection, now: number): number;
    put(connection: RealConnection): void;
    scheduleCloser(): void;
}