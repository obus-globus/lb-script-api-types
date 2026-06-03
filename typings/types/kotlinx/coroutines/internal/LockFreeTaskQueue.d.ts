import type { Object } from '../../../java/lang/Object.d.ts'
export class LockFreeTaskQueue<E extends Object | number | string | boolean> extends Object {
    constructor(singleConsumer: boolean)
    addLast(element: E): boolean;
    close(): void;
    isClosed(): boolean;
    map(transform: (param0: E) => R): R[];
    removeFirstOrNull(): E | null;
}