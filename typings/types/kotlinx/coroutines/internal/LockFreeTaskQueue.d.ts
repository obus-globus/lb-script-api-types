import type { Object } from '../../../java/lang/Object.d.ts'
import type { AtomicRef } from '../../../kotlinx/atomicfu/AtomicRef.d.ts'
import type { LockFreeTaskQueueCore } from '../../../kotlinx/coroutines/internal/LockFreeTaskQueueCore.d.ts'
export class LockFreeTaskQueue<E extends unknown> extends Object {
    constructor(singleConsumer: boolean)
    addLast(element: E): boolean;
    close(): void;
    isClosed(): boolean;
    map<R extends unknown>(transform: (param0: E) => R): R[];
    removeFirstOrNull(): E | null;
}