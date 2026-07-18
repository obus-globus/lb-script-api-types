import type { LockFreeMPSCQueueCore$Companion } from '../../../../io/ktor/network/selector/LockFreeMPSCQueueCore$Companion.d.ts'
import type { AtomicReferenceArray } from '../../../../java/util/concurrent/atomic/AtomicReferenceArray.d.ts'
import type { Object } from '../../../../java/lang/Object.d.ts'
export class LockFreeMPSCQueueCore<E extends unknown> extends Object {
    static ADD_CLOSED: number;
    static ADD_FROZEN: number;
    static ADD_SUCCESS: number;
    static Companion: LockFreeMPSCQueueCore$Companion;
    static INITIAL_CAPACITY: number;
    static REMOVE_FROZEN: Object;
    constructor(capacity: number)
    // private array: AtomicReferenceArray<Object>;
    // private capacity: number;
    /*not mapped: */ isEmpty(): boolean;
    // private mask: number;
    addLast(element: E): number;
    // private allocateNextCopy(state: number): LockFreeMPSCQueueCore<E>;
    // private allocateOrGetNextCopy(state: number): LockFreeMPSCQueueCore<E>;
    close(): boolean;
    // private fillPlaceholder(index: number, element: E): LockFreeMPSCQueueCore<E> | null;
    // private markFrozen(): number;
    next(): LockFreeMPSCQueueCore<E>;
    removeFirstOrNull(): Object | null;
    // private removeSlowPath(oldHead: number, newHead: number): LockFreeMPSCQueueCore<E> | null;
}