import type { StackTraceElement } from '../../../../java/lang/StackTraceElement.d.ts'
import type { Object } from '../../../../java/lang/Object.d.ts'
export interface CoroutineStackFrame extends Object{
    readonly callerFrame: CoroutineStackFrame | null;
    getStackTraceElement(): StackTraceElement | null;
}