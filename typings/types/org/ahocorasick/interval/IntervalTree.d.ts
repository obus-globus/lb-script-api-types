import type { Object } from '../../../java/lang/Object.d.ts'
import type { IntervalNode } from '../../../org/ahocorasick/interval/IntervalNode.d.ts'
import type { Intervalable } from '../../../org/ahocorasick/interval/Intervalable.d.ts'
export class IntervalTree extends Object {
    constructor(arg0: Intervalable[])
    // private rootNode: IntervalNode;
    findOverlaps(arg0: Intervalable): Intervalable[];
    removeOverlaps(arg0: Intervalable[]): Intervalable[];
}