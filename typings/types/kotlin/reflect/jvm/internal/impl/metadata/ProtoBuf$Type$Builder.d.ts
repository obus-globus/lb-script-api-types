import type { ProtoBuf$TypeOrBuilder } from '../../../../../../kotlin/reflect/jvm/internal/impl/metadata/ProtoBuf$TypeOrBuilder.d.ts'
import type { ProtoBuf$Annotation } from '../../../../../../kotlin/reflect/jvm/internal/impl/metadata/ProtoBuf$Annotation.d.ts'
import type { ProtoBuf$Type } from '../../../../../../kotlin/reflect/jvm/internal/impl/metadata/ProtoBuf$Type.d.ts'
import type { ProtoBuf$Type$Argument } from '../../../../../../kotlin/reflect/jvm/internal/impl/metadata/ProtoBuf$Type$Argument.d.ts'
import type { ProtoBuf$Type$Argument$Builder } from '../../../../../../kotlin/reflect/jvm/internal/impl/metadata/ProtoBuf$Type$Argument$Builder.d.ts'
import type { CodedInputStream } from '../../../../../../kotlin/reflect/jvm/internal/impl/protobuf/CodedInputStream.d.ts'
import type { ExtensionRegistryLite } from '../../../../../../kotlin/reflect/jvm/internal/impl/protobuf/ExtensionRegistryLite.d.ts'
import type { GeneratedMessageLite$ExtendableBuilder } from '../../../../../../kotlin/reflect/jvm/internal/impl/protobuf/GeneratedMessageLite$ExtendableBuilder.d.ts'
export class ProtoBuf$Type$Builder extends GeneratedMessageLite$ExtendableBuilder<ProtoBuf$Type, ProtoBuf$Type$Builder> implements ProtoBuf$TypeOrBuilder {
    private constructor()
    // private abbreviatedTypeId_: number;
    // private abbreviatedType_: ProtoBuf$Type;
    // private annotation_: ProtoBuf$Annotation[];
    // private argument_: ProtoBuf$Type$Argument[];
    // private bitField0_: number;
    // private className_: number;
    // private flags_: number;
    // private flexibleTypeCapabilitiesId_: number;
    // private flexibleUpperBoundId_: number;
    // private flexibleUpperBound_: ProtoBuf$Type;
    // private nullable_: boolean;
    // private outerTypeId_: number;
    // private outerType_: ProtoBuf$Type;
    // private typeAliasName_: number;
    // private typeParameterName_: number;
    // private typeParameter_: number;
    addAnnotation(arg0: ProtoBuf$Annotation): ProtoBuf$Type$Builder;
    addArgument(arg0: ProtoBuf$Type$Argument$Builder): ProtoBuf$Type$Builder;
    build(): ProtoBuf$Type;
    buildPartial(): ProtoBuf$Type;
    clone(): ProtoBuf$Type$Builder;
    // private ensureAnnotationIsMutable(): void;
    // private ensureArgumentIsMutable(): void;
    getAbbreviatedType(): ProtoBuf$Type;
    getAnnotation(arg0: number): ProtoBuf$Annotation;
    getAnnotationCount(): number;
    getArgument(arg0: number): ProtoBuf$Type$Argument;
    getArgumentCount(): number;
    getDefaultInstanceForType(): ProtoBuf$Type;
    getFlexibleUpperBound(): ProtoBuf$Type;
    getOuterType(): ProtoBuf$Type;
    hasAbbreviatedType(): boolean;
    hasFlexibleUpperBound(): boolean;
    hasOuterType(): boolean;
    isInitialized(): boolean;
    // private maybeForceBuilderInitialization(): void;
    mergeAbbreviatedType(arg0: ProtoBuf$Type): ProtoBuf$Type$Builder;
    mergeFlexibleUpperBound(arg0: ProtoBuf$Type): ProtoBuf$Type$Builder;
    mergeFrom(arg0: ProtoBuf$Type): ProtoBuf$Type$Builder;
    mergeFrom(arg0: CodedInputStream, arg1: ExtensionRegistryLite): ProtoBuf$Type$Builder;
    mergeOuterType(arg0: ProtoBuf$Type): ProtoBuf$Type$Builder;
    setAbbreviatedType(arg0: ProtoBuf$Type): ProtoBuf$Type$Builder;
    setAbbreviatedTypeId(arg0: number): ProtoBuf$Type$Builder;
    setClassName(arg0: number): ProtoBuf$Type$Builder;
    setFlags(arg0: number): ProtoBuf$Type$Builder;
    setFlexibleTypeCapabilitiesId(arg0: number): ProtoBuf$Type$Builder;
    setFlexibleUpperBound(arg0: ProtoBuf$Type): ProtoBuf$Type$Builder;
    setFlexibleUpperBoundId(arg0: number): ProtoBuf$Type$Builder;
    setNullable(arg0: boolean): ProtoBuf$Type$Builder;
    setOuterType(arg0: ProtoBuf$Type): ProtoBuf$Type$Builder;
    setOuterTypeId(arg0: number): ProtoBuf$Type$Builder;
    setTypeAliasName(arg0: number): ProtoBuf$Type$Builder;
    setTypeParameter(arg0: number): ProtoBuf$Type$Builder;
    setTypeParameterName(arg0: number): ProtoBuf$Type$Builder;
}