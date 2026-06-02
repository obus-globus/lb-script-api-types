import type { AbstractInsnNode } from '../../../../../../../com/oracle/truffle/api/impl/asm/tree/AbstractInsnNode.d.ts'
import type { Object } from '../../../../../../../java/lang/Object.d.ts'
import type { ListIterator } from '../../../../../../../java/util/ListIterator.d.ts'
export class InsnList$InsnListIterator extends Object implements ListIterator<Object> {
    constructor(null_: InsnList$InsnListIterator, index: number)
    // private nextInsn: AbstractInsnNode;
    // private previousInsn: AbstractInsnNode;
    // private remove: AbstractInsnNode;
    add(o: Object | null): void;
    hasNext(): boolean;
    hasPrevious(): boolean;
    next(): Object | null;
    nextIndex(): number;
    previous(): Object | null;
    previousIndex(): number;
    remove(): void;
    set(o: Object | null): void;
}