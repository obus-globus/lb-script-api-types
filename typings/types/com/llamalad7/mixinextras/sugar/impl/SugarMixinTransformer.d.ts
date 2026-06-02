import type { MixinTransformer } from '../../../../../com/llamalad7/mixinextras/transformer/MixinTransformer.d.ts'
import type { Object } from '../../../../../java/lang/Object.d.ts'
import type { ClassNode } from '../../../../../org/objectweb/asm/tree/ClassNode.d.ts'
import type { IMixinInfo } from '../../../../../org/spongepowered/asm/mixin/extensibility/IMixinInfo.d.ts'
export class SugarMixinTransformer extends Object implements MixinTransformer {
    constructor()
    transform(arg0: IMixinInfo, arg1: ClassNode): void;
}