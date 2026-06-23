import type { StackTraceElement } from '../../../../java/lang/StackTraceElement.d.ts'
import type { Object } from '../../../../java/lang/Object.d.ts'
import type { Result } from '../../../../kotlin/Result.d.ts'
import type { Continuation } from '../../../../kotlin/coroutines/Continuation.d.ts'
import type { CoroutineContext } from '../../../../kotlin/coroutines/CoroutineContext.d.ts'
import type { CoroutineStackFrame } from '../../../../kotlin/coroutines/jvm/internal/CoroutineStackFrame.d.ts'
import type { DebugCoroutineInfoImpl } from '../../../../kotlinx/coroutines/debug/internal/DebugCoroutineInfoImpl.d.ts'
import type { StackTraceFrame } from '../../../../kotlinx/coroutines/debug/internal/StackTraceFrame.d.ts'
export class DebugProbesImpl$CoroutineOwner<T extends unknown> extends Object implements Continuation<T>, CoroutineStackFrame {
    constructor(delegate: Continuation<T>, info: DebugCoroutineInfoImpl)
    readonly callerFrame: CoroutineStackFrame | null;
    readonly context: CoroutineContext;
    delegate: Continuation<T>;
    // private /*not mapped: */ getFrame(): StackTraceFrame | null;
    info: DebugCoroutineInfoImpl;
    getStackTraceElement(): StackTraceElement | null;
    resumeWith(result: Result<T>): void;
    toString(): string;
}