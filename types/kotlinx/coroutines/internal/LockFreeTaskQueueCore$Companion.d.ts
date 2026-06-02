import type { Object } from '../../../java/lang/Object.d.ts'
import type { Symbol } from '../../../kotlinx/coroutines/internal/Symbol.d.ts'
export class LockFreeTaskQueueCore$Companion extends Object {
    ADD_CLOSED: number;
    ADD_FROZEN: number;
    ADD_SUCCESS: number;
    CAPACITY_BITS: number;
    CLOSED_MASK: number;
    CLOSED_SHIFT: number;
    FROZEN_MASK: number;
    FROZEN_SHIFT: number;
    HEAD_MASK: number;
    HEAD_SHIFT: number;
    INITIAL_CAPACITY: number;
    MAX_CAPACITY_MASK: number;
    MIN_ADD_SPIN_CAPACITY: number;
    REMOVE_FROZEN: Symbol;
    TAIL_MASK: number;
    TAIL_SHIFT: number;
}