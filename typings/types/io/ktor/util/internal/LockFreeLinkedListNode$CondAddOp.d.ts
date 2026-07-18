import type { AtomicOp } from '../../../../io/ktor/util/internal/AtomicOp.d.ts'
import type { LockFreeLinkedListNode } from '../../../../io/ktor/util/internal/LockFreeLinkedListNode.d.ts'
import type { Object } from '../../../../java/lang/Object.d.ts'
export abstract class LockFreeLinkedListNode$CondAddOp extends AtomicOp<LockFreeLinkedListNode> {
    constructor(newNode: LockFreeLinkedListNode)
    newNode: LockFreeLinkedListNode;
    oldNext: LockFreeLinkedListNode | null;
    complete(affected: LockFreeLinkedListNode, failure: Object | null): void;
}