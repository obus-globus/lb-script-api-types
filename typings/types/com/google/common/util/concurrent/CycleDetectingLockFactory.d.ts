import type { CycleDetectingLockFactory$CycleDetectingLock } from '../../../../../com/google/common/util/concurrent/CycleDetectingLockFactory$CycleDetectingLock.d.ts'
import type { CycleDetectingLockFactory$LockGraphNode } from '../../../../../com/google/common/util/concurrent/CycleDetectingLockFactory$LockGraphNode.d.ts'
import type { CycleDetectingLockFactory$Policy } from '../../../../../com/google/common/util/concurrent/CycleDetectingLockFactory$Policy.d.ts'
import type { CycleDetectingLockFactory$WithExplicitOrdering } from '../../../../../com/google/common/util/concurrent/CycleDetectingLockFactory$WithExplicitOrdering.d.ts'
import type { Class } from '../../../../../java/lang/Class.d.ts'
import type { ThreadLocal } from '../../../../../java/lang/ThreadLocal.d.ts'
import type { ReentrantLock } from '../../../../../java/util/concurrent/locks/ReentrantLock.d.ts'
import type { ReentrantReadWriteLock } from '../../../../../java/util/concurrent/locks/ReentrantReadWriteLock.d.ts'
import type { Object } from '../../../../../java/lang/Object.d.ts'
export class CycleDetectingLockFactory extends Object {
    static newInstance(parampolicy: CycleDetectingLockFactory$Policy): CycleDetectingLockFactory;
    static newInstanceWithExplicitOrdering(paramenumClass: Class<Object>, parampolicy: CycleDetectingLockFactory$Policy): CycleDetectingLockFactory$WithExplicitOrdering<any>;
    constructor(arg0: CycleDetectingLockFactory$Policy, arg1: ThreadLocal<CycleDetectingLockFactory$LockGraphNode[]>)
    // private policy: CycleDetectingLockFactory$Policy;
    // private aboutToAcquire(lock: CycleDetectingLockFactory$CycleDetectingLock): void;
    newReentrantLock(lockName: string): ReentrantLock;
    newReentrantLock(lockName: string, fair: boolean): ReentrantLock;
    newReentrantReadWriteLock(lockName: string): ReentrantReadWriteLock;
    newReentrantReadWriteLock(lockName: string, fair: boolean): ReentrantReadWriteLock;
}