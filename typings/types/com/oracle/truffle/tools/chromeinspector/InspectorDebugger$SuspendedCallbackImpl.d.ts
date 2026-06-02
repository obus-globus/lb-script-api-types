import type { Breakpoint$Kind } from '../../../../../com/oracle/truffle/api/debug/Breakpoint$Kind.d.ts'
import type { SuspendedCallback } from '../../../../../com/oracle/truffle/api/debug/SuspendedCallback.d.ts'
import type { SuspendedEvent } from '../../../../../com/oracle/truffle/api/debug/SuspendedEvent.d.ts'
import type { Thread } from '../../../../../java/lang/Thread.d.ts'
import type { Reference } from '../../../../../java/lang/ref/Reference.d.ts'
import type { ScheduledExecutorService } from '../../../../../java/util/concurrent/ScheduledExecutorService.d.ts'
import type { ScheduledFuture } from '../../../../../java/util/concurrent/ScheduledFuture.d.ts'
import type { AtomicReference } from '../../../../../java/util/concurrent/atomic/AtomicReference.d.ts'
import type { Object } from '../../../../../java/lang/Object.d.ts'
import type { JSONObject } from '../../../../../org/graalvm/shadowed/org/json/JSONObject.d.ts'
export class InspectorDebugger$SuspendedCallbackImpl extends Object implements SuspendedCallback {
    private constructor(null_: InspectorDebugger$SuspendedCallbackImpl)
    // private future: AtomicReference<ScheduledFuture<Object>>;
    // private locked: Thread;
    // private scheduler: ScheduledExecutorService;
    // private schedulerThread: Reference<Thread>;
    // private dispose(): void;
    // private getHaltData(se: SuspendedEvent): JSONObject;
    // private getHaltReason(kinds: Breakpoint$Kind[]): string;
    // private lock(): void;
    onSuspend(se: SuspendedEvent): void;
    // private unlock(): void;
}