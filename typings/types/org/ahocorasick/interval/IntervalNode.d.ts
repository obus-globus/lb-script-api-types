import type { Object } from '../../../java/lang/Object.d.ts'
import type { IntervalNode$Direction } from '../../../org/ahocorasick/interval/IntervalNode$Direction.d.ts'
import type { Intervalable } from '../../../org/ahocorasick/interval/Intervalable.d.ts'
export class IntervalNode extends Object {
    constructor(arg0: Intervalable[])
    // private intervals: Intervalable[];
    // private left: IntervalNode;
    // private point: number;
    // private right: IntervalNode;
    addToOverlaps(arg0: Intervalable, arg1: Intervalable[], arg2: Intervalable[]): void;
    checkForOverlaps(arg0: Intervalable, arg1: IntervalNode$Direction): Intervalable[];
    checkForOverlapsToTheLeft(arg0: Intervalable): Intervalable[];
    checkForOverlapsToTheRight(arg0: Intervalable): Intervalable[];
    determineMedian(arg0: Intervalable[]): number;
    findOverlappingRanges(arg0: IntervalNode, arg1: Intervalable): Intervalable[];
    findOverlaps(arg0: Intervalable): Intervalable[];
}