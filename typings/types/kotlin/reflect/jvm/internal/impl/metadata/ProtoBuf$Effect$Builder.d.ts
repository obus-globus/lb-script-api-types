import type { ProtoBuf$EffectOrBuilder } from '../../../../../../kotlin/reflect/jvm/internal/impl/metadata/ProtoBuf$EffectOrBuilder.d.ts'
import type { ProtoBuf$Effect } from '../../../../../../kotlin/reflect/jvm/internal/impl/metadata/ProtoBuf$Effect.d.ts'
import type { ProtoBuf$Effect$EffectConditionKind } from '../../../../../../kotlin/reflect/jvm/internal/impl/metadata/ProtoBuf$Effect$EffectConditionKind.d.ts'
import type { ProtoBuf$Effect$EffectType } from '../../../../../../kotlin/reflect/jvm/internal/impl/metadata/ProtoBuf$Effect$EffectType.d.ts'
import type { ProtoBuf$Effect$InvocationKind } from '../../../../../../kotlin/reflect/jvm/internal/impl/metadata/ProtoBuf$Effect$InvocationKind.d.ts'
import type { ProtoBuf$Expression } from '../../../../../../kotlin/reflect/jvm/internal/impl/metadata/ProtoBuf$Expression.d.ts'
import type { CodedInputStream } from '../../../../../../kotlin/reflect/jvm/internal/impl/protobuf/CodedInputStream.d.ts'
import type { ExtensionRegistryLite } from '../../../../../../kotlin/reflect/jvm/internal/impl/protobuf/ExtensionRegistryLite.d.ts'
import type { GeneratedMessageLite$Builder } from '../../../../../../kotlin/reflect/jvm/internal/impl/protobuf/GeneratedMessageLite$Builder.d.ts'
export class ProtoBuf$Effect$Builder extends GeneratedMessageLite$Builder<ProtoBuf$Effect, ProtoBuf$Effect$Builder> implements ProtoBuf$EffectOrBuilder {
    private constructor()
    // private bitField0_: number;
    // private conclusionOfConditionalEffect_: ProtoBuf$Expression;
    // private conditionKind_: ProtoBuf$Effect$EffectConditionKind;
    // private effectConstructorArgument_: ProtoBuf$Expression[];
    // private effectType_: ProtoBuf$Effect$EffectType;
    // private kind_: ProtoBuf$Effect$InvocationKind;
    build(): ProtoBuf$Effect;
    buildPartial(): ProtoBuf$Effect;
    clone(): ProtoBuf$Effect$Builder;
    // private ensureEffectConstructorArgumentIsMutable(): void;
    getConclusionOfConditionalEffect(): ProtoBuf$Expression;
    getDefaultInstanceForType(): ProtoBuf$Effect;
    getEffectConstructorArgument(arg0: number): ProtoBuf$Expression;
    getEffectConstructorArgumentCount(): number;
    hasConclusionOfConditionalEffect(): boolean;
    isInitialized(): boolean;
    // private maybeForceBuilderInitialization(): void;
    mergeConclusionOfConditionalEffect(arg0: ProtoBuf$Expression): ProtoBuf$Effect$Builder;
    mergeFrom(arg0: ProtoBuf$Effect): ProtoBuf$Effect$Builder;
    mergeFrom(arg0: CodedInputStream, arg1: ExtensionRegistryLite): ProtoBuf$Effect$Builder;
    setConditionKind(arg0: ProtoBuf$Effect$EffectConditionKind): ProtoBuf$Effect$Builder;
    setEffectType(arg0: ProtoBuf$Effect$EffectType): ProtoBuf$Effect$Builder;
    setKind(arg0: ProtoBuf$Effect$InvocationKind): ProtoBuf$Effect$Builder;
}