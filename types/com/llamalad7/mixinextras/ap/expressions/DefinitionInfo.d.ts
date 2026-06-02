import type { ProcessingEnvironment } from '../../../../../javax/annotation/processing/ProcessingEnvironment.d.ts'
import type { ExecutableElement } from '../../../../../javax/lang/model/element/ExecutableElement.d.ts'
import type { TypeElement } from '../../../../../javax/lang/model/element/TypeElement.d.ts'
import type { Object } from '../../../../../java/lang/Object.d.ts'
import type { AnnotationHandle } from '../../../../../org/spongepowered/tools/obfuscation/mirror/AnnotationHandle.d.ts'
export abstract class DefinitionInfo extends Object {
    constructor(arg0: string, arg1: ProcessingEnvironment, arg2: TypeElement, arg3: ExecutableElement, arg4: AnnotationHandle, arg5: string, arg6: boolean)
    // private at: AnnotationHandle;
    // private handler: ExecutableElement;
    // private injector: AnnotationHandle;
    // private mixin: TypeElement;
    // private processingEnv: ProcessingEnvironment;
    remap(): void;
}