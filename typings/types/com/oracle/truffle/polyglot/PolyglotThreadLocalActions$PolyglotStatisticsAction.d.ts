import type { ThreadLocalAction } from '../../../../com/oracle/truffle/api/ThreadLocalAction.d.ts'
import type { ThreadLocalAction$Access } from '../../../../com/oracle/truffle/api/ThreadLocalAction$Access.d.ts'
import type { PolyglotThreadLocalActions } from '../../../../com/oracle/truffle/polyglot/PolyglotThreadLocalActions.d.ts'
import type { StackTraceElement } from '../../../../java/lang/StackTraceElement.d.ts'
import type { Thread } from '../../../../java/lang/Thread.d.ts'
import type { LongSummaryStatistics } from '../../../../java/util/LongSummaryStatistics.d.ts'
import type { TimerTask } from '../../../../java/util/TimerTask.d.ts'
export class PolyglotThreadLocalActions$PolyglotStatisticsAction extends ThreadLocalAction {
    constructor(null_: PolyglotThreadLocalActions, thread: Thread)
    // private blockedIntervalStatistics: LongSummaryStatistics;
    // private blockedTime: number;
    // private intervalStatistics: LongSummaryStatistics;
    // private prevTime: number;
    // private safepointCount: number;
    // private stackTrace: StackTraceElement[];
    // private task: TimerTask;
    // private threadName: string;
    notifyBlocked(access: ThreadLocalAction$Access): void;
    notifyUnblocked(access: ThreadLocalAction$Access): void;
    perform(access: ThreadLocalAction$Access): void;
    // private prepareForNextRun(access: ThreadLocalAction$Access, now: number): void;
    toString(): string;
}