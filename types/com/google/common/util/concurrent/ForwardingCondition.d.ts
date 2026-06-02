import type { Date } from '../../../../../java/util/Date.d.ts'
import type { TimeUnit } from '../../../../../java/util/concurrent/TimeUnit.d.ts'
import type { Condition } from '../../../../../java/util/concurrent/locks/Condition.d.ts'
import type { Object } from '../../../../../java/lang/Object.d.ts'
export abstract class ForwardingCondition extends Object implements Condition {
    constructor()
    await(): void;
    await(time: number, unit: TimeUnit): boolean;
    awaitNanos(nanosTimeout: number): number;
    awaitUninterruptibly(): void;
    awaitUntil(deadline: Date): boolean;
    delegate(): Condition;
    signal(): void;
    signalAll(): void;
}