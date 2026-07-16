import type { Supplier } from '../../../../java/util/function/Supplier.d.ts'
import type { UnaryOperator } from '../../../../java/util/function/UnaryOperator.d.ts'
import type { Object } from '../../../../java/lang/Object.d.ts'
import type { AbstractInsnNode } from '../../../../org/objectweb/asm/tree/AbstractInsnNode.d.ts'
export class TargetDecorations extends Object {
    static get<T extends unknown>(paramarg0: AbstractInsnNode[], paramarg1: string): T;
    static getOrPut<T extends unknown>(paramarg0: AbstractInsnNode[], paramarg1: string, paramarg2: () => T): T;
    static has(paramarg0: AbstractInsnNode[], paramarg1: string): boolean;
    static modify<T extends unknown>(paramarg0: AbstractInsnNode[], paramarg1: string, paramarg2: (param0: T) => T): void;
    static put(paramarg0: AbstractInsnNode[], paramarg1: string, paramarg2: Object): void;
    static remove(paramarg0: AbstractInsnNode[], paramarg1: string): void;
    constructor()
}