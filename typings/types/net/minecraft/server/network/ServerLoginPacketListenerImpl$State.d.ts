import type { Class } from '../../../../java/lang/Class.d.ts'
import type { Object } from '../../../../java/lang/Object.d.ts'
import type { Enum } from '../../../../java/lang/Enum.d.ts'
export class ServerLoginPacketListenerImpl$State extends Enum<ServerLoginPacketListenerImpl$State> {
    static ACCEPTED: ServerLoginPacketListenerImpl$State;
    static AUTHENTICATING: ServerLoginPacketListenerImpl$State;
    static HELLO: ServerLoginPacketListenerImpl$State;
    static KEY: ServerLoginPacketListenerImpl$State;
    static NEGOTIATING: ServerLoginPacketListenerImpl$State;
    static PROTOCOL_SWITCHING: ServerLoginPacketListenerImpl$State;
    static VERIFYING: ServerLoginPacketListenerImpl$State;
    static WAITING_FOR_DUPE_DISCONNECT: ServerLoginPacketListenerImpl$State;
    static valueOf(paramarg0: Class<Object>, paramarg1: string): Object | null;
    static valueOf(paramname: string): ServerLoginPacketListenerImpl$State;
    static values(): ServerLoginPacketListenerImpl$State[];
    private constructor()
    name(): "HELLO" | "KEY" | "AUTHENTICATING" | "NEGOTIATING" | "VERIFYING" | "WAITING_FOR_DUPE_DISCONNECT" | "PROTOCOL_SWITCHING" | "ACCEPTED";
}