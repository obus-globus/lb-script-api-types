import type { Object } from '../../../../java/lang/Object.d.ts'
import type { Type } from '../../../../org/objectweb/asm/Type.d.ts'
import type { AbstractInsnNode } from '../../../../org/objectweb/asm/tree/AbstractInsnNode.d.ts'
import type { MethodNode } from '../../../../org/objectweb/asm/tree/MethodNode.d.ts'
export class StackExtension extends Object {
    constructor(arg0: AbstractInsnNode[])
    // private target: MethodNode;
    capturedArgs(arg0: Type[], arg1: number): void;
    ensureAtLeast(arg0: number): void;
    extra(arg0: number): void;
    receiver(arg0: boolean): void;
}