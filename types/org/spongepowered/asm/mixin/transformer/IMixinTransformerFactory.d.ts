import type { Object } from '../../../../../java/lang/Object.d.ts'
import type { IMixinTransformer } from '../../../../../org/spongepowered/asm/mixin/transformer/IMixinTransformer.d.ts'
import type { IMixinInternal } from '../../../../../org/spongepowered/asm/service/IMixinInternal.d.ts'
export interface IMixinTransformerFactory extends Object, IMixinInternal{
    createTransformer(): IMixinTransformer;
}