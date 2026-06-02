import type { ExecutableElement } from '../../../../javax/lang/model/element/ExecutableElement.d.ts'
import type { AnnotatedMixinElementHandler$AnnotatedElement } from '../../../../org/spongepowered/tools/obfuscation/AnnotatedMixinElementHandler$AnnotatedElement.d.ts'
import type { AnnotationHandle } from '../../../../org/spongepowered/tools/obfuscation/mirror/AnnotationHandle.d.ts'
export class AnnotatedMixinElementHandlerOverwrite$AnnotatedElementOverwrite extends AnnotatedMixinElementHandler$AnnotatedElement<ExecutableElement> {
    constructor(arg0: ExecutableElement, arg1: AnnotationHandle, arg2: boolean)
    // private shouldRemap: boolean;
    shouldRemap(): boolean;
}