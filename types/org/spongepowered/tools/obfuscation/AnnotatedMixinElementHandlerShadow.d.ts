import type { Object } from '../../../../java/lang/Object.d.ts'
import type { AnnotatedMixin } from '../../../../org/spongepowered/tools/obfuscation/AnnotatedMixin.d.ts'
import type { AnnotatedMixinElementHandler } from '../../../../org/spongepowered/tools/obfuscation/AnnotatedMixinElementHandler.d.ts'
import type { AnnotatedMixinElementHandlerShadow$AnnotatedElementShadow } from '../../../../org/spongepowered/tools/obfuscation/AnnotatedMixinElementHandlerShadow$AnnotatedElementShadow.d.ts'
import type { IMixinAnnotationProcessor } from '../../../../org/spongepowered/tools/obfuscation/interfaces/IMixinAnnotationProcessor.d.ts'
import type { TypeHandle } from '../../../../org/spongepowered/tools/obfuscation/mirror/TypeHandle.d.ts'
export class AnnotatedMixinElementHandlerShadow extends AnnotatedMixinElementHandler {
    constructor(arg0: IMixinAnnotationProcessor, arg1: AnnotatedMixin)
    registerShadow(arg0: AnnotatedMixinElementHandlerShadow$AnnotatedElementShadow<Object, Object>): void;
    // private registerShadowForTarget(arg0: AnnotatedMixinElementHandlerShadow$AnnotatedElementShadow<Object, Object>, arg1: TypeHandle): void;
}