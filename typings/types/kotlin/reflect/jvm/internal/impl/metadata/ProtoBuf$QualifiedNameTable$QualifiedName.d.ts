import type { Class } from '../../../../../../java/lang/Class.d.ts'
import type { Object } from '../../../../../../java/lang/Object.d.ts'
import type { ProtoBuf$QualifiedNameTable$QualifiedNameOrBuilder } from '../../../../../../kotlin/reflect/jvm/internal/impl/metadata/ProtoBuf$QualifiedNameTable$QualifiedNameOrBuilder.d.ts'
import type { ProtoBuf$QualifiedNameTable$QualifiedName$Builder } from '../../../../../../kotlin/reflect/jvm/internal/impl/metadata/ProtoBuf$QualifiedNameTable$QualifiedName$Builder.d.ts'
import type { ProtoBuf$QualifiedNameTable$QualifiedName$Kind } from '../../../../../../kotlin/reflect/jvm/internal/impl/metadata/ProtoBuf$QualifiedNameTable$QualifiedName$Kind.d.ts'
import type { CodedInputStream } from '../../../../../../kotlin/reflect/jvm/internal/impl/protobuf/CodedInputStream.d.ts'
import type { CodedOutputStream } from '../../../../../../kotlin/reflect/jvm/internal/impl/protobuf/CodedOutputStream.d.ts'
import type { ExtensionRegistryLite } from '../../../../../../kotlin/reflect/jvm/internal/impl/protobuf/ExtensionRegistryLite.d.ts'
import type { GeneratedMessageLite } from '../../../../../../kotlin/reflect/jvm/internal/impl/protobuf/GeneratedMessageLite.d.ts'
import type { GeneratedMessageLite$Builder } from '../../../../../../kotlin/reflect/jvm/internal/impl/protobuf/GeneratedMessageLite$Builder.d.ts'
import type { GeneratedMessageLite$GeneratedExtension } from '../../../../../../kotlin/reflect/jvm/internal/impl/protobuf/GeneratedMessageLite$GeneratedExtension.d.ts'
import type { Internal$EnumLiteMap } from '../../../../../../kotlin/reflect/jvm/internal/impl/protobuf/Internal$EnumLiteMap.d.ts'
import type { MessageLite } from '../../../../../../kotlin/reflect/jvm/internal/impl/protobuf/MessageLite.d.ts'
import type { Parser } from '../../../../../../kotlin/reflect/jvm/internal/impl/protobuf/Parser.d.ts'
import type { WireFormat$FieldType } from '../../../../../../kotlin/reflect/jvm/internal/impl/protobuf/WireFormat$FieldType.d.ts'
export class ProtoBuf$QualifiedNameTable$QualifiedName extends GeneratedMessageLite implements ProtoBuf$QualifiedNameTable$QualifiedNameOrBuilder {
    static PARSER: Parser<ProtoBuf$QualifiedNameTable$QualifiedName>;
    static getDefaultInstance(): ProtoBuf$QualifiedNameTable$QualifiedName;
    static newBuilder(): ProtoBuf$QualifiedNameTable$QualifiedName$Builder;
    static newBuilder(paramarg0: ProtoBuf$QualifiedNameTable$QualifiedName): ProtoBuf$QualifiedNameTable$QualifiedName$Builder;
    static newRepeatedGeneratedExtension<ContainingType extends MessageLite, Type extends unknown>(paramarg0: ContainingType, paramarg1: MessageLite, paramarg2: Internal$EnumLiteMap<any>, paramarg3: number, paramarg4: WireFormat$FieldType, paramarg5: boolean, paramarg6: Class<Object>): GeneratedMessageLite$GeneratedExtension<ContainingType, Type>;
    static newSingularGeneratedExtension<ContainingType extends MessageLite, Type extends unknown>(paramarg0: ContainingType, paramarg1: Type, paramarg2: MessageLite, paramarg3: Internal$EnumLiteMap<any>, paramarg4: number, paramarg5: WireFormat$FieldType, paramarg6: Class<Object>): GeneratedMessageLite$GeneratedExtension<ContainingType, Type>;
    constructor(arg0: CodedInputStream, arg1: ExtensionRegistryLite, arg2: any)
    constructor(arg0: GeneratedMessageLite$Builder<GeneratedMessageLite, GeneratedMessageLite$Builder<any, any>>, arg1: any)
    // private bitField0_: number;
    // private kind_: ProtoBuf$QualifiedNameTable$QualifiedName$Kind;
    // private memoizedIsInitialized: number;
    // private memoizedSerializedSize: number;
    // private parentQualifiedName_: number;
    // private shortName_: number;
    // private unknownFields: number[];
    getDefaultInstanceForType(): ProtoBuf$QualifiedNameTable$QualifiedName;
    getKind(): ProtoBuf$QualifiedNameTable$QualifiedName$Kind;
    getParentQualifiedName(): number;
    getParserForType(): Parser<ProtoBuf$QualifiedNameTable$QualifiedName>;
    getSerializedSize(): number;
    getShortName(): number;
    hasKind(): boolean;
    hasParentQualifiedName(): boolean;
    hasShortName(): boolean;
    // private initFields(): void;
    isInitialized(): boolean;
    newBuilderForType(): ProtoBuf$QualifiedNameTable$QualifiedName$Builder;
    toBuilder(): ProtoBuf$QualifiedNameTable$QualifiedName$Builder;
    writeTo(arg0: CodedOutputStream): void;
}