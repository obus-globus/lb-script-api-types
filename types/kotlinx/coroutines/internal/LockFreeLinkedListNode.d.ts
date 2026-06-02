import type { Object } from '../../../java/lang/Object.d.ts'
import type { Removed } from '../../../kotlinx/coroutines/internal/Removed.d.ts'
export class LockFreeLinkedListNode extends Object {
    constructor()
    addLast(node: LockFreeLinkedListNode, permissionsBitmask: number): boolean;
    addNext(node: LockFreeLinkedListNode, next: LockFreeLinkedListNode): boolean;
    addOneIfEmpty(node: LockFreeLinkedListNode): boolean;
    close(forbiddenElementsBit: number): void;
    // private correctPrev(): LockFreeLinkedListNode | null;
    // private findPrevNonRemoved(current: LockFreeLinkedListNode): LockFreeLinkedListNode;
    // private finishAdd(next: LockFreeLinkedListNode): void;
    remove(): boolean;
    removeOrNext(): LockFreeLinkedListNode | null;
    // private removed(): Removed;
    toString(): string;
    validateNode(prev: LockFreeLinkedListNode, next: LockFreeLinkedListNode): void;
}