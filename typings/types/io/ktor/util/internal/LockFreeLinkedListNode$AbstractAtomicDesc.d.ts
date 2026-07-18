import type { AtomicDesc } from '../../../../io/ktor/util/internal/AtomicDesc.d.ts'
import type { AtomicOp } from '../../../../io/ktor/util/internal/AtomicOp.d.ts'
import type { LockFreeLinkedListNode } from '../../../../io/ktor/util/internal/LockFreeLinkedListNode.d.ts'
import type { OpDescriptor } from '../../../../io/ktor/util/internal/OpDescriptor.d.ts'
import type { Object } from '../../../../java/lang/Object.d.ts'
export abstract class LockFreeLinkedListNode$AbstractAtomicDesc extends AtomicDesc {
    constructor()
    // private /*not mapped: */ getAffectedNode(): LockFreeLinkedListNode | null;
    // private /*not mapped: */ getOriginalNext(): LockFreeLinkedListNode | null;
    complete(op: AtomicOp<Object>, failure: Object | null): void;
    protected failure(affected: LockFreeLinkedListNode, next: Object): Object | null;
    protected finishOnSuccess(affected: LockFreeLinkedListNode, next: LockFreeLinkedListNode): void;
    protected onPrepare(affected: LockFreeLinkedListNode, next: LockFreeLinkedListNode): Object | null;
    prepare(op: AtomicOp<Object>): Object | null;
    protected retry(affected: LockFreeLinkedListNode, next: Object): boolean;
    protected takeAffectedNode(op: OpDescriptor): LockFreeLinkedListNode;
    protected updatedNext(affected: LockFreeLinkedListNode, next: LockFreeLinkedListNode): Object;
}