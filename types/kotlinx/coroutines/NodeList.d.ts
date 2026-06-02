import type { Incomplete } from '../../kotlinx/coroutines/Incomplete.d.ts'
import type { LockFreeLinkedListHead } from '../../kotlinx/coroutines/internal/LockFreeLinkedListHead.d.ts'
export class NodeList extends LockFreeLinkedListHead implements Incomplete {
    constructor()
    /*not mapped: */ isActive(): boolean;
    readonly list: NodeList;
    getString(state: string): string;
    toString(): string;
}