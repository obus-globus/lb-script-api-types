import type { StackTraceElement } from '../../../../java/lang/StackTraceElement.d.ts'
import type { Thread } from '../../../../java/lang/Thread.d.ts'
import type { Object } from '../../../../java/lang/Object.d.ts'
import type { CoroutineContext } from '../../../../kotlin/coroutines/CoroutineContext.d.ts'
import type { CoroutineStackFrame } from '../../../../kotlin/coroutines/jvm/internal/CoroutineStackFrame.d.ts'
import type { DebugCoroutineInfoImpl } from '../../../../kotlinx/coroutines/debug/internal/DebugCoroutineInfoImpl.d.ts'
export class DebugCoroutineInfo extends Object {
    constructor(source: DebugCoroutineInfoImpl, context: CoroutineContext)
    readonly context: CoroutineContext;
    // private creationStackBottom: CoroutineStackFrame | null;
    /*not mapped: */ getCreationStackBottom$kotlinx_coroutines_core(): CoroutineStackFrame | null;
    readonly creationStackTrace: StackTraceElement[];
    readonly lastObservedFrame: CoroutineStackFrame | null;
    // private lastObservedStackTrace: StackTraceElement[];
    /*not mapped: */ lastObservedStackTrace(): StackTraceElement[];
    readonly lastObservedThread: Thread | null;
    readonly sequenceNumber: number;
    readonly state: string;
}