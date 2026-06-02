import type { Object } from '../../../../../../java/lang/Object.d.ts'
import type { CodedInputStream } from '../../../../../../kotlin/reflect/jvm/internal/impl/protobuf/CodedInputStream.d.ts'
import type { ExtensionRegistryLite } from '../../../../../../kotlin/reflect/jvm/internal/impl/protobuf/ExtensionRegistryLite.d.ts'
import type { MessageLite$Builder } from '../../../../../../kotlin/reflect/jvm/internal/impl/protobuf/MessageLite$Builder.d.ts'
export abstract class AbstractMessageLite$Builder<BuilderType extends AbstractMessageLite$Builder<AbstractMessageLite$Builder<Object>>> extends Object implements MessageLite$Builder {
    constructor()
    clone(): BuilderType;
    mergeFrom(arg0: CodedInputStream, arg1: ExtensionRegistryLite): BuilderType;
}