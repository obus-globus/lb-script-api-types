import type { ProtoBuf$TypeTableOrBuilder } from '../../../../../../kotlin/reflect/jvm/internal/impl/metadata/ProtoBuf$TypeTableOrBuilder.d.ts'
import type { ProtoBuf$Type } from '../../../../../../kotlin/reflect/jvm/internal/impl/metadata/ProtoBuf$Type.d.ts'
import type { ProtoBuf$TypeTable } from '../../../../../../kotlin/reflect/jvm/internal/impl/metadata/ProtoBuf$TypeTable.d.ts'
import type { CodedInputStream } from '../../../../../../kotlin/reflect/jvm/internal/impl/protobuf/CodedInputStream.d.ts'
import type { ExtensionRegistryLite } from '../../../../../../kotlin/reflect/jvm/internal/impl/protobuf/ExtensionRegistryLite.d.ts'
import type { GeneratedMessageLite$Builder } from '../../../../../../kotlin/reflect/jvm/internal/impl/protobuf/GeneratedMessageLite$Builder.d.ts'
export class ProtoBuf$TypeTable$Builder extends GeneratedMessageLite$Builder<ProtoBuf$TypeTable, ProtoBuf$TypeTable$Builder> implements ProtoBuf$TypeTableOrBuilder {
    private constructor()
    // private bitField0_: number;
    // private firstNullable_: number;
    // private type_: ProtoBuf$Type[];
    build(): ProtoBuf$TypeTable;
    buildPartial(): ProtoBuf$TypeTable;
    clone(): ProtoBuf$TypeTable$Builder;
    // private ensureTypeIsMutable(): void;
    getDefaultInstanceForType(): ProtoBuf$TypeTable;
    getType(arg0: number): ProtoBuf$Type;
    getTypeCount(): number;
    isInitialized(): boolean;
    // private maybeForceBuilderInitialization(): void;
    mergeFrom(arg0: ProtoBuf$TypeTable): ProtoBuf$TypeTable$Builder;
    mergeFrom(arg0: CodedInputStream, arg1: ExtensionRegistryLite): ProtoBuf$TypeTable$Builder;
    setFirstNullable(arg0: number): ProtoBuf$TypeTable$Builder;
}