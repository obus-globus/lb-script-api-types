import type { Monitor } from '../../../../../com/google/common/util/concurrent/Monitor.d.ts'
import type { Condition } from '../../../../../java/util/concurrent/locks/Condition.d.ts'
import type { Object } from '../../../../../java/lang/Object.d.ts'
export abstract class Monitor$Guard extends Object {
    constructor(monitor: Monitor)
    // private condition: Condition;
    // private monitor: Monitor;
    // private next: Monitor$Guard;
    // private waiterCount: number;
    isSatisfied(): boolean;
}