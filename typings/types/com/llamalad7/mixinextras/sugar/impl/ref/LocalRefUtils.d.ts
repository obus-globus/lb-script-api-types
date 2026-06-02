import type { Class } from '../../../../../../java/lang/Class.d.ts'
import type { Runnable } from '../../../../../../java/lang/Runnable.d.ts'
import type { Object } from '../../../../../../java/lang/Object.d.ts'
import type { Type } from '../../../../../../org/objectweb/asm/Type.d.ts'
import type { AbstractInsnNode } from '../../../../../../org/objectweb/asm/tree/AbstractInsnNode.d.ts'
export class LocalRefUtils extends Object {
    static generateDisposal(paramarg0: AbstractInsnNode[], paramarg1: Type): void;
    static generateInitialization(paramarg0: AbstractInsnNode[], paramarg1: Type): void;
    static generateNew(paramarg0: AbstractInsnNode[], paramarg1: Type): void;
    static generateUnwrapping(paramarg0: AbstractInsnNode[], paramarg1: Type, paramarg2: () => void): void;
    static getInterfaceFor(paramarg0: Type): Class<Object>;
    static getTargetType(paramarg0: Type, paramarg1: Type): Type;
    constructor()
}