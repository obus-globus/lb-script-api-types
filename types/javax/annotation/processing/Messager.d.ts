import type { AnnotationMirror } from '../../../javax/lang/model/element/AnnotationMirror.d.ts'
import type { AnnotationValue } from '../../../javax/lang/model/element/AnnotationValue.d.ts'
import type { Element } from '../../../javax/lang/model/element/Element.d.ts'
import type { Diagnostic$Kind } from '../../../javax/tools/Diagnostic$Kind.d.ts'
import type { Object } from '../../../java/lang/Object.d.ts'
import type { CharSequence } from '../../../java/lang/CharSequence.d.ts'
export interface Messager extends Object{
    printError(arg0: CharSequence): void;
    printError(arg0: CharSequence, arg1: Element): void;
    printMessage(arg0: Diagnostic$Kind, arg1: CharSequence): void;
    printMessage(arg0: Diagnostic$Kind, arg1: CharSequence, arg2: Element): void;
    printMessage(arg0: Diagnostic$Kind, arg1: CharSequence, arg2: Element, arg3: AnnotationMirror): void;
    printMessage(arg0: Diagnostic$Kind, arg1: CharSequence, arg2: Element, arg3: AnnotationMirror, arg4: AnnotationValue): void;
    printNote(arg0: CharSequence): void;
    printNote(arg0: CharSequence, arg1: Element): void;
    printWarning(arg0: CharSequence): void;
    printWarning(arg0: CharSequence, arg1: Element): void;
}