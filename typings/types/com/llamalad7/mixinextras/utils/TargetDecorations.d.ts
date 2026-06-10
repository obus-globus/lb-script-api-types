import type { Supplier } from '../../../../java/util/function/Supplier.d.ts'
import type { UnaryOperator } from '../../../../java/util/function/UnaryOperator.d.ts'
import type { Object } from '../../../../java/lang/Object.d.ts'
import type { AbstractInsnNode } from '../../../../org/objectweb/asm/tree/AbstractInsnNode.d.ts'
export class TargetDecorations extends Object {
    static get(paramarg0: AbstractInsnNode[], paramarg1: string): Object | null;
    static getOrPut(paramarg0: AbstractInsnNode[], paramarg1: string, paramarg2: () => Object | null): Object | null;
    static has(paramarg0: AbstractInsnNode[], paramarg1: string): boolean;
    static modify(paramarg0: AbstractInsnNode[], paramarg1: string, paramarg2: (param0: Object | null) => Object | null): void;
    static put(paramarg0: AbstractInsnNode[], paramarg1: string, paramarg2: Object): void;
    static remove(paramarg0: AbstractInsnNode[], paramarg1: string): void;
    constructor()
}