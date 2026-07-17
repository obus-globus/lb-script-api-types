import type { JavaMap } from '../../../../JavaMap.d.ts'
import type { ThreadLocalAction } from '../../../../com/oracle/truffle/api/ThreadLocalAction.d.ts'
import type { PolyglotContextImpl } from '../../../../com/oracle/truffle/polyglot/PolyglotContextImpl.d.ts'
import type { PolyglotThreadInfo } from '../../../../com/oracle/truffle/polyglot/PolyglotThreadInfo.d.ts'
import type { PolyglotThreadLocalActions$AbstractTLHandshake } from '../../../../com/oracle/truffle/polyglot/PolyglotThreadLocalActions$AbstractTLHandshake.d.ts'
import type { PolyglotThreadLocalActions$HandshakeConfig } from '../../../../com/oracle/truffle/polyglot/PolyglotThreadLocalActions$HandshakeConfig.d.ts'
import type { PolyglotThreadLocalActions$PolyglotStatisticsAction } from '../../../../com/oracle/truffle/polyglot/PolyglotThreadLocalActions$PolyglotStatisticsAction.d.ts'
import type { PolyglotThreadLocalActions$RecurringFuture } from '../../../../com/oracle/truffle/polyglot/PolyglotThreadLocalActions$RecurringFuture.d.ts'
import type { Thread } from '../../../../java/lang/Thread.d.ts'
import type { Timer } from '../../../../java/util/Timer.d.ts'
import type { Future } from '../../../../java/util/concurrent/Future.d.ts'
import type { Object } from '../../../../java/lang/Object.d.ts'
export class PolyglotThreadLocalActions extends Object {
    constructor(context: PolyglotContextImpl)
    // private activeEvents: JavaMap<PolyglotThreadLocalActions$AbstractTLHandshake, void>;
    // private context: PolyglotContextImpl;
    // private idCounter: number;
    // private intervalTimer: Timer;
    // private missingPollMillis: number;
    // private missingPollTimer: Timer;
    // private statistics: PolyglotThreadLocalActions$PolyglotStatisticsAction[];
    // private traceActions: boolean;
    hasActiveEvents(): boolean;
    // private initialize(): void;
    // private log(action: string, handshake: PolyglotThreadLocalActions$AbstractTLHandshake, details: string): void;
    // private logStatistics(): void;
    notifyContextClosed(): void;
    notifyEnterCreatedThread(): void;
    notifyLastDone(handshake: PolyglotThreadLocalActions$AbstractTLHandshake): void;
    notifyThreadActivation(info: PolyglotThreadInfo, active: boolean): ThreadLocalAction[];
    onContextPatch(): void;
    prepareContextStore(): void;
    // private setupIntervalTimer(interval: number): void;
    submit(threads: Thread[], originId: string, action: ThreadLocalAction, config: PolyglotThreadLocalActions$HandshakeConfig): Future<void>;
    submit(threads: Thread[], originId: string, action: ThreadLocalAction, config: PolyglotThreadLocalActions$HandshakeConfig, existingFuture: PolyglotThreadLocalActions$RecurringFuture): Future<void>;
    submit(threads: Thread[], originId: string, action: ThreadLocalAction, needsEnter: boolean): Future<void>;
}