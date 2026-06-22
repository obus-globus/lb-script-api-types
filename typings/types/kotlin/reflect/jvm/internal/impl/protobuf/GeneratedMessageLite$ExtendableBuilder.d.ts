import type { Object } from '../../../../../../java/lang/Object.d.ts'
import type { FieldSet } from '../../../../../../kotlin/reflect/jvm/internal/impl/protobuf/FieldSet.d.ts'
import type { GeneratedMessageLite$Builder } from '../../../../../../kotlin/reflect/jvm/internal/impl/protobuf/GeneratedMessageLite$Builder.d.ts'
import type { GeneratedMessageLite$ExtendableMessage } from '../../../../../../kotlin/reflect/jvm/internal/impl/protobuf/GeneratedMessageLite$ExtendableMessage.d.ts'
import type { GeneratedMessageLite$ExtendableMessageOrBuilder } from '../../../../../../kotlin/reflect/jvm/internal/impl/protobuf/GeneratedMessageLite$ExtendableMessageOrBuilder.d.ts'
import type { GeneratedMessageLite$ExtensionDescriptor } from '../../../../../../kotlin/reflect/jvm/internal/impl/protobuf/GeneratedMessageLite$ExtensionDescriptor.d.ts'
import type { GeneratedMessageLite$GeneratedExtension } from '../../../../../../kotlin/reflect/jvm/internal/impl/protobuf/GeneratedMessageLite$GeneratedExtension.d.ts'
import type { MessageLite } from '../../../../../../kotlin/reflect/jvm/internal/impl/protobuf/MessageLite.d.ts'
export abstract class GeneratedMessageLite$ExtendableBuilder<MessageType extends GeneratedMessageLite$ExtendableMessage<MessageType>, BuilderType extends GeneratedMessageLite$ExtendableBuilder<MessageType, BuilderType>> extends GeneratedMessageLite$Builder<MessageType, BuilderType> implements GeneratedMessageLite$ExtendableMessageOrBuilder<MessageType> {
    constructor()
    // private extensions: FieldSet<GeneratedMessageLite$ExtensionDescriptor>;
    // private extensionsIsMutable: boolean;
    addExtension<Type extends Object | number | string | boolean>(arg0: GeneratedMessageLite$GeneratedExtension<MessageType, Type[]>, arg1: Type): BuilderType;
    // private buildExtensions(): FieldSet<GeneratedMessageLite$ExtensionDescriptor>;
    clone(): BuilderType;
    // private ensureExtensionsIsMutable(): void;
    extensionsAreInitialized(): boolean;
    getDefaultInstanceForType(): MessageLite;
    isInitialized(): boolean;
    mergeExtensionFields(arg0: MessageType): void;
    setExtension<Type extends Object | number | string | boolean>(arg0: GeneratedMessageLite$GeneratedExtension<MessageType, Type>, arg1: Type): BuilderType;
    // private verifyExtensionContainingType(arg0: GeneratedMessageLite$GeneratedExtension<MessageType, Object>): void;
}