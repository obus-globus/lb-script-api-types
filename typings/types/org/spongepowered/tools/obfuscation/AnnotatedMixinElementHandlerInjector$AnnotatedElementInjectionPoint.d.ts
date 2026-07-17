import type { JavaMap } from '../../../../JavaMap.d.ts'
import type { AnnotationMirror } from '../../../../javax/lang/model/element/AnnotationMirror.d.ts'
import type { ExecutableElement } from '../../../../javax/lang/model/element/ExecutableElement.d.ts'
import type { IMixinContext } from '../../../../org/spongepowered/asm/mixin/refmap/IMixinContext.d.ts'
import type { IAnnotationHandle } from '../../../../org/spongepowered/asm/util/asm/IAnnotationHandle.d.ts'
import type { AnnotatedMixinElementHandler$AnnotatedElementExecutable } from '../../../../org/spongepowered/tools/obfuscation/AnnotatedMixinElementHandler$AnnotatedElementExecutable.d.ts'
import type { IMixinAnnotationProcessor$CompilerEnvironment } from '../../../../org/spongepowered/tools/obfuscation/interfaces/IMixinAnnotationProcessor$CompilerEnvironment.d.ts'
import type { AnnotationHandle } from '../../../../org/spongepowered/tools/obfuscation/mirror/AnnotationHandle.d.ts'
import type { InjectorRemap } from '../../../../org/spongepowered/tools/obfuscation/struct/InjectorRemap.d.ts'
export class AnnotatedMixinElementHandlerInjector$AnnotatedElementInjectionPoint extends AnnotatedMixinElementHandler$AnnotatedElementExecutable {
    constructor(arg0: ExecutableElement, arg1: AnnotationHandle, arg2: IMixinContext, arg3: string, arg4: AnnotationHandle, arg5: InjectorRemap)
    // private args: JavaMap<string, string>;
    readonly at: AnnotationHandle;
    // private state: InjectorRemap;
    getAt(): AnnotationHandle;
    getAtArg(arg0: string): string;
    getAtErrorElement(arg0: IMixinAnnotationProcessor$CompilerEnvironment): AnnotationMirror;
    getSelectorAnnotation(): IAnnotationHandle;
    notifyRemapped(): void;
    shouldRemap(): boolean;
}