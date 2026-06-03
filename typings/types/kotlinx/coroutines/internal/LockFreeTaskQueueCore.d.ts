import type { Object } from '../../../java/lang/Object.d.ts'
import type { LockFreeTaskQueueCore$Companion } from '../../../kotlinx/coroutines/internal/LockFreeTaskQueueCore$Companion.d.ts'
import type { Symbol } from '../../../kotlinx/coroutines/internal/Symbol.d.ts'
export class LockFreeTaskQueueCore<E extends Object | number | string | boolean> extends Object {
    static ADD_CLOSED: number;
    static ADD_FROZEN: number;
    static ADD_SUCCESS: number;
    static CAPACITY_BITS: number;
    static CLOSED_MASK: number;
    static CLOSED_SHIFT: number;
    static Companion: LockFreeTaskQueueCore$Companion;
    static FROZEN_MASK: number;
    static FROZEN_SHIFT: number;
    static HEAD_MASK: number;
    static HEAD_SHIFT: number;
    static INITIAL_CAPACITY: number;
    static MAX_CAPACITY_MASK: number;
    static MIN_ADD_SPIN_CAPACITY: number;
    static REMOVE_FROZEN: Symbol;
    static TAIL_MASK: number;
    static TAIL_SHIFT: number;
    constructor(capacity: number, singleConsumer: boolean)
    addLast(element: E): number;
    // private allocateNextCopy(state: number): LockFreeTaskQueueCore<E>;
    // private allocateOrGetNextCopy(state: number): LockFreeTaskQueueCore<E>;
    close(): boolean;
    // private fillPlaceholder(index: number, element: E): LockFreeTaskQueueCore<E> | null;
    isClosed(): boolean;
    map(transform: (param0: E) => R): R[];
    // private markFrozen(): number;
    next(): LockFreeTaskQueueCore<E>;
    removeFirstOrNull(): Object | null;
    // private removeSlowPath(oldHead: number, newHead: number): LockFreeTaskQueueCore<E> | null;
}