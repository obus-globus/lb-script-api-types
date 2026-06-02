import type { ProtoBuf$Type$ArgumentOrBuilder } from '../../../../../../kotlin/reflect/jvm/internal/impl/metadata/ProtoBuf$Type$ArgumentOrBuilder.d.ts'
import type { ProtoBuf$Type } from '../../../../../../kotlin/reflect/jvm/internal/impl/metadata/ProtoBuf$Type.d.ts'
import type { ProtoBuf$Type$Argument } from '../../../../../../kotlin/reflect/jvm/internal/impl/metadata/ProtoBuf$Type$Argument.d.ts'
import type { ProtoBuf$Type$Argument$Projection } from '../../../../../../kotlin/reflect/jvm/internal/impl/metadata/ProtoBuf$Type$Argument$Projection.d.ts'
import type { CodedInputStream } from '../../../../../../kotlin/reflect/jvm/internal/impl/protobuf/CodedInputStream.d.ts'
import type { ExtensionRegistryLite } from '../../../../../../kotlin/reflect/jvm/internal/impl/protobuf/ExtensionRegistryLite.d.ts'
import type { GeneratedMessageLite$Builder } from '../../../../../../kotlin/reflect/jvm/internal/impl/protobuf/GeneratedMessageLite$Builder.d.ts'
export class ProtoBuf$Type$Argument$Builder extends GeneratedMessageLite$Builder<ProtoBuf$Type$Argument, ProtoBuf$Type$Argument$Builder> implements ProtoBuf$Type$ArgumentOrBuilder {
    private constructor()
    // private bitField0_: number;
    // private projection_: ProtoBuf$Type$Argument$Projection;
    // private typeId_: number;
    // private type_: ProtoBuf$Type;
    build(): ProtoBuf$Type$Argument;
    buildPartial(): ProtoBuf$Type$Argument;
    clone(): ProtoBuf$Type$Argument$Builder;
    getDefaultInstanceForType(): ProtoBuf$Type$Argument;
    getType(): ProtoBuf$Type;
    hasType(): boolean;
    isInitialized(): boolean;
    // private maybeForceBuilderInitialization(): void;
    mergeFrom(arg0: ProtoBuf$Type$Argument): ProtoBuf$Type$Argument$Builder;
    mergeFrom(arg0: CodedInputStream, arg1: ExtensionRegistryLite): ProtoBuf$Type$Argument$Builder;
    mergeType(arg0: ProtoBuf$Type): ProtoBuf$Type$Argument$Builder;
    setProjection(arg0: ProtoBuf$Type$Argument$Projection): ProtoBuf$Type$Argument$Builder;
    setType(arg0: ProtoBuf$Type): ProtoBuf$Type$Argument$Builder;
    setTypeId(arg0: number): ProtoBuf$Type$Argument$Builder;
}