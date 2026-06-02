import type { ProtoBuf$EnumEntryOrBuilder } from '../../../../../../kotlin/reflect/jvm/internal/impl/metadata/ProtoBuf$EnumEntryOrBuilder.d.ts'
import type { ProtoBuf$Annotation } from '../../../../../../kotlin/reflect/jvm/internal/impl/metadata/ProtoBuf$Annotation.d.ts'
import type { ProtoBuf$EnumEntry } from '../../../../../../kotlin/reflect/jvm/internal/impl/metadata/ProtoBuf$EnumEntry.d.ts'
import type { CodedInputStream } from '../../../../../../kotlin/reflect/jvm/internal/impl/protobuf/CodedInputStream.d.ts'
import type { ExtensionRegistryLite } from '../../../../../../kotlin/reflect/jvm/internal/impl/protobuf/ExtensionRegistryLite.d.ts'
import type { GeneratedMessageLite$ExtendableBuilder } from '../../../../../../kotlin/reflect/jvm/internal/impl/protobuf/GeneratedMessageLite$ExtendableBuilder.d.ts'
export class ProtoBuf$EnumEntry$Builder extends GeneratedMessageLite$ExtendableBuilder<ProtoBuf$EnumEntry, ProtoBuf$EnumEntry$Builder> implements ProtoBuf$EnumEntryOrBuilder {
    private constructor()
    // private annotation_: ProtoBuf$Annotation[];
    // private bitField0_: number;
    // private name_: number;
    addAnnotation(arg0: ProtoBuf$Annotation): ProtoBuf$EnumEntry$Builder;
    build(): ProtoBuf$EnumEntry;
    buildPartial(): ProtoBuf$EnumEntry;
    clone(): ProtoBuf$EnumEntry$Builder;
    // private ensureAnnotationIsMutable(): void;
    getAnnotation(arg0: number): ProtoBuf$Annotation;
    getAnnotationCount(): number;
    getDefaultInstanceForType(): ProtoBuf$EnumEntry;
    isInitialized(): boolean;
    // private maybeForceBuilderInitialization(): void;
    mergeFrom(arg0: ProtoBuf$EnumEntry): ProtoBuf$EnumEntry$Builder;
    mergeFrom(arg0: CodedInputStream, arg1: ExtensionRegistryLite): ProtoBuf$EnumEntry$Builder;
    setName(arg0: number): ProtoBuf$EnumEntry$Builder;
}