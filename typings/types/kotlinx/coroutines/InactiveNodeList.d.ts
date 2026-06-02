import type { Object } from '../../java/lang/Object.d.ts'
import type { Incomplete } from '../../kotlinx/coroutines/Incomplete.d.ts'
import type { NodeList } from '../../kotlinx/coroutines/NodeList.d.ts'
export class InactiveNodeList extends Object implements Incomplete {
    constructor(list: NodeList)
    /*not mapped: */ isActive(): boolean;
    readonly list: NodeList;
    toString(): string;
}