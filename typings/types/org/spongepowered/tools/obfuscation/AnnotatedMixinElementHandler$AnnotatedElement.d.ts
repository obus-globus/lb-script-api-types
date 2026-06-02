import type { Class } from '../../../../java/lang/Class.d.ts'
import type { Element } from '../../../../javax/lang/model/element/Element.d.ts'
import type { Annotation } from '../../../../java/lang/annotation/Annotation.d.ts'
import type { Object } from '../../../../java/lang/Object.d.ts'
import type { CharSequence } from '../../../../java/lang/CharSequence.d.ts'
import type { IAnnotatedElement } from '../../../../org/spongepowered/asm/util/asm/IAnnotatedElement.d.ts'
import type { IAnnotationHandle } from '../../../../org/spongepowered/asm/util/asm/IAnnotationHandle.d.ts'
import type { IMessagerEx } from '../../../../org/spongepowered/tools/obfuscation/interfaces/IMessagerEx.d.ts'
import type { IMessagerEx$MessageType } from '../../../../org/spongepowered/tools/obfuscation/interfaces/IMessagerEx$MessageType.d.ts'
import type { AnnotationHandle } from '../../../../org/spongepowered/tools/obfuscation/mirror/AnnotationHandle.d.ts'
export abstract class AnnotatedMixinElementHandler$AnnotatedElement<E extends Element> extends Object implements IAnnotatedElement {
    constructor(arg0: E, arg1: AnnotationHandle)
    readonly annotation: AnnotationHandle;
    readonly desc: string;
    readonly element: E;
    getAnnotation(): AnnotationHandle;
    getAnnotation(arg0: Class<Annotation>): IAnnotationHandle;
    getDesc(): string;
    getElement(): E;
    getSimpleName(): string;
    printMessage(arg0: IMessagerEx, arg1: IMessagerEx$MessageType, arg2: CharSequence): void;
}