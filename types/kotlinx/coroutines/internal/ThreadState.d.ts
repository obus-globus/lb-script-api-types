import type { Object } from '../../../java/lang/Object.d.ts'
import type { CoroutineContext } from '../../../kotlin/coroutines/CoroutineContext.d.ts'
import type { ThreadContextElement } from '../../../kotlinx/coroutines/ThreadContextElement.d.ts'
export class ThreadState extends Object {
    constructor(context: CoroutineContext, n: number)
    context: CoroutineContext;
    // private elements: (ThreadContextElement<Object> | null)[];
    // private i: number;
    // private values: (Object | null)[];
    append(element: ThreadContextElement<Object>, value: Object | null): void;
    restore(context: CoroutineContext): void;
}