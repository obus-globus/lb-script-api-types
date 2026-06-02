import type { TimeUnit } from '../java/util/concurrent/TimeUnit.d.ts'
import type { Object } from '../java/lang/Object.d.ts'
import type { TaskRunner } from '../okhttp3/internal/concurrent/TaskRunner.d.ts'
import type { ConnectionListener } from '../okhttp3/internal/connection/ConnectionListener.d.ts'
import type { RealConnectionPool } from '../okhttp3/internal/connection/RealConnectionPool.d.ts'
export class ConnectionPool extends Object {
    constructor()
    constructor(maxIdleConnections: number, keepAliveDuration: number, timeUnit: TimeUnit)
    constructor(maxIdleConnections: number, keepAliveDuration: number, timeUnit: TimeUnit, taskRunner: TaskRunner, connectionListener: ConnectionListener)
    constructor(maxIdleConnections: number, keepAliveDuration: number, timeUnit: TimeUnit, connectionListener: ConnectionListener)
    constructor(delegate: RealConnectionPool)
    /*not mapped: */ getConnectionListener$okhttp(): ConnectionListener;
    // private delegate: RealConnectionPool;
    /*not mapped: */ getDelegate$okhttp(): RealConnectionPool;
    connectionCount(): number;
    evictAll(): void;
    idleConnectionCount(): number;
}