import type { Comparator } from '../../../../../../java/util/Comparator.d.ts'
import type { Object } from '../../../../../../java/lang/Object.d.ts'
import type { SortableNode } from '../../../../../../net/fabricmc/fabric/impl/base/toposort/SortableNode.d.ts'
export class NodeSorting extends Object {
    static ENABLE_CYCLE_WARNING: boolean;
    static sort<N extends SortableNode<N>>(paramarg0: N[], paramarg1: string, paramarg2: (param0: N, param1: N) => number): boolean;
    constructor()
}