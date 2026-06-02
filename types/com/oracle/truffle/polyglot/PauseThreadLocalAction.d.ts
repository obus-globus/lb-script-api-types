import type { ThreadLocalAction } from '../../../../com/oracle/truffle/api/ThreadLocalAction.d.ts'
import type { ThreadLocalAction$Access } from '../../../../com/oracle/truffle/api/ThreadLocalAction$Access.d.ts'
import type { PolyglotContextImpl } from '../../../../com/oracle/truffle/polyglot/PolyglotContextImpl.d.ts'
import type { Future } from '../../../../java/util/concurrent/Future.d.ts'
import type { TimeUnit } from '../../../../java/util/concurrent/TimeUnit.d.ts'
import type { Object } from '../../../../java/lang/Object.d.ts'
export class PauseThreadLocalAction extends ThreadLocalAction {
    constructor(context: PolyglotContextImpl)
    // private context: PolyglotContextImpl;
    // private pause: boolean;
    // private pauseActionFuture: Future<void>;
    // private pauseComplete: boolean;
    // private pauseSync: Object;
    isPause(): boolean;
    perform(access: ThreadLocalAction$Access): void;
    resume(): void;
    setPauseActionFuture(pauseActionFuture: Future<void>): void;
    waitUntilPaused(actionFuture: Future<Object>): void;
    waitUntilPaused(actionFuture: Future<Object>, timeout: number, unit: TimeUnit): void;
    wasPaused(actionFuture: Future<Object>): boolean;
}