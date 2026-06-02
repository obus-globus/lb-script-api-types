import type { Class } from '../../../../../../java/lang/Class.d.ts'
import type { Object } from '../../../../../../java/lang/Object.d.ts'
import type { Enum } from '../../../../../../java/lang/Enum.d.ts'
export class WebSocketClientProtocolHandler$ClientHandshakeStateEvent extends Enum<WebSocketClientProtocolHandler$ClientHandshakeStateEvent> {
    static HANDSHAKE_COMPLETE: WebSocketClientProtocolHandler$ClientHandshakeStateEvent;
    static HANDSHAKE_ISSUED: WebSocketClientProtocolHandler$ClientHandshakeStateEvent;
    static HANDSHAKE_TIMEOUT: WebSocketClientProtocolHandler$ClientHandshakeStateEvent;
    static valueOf(paramarg0: Class<Object>, paramarg1: string): Object | null;
    static valueOf(paramarg0: string): WebSocketClientProtocolHandler$ClientHandshakeStateEvent;
    static values(): (Object | null)[];
    private constructor()
    name(): "HANDSHAKE_TIMEOUT" | "HANDSHAKE_ISSUED" | "HANDSHAKE_COMPLETE";
}