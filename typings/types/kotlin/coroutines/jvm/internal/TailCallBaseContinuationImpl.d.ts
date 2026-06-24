import type { Serializable } from '../../../../java/io/Serializable.d.ts'
import type { StackTraceElement } from '../../../../java/lang/StackTraceElement.d.ts'
import type { Object } from '../../../../java/lang/Object.d.ts'
import type { Result } from '../../../../kotlin/Result.d.ts'
import type { Continuation } from '../../../../kotlin/coroutines/Continuation.d.ts'
import type { CoroutineContext } from '../../../../kotlin/coroutines/CoroutineContext.d.ts'
import type { BaseContinuationImpl } from '../../../../kotlin/coroutines/jvm/internal/BaseContinuationImpl.d.ts'
export class TailCallBaseContinuationImpl extends BaseContinuationImpl implements Serializable {
    constructor(declaringClass: string, methodName: string, fileName: string, lineNumber: number, spilledVariables: (Object | null)[], continuation: Continuation<Object>)
    readonly context: CoroutineContext;
    // private continuation: Continuation<Object>;
    readonly declaringClass: string;
    readonly fileName: string;
    readonly lineNumber: number;
    readonly methodName: string;
    readonly spilledVariables: (Object | null)[];
    getStackTraceElement(): StackTraceElement;
    protected invokeSuspend(result: Result<Object>): Object | null;
}