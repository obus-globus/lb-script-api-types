import type { WrapMethodStage } from '../../../../../com/llamalad7/mixinextras/injector/wrapmethod/WrapMethodStage.d.ts'
import type { ShareInfo } from '../../../../../com/llamalad7/mixinextras/sugar/impl/ShareInfo.d.ts'
import type { Type } from '../../../../../org/objectweb/asm/Type.d.ts'
import type { AbstractInsnNode } from '../../../../../org/objectweb/asm/tree/AbstractInsnNode.d.ts'
import type { ClassNode } from '../../../../../org/objectweb/asm/tree/ClassNode.d.ts'
import type { MethodNode } from '../../../../../org/objectweb/asm/tree/MethodNode.d.ts'
export class WrapMethodStage$Wrapper extends WrapMethodStage {
    constructor(arg0: WrapMethodStage, arg1: MethodNode, arg2: Type, arg3: ShareInfo[])
    // private handler: MethodNode;
    // private inner: WrapMethodStage;
    // private isStatic: boolean;
    // private operationType: Type;
    // private shares: ShareInfo[];
    apply(arg0: ClassNode, arg1: ShareInfo[]): MethodNode;
    // private coerceReturnType(arg0: AbstractInsnNode[], arg1: Type): void;
    getVanillaMethod(): MethodNode;
}