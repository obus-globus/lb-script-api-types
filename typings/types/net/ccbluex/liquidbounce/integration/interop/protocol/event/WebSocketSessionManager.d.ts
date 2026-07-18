import type { WebSocketSession } from '../../../../../../../io/ktor/websocket/WebSocketSession.d.ts'
import type { Object } from '../../../../../../../java/lang/Object.d.ts'
import type { Throwable } from '../../../../../../../java/lang/Throwable.d.ts'
export class WebSocketSessionManager extends Object {
    static INSTANCE: WebSocketSessionManager;
    // private sessions: WebSocketSession[];
    add(session: WebSocketSession): void;
    broadcast(message: string, onError: (param0: WebSocketSession, param1: Throwable) => void): void;
    remove(session: WebSocketSession): void;
}