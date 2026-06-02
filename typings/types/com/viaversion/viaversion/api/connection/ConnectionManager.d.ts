import type { UserConnection } from '../../../../../com/viaversion/viaversion/api/connection/UserConnection.d.ts'
import type { UUID } from '../../../../../java/util/UUID.d.ts'
import type { Object } from '../../../../../java/lang/Object.d.ts'
export interface ConnectionManager extends Object{
    getClientConnection(arg0: UUID): UserConnection;
    getClientConnections(): Map<UUID, UserConnection>;
    getConnectedClient(arg0: UUID): UserConnection;
    getConnectedClients(): Map<UUID, UserConnection>;
    getConnections(): UserConnection[];
    getServerConnection(arg0: UUID): UserConnection;
    getServerConnections(): Map<UUID, UserConnection>;
    hasClientConnection(arg0: UUID): boolean;
    hasServerConnection(arg0: UUID): boolean;
    isClientConnected(arg0: UUID): boolean;
    onDisconnect(arg0: UserConnection): void;
    onLoginSuccess(arg0: UserConnection): void;
}