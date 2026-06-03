import type { LockFreeLinkedListNode } from '../../../kotlinx/coroutines/internal/LockFreeLinkedListNode.d.ts'
export class LockFreeLinkedListHead extends LockFreeLinkedListNode {
    constructor()
    /*not mapped: */ isRemoved(): boolean;
    forEach(block: (param0: LockFreeLinkedListNode) => void): void;
    remove(): void;
}