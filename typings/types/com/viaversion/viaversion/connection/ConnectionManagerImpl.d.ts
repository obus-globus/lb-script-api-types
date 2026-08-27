import type { JavaMap } from '../../../../JavaMap.d.ts'
import type { ConnectionManager } from '../../../../com/viaversion/viaversion/api/connection/ConnectionManager.d.ts'
import type { UserConnection } from '../../../../com/viaversion/viaversion/api/connection/UserConnection.d.ts'
import type { UUID } from '../../../../java/util/UUID.d.ts'
import type { Object } from '../../../../java/lang/Object.d.ts'
export class ConnectionManagerImpl extends Object implements ConnectionManager {
    constructor()
    readonly clientConnections: JavaMap<UUID, UserConnection>;
    readonly connections: UserConnection[];
    // private connectionsView: UserConnection[];
    readonly serverConnections: JavaMap<UUID, UserConnection>;
    getClientConnection(arg0: UUID): UserConnection;
    getClientConnections(): JavaMap<UUID, UserConnection>;
    getConnectedClient(arg0: UUID): UserConnection;
    getConnectedClients(): JavaMap<UUID, UserConnection>;
    getConnections(): UserConnection[];
    getServerConnection(arg0: UUID): UserConnection;
    getServerConnections(): JavaMap<UUID, UserConnection>;
    hasClientConnection(arg0: UUID): boolean;
    hasServerConnection(arg0: UUID): boolean;
    isClientConnected(arg0: UUID): boolean;
    onDisconnect(arg0: UserConnection): void;
    onLoginSuccess(arg0: UserConnection): void;
}