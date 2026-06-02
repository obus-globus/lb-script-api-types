import type { WrapMethodStage } from '../../../../../com/llamalad7/mixinextras/injector/wrapmethod/WrapMethodStage.d.ts'
import type { ShareInfo } from '../../../../../com/llamalad7/mixinextras/sugar/impl/ShareInfo.d.ts'
import type { ClassNode } from '../../../../../org/objectweb/asm/tree/ClassNode.d.ts'
import type { MethodNode } from '../../../../../org/objectweb/asm/tree/MethodNode.d.ts'
export class WrapMethodStage$Vanilla extends WrapMethodStage {
    constructor(arg0: MethodNode)
    // private original: MethodNode;
    apply(arg0: ClassNode, arg1: ShareInfo[]): MethodNode;
    // private changeDesc(arg0: ShareInfo[]): void;
    // private fixLocals(arg0: number, arg1: ShareInfo[]): void;
    getVanillaMethod(): MethodNode;
    // private stripShareInitializers(arg0: ShareInfo[]): void;
}