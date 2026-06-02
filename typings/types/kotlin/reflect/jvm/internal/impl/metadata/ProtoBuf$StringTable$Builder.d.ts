import type { Object } from '../../../../../../java/lang/Object.d.ts'
import type { ProtoBuf$StringTableOrBuilder } from '../../../../../../kotlin/reflect/jvm/internal/impl/metadata/ProtoBuf$StringTableOrBuilder.d.ts'
import type { ProtoBuf$StringTable } from '../../../../../../kotlin/reflect/jvm/internal/impl/metadata/ProtoBuf$StringTable.d.ts'
import type { CodedInputStream } from '../../../../../../kotlin/reflect/jvm/internal/impl/protobuf/CodedInputStream.d.ts'
import type { ExtensionRegistryLite } from '../../../../../../kotlin/reflect/jvm/internal/impl/protobuf/ExtensionRegistryLite.d.ts'
import type { GeneratedMessageLite$Builder } from '../../../../../../kotlin/reflect/jvm/internal/impl/protobuf/GeneratedMessageLite$Builder.d.ts'
export class ProtoBuf$StringTable$Builder extends GeneratedMessageLite$Builder<ProtoBuf$StringTable, ProtoBuf$StringTable$Builder> implements ProtoBuf$StringTableOrBuilder {
    private constructor()
    // private bitField0_: number;
    // private string_: (Object | null)[];
    build(): ProtoBuf$StringTable;
    buildPartial(): ProtoBuf$StringTable;
    clone(): ProtoBuf$StringTable$Builder;
    // private ensureStringIsMutable(): void;
    getDefaultInstanceForType(): ProtoBuf$StringTable;
    isInitialized(): boolean;
    // private maybeForceBuilderInitialization(): void;
    mergeFrom(arg0: ProtoBuf$StringTable): ProtoBuf$StringTable$Builder;
    mergeFrom(arg0: CodedInputStream, arg1: ExtensionRegistryLite): ProtoBuf$StringTable$Builder;
}