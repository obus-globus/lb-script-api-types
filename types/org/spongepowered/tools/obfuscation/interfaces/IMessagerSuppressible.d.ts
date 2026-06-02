import type { AnnotationMirror } from '../../../../../javax/lang/model/element/AnnotationMirror.d.ts'
import type { AnnotationValue } from '../../../../../javax/lang/model/element/AnnotationValue.d.ts'
import type { Element } from '../../../../../javax/lang/model/element/Element.d.ts'
import type { Diagnostic$Kind } from '../../../../../javax/tools/Diagnostic$Kind.d.ts'
import type { Object } from '../../../../../java/lang/Object.d.ts'
import type { CharSequence } from '../../../../../java/lang/CharSequence.d.ts'
import type { SuppressedBy } from '../../../../../org/spongepowered/tools/obfuscation/SuppressedBy.d.ts'
import type { IMessagerEx } from '../../../../../org/spongepowered/tools/obfuscation/interfaces/IMessagerEx.d.ts'
import type { IMessagerEx$MessageType } from '../../../../../org/spongepowered/tools/obfuscation/interfaces/IMessagerEx$MessageType.d.ts'
export interface IMessagerSuppressible extends Object, IMessagerEx{
    printMessage(arg0: Diagnostic$Kind, arg1: CharSequence, arg2: Element, arg3: AnnotationMirror, arg4: AnnotationValue, arg5: SuppressedBy): void;
    printMessage(arg0: Diagnostic$Kind, arg1: CharSequence, arg2: Element, arg3: AnnotationMirror, arg4: SuppressedBy): void;
    printMessage(arg0: Diagnostic$Kind, arg1: CharSequence, arg2: Element, arg3: SuppressedBy): void;
    printMessage(arg0: IMessagerEx$MessageType, arg1: CharSequence, arg2: Element, arg3: AnnotationMirror, arg4: AnnotationValue, arg5: SuppressedBy): void;
    printMessage(arg0: IMessagerEx$MessageType, arg1: CharSequence, arg2: Element, arg3: AnnotationMirror, arg4: SuppressedBy): void;
    printMessage(arg0: IMessagerEx$MessageType, arg1: CharSequence, arg2: Element, arg3: SuppressedBy): void;
}