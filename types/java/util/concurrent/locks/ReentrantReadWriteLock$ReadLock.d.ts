import type { Serializable } from '../../../../java/io/Serializable.d.ts'
import type { TimeUnit } from '../../../../java/util/concurrent/TimeUnit.d.ts'
import type { Condition } from '../../../../java/util/concurrent/locks/Condition.d.ts'
import type { Lock } from '../../../../java/util/concurrent/locks/Lock.d.ts'
import type { ReentrantReadWriteLock } from '../../../../java/util/concurrent/locks/ReentrantReadWriteLock.d.ts'
import type { ReentrantReadWriteLock$Sync } from '../../../../java/util/concurrent/locks/ReentrantReadWriteLock$Sync.d.ts'
import type { Object } from '../../../../java/lang/Object.d.ts'
export class ReentrantReadWriteLock$ReadLock extends Object implements Serializable, Lock {
    constructor(arg0: ReentrantReadWriteLock)
    // private sync: ReentrantReadWriteLock$Sync;
    lock(): void;
    lockInterruptibly(): void;
    newCondition(): Condition;
    toString(): string;
    tryLock(): boolean;
    tryLock(arg0: number, arg1: TimeUnit): boolean;
    unlock(): void;
}