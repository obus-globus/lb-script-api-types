import type { Object } from '../../../java/lang/Object.d.ts'
import type { Function1 } from '../../../kotlin/jvm/functions/Function1.d.ts'
export class LockFreeTaskQueue<E extends Object | number | string | boolean> extends Object {
    constructor(singleConsumer: boolean)
    addLast(element: E): boolean;
    close(): void;
    isClosed(): boolean;
    map(transform: Function1<E, R>): R[];
    removeFirstOrNull(): E | null;
}