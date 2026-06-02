import type { Socket } from '../../../java/net/Socket.d.ts'
import type { Object } from '../../../java/lang/Object.d.ts'
import type { Route } from '../../../okhttp3/Route.d.ts'
import type { TaskRunner } from '../../../okhttp3/internal/concurrent/TaskRunner.d.ts'
import type { RealConnection } from '../../../okhttp3/internal/connection/RealConnection.d.ts'
import type { RealConnectionPool } from '../../../okhttp3/internal/connection/RealConnectionPool.d.ts'
export class RealConnection$Companion extends Object {
    IDLE_CONNECTION_HEALTHY_NS: number;
    newTestConnection(taskRunner: TaskRunner, connectionPool: RealConnectionPool, route: Route, socket: Socket, idleAtNs: number): RealConnection;
}