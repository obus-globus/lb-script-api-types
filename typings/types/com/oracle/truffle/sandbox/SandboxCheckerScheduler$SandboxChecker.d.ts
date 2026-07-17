import type { SandboxCheckerScheduler } from '../../../../com/oracle/truffle/sandbox/SandboxCheckerScheduler.d.ts'
import type { SandboxContext } from '../../../../com/oracle/truffle/sandbox/SandboxContext.d.ts'
import type { WeakReference } from '../../../../java/lang/ref/WeakReference.d.ts'
import type { TimeUnit } from '../../../../java/util/concurrent/TimeUnit.d.ts'
import type { Object } from '../../../../java/lang/Object.d.ts'
import type { Comparable } from '../../../../java/lang/Comparable.d.ts'
export abstract class SandboxCheckerScheduler$SandboxChecker extends Object implements Comparable<SandboxCheckerScheduler$SandboxChecker> {
    constructor(scheduler: SandboxCheckerScheduler, context: SandboxContext, period: number, timeUnit: TimeUnit)
    // private checkCount: number;
    // private context: WeakReference<SandboxContext>;
    // private finished: boolean;
    // private lastChangedActiveStatusCount: number;
    // private lastExecution: number;
    // private nextExecution: number;
    // private periodNs: number;
    // private scheduled: boolean;
    // private scheduler: SandboxCheckerScheduler;
    // private unscheduleOnNextIteration: boolean;
    checkLimit(): boolean;
    compareTo(o: SandboxCheckerScheduler$SandboxChecker): number;
    getCheckCount(): number;
    // private isScheduled(): boolean;
    logCancelPeriodicTask(c: SandboxContext, reason: string): void;
    logInactiveContext(c: SandboxContext): void;
    logReactivatedContext(c: SandboxContext): void;
    needsSchedule(): boolean;
    // private reschedule(): void;
    // private setScheduled(): void;
    // private shouldUnscheduleOnNextIteration(): boolean;
    // private unschedule(): void;
    // private unscheduleOnNextIteration(value: boolean): void;
}