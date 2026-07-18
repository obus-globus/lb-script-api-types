import type { ServerSSESession } from '../../../../../../../io/ktor/server/sse/ServerSSESession.d.ts'
import type { Object } from '../../../../../../../java/lang/Object.d.ts'
import type { Throwable } from '../../../../../../../java/lang/Throwable.d.ts'
export class SseSessionManager extends Object {
    static INSTANCE: SseSessionManager;
    // private sessions: ServerSSESession[];
    add(session: ServerSSESession): void;
    broadcast(eventName: string, eventJson: string, onError: (param0: ServerSSESession, param1: Throwable) => void): void;
    remove(session: ServerSSESession): void;
}