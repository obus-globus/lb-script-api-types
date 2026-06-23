import type { Class } from '../../../../../../java/lang/Class.d.ts'
import type { Object } from '../../../../../../java/lang/Object.d.ts'
import type { CodedInputStream } from '../../../../../../kotlin/reflect/jvm/internal/impl/protobuf/CodedInputStream.d.ts'
import type { CodedOutputStream } from '../../../../../../kotlin/reflect/jvm/internal/impl/protobuf/CodedOutputStream.d.ts'
import type { ExtensionRegistryLite } from '../../../../../../kotlin/reflect/jvm/internal/impl/protobuf/ExtensionRegistryLite.d.ts'
import type { FieldSet } from '../../../../../../kotlin/reflect/jvm/internal/impl/protobuf/FieldSet.d.ts'
import type { GeneratedMessageLite } from '../../../../../../kotlin/reflect/jvm/internal/impl/protobuf/GeneratedMessageLite.d.ts'
import type { GeneratedMessageLite$ExtendableBuilder } from '../../../../../../kotlin/reflect/jvm/internal/impl/protobuf/GeneratedMessageLite$ExtendableBuilder.d.ts'
import type { GeneratedMessageLite$ExtendableMessage$ExtensionWriter } from '../../../../../../kotlin/reflect/jvm/internal/impl/protobuf/GeneratedMessageLite$ExtendableMessage$ExtensionWriter.d.ts'
import type { GeneratedMessageLite$ExtendableMessageOrBuilder } from '../../../../../../kotlin/reflect/jvm/internal/impl/protobuf/GeneratedMessageLite$ExtendableMessageOrBuilder.d.ts'
import type { GeneratedMessageLite$ExtensionDescriptor } from '../../../../../../kotlin/reflect/jvm/internal/impl/protobuf/GeneratedMessageLite$ExtensionDescriptor.d.ts'
import type { GeneratedMessageLite$GeneratedExtension } from '../../../../../../kotlin/reflect/jvm/internal/impl/protobuf/GeneratedMessageLite$GeneratedExtension.d.ts'
import type { Internal$EnumLiteMap } from '../../../../../../kotlin/reflect/jvm/internal/impl/protobuf/Internal$EnumLiteMap.d.ts'
import type { MessageLite } from '../../../../../../kotlin/reflect/jvm/internal/impl/protobuf/MessageLite.d.ts'
import type { WireFormat$FieldType } from '../../../../../../kotlin/reflect/jvm/internal/impl/protobuf/WireFormat$FieldType.d.ts'
export abstract class GeneratedMessageLite$ExtendableMessage<MessageType extends GeneratedMessageLite$ExtendableMessage<MessageType>> extends GeneratedMessageLite implements GeneratedMessageLite$ExtendableMessageOrBuilder<MessageType> {
    static newRepeatedGeneratedExtension(paramarg0: MessageLite | null, paramarg1: MessageLite, paramarg2: Internal$EnumLiteMap<any>, paramarg3: number, paramarg4: WireFormat$FieldType, paramarg5: boolean, paramarg6: Class<Object>): GeneratedMessageLite$GeneratedExtension<MessageLite, Object>;
    static newSingularGeneratedExtension(paramarg0: MessageLite | null, paramarg1: Object | null, paramarg2: MessageLite, paramarg3: Internal$EnumLiteMap<any>, paramarg4: number, paramarg5: WireFormat$FieldType, paramarg6: Class<Object>): GeneratedMessageLite$GeneratedExtension<MessageLite, Object>;
    constructor()
    constructor(arg0: GeneratedMessageLite$ExtendableBuilder<MessageType, any>)
    // private extensions: FieldSet<GeneratedMessageLite$ExtensionDescriptor>;
    extensionsAreInitialized(): boolean;
    extensionsSerializedSize(): number;
    getDefaultInstanceForType(): MessageLite;
    getExtension<Type extends unknown>(arg0: GeneratedMessageLite$GeneratedExtension<MessageType, Type>): Type;
    getExtension<Type extends unknown>(arg0: GeneratedMessageLite$GeneratedExtension<MessageType, Type[]>, arg1: number): Type;
    getExtensionCount<Type extends unknown>(arg0: GeneratedMessageLite$GeneratedExtension<MessageType, Type[]>): number;
    hasExtension<Type extends unknown>(arg0: GeneratedMessageLite$GeneratedExtension<MessageType, Type>): boolean;
    isInitialized(): boolean;
    makeExtensionsImmutable(): void;
    newExtensionWriter(): GeneratedMessageLite$ExtendableMessage$ExtensionWriter;
    parseUnknownField(arg0: CodedInputStream, arg1: CodedOutputStream, arg2: ExtensionRegistryLite, arg3: number): boolean;
    // private verifyExtensionContainingType(arg0: GeneratedMessageLite$GeneratedExtension<MessageType, Object>): void;
}