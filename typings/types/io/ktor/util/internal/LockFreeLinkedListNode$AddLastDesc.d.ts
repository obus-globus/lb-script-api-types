import type { LockFreeLinkedListNode } from '../../../../io/ktor/util/internal/LockFreeLinkedListNode.d.ts'
import type { LockFreeLinkedListNode$AbstractAtomicDesc } from '../../../../io/ktor/util/internal/LockFreeLinkedListNode$AbstractAtomicDesc.d.ts'
import type { OpDescriptor } from '../../../../io/ktor/util/internal/OpDescriptor.d.ts'
import type { Object } from '../../../../java/lang/Object.d.ts'
export class LockFreeLinkedListNode$AddLastDesc<T extends LockFreeLinkedListNode> extends LockFreeLinkedListNode$AbstractAtomicDesc {
    constructor(queue: LockFreeLinkedListNode, node: T)
    // private /*not mapped: */ getAffectedNode(): LockFreeLinkedListNode | null;
    node: T;
    // private /*not mapped: */ getOriginalNext(): LockFreeLinkedListNode;
    queue: LockFreeLinkedListNode;
    protected finishOnSuccess(affected: LockFreeLinkedListNode, next: LockFreeLinkedListNode): void;
    protected onPrepare(affected: LockFreeLinkedListNode, next: LockFreeLinkedListNode): Object | null;
    protected retry(affected: LockFreeLinkedListNode, next: Object): boolean;
    protected takeAffectedNode(op: OpDescriptor): LockFreeLinkedListNode;
    protected updatedNext(affected: LockFreeLinkedListNode, next: LockFreeLinkedListNode): Object;
}