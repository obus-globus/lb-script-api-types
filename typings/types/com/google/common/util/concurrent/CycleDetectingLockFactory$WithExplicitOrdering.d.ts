import type { CycleDetectingLockFactory } from '../../../../../com/google/common/util/concurrent/CycleDetectingLockFactory.d.ts'
import type { CycleDetectingLockFactory$LockGraphNode } from '../../../../../com/google/common/util/concurrent/CycleDetectingLockFactory$LockGraphNode.d.ts'
import type { CycleDetectingLockFactory$Policy } from '../../../../../com/google/common/util/concurrent/CycleDetectingLockFactory$Policy.d.ts'
import type { Class } from '../../../../../java/lang/Class.d.ts'
import type { ReentrantLock } from '../../../../../java/util/concurrent/locks/ReentrantLock.d.ts'
import type { ReentrantReadWriteLock } from '../../../../../java/util/concurrent/locks/ReentrantReadWriteLock.d.ts'
import type { Object } from '../../../../../java/lang/Object.d.ts'
import type { Enum } from '../../../../../java/lang/Enum.d.ts'
export class CycleDetectingLockFactory$WithExplicitOrdering<E extends Enum<E>> extends CycleDetectingLockFactory {
    static newInstance(parampolicy: CycleDetectingLockFactory$Policy): CycleDetectingLockFactory;
    static newInstanceWithExplicitOrdering(paramenumClass: Class<Object>, parampolicy: CycleDetectingLockFactory$Policy): CycleDetectingLockFactory$WithExplicitOrdering<Object>;
    constructor(policy: CycleDetectingLockFactory$Policy, lockGraphNodes: Map<E, CycleDetectingLockFactory$LockGraphNode>)
    // private lockGraphNodes: Map<E, CycleDetectingLockFactory$LockGraphNode>;
    newReentrantLock(rank: E): ReentrantLock;
    newReentrantLock(rank: E, fair: boolean): ReentrantLock;
    newReentrantLock(lockName: string): ReentrantLock;
    newReentrantLock(lockName: string, fair: boolean): ReentrantLock;
    newReentrantReadWriteLock(rank: E): ReentrantReadWriteLock;
    newReentrantReadWriteLock(rank: E, fair: boolean): ReentrantReadWriteLock;
    newReentrantReadWriteLock(lockName: string): ReentrantReadWriteLock;
    newReentrantReadWriteLock(lockName: string, fair: boolean): ReentrantReadWriteLock;
}