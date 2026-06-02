import type { ProtoBuf$TypeParameterOrBuilder } from '../../../../../../kotlin/reflect/jvm/internal/impl/metadata/ProtoBuf$TypeParameterOrBuilder.d.ts'
import type { ProtoBuf$Annotation } from '../../../../../../kotlin/reflect/jvm/internal/impl/metadata/ProtoBuf$Annotation.d.ts'
import type { ProtoBuf$Type } from '../../../../../../kotlin/reflect/jvm/internal/impl/metadata/ProtoBuf$Type.d.ts'
import type { ProtoBuf$TypeParameter } from '../../../../../../kotlin/reflect/jvm/internal/impl/metadata/ProtoBuf$TypeParameter.d.ts'
import type { ProtoBuf$TypeParameter$Variance } from '../../../../../../kotlin/reflect/jvm/internal/impl/metadata/ProtoBuf$TypeParameter$Variance.d.ts'
import type { CodedInputStream } from '../../../../../../kotlin/reflect/jvm/internal/impl/protobuf/CodedInputStream.d.ts'
import type { ExtensionRegistryLite } from '../../../../../../kotlin/reflect/jvm/internal/impl/protobuf/ExtensionRegistryLite.d.ts'
import type { GeneratedMessageLite$ExtendableBuilder } from '../../../../../../kotlin/reflect/jvm/internal/impl/protobuf/GeneratedMessageLite$ExtendableBuilder.d.ts'
export class ProtoBuf$TypeParameter$Builder extends GeneratedMessageLite$ExtendableBuilder<ProtoBuf$TypeParameter, ProtoBuf$TypeParameter$Builder> implements ProtoBuf$TypeParameterOrBuilder {
    private constructor()
    // private annotation_: ProtoBuf$Annotation[];
    // private bitField0_: number;
    // private id_: number;
    // private name_: number;
    // private reified_: boolean;
    // private upperBoundId_: number[];
    // private upperBound_: ProtoBuf$Type[];
    // private variance_: ProtoBuf$TypeParameter$Variance;
    addAnnotation(arg0: ProtoBuf$Annotation): ProtoBuf$TypeParameter$Builder;
    addUpperBound(arg0: ProtoBuf$Type): ProtoBuf$TypeParameter$Builder;
    build(): ProtoBuf$TypeParameter;
    buildPartial(): ProtoBuf$TypeParameter;
    clone(): ProtoBuf$TypeParameter$Builder;
    // private ensureAnnotationIsMutable(): void;
    // private ensureUpperBoundIdIsMutable(): void;
    // private ensureUpperBoundIsMutable(): void;
    getAnnotation(arg0: number): ProtoBuf$Annotation;
    getAnnotationCount(): number;
    getDefaultInstanceForType(): ProtoBuf$TypeParameter;
    getUpperBound(arg0: number): ProtoBuf$Type;
    getUpperBoundCount(): number;
    hasId(): boolean;
    hasName(): boolean;
    isInitialized(): boolean;
    // private maybeForceBuilderInitialization(): void;
    mergeFrom(arg0: ProtoBuf$TypeParameter): ProtoBuf$TypeParameter$Builder;
    mergeFrom(arg0: CodedInputStream, arg1: ExtensionRegistryLite): ProtoBuf$TypeParameter$Builder;
    setId(arg0: number): ProtoBuf$TypeParameter$Builder;
    setName(arg0: number): ProtoBuf$TypeParameter$Builder;
    setReified(arg0: boolean): ProtoBuf$TypeParameter$Builder;
    setVariance(arg0: ProtoBuf$TypeParameter$Variance): ProtoBuf$TypeParameter$Builder;
}