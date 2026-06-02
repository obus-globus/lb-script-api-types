import type { ProtoBuf$QualifiedNameTable$QualifiedNameOrBuilder } from '../../../../../../kotlin/reflect/jvm/internal/impl/metadata/ProtoBuf$QualifiedNameTable$QualifiedNameOrBuilder.d.ts'
import type { ProtoBuf$QualifiedNameTable$QualifiedName } from '../../../../../../kotlin/reflect/jvm/internal/impl/metadata/ProtoBuf$QualifiedNameTable$QualifiedName.d.ts'
import type { ProtoBuf$QualifiedNameTable$QualifiedName$Kind } from '../../../../../../kotlin/reflect/jvm/internal/impl/metadata/ProtoBuf$QualifiedNameTable$QualifiedName$Kind.d.ts'
import type { CodedInputStream } from '../../../../../../kotlin/reflect/jvm/internal/impl/protobuf/CodedInputStream.d.ts'
import type { ExtensionRegistryLite } from '../../../../../../kotlin/reflect/jvm/internal/impl/protobuf/ExtensionRegistryLite.d.ts'
import type { GeneratedMessageLite$Builder } from '../../../../../../kotlin/reflect/jvm/internal/impl/protobuf/GeneratedMessageLite$Builder.d.ts'
export class ProtoBuf$QualifiedNameTable$QualifiedName$Builder extends GeneratedMessageLite$Builder<ProtoBuf$QualifiedNameTable$QualifiedName, ProtoBuf$QualifiedNameTable$QualifiedName$Builder> implements ProtoBuf$QualifiedNameTable$QualifiedNameOrBuilder {
    private constructor()
    // private bitField0_: number;
    // private kind_: ProtoBuf$QualifiedNameTable$QualifiedName$Kind;
    // private parentQualifiedName_: number;
    // private shortName_: number;
    build(): ProtoBuf$QualifiedNameTable$QualifiedName;
    buildPartial(): ProtoBuf$QualifiedNameTable$QualifiedName;
    clone(): ProtoBuf$QualifiedNameTable$QualifiedName$Builder;
    getDefaultInstanceForType(): ProtoBuf$QualifiedNameTable$QualifiedName;
    hasShortName(): boolean;
    isInitialized(): boolean;
    // private maybeForceBuilderInitialization(): void;
    mergeFrom(arg0: ProtoBuf$QualifiedNameTable$QualifiedName): ProtoBuf$QualifiedNameTable$QualifiedName$Builder;
    mergeFrom(arg0: CodedInputStream, arg1: ExtensionRegistryLite): ProtoBuf$QualifiedNameTable$QualifiedName$Builder;
    setKind(arg0: ProtoBuf$QualifiedNameTable$QualifiedName$Kind): ProtoBuf$QualifiedNameTable$QualifiedName$Builder;
    setParentQualifiedName(arg0: number): ProtoBuf$QualifiedNameTable$QualifiedName$Builder;
    setShortName(arg0: number): ProtoBuf$QualifiedNameTable$QualifiedName$Builder;
}