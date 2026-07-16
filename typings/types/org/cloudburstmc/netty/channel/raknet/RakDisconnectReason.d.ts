import type { Class } from '../../../../../java/lang/Class.d.ts'
import type { Enum } from '../../../../../java/lang/Enum.d.ts'
export class RakDisconnectReason extends Enum<RakDisconnectReason> {
    static ALREADY_CONNECTED: RakDisconnectReason;
    static BAD_PACKET: RakDisconnectReason;
    static CLOSED_BY_REMOTE_PEER: RakDisconnectReason;
    static CONNECTION_REQUEST_FAILED: RakDisconnectReason;
    static DISCONNECTED: RakDisconnectReason;
    static INCOMPATIBLE_PROTOCOL_VERSION: RakDisconnectReason;
    static IP_RECENTLY_CONNECTED: RakDisconnectReason;
    static NO_FREE_INCOMING_CONNECTIONS: RakDisconnectReason;
    static SHUTTING_DOWN: RakDisconnectReason;
    static TIMED_OUT: RakDisconnectReason;
    static valueOf<T extends Enum<T>>(paramarg0: Class<T>, paramarg1: string): T;
    static valueOf(paramarg0: string): RakDisconnectReason;
    static values(): RakDisconnectReason[];
    private constructor()
    name(): "CLOSED_BY_REMOTE_PEER" | "SHUTTING_DOWN" | "DISCONNECTED" | "TIMED_OUT" | "CONNECTION_REQUEST_FAILED" | "ALREADY_CONNECTED" | "NO_FREE_INCOMING_CONNECTIONS" | "INCOMPATIBLE_PROTOCOL_VERSION" | "IP_RECENTLY_CONNECTED" | "BAD_PACKET";
}