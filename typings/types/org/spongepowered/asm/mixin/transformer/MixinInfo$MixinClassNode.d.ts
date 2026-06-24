import type { MethodVisitor } from '../../../../../org/objectweb/asm/MethodVisitor.d.ts'
import type { ClassNode } from '../../../../../org/objectweb/asm/tree/ClassNode.d.ts'
import type { MixinInfo } from '../../../../../org/spongepowered/asm/mixin/transformer/MixinInfo.d.ts'
import type { MixinInfo$MixinMethodNode } from '../../../../../org/spongepowered/asm/mixin/transformer/MixinInfo$MixinMethodNode.d.ts'
export class MixinInfo$MixinClassNode extends ClassNode {
    constructor(null_: MixinInfo, arg1: number)
    constructor(null_: MixinInfo, arg1: MixinInfo)
    mixinMethods: MixinInfo$MixinMethodNode[];
    getMixin(): MixinInfo;
    visitMethod(arg0: number, arg1: string, arg2: string, arg3: string, arg4: string[]): MethodVisitor;
}