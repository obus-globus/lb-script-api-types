import type { Element } from '../../../../javax/lang/model/element/Element.d.ts'
import type { ExecutableElement } from '../../../../javax/lang/model/element/ExecutableElement.d.ts'
import type { CharSequence } from '../../../../java/lang/CharSequence.d.ts'
import type { IMixinContext } from '../../../../org/spongepowered/asm/mixin/refmap/IMixinContext.d.ts'
import type { AnnotatedMixinElementHandler$AnnotatedElementExecutable } from '../../../../org/spongepowered/tools/obfuscation/AnnotatedMixinElementHandler$AnnotatedElementExecutable.d.ts'
import type { IMessagerEx$MessageType } from '../../../../org/spongepowered/tools/obfuscation/interfaces/IMessagerEx$MessageType.d.ts'
import type { AnnotationHandle } from '../../../../org/spongepowered/tools/obfuscation/mirror/AnnotationHandle.d.ts'
import type { InjectorRemap } from '../../../../org/spongepowered/tools/obfuscation/struct/InjectorRemap.d.ts'
export class AnnotatedMixinElementHandlerInjector$AnnotatedElementInjector extends AnnotatedMixinElementHandler$AnnotatedElementExecutable {
    constructor(arg0: ExecutableElement, arg1: AnnotationHandle, arg2: IMixinContext, arg3: InjectorRemap)
    // private state: InjectorRemap;
    addMessage(arg0: IMessagerEx$MessageType, arg1: CharSequence, arg2: Element, arg3: AnnotationHandle): void;
    hasCoerceArgument(): boolean;
    shouldRemap(): boolean;
    toString(): string;
}