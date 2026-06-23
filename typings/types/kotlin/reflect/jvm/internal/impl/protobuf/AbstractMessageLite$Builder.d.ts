import type { Object } from '../../../../../../java/lang/Object.d.ts'
import type { CodedInputStream } from '../../../../../../kotlin/reflect/jvm/internal/impl/protobuf/CodedInputStream.d.ts'
import type { ExtensionRegistryLite } from '../../../../../../kotlin/reflect/jvm/internal/impl/protobuf/ExtensionRegistryLite.d.ts'
import type { MessageLite } from '../../../../../../kotlin/reflect/jvm/internal/impl/protobuf/MessageLite.d.ts'
import type { MessageLite$Builder } from '../../../../../../kotlin/reflect/jvm/internal/impl/protobuf/MessageLite$Builder.d.ts'
export abstract class AbstractMessageLite$Builder<BuilderType extends AbstractMessageLite$Builder<AbstractMessageLite$Builder<any>>> extends Object implements MessageLite$Builder {
    constructor()
    build(): MessageLite;
    clone(): BuilderType;
    getDefaultInstanceForType(): MessageLite;
    isInitialized(): boolean;
    mergeFrom(arg0: CodedInputStream, arg1: ExtensionRegistryLite): BuilderType;
}