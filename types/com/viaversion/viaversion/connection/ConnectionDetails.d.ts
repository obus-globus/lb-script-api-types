import type { UserConnection } from '../../../../com/viaversion/viaversion/api/connection/UserConnection.d.ts'
import type { Object } from '../../../../java/lang/Object.d.ts'
export class ConnectionDetails extends Object {
    static APP_CHANNEL: string;
    static MOD_CHANNEL: string;
    static PROXY_CHANNEL: string;
    static SERVER_CHANNEL: string;
    static sendConnectionDetails(paramarg0: UserConnection, paramarg1: string): void;
    static sendPlayerDetails(paramarg0: UserConnection, paramarg1: string): void;
    static sendServerDetails(paramarg0: UserConnection, paramarg1: string): void;
    constructor()
}