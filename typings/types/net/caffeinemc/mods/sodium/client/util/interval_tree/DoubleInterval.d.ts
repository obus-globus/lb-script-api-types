import type { Comparator } from '../../../../../../../java/util/Comparator.d.ts'
import type { Interval } from '../../../../../../../net/caffeinemc/mods/sodium/client/util/interval_tree/Interval.d.ts'
import type { Interval$Bounded } from '../../../../../../../net/caffeinemc/mods/sodium/client/util/interval_tree/Interval$Bounded.d.ts'
import type { Interval$Unbounded } from '../../../../../../../net/caffeinemc/mods/sodium/client/util/interval_tree/Interval$Unbounded.d.ts'
export class DoubleInterval extends Interval<number> {
    static sweepLeftToRight: (param0: Interval<any>, param1: Interval<any>) => number;
    static sweepRightToLeft: (param0: Interval<any>, param1: Interval<any>) => number;
    constructor()
    constructor(arg0: number, arg1: number, arg2: Interval$Bounded)
    constructor(arg0: number, arg1: Interval$Unbounded)
    create(): Interval<number>;
    create(arg0: number, arg1: boolean, arg2: number, arg3: boolean): Interval<number>;
    getMidpoint(): number;
    isEmpty(): boolean;
}