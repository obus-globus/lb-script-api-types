import type { MixinTransformer } from '../../../../../../com/llamalad7/mixinextras/transformer/MixinTransformer.d.ts'
import type { Object } from '../../../../../../java/lang/Object.d.ts'
import type { AnnotationNode } from '../../../../../../org/objectweb/asm/tree/AnnotationNode.d.ts'
import type { ClassNode } from '../../../../../../org/objectweb/asm/tree/ClassNode.d.ts'
import type { IMixinInfo } from '../../../../../../org/spongepowered/asm/mixin/extensibility/IMixinInfo.d.ts'
export class ExpressionSliceMarkerTransformer extends Object implements MixinTransformer {
    constructor()
    // private markAt(arg0: AnnotationNode): void;
    transform(arg0: IMixinInfo, arg1: ClassNode): void;
}