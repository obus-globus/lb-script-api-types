import type { StackTraceElement } from '../../../../java/lang/StackTraceElement.d.ts'
import type { Thread } from '../../../../java/lang/Thread.d.ts'
import type { WeakReference } from '../../../../java/lang/ref/WeakReference.d.ts'
import type { Object } from '../../../../java/lang/Object.d.ts'
import type { Continuation } from '../../../../kotlin/coroutines/Continuation.d.ts'
import type { CoroutineContext } from '../../../../kotlin/coroutines/CoroutineContext.d.ts'
import type { CoroutineStackFrame } from '../../../../kotlin/coroutines/jvm/internal/CoroutineStackFrame.d.ts'
import type { StackTraceFrame } from '../../../../kotlinx/coroutines/debug/internal/StackTraceFrame.d.ts'
export class DebugCoroutineInfoImpl extends Object {
    constructor(context: CoroutineContext | null, creationStackBottom: StackTraceFrame | null, sequenceNumber: number)
    // private _context: WeakReference<CoroutineContext>;
    _lastObservedFrame: WeakReference<CoroutineStackFrame> | null;
    _state: string;
    readonly context: CoroutineContext | null;
    // private creationStackBottom: StackTraceFrame | null;
    /*not mapped: */ getCreationStackBottom$kotlinx_coroutines_core(): StackTraceFrame | null;
    readonly creationStackTrace: StackTraceElement[];
    /*not mapped: */ getLastObservedFrame$kotlinx_coroutines_core(): CoroutineStackFrame | null;
    lastObservedThread: Thread | null;
    sequenceNumber: number;
    /*not mapped: */ getState$kotlinx_coroutines_core(): string;
    // private unmatchedResume: number;
    // private creationStackTrace(): StackTraceElement[];
    lastObservedStackTrace(): StackTraceElement[];
    toString(): string;
    updateState(state: string, frame: Continuation<Object>, shouldBeMatched: boolean): void;
}