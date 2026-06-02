import type { Object } from '../../../../../java/lang/Object.d.ts'
import type { Type } from '../../../../../org/objectweb/asm/Type.d.ts'
import type { AbstractInsnNode } from '../../../../../org/objectweb/asm/tree/AbstractInsnNode.d.ts'
export class ShareType extends Object {
    constructor(arg0: Type)
    readonly innerType: Type;
    addToLvt(arg0: AbstractInsnNode[], arg1: number): void;
    getImplType(): Type;
    getInnerType(): Type;
    initialize(arg0: number): AbstractInsnNode[];
}