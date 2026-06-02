import type { MixinTransformer } from '../../../../../com/llamalad7/mixinextras/transformer/MixinTransformer.d.ts'
import type { Object } from '../../../../../java/lang/Object.d.ts'
import type { AnnotationNode } from '../../../../../org/objectweb/asm/tree/AnnotationNode.d.ts'
import type { ClassNode } from '../../../../../org/objectweb/asm/tree/ClassNode.d.ts'
import type { MethodNode } from '../../../../../org/objectweb/asm/tree/MethodNode.d.ts'
import type { IMixinInfo } from '../../../../../org/spongepowered/asm/mixin/extensibility/IMixinInfo.d.ts'
export class FactoryRedirectWrapperMixinTransformer extends Object implements MixinTransformer {
    constructor()
    transform(arg0: IMixinInfo, arg1: ClassNode): void;
    // private wrapInjectorAnnotation(arg0: MethodNode, arg1: AnnotationNode): void;
}