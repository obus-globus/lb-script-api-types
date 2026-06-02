import type { ProtoBuf$Annotation$ArgumentOrBuilder } from '../../../../../../kotlin/reflect/jvm/internal/impl/metadata/ProtoBuf$Annotation$ArgumentOrBuilder.d.ts'
import type { ProtoBuf$Annotation$Argument } from '../../../../../../kotlin/reflect/jvm/internal/impl/metadata/ProtoBuf$Annotation$Argument.d.ts'
import type { ProtoBuf$Annotation$Argument$Value } from '../../../../../../kotlin/reflect/jvm/internal/impl/metadata/ProtoBuf$Annotation$Argument$Value.d.ts'
import type { CodedInputStream } from '../../../../../../kotlin/reflect/jvm/internal/impl/protobuf/CodedInputStream.d.ts'
import type { ExtensionRegistryLite } from '../../../../../../kotlin/reflect/jvm/internal/impl/protobuf/ExtensionRegistryLite.d.ts'
import type { GeneratedMessageLite$Builder } from '../../../../../../kotlin/reflect/jvm/internal/impl/protobuf/GeneratedMessageLite$Builder.d.ts'
export class ProtoBuf$Annotation$Argument$Builder extends GeneratedMessageLite$Builder<ProtoBuf$Annotation$Argument, ProtoBuf$Annotation$Argument$Builder> implements ProtoBuf$Annotation$ArgumentOrBuilder {
    private constructor()
    // private bitField0_: number;
    // private nameId_: number;
    // private value_: ProtoBuf$Annotation$Argument$Value;
    build(): ProtoBuf$Annotation$Argument;
    buildPartial(): ProtoBuf$Annotation$Argument;
    clone(): ProtoBuf$Annotation$Argument$Builder;
    getDefaultInstanceForType(): ProtoBuf$Annotation$Argument;
    getValue(): ProtoBuf$Annotation$Argument$Value;
    hasNameId(): boolean;
    hasValue(): boolean;
    isInitialized(): boolean;
    // private maybeForceBuilderInitialization(): void;
    mergeFrom(arg0: ProtoBuf$Annotation$Argument): ProtoBuf$Annotation$Argument$Builder;
    mergeFrom(arg0: CodedInputStream, arg1: ExtensionRegistryLite): ProtoBuf$Annotation$Argument$Builder;
    mergeValue(arg0: ProtoBuf$Annotation$Argument$Value): ProtoBuf$Annotation$Argument$Builder;
    setNameId(arg0: number): ProtoBuf$Annotation$Argument$Builder;
    setValue(arg0: ProtoBuf$Annotation$Argument$Value): ProtoBuf$Annotation$Argument$Builder;
}