import type { Object } from '../../../../java/lang/Object.d.ts'
import type { Continuation } from '../../../../kotlin/coroutines/Continuation.d.ts'
import type { CoroutineStackFrame } from '../../../../kotlin/coroutines/jvm/internal/CoroutineStackFrame.d.ts'
export class TailCallAsyncStackTraceEntryKt extends Object {
    static wrapContinuation<T extends Continuation<Object> & CoroutineStackFrame>(declaringClass: string, methodName: string, fileName: string, lineNumber: number, spilledVariables: (Object | null)[], continuation: T): T;
    static wrapContinuationReal<T extends Continuation<Object> & CoroutineStackFrame>(declaringClass: string, methodName: string, fileName: string, lineNumber: number, spilledVariables: (Object | null)[], continuation: T): T;
}