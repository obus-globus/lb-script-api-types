import type { Function1 } from '../../../kotlin/jvm/functions/Function1.d.ts'
import type { LockFreeLinkedListNode } from '../../../kotlinx/coroutines/internal/LockFreeLinkedListNode.d.ts'
export class LockFreeLinkedListHead extends LockFreeLinkedListNode {
    constructor()
    /*not mapped: */ isRemoved(): boolean;
    forEach(block: Function1<LockFreeLinkedListNode, void>): void;
    remove(): void;
}