import type { Messager } from '../../../../../javax/annotation/processing/Messager.d.ts'
import type { Element } from '../../../../../javax/lang/model/element/Element.d.ts'
import type { Object } from '../../../../../java/lang/Object.d.ts'
import type { CharSequence } from '../../../../../java/lang/CharSequence.d.ts'
import type { IMessagerEx$MessageType } from '../../../../../org/spongepowered/tools/obfuscation/interfaces/IMessagerEx$MessageType.d.ts'
import type { AnnotationHandle } from '../../../../../org/spongepowered/tools/obfuscation/mirror/AnnotationHandle.d.ts'
import type { Message } from '../../../../../org/spongepowered/tools/obfuscation/struct/Message.d.ts'
export class InjectorRemap extends Object {
    constructor(arg0: boolean)
    // private message: Message;
    // private remap: boolean;
    // private remappedCount: number;
    addMessage(arg0: IMessagerEx$MessageType, arg1: CharSequence, arg2: Element, arg3: AnnotationHandle): void;
    clearMessage(): void;
    dispatchPendingMessages(arg0: Messager): void;
    notifyRemapped(): void;
    shouldRemap(): boolean;
}