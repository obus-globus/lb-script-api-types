import type { ShareInfo } from '../../../../../com/llamalad7/mixinextras/sugar/impl/ShareInfo.d.ts'
import type { Object } from '../../../../../java/lang/Object.d.ts'
import type { ClassNode } from '../../../../../org/objectweb/asm/tree/ClassNode.d.ts'
import type { MethodNode } from '../../../../../org/objectweb/asm/tree/MethodNode.d.ts'
export abstract class WrapMethodStage extends Object {
    constructor()
    apply(arg0: ClassNode, arg1: ShareInfo[]): MethodNode;
    getVanillaMethod(): MethodNode;
}