import type { Object } from '../../../../java/lang/Object.d.ts'
import type { ListIterator } from '../../../../java/util/ListIterator.d.ts'
import type { AbstractInsnNode } from '../../../../org/objectweb/asm/tree/AbstractInsnNode.d.ts'
export class InsnList$InsnListIterator extends Object implements ListIterator<Object> {
    constructor(null_: InsnList$InsnListIterator, arg1: number)
    // private nextInsn: AbstractInsnNode;
    // private previousInsn: AbstractInsnNode;
    // private remove: AbstractInsnNode;
    add(arg0: Object | null): void;
    hasNext(): boolean;
    hasPrevious(): boolean;
    next(): Object | null;
    nextIndex(): number;
    previous(): Object | null;
    previousIndex(): number;
    remove(): void;
    set(arg0: Object | null): void;
}