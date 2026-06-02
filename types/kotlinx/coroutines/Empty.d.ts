import type { Object } from '../../java/lang/Object.d.ts'
import type { Incomplete } from '../../kotlinx/coroutines/Incomplete.d.ts'
import type { NodeList } from '../../kotlinx/coroutines/NodeList.d.ts'
export class Empty extends Object implements Incomplete {
    constructor(isActive: boolean)
    // private isActive: boolean;
    /*not mapped: */ isActive(): boolean;
    readonly list: NodeList | null;
    toString(): string;
}