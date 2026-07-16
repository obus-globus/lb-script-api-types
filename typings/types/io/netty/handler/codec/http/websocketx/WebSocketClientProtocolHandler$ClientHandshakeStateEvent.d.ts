import type { Class } from '../../../../../../java/lang/Class.d.ts'
import type { Enum } from '../../../../../../java/lang/Enum.d.ts'
export class WebSocketClientProtocolHandler$ClientHandshakeStateEvent extends Enum<WebSocketClientProtocolHandler$ClientHandshakeStateEvent> {
    static HANDSHAKE_COMPLETE: WebSocketClientProtocolHandler$ClientHandshakeStateEvent;
    static HANDSHAKE_ISSUED: WebSocketClientProtocolHandler$ClientHandshakeStateEvent;
    static HANDSHAKE_TIMEOUT: WebSocketClientProtocolHandler$ClientHandshakeStateEvent;
    static valueOf<T extends Enum<T>>(paramarg0: Class<T>, paramarg1: string): T;
    static valueOf(paramarg0: string): WebSocketClientProtocolHandler$ClientHandshakeStateEvent;
    static values(): WebSocketClientProtocolHandler$ClientHandshakeStateEvent[];
    private constructor()
    name(): "HANDSHAKE_TIMEOUT" | "HANDSHAKE_ISSUED" | "HANDSHAKE_COMPLETE";
}