import type { IOException } from '../../../java/io/IOException.d.ts'
import type { Object } from '../../../java/lang/Object.d.ts'
import type { Call } from '../../../okhttp3/Call.d.ts'
import type { Connection } from '../../../okhttp3/Connection.d.ts'
import type { Route } from '../../../okhttp3/Route.d.ts'
import type { ConnectionListener$Companion } from '../../../okhttp3/internal/connection/ConnectionListener$Companion.d.ts'
export abstract class ConnectionListener extends Object {
    static Companion: ConnectionListener$Companion;
    constructor()
    connectEnd(connection: Connection, route: Route, call: Call): void;
    connectFailed(route: Route, call: Call, failure: IOException): void;
    connectStart(route: Route, call: Call): void;
    connectionAcquired(connection: Connection, call: Call): void;
    connectionClosed(connection: Connection): void;
    connectionReleased(connection: Connection, call: Call): void;
    noNewExchanges(connection: Connection): void;
}