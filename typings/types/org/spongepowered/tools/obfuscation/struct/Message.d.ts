import type { Messager } from '../../../../../javax/annotation/processing/Messager.d.ts'
import type { AnnotationMirror } from '../../../../../javax/lang/model/element/AnnotationMirror.d.ts'
import type { AnnotationValue } from '../../../../../javax/lang/model/element/AnnotationValue.d.ts'
import type { Element } from '../../../../../javax/lang/model/element/Element.d.ts'
import type { Diagnostic$Kind } from '../../../../../javax/tools/Diagnostic$Kind.d.ts'
import type { Object } from '../../../../../java/lang/Object.d.ts'
import type { CharSequence } from '../../../../../java/lang/CharSequence.d.ts'
import type { IMessagerEx$MessageType } from '../../../../../org/spongepowered/tools/obfuscation/interfaces/IMessagerEx$MessageType.d.ts'
import type { AnnotationHandle } from '../../../../../org/spongepowered/tools/obfuscation/mirror/AnnotationHandle.d.ts'
export class Message extends Object {
    constructor(arg0: Diagnostic$Kind, arg1: CharSequence)
    constructor(arg0: Diagnostic$Kind, arg1: CharSequence, arg2: Element)
    constructor(arg0: Diagnostic$Kind, arg1: CharSequence, arg2: Element, arg3: AnnotationMirror)
    constructor(arg0: Diagnostic$Kind, arg1: CharSequence, arg2: Element, arg3: AnnotationMirror, arg4: AnnotationValue)
    constructor(arg0: Diagnostic$Kind, arg1: CharSequence, arg2: Element, arg3: AnnotationHandle)
    constructor(arg0: Diagnostic$Kind, arg1: CharSequence, arg2: Element, arg3: AnnotationHandle, arg4: AnnotationValue)
    constructor(arg0: IMessagerEx$MessageType, arg1: CharSequence)
    constructor(arg0: IMessagerEx$MessageType, arg1: CharSequence, arg2: Element)
    constructor(arg0: IMessagerEx$MessageType, arg1: CharSequence, arg2: Element, arg3: AnnotationMirror)
    constructor(arg0: IMessagerEx$MessageType, arg1: CharSequence, arg2: Element, arg3: AnnotationMirror, arg4: AnnotationValue)
    constructor(arg0: IMessagerEx$MessageType, arg1: CharSequence, arg2: Element, arg3: AnnotationHandle)
    constructor(arg0: IMessagerEx$MessageType, arg1: CharSequence, arg2: Element, arg3: AnnotationHandle, arg4: AnnotationValue)
    readonly annotation: AnnotationMirror;
    readonly element: Element;
    readonly kind: Diagnostic$Kind;
    readonly msg: CharSequence;
    readonly value: AnnotationValue;
    getAnnotation(): AnnotationMirror;
    getElement(): Element;
    getKind(): Diagnostic$Kind;
    getMsg(): CharSequence;
    getValue(): AnnotationValue;
    sendTo(arg0: Messager): Message;
    setKind(arg0: Diagnostic$Kind): Message;
    setMsg(arg0: CharSequence): Message;
}