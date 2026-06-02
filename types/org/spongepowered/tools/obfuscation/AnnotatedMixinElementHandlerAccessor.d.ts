import type { AnnotatedMixin } from '../../../../org/spongepowered/tools/obfuscation/AnnotatedMixin.d.ts'
import type { AnnotatedMixinElementHandler } from '../../../../org/spongepowered/tools/obfuscation/AnnotatedMixinElementHandler.d.ts'
import type { AnnotatedMixinElementHandlerAccessor$AnnotatedElementAccessor } from '../../../../org/spongepowered/tools/obfuscation/AnnotatedMixinElementHandlerAccessor$AnnotatedElementAccessor.d.ts'
import type { AnnotatedMixinElementHandlerAccessor$AnnotatedElementInvoker } from '../../../../org/spongepowered/tools/obfuscation/AnnotatedMixinElementHandlerAccessor$AnnotatedElementInvoker.d.ts'
import type { IMixinAnnotationProcessor } from '../../../../org/spongepowered/tools/obfuscation/interfaces/IMixinAnnotationProcessor.d.ts'
import type { TypeHandle } from '../../../../org/spongepowered/tools/obfuscation/mirror/TypeHandle.d.ts'
export class AnnotatedMixinElementHandlerAccessor extends AnnotatedMixinElementHandler {
    constructor(arg0: IMixinAnnotationProcessor, arg1: AnnotatedMixin)
    // private getAccessorTargetName(arg0: AnnotatedMixinElementHandlerAccessor$AnnotatedElementAccessor): string;
    // private inflectAccessorTarget(arg0: AnnotatedMixinElementHandlerAccessor$AnnotatedElementAccessor): string;
    registerAccessor(arg0: AnnotatedMixinElementHandlerAccessor$AnnotatedElementAccessor): void;
    // private registerAccessorForTarget(arg0: AnnotatedMixinElementHandlerAccessor$AnnotatedElementAccessor, arg1: TypeHandle): void;
    // private registerFactoryForTarget(arg0: AnnotatedMixinElementHandlerAccessor$AnnotatedElementInvoker, arg1: TypeHandle): void;
    // private registerInvokerForTarget(arg0: AnnotatedMixinElementHandlerAccessor$AnnotatedElementInvoker, arg1: TypeHandle): void;
}