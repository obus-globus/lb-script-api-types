import type { Date } from '../../../../java/util/Date.d.ts'
import type { TimeUnit } from '../../../../java/util/concurrent/TimeUnit.d.ts'
import type { Object } from '../../../../java/lang/Object.d.ts'
export interface Condition extends Object{
    await(): void;
    await(arg0: number, arg1: TimeUnit): boolean;
    awaitNanos(arg0: number): number;
    awaitUninterruptibly(): void;
    awaitUntil(arg0: Date): boolean;
    signal(): void;
    signalAll(): void;
}