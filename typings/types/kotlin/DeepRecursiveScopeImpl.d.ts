import type { Object } from '../java/lang/Object.d.ts'
import type { DeepRecursiveScope } from '../kotlin/DeepRecursiveScope.d.ts'
import type { Result } from '../kotlin/Result.d.ts'
import type { Continuation } from '../kotlin/coroutines/Continuation.d.ts'
import type { CoroutineContext } from '../kotlin/coroutines/CoroutineContext.d.ts'
export class DeepRecursiveScopeImpl<T extends unknown, R extends unknown> extends DeepRecursiveScope<T, R> implements Continuation<R> {
    constructor(block: (param0: DeepRecursiveScope<T, R>, param1: T) => R, value: T)
    // private cont: Continuation<Object> | null;
    readonly context: CoroutineContext;
    // private function: (param0: DeepRecursiveScope<Object, Object>, param1: Object | null) => Object | null;
    // private result: Result<Object>;
    // private value: Object | null;
    callRecursive(value: T): R;
    // private crossFunctionCompletion(currentFunction: (param0: DeepRecursiveScope<Object, Object>, param1: Object | null) => Object | null, cont: Continuation<Object>): Continuation<Object>;
    resumeWith(result: Result<R>): void;
    runCallLoop(): R;
}