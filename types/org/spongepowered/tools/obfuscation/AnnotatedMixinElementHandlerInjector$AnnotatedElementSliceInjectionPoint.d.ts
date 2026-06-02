import type { ExecutableElement } from '../../../../javax/lang/model/element/ExecutableElement.d.ts'
import type { ISelectorContext } from '../../../../org/spongepowered/asm/mixin/injection/selectors/ISelectorContext.d.ts'
import type { IMixinContext } from '../../../../org/spongepowered/asm/mixin/refmap/IMixinContext.d.ts'
import type { AnnotatedMixinElementHandlerInjector$AnnotatedElementInjectionPoint } from '../../../../org/spongepowered/tools/obfuscation/AnnotatedMixinElementHandlerInjector$AnnotatedElementInjectionPoint.d.ts'
import type { AnnotationHandle } from '../../../../org/spongepowered/tools/obfuscation/mirror/AnnotationHandle.d.ts'
import type { InjectorRemap } from '../../../../org/spongepowered/tools/obfuscation/struct/InjectorRemap.d.ts'
export class AnnotatedMixinElementHandlerInjector$AnnotatedElementSliceInjectionPoint extends AnnotatedMixinElementHandlerInjector$AnnotatedElementInjectionPoint {
    constructor(arg0: ExecutableElement, arg1: AnnotationHandle, arg2: IMixinContext, arg3: string, arg4: AnnotationHandle, arg5: InjectorRemap, arg6: ISelectorContext)
    // private parentContext: ISelectorContext;
    getParent(): ISelectorContext;
}