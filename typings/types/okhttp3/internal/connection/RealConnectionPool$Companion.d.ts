import type { Object } from '../../../java/lang/Object.d.ts'
import type { ConnectionPool } from '../../../okhttp3/ConnectionPool.d.ts'
import type { RealConnectionPool } from '../../../okhttp3/internal/connection/RealConnectionPool.d.ts'
export class RealConnectionPool$Companion extends Object {
    get(connectionPool: ConnectionPool): RealConnectionPool;
}