import type { ProtoBuf$AnnotationOrBuilder } from '../../../../../../kotlin/reflect/jvm/internal/impl/metadata/ProtoBuf$AnnotationOrBuilder.d.ts'
import type { ProtoBuf$Annotation } from '../../../../../../kotlin/reflect/jvm/internal/impl/metadata/ProtoBuf$Annotation.d.ts'
import type { ProtoBuf$Annotation$Argument } from '../../../../../../kotlin/reflect/jvm/internal/impl/metadata/ProtoBuf$Annotation$Argument.d.ts'
import type { ProtoBuf$Annotation$Argument$Builder } from '../../../../../../kotlin/reflect/jvm/internal/impl/metadata/ProtoBuf$Annotation$Argument$Builder.d.ts'
import type { CodedInputStream } from '../../../../../../kotlin/reflect/jvm/internal/impl/protobuf/CodedInputStream.d.ts'
import type { ExtensionRegistryLite } from '../../../../../../kotlin/reflect/jvm/internal/impl/protobuf/ExtensionRegistryLite.d.ts'
import type { GeneratedMessageLite$Builder } from '../../../../../../kotlin/reflect/jvm/internal/impl/protobuf/GeneratedMessageLite$Builder.d.ts'
export class ProtoBuf$Annotation$Builder extends GeneratedMessageLite$Builder<ProtoBuf$Annotation, ProtoBuf$Annotation$Builder> implements ProtoBuf$AnnotationOrBuilder {
    private constructor()
    // private argument_: ProtoBuf$Annotation$Argument[];
    // private bitField0_: number;
    // private id_: number;
    addArgument(arg0: ProtoBuf$Annotation$Argument$Builder): ProtoBuf$Annotation$Builder;
    build(): ProtoBuf$Annotation;
    buildPartial(): ProtoBuf$Annotation;
    clone(): ProtoBuf$Annotation$Builder;
    // private ensureArgumentIsMutable(): void;
    getArgument(arg0: number): ProtoBuf$Annotation$Argument;
    getArgumentCount(): number;
    getDefaultInstanceForType(): ProtoBuf$Annotation;
    hasId(): boolean;
    isInitialized(): boolean;
    // private maybeForceBuilderInitialization(): void;
    mergeFrom(arg0: ProtoBuf$Annotation): ProtoBuf$Annotation$Builder;
    mergeFrom(arg0: CodedInputStream, arg1: ExtensionRegistryLite): ProtoBuf$Annotation$Builder;
    setId(arg0: number): ProtoBuf$Annotation$Builder;
}