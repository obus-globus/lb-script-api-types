import type { TimeUnit } from '../../../../../java/util/concurrent/TimeUnit.d.ts'
import type { Condition } from '../../../../../java/util/concurrent/locks/Condition.d.ts'
import type { Lock } from '../../../../../java/util/concurrent/locks/Lock.d.ts'
import type { Object } from '../../../../../java/lang/Object.d.ts'
export abstract class ForwardingLock extends Object implements Lock {
    constructor()
    delegate(): Lock;
    lock(): void;
    lockInterruptibly(): void;
    newCondition(): Condition;
    tryLock(): boolean;
    tryLock(time: number, unit: TimeUnit): boolean;
    unlock(): void;
}