import type { Serializable } from '../../../../../../java/io/Serializable.d.ts'
import type { Class } from '../../../../../../java/lang/Class.d.ts'
import type { Object } from '../../../../../../java/lang/Object.d.ts'
import type { AbstractMessageLite } from '../../../../../../kotlin/reflect/jvm/internal/impl/protobuf/AbstractMessageLite.d.ts'
import type { CodedInputStream } from '../../../../../../kotlin/reflect/jvm/internal/impl/protobuf/CodedInputStream.d.ts'
import type { CodedOutputStream } from '../../../../../../kotlin/reflect/jvm/internal/impl/protobuf/CodedOutputStream.d.ts'
import type { ExtensionRegistryLite } from '../../../../../../kotlin/reflect/jvm/internal/impl/protobuf/ExtensionRegistryLite.d.ts'
import type { GeneratedMessageLite$Builder } from '../../../../../../kotlin/reflect/jvm/internal/impl/protobuf/GeneratedMessageLite$Builder.d.ts'
import type { GeneratedMessageLite$GeneratedExtension } from '../../../../../../kotlin/reflect/jvm/internal/impl/protobuf/GeneratedMessageLite$GeneratedExtension.d.ts'
import type { Internal$EnumLiteMap } from '../../../../../../kotlin/reflect/jvm/internal/impl/protobuf/Internal$EnumLiteMap.d.ts'
import type { MessageLite } from '../../../../../../kotlin/reflect/jvm/internal/impl/protobuf/MessageLite.d.ts'
import type { Parser } from '../../../../../../kotlin/reflect/jvm/internal/impl/protobuf/Parser.d.ts'
import type { WireFormat$FieldType } from '../../../../../../kotlin/reflect/jvm/internal/impl/protobuf/WireFormat$FieldType.d.ts'
export abstract class GeneratedMessageLite extends AbstractMessageLite implements Serializable {
    static newRepeatedGeneratedExtension<ContainingType extends MessageLite, Type extends unknown>(paramarg0: ContainingType, paramarg1: MessageLite, paramarg2: Internal$EnumLiteMap<any>, paramarg3: number, paramarg4: WireFormat$FieldType, paramarg5: boolean, paramarg6: Class<Object>): GeneratedMessageLite$GeneratedExtension<ContainingType, Type>;
    static newSingularGeneratedExtension<ContainingType extends MessageLite, Type extends unknown>(paramarg0: ContainingType, paramarg1: Type, paramarg2: MessageLite, paramarg3: Internal$EnumLiteMap<any>, paramarg4: number, paramarg5: WireFormat$FieldType, paramarg6: Class<Object>): GeneratedMessageLite$GeneratedExtension<ContainingType, Type>;
    constructor()
    constructor(arg0: GeneratedMessageLite$Builder<GeneratedMessageLite, GeneratedMessageLite$Builder<any, any>>)
    getParserForType(): Parser<MessageLite>;
    makeExtensionsImmutable(): void;
    parseUnknownField(arg0: CodedInputStream, arg1: CodedOutputStream, arg2: ExtensionRegistryLite, arg3: number): boolean;
}