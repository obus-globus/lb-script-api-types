import type { Class } from '../../../../../../java/lang/Class.d.ts'
import type { Enum } from '../../../../../../java/lang/Enum.d.ts'
export class WebSocketServerProtocolHandler$ServerHandshakeStateEvent extends Enum<WebSocketServerProtocolHandler$ServerHandshakeStateEvent> {
    static HANDSHAKE_COMPLETE: WebSocketServerProtocolHandler$ServerHandshakeStateEvent;
    static HANDSHAKE_TIMEOUT: WebSocketServerProtocolHandler$ServerHandshakeStateEvent;
    static valueOf<T extends Enum<T>>(paramarg0: Class<T>, paramarg1: string): T;
    static valueOf(paramarg0: string): WebSocketServerProtocolHandler$ServerHandshakeStateEvent;
    static values(): WebSocketServerProtocolHandler$ServerHandshakeStateEvent[];
    private constructor()
    name(): "HANDSHAKE_COMPLETE" | "HANDSHAKE_TIMEOUT";
}