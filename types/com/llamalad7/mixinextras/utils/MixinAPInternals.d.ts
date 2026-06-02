import type { ProcessingEnvironment } from '../../../../javax/annotation/processing/ProcessingEnvironment.d.ts'
import type { ExecutableElement } from '../../../../javax/lang/model/element/ExecutableElement.d.ts'
import type { TypeElement } from '../../../../javax/lang/model/element/TypeElement.d.ts'
import type { Object } from '../../../../java/lang/Object.d.ts'
import type { AnnotationHandle } from '../../../../org/spongepowered/tools/obfuscation/mirror/AnnotationHandle.d.ts'
export class MixinAPInternals extends Object {
    static registerInjectionPoint(paramarg0: ProcessingEnvironment, paramarg1: TypeElement, paramarg2: ExecutableElement, paramarg3: AnnotationHandle, paramarg4: AnnotationHandle): void;
    static writeReferences(paramarg0: ProcessingEnvironment): void;
    constructor()
}