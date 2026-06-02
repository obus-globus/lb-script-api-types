import type { TimeUnit } from '../../../../../../../java/util/concurrent/TimeUnit.d.ts'
import type { Condition } from '../../../../../../../java/util/concurrent/locks/Condition.d.ts'
import type { Lock } from '../../../../../../../java/util/concurrent/locks/Lock.d.ts'
import type { Object } from '../../../../../../../java/lang/Object.d.ts'
export class NullLock extends Object implements Lock {
    constructor()
    lock(): void;
    lockInterruptibly(): void;
    newCondition(): Condition;
    tryLock(): boolean;
    tryLock(arg0: number, arg1: TimeUnit): boolean;
    unlock(): void;
}