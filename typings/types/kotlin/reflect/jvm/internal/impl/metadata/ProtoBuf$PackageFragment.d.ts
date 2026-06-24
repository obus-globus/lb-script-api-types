import type { ProtoBuf$1 } from '../../../../../../com/google/gson/LongSerializationPolicy$1.d.ts'
import type { InputStream } from '../../../../../../java/io/InputStream.d.ts'
import type { Class } from '../../../../../../java/lang/Class.d.ts'
import type { Object } from '../../../../../../java/lang/Object.d.ts'
import type { ProtoBuf$PackageFragmentOrBuilder } from '../../../../../../kotlin/reflect/jvm/internal/impl/metadata/ProtoBuf$PackageFragmentOrBuilder.d.ts'
import type { ProtoBuf$Annotation } from '../../../../../../kotlin/reflect/jvm/internal/impl/metadata/ProtoBuf$Annotation.d.ts'
import type { ProtoBuf$Class } from '../../../../../../kotlin/reflect/jvm/internal/impl/metadata/ProtoBuf$Class.d.ts'
import type { ProtoBuf$Package } from '../../../../../../kotlin/reflect/jvm/internal/impl/metadata/ProtoBuf$Package.d.ts'
import type { ProtoBuf$PackageFragment$Builder } from '../../../../../../kotlin/reflect/jvm/internal/impl/metadata/ProtoBuf$PackageFragment$Builder.d.ts'
import type { ProtoBuf$QualifiedNameTable } from '../../../../../../kotlin/reflect/jvm/internal/impl/metadata/ProtoBuf$QualifiedNameTable.d.ts'
import type { ProtoBuf$StringTable } from '../../../../../../kotlin/reflect/jvm/internal/impl/metadata/ProtoBuf$StringTable.d.ts'
import type { CodedInputStream } from '../../../../../../kotlin/reflect/jvm/internal/impl/protobuf/CodedInputStream.d.ts'
import type { CodedOutputStream } from '../../../../../../kotlin/reflect/jvm/internal/impl/protobuf/CodedOutputStream.d.ts'
import type { ExtensionRegistryLite } from '../../../../../../kotlin/reflect/jvm/internal/impl/protobuf/ExtensionRegistryLite.d.ts'
import type { GeneratedMessageLite$ExtendableBuilder } from '../../../../../../kotlin/reflect/jvm/internal/impl/protobuf/GeneratedMessageLite$ExtendableBuilder.d.ts'
import type { GeneratedMessageLite$ExtendableMessage } from '../../../../../../kotlin/reflect/jvm/internal/impl/protobuf/GeneratedMessageLite$ExtendableMessage.d.ts'
import type { GeneratedMessageLite$GeneratedExtension } from '../../../../../../kotlin/reflect/jvm/internal/impl/protobuf/GeneratedMessageLite$GeneratedExtension.d.ts'
import type { Internal$EnumLiteMap } from '../../../../../../kotlin/reflect/jvm/internal/impl/protobuf/Internal$EnumLiteMap.d.ts'
import type { MessageLite } from '../../../../../../kotlin/reflect/jvm/internal/impl/protobuf/MessageLite.d.ts'
import type { Parser } from '../../../../../../kotlin/reflect/jvm/internal/impl/protobuf/Parser.d.ts'
import type { WireFormat$FieldType } from '../../../../../../kotlin/reflect/jvm/internal/impl/protobuf/WireFormat$FieldType.d.ts'
export class ProtoBuf$PackageFragment extends GeneratedMessageLite$ExtendableMessage<ProtoBuf$PackageFragment> implements ProtoBuf$PackageFragmentOrBuilder {
    static PARSER: Parser<ProtoBuf$PackageFragment>;
    static getDefaultInstance(): ProtoBuf$PackageFragment;
    static newBuilder(): ProtoBuf$PackageFragment$Builder;
    static newBuilder(paramarg0: ProtoBuf$PackageFragment): ProtoBuf$PackageFragment$Builder;
    static newRepeatedGeneratedExtension(paramarg0: MessageLite | null, paramarg1: MessageLite, paramarg2: Internal$EnumLiteMap<any>, paramarg3: number, paramarg4: WireFormat$FieldType, paramarg5: boolean, paramarg6: Class<Object>): GeneratedMessageLite$GeneratedExtension<MessageLite, Object>;
    static newSingularGeneratedExtension(paramarg0: MessageLite | null, paramarg1: Object | null, paramarg2: MessageLite, paramarg3: Internal$EnumLiteMap<any>, paramarg4: number, paramarg5: WireFormat$FieldType, paramarg6: Class<Object>): GeneratedMessageLite$GeneratedExtension<MessageLite, Object>;
    static parseFrom(paramarg0: InputStream, paramarg1: ExtensionRegistryLite): ProtoBuf$PackageFragment;
    private constructor(arg0: boolean)
    private constructor(arg0: CodedInputStream, arg1: ExtensionRegistryLite)
    constructor(arg0: CodedInputStream, arg1: ExtensionRegistryLite, arg2: ProtoBuf$1)
    constructor(arg0: GeneratedMessageLite$ExtendableBuilder<GeneratedMessageLite$ExtendableMessage<any>, GeneratedMessageLite$ExtendableBuilder<any, any>>, arg1: ProtoBuf$1)
    private constructor(arg0: GeneratedMessageLite$ExtendableBuilder<ProtoBuf$PackageFragment, any>)
    // private bitField0_: number;
    // private class__: ProtoBuf$Class[];
    // private fileAnnotation_: ProtoBuf$Annotation[];
    // private memoizedIsInitialized: number;
    // private memoizedSerializedSize: number;
    // private package_: ProtoBuf$Package;
    // private qualifiedNames_: ProtoBuf$QualifiedNameTable;
    // private strings_: ProtoBuf$StringTable;
    // private unknownFields: number[];
    getClass_(arg0: number): ProtoBuf$Class;
    getClass_Count(): number;
    getClass_List(): ProtoBuf$Class[];
    getDefaultInstanceForType(): ProtoBuf$PackageFragment;
    getFileAnnotation(arg0: number): ProtoBuf$Annotation;
    getFileAnnotationCount(): number;
    getPackage(): ProtoBuf$Package;
    getParserForType(): Parser<ProtoBuf$PackageFragment>;
    getQualifiedNames(): ProtoBuf$QualifiedNameTable;
    getSerializedSize(): number;
    getStrings(): ProtoBuf$StringTable;
    hasPackage(): boolean;
    hasQualifiedNames(): boolean;
    hasStrings(): boolean;
    // private initFields(): void;
    isInitialized(): boolean;
    newBuilderForType(): ProtoBuf$PackageFragment$Builder;
    toBuilder(): ProtoBuf$PackageFragment$Builder;
    writeTo(arg0: CodedOutputStream): void;
}