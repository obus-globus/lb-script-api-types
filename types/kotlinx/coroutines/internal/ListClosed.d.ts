import type { LockFreeLinkedListNode } from '../../../kotlinx/coroutines/internal/LockFreeLinkedListNode.d.ts'
export class ListClosed extends LockFreeLinkedListNode {
    constructor(forbiddenElementsBitmask: number)
    forbiddenElementsBitmask: number;
}