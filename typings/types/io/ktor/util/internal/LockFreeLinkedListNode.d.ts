import type { AtomicDesc } from '../../../../io/ktor/util/internal/AtomicDesc.d.ts'
import type { LockFreeLinkedListNode$AddLastDesc } from '../../../../io/ktor/util/internal/LockFreeLinkedListNode$AddLastDesc.d.ts'
import type { LockFreeLinkedListNode$CondAddOp } from '../../../../io/ktor/util/internal/LockFreeLinkedListNode$CondAddOp.d.ts'
import type { LockFreeLinkedListNode$RemoveFirstDesc } from '../../../../io/ktor/util/internal/LockFreeLinkedListNode$RemoveFirstDesc.d.ts'
import type { OpDescriptor } from '../../../../io/ktor/util/internal/OpDescriptor.d.ts'
import type { Removed } from '../../../../io/ktor/util/internal/Removed.d.ts'
import type { Object } from '../../../../java/lang/Object.d.ts'
export class LockFreeLinkedListNode extends Object {
    constructor()
    /*not mapped: */ isRemoved(): boolean;
    readonly next: Object;
    readonly nextNode: LockFreeLinkedListNode;
    readonly prev: Object;
    readonly prevNode: LockFreeLinkedListNode;
    addLast(node: LockFreeLinkedListNode): void;
    addLastIf(node: LockFreeLinkedListNode, condition: () => boolean): boolean;
    addLastIfPrev(node: LockFreeLinkedListNode, predicate: (param0: LockFreeLinkedListNode) => boolean): boolean;
    addLastIfPrevAndIf(node: LockFreeLinkedListNode, predicate: (param0: LockFreeLinkedListNode) => boolean, condition: () => boolean): boolean;
    addNext(node: LockFreeLinkedListNode, next: LockFreeLinkedListNode): boolean;
    addOneIfEmpty(node: LockFreeLinkedListNode): boolean;
    // private correctPrev(_prev: LockFreeLinkedListNode, op: OpDescriptor | null): LockFreeLinkedListNode | null;
    describeAddLast<T extends LockFreeLinkedListNode>(node: T): LockFreeLinkedListNode$AddLastDesc<T>;
    describeRemove(): AtomicDesc | null;
    describeRemoveFirst(): LockFreeLinkedListNode$RemoveFirstDesc<LockFreeLinkedListNode>;
    // private findHead(): LockFreeLinkedListNode;
    // private finishAdd(next: LockFreeLinkedListNode): void;
    // private finishRemove(next: LockFreeLinkedListNode): void;
    helpDelete(): void;
    helpRemove(): void;
    makeCondAddOp(node: LockFreeLinkedListNode, condition: () => boolean): LockFreeLinkedListNode$CondAddOp;
    // private markPrev(): LockFreeLinkedListNode;
    remove(): boolean;
    removeFirstIfIsInstanceOf<T extends unknown>(): T | null;
    removeFirstIfIsInstanceOfOrPeekIf<T extends unknown>(predicate: (param0: T) => boolean): T | null;
    removeFirstOrNull(): LockFreeLinkedListNode | null;
    // private removed(): Removed;
    toString(): string;
    tryCondAddNext(node: LockFreeLinkedListNode, next: LockFreeLinkedListNode, condAdd: LockFreeLinkedListNode$CondAddOp): number;
    validateNode(prev: LockFreeLinkedListNode, next: LockFreeLinkedListNode): void;
}