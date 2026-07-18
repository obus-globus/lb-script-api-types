import type { LockFreeLinkedListNode } from '../../../../io/ktor/util/internal/LockFreeLinkedListNode.d.ts'
export class LockFreeLinkedListHead extends LockFreeLinkedListNode {
    constructor()
    /*not mapped: */ isEmpty(): boolean;
    describeRemove(): void;
    forEach<T extends LockFreeLinkedListNode>(block: (param0: T) => void): void;
    remove(): boolean;
    validate(): void;
}