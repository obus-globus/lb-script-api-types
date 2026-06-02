import type { ForwardingCondition } from '../../../../../com/google/common/util/concurrent/ForwardingCondition.d.ts'
import type { Striped$WeakSafeReadWriteLock } from '../../../../../com/google/common/util/concurrent/Striped$WeakSafeReadWriteLock.d.ts'
import type { Condition } from '../../../../../java/util/concurrent/locks/Condition.d.ts'
export class Striped$WeakSafeCondition extends ForwardingCondition {
    constructor(delegate: Condition, strongReference: Striped$WeakSafeReadWriteLock)
    // private delegate: Condition;
    // private strongReference: Striped$WeakSafeReadWriteLock;
    delegate(): Condition;
}