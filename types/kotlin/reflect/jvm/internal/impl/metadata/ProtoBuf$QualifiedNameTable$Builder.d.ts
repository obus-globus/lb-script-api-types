import type { ProtoBuf$QualifiedNameTableOrBuilder } from '../../../../../../kotlin/reflect/jvm/internal/impl/metadata/ProtoBuf$QualifiedNameTableOrBuilder.d.ts'
import type { ProtoBuf$QualifiedNameTable } from '../../../../../../kotlin/reflect/jvm/internal/impl/metadata/ProtoBuf$QualifiedNameTable.d.ts'
import type { ProtoBuf$QualifiedNameTable$QualifiedName } from '../../../../../../kotlin/reflect/jvm/internal/impl/metadata/ProtoBuf$QualifiedNameTable$QualifiedName.d.ts'
import type { CodedInputStream } from '../../../../../../kotlin/reflect/jvm/internal/impl/protobuf/CodedInputStream.d.ts'
import type { ExtensionRegistryLite } from '../../../../../../kotlin/reflect/jvm/internal/impl/protobuf/ExtensionRegistryLite.d.ts'
import type { GeneratedMessageLite$Builder } from '../../../../../../kotlin/reflect/jvm/internal/impl/protobuf/GeneratedMessageLite$Builder.d.ts'
export class ProtoBuf$QualifiedNameTable$Builder extends GeneratedMessageLite$Builder<ProtoBuf$QualifiedNameTable, ProtoBuf$QualifiedNameTable$Builder> implements ProtoBuf$QualifiedNameTableOrBuilder {
    private constructor()
    // private bitField0_: number;
    // private qualifiedName_: ProtoBuf$QualifiedNameTable$QualifiedName[];
    build(): ProtoBuf$QualifiedNameTable;
    buildPartial(): ProtoBuf$QualifiedNameTable;
    clone(): ProtoBuf$QualifiedNameTable$Builder;
    // private ensureQualifiedNameIsMutable(): void;
    getDefaultInstanceForType(): ProtoBuf$QualifiedNameTable;
    getQualifiedName(arg0: number): ProtoBuf$QualifiedNameTable$QualifiedName;
    getQualifiedNameCount(): number;
    isInitialized(): boolean;
    // private maybeForceBuilderInitialization(): void;
    mergeFrom(arg0: ProtoBuf$QualifiedNameTable): ProtoBuf$QualifiedNameTable$Builder;
    mergeFrom(arg0: CodedInputStream, arg1: ExtensionRegistryLite): ProtoBuf$QualifiedNameTable$Builder;
}