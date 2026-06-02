import type { Object } from '../../../../../java/lang/Object.d.ts'
import type { IMixinTransformer } from '../../../../../org/spongepowered/asm/mixin/transformer/IMixinTransformer.d.ts'
import type { IMixinTransformerFactory } from '../../../../../org/spongepowered/asm/mixin/transformer/IMixinTransformerFactory.d.ts'
export class MixinTransformer$Factory extends Object implements IMixinTransformerFactory {
    constructor()
    createTransformer(): IMixinTransformer;
}