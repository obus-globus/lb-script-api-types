import type { Object } from '../../../../../../../java/lang/Object.d.ts'
import type { GeneratedMessageLite$ExtendableMessage } from '../../../../../../../kotlin/reflect/jvm/internal/impl/protobuf/GeneratedMessageLite$ExtendableMessage.d.ts'
import type { GeneratedMessageLite$GeneratedExtension } from '../../../../../../../kotlin/reflect/jvm/internal/impl/protobuf/GeneratedMessageLite$GeneratedExtension.d.ts'
export class ProtoBufUtilKt extends Object {
    static getExtensionOrNull<M extends GeneratedMessageLite$ExtendableMessage<M>, T extends unknown>(paramarg0: GeneratedMessageLite$ExtendableMessage<M>, paramarg1: GeneratedMessageLite$GeneratedExtension<M, T>): T;
    static getExtensionOrNull<M extends GeneratedMessageLite$ExtendableMessage<M>, T extends unknown>(paramarg0: GeneratedMessageLite$ExtendableMessage<M>, paramarg1: GeneratedMessageLite$GeneratedExtension<M, T[]>, paramarg2: number): T;
}