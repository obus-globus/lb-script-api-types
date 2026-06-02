import type { Class } from '../../../../../../java/lang/Class.d.ts'
import type { Object } from '../../../../../../java/lang/Object.d.ts'
import type { Enum } from '../../../../../../java/lang/Enum.d.ts'
export class WebSocketServerProtocolHandler$ServerHandshakeStateEvent extends Enum<WebSocketServerProtocolHandler$ServerHandshakeStateEvent> {
    static HANDSHAKE_COMPLETE: WebSocketServerProtocolHandler$ServerHandshakeStateEvent;
    static HANDSHAKE_TIMEOUT: WebSocketServerProtocolHandler$ServerHandshakeStateEvent;
    static valueOf(paramarg0: Class<Object>, paramarg1: string): Object | null;
    static valueOf(paramarg0: string): WebSocketServerProtocolHandler$ServerHandshakeStateEvent;
    static values(): (Object | null)[];
    private constructor()
    name(): "HANDSHAKE_COMPLETE" | "HANDSHAKE_TIMEOUT";
}