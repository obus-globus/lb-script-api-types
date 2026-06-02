import type { ITargetSelector } from '../../../../org/spongepowered/asm/mixin/injection/selectors/ITargetSelector.d.ts'
import type { ITargetSelectorRemappable } from '../../../../org/spongepowered/asm/mixin/injection/selectors/ITargetSelectorRemappable.d.ts'
import type { AnnotatedMixin } from '../../../../org/spongepowered/tools/obfuscation/AnnotatedMixin.d.ts'
import type { AnnotatedMixinElementHandler } from '../../../../org/spongepowered/tools/obfuscation/AnnotatedMixinElementHandler.d.ts'
import type { AnnotatedMixinElementHandlerInjector$AnnotatedElementInjectionPoint } from '../../../../org/spongepowered/tools/obfuscation/AnnotatedMixinElementHandlerInjector$AnnotatedElementInjectionPoint.d.ts'
import type { AnnotatedMixinElementHandlerInjector$AnnotatedElementInjector } from '../../../../org/spongepowered/tools/obfuscation/AnnotatedMixinElementHandlerInjector$AnnotatedElementInjector.d.ts'
import type { IMixinAnnotationProcessor } from '../../../../org/spongepowered/tools/obfuscation/interfaces/IMixinAnnotationProcessor.d.ts'
import type { TypeHandle } from '../../../../org/spongepowered/tools/obfuscation/mirror/TypeHandle.d.ts'
export class AnnotatedMixinElementHandlerInjector extends AnnotatedMixinElementHandler {
    constructor(arg0: IMixinAnnotationProcessor, arg1: AnnotatedMixin)
    registerInjectionPoint(arg0: AnnotatedMixinElementHandlerInjector$AnnotatedElementInjectionPoint, arg1: string): void;
    registerInjector(arg0: AnnotatedMixinElementHandlerInjector$AnnotatedElementInjector): void;
    // private registerInjector(arg0: AnnotatedMixinElementHandlerInjector$AnnotatedElementInjector, arg1: string, arg2: ITargetSelectorRemappable, arg3: TypeHandle): boolean;
    // private registerInjectorTarget(arg0: AnnotatedMixinElementHandlerInjector$AnnotatedElementInjector, arg1: string, arg2: ITargetSelector, arg3: string): void;
    remapNewTarget(arg0: string, arg1: string, arg2: ITargetSelector, arg3: AnnotatedMixinElementHandlerInjector$AnnotatedElementInjectionPoint): void;
    remapReference(arg0: string, arg1: string, arg2: ITargetSelector, arg3: AnnotatedMixinElementHandlerInjector$AnnotatedElementInjectionPoint): void;
}