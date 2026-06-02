import type { ExecutableElement } from '../../../../javax/lang/model/element/ExecutableElement.d.ts'
import type { Object } from '../../../../java/lang/Object.d.ts'
import type { ISelectorContext } from '../../../../org/spongepowered/asm/mixin/injection/selectors/ISelectorContext.d.ts'
import type { IMixinContext } from '../../../../org/spongepowered/asm/mixin/refmap/IMixinContext.d.ts'
import type { IAnnotationHandle } from '../../../../org/spongepowered/asm/util/asm/IAnnotationHandle.d.ts'
import type { AnnotatedMixinElementHandler$AnnotatedElement } from '../../../../org/spongepowered/tools/obfuscation/AnnotatedMixinElementHandler$AnnotatedElement.d.ts'
import type { AnnotationHandle } from '../../../../org/spongepowered/tools/obfuscation/mirror/AnnotationHandle.d.ts'
export abstract class AnnotatedMixinElementHandler$AnnotatedElementExecutable extends AnnotatedMixinElementHandler$AnnotatedElement<ExecutableElement> implements ISelectorContext {
    constructor(arg0: ExecutableElement, arg1: AnnotationHandle, arg2: IMixinContext, arg3: string)
    // private context: IMixinContext;
    // private selectorCoordinate: string;
    getElementDescription(): string;
    getMethod(): Object;
    getMixin(): IMixinContext;
    getParent(): ISelectorContext;
    getSelectorAnnotation(): IAnnotationHandle;
    getSelectorCoordinate(arg0: boolean): string;
    remap(arg0: string): string;
    toString(): string;
}