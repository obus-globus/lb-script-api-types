import type { StackTraceElement } from '../../../../java/lang/StackTraceElement.d.ts'
import type { Object } from '../../../../java/lang/Object.d.ts'
import type { CoroutineStackFrame } from '../../../../kotlin/coroutines/jvm/internal/CoroutineStackFrame.d.ts'
export class StackTraceFrame extends Object implements CoroutineStackFrame {
    constructor(callerFrame: CoroutineStackFrame | null, stackTraceElement: StackTraceElement)
    readonly callerFrame: CoroutineStackFrame | null;
    readonly stackTraceElement: StackTraceElement;
    getStackTraceElement(): StackTraceElement;
}