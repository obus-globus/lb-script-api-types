import type { ProtoBuf$ContractOrBuilder } from '../../../../../../kotlin/reflect/jvm/internal/impl/metadata/ProtoBuf$ContractOrBuilder.d.ts'
import type { ProtoBuf$Contract } from '../../../../../../kotlin/reflect/jvm/internal/impl/metadata/ProtoBuf$Contract.d.ts'
import type { ProtoBuf$Effect } from '../../../../../../kotlin/reflect/jvm/internal/impl/metadata/ProtoBuf$Effect.d.ts'
import type { CodedInputStream } from '../../../../../../kotlin/reflect/jvm/internal/impl/protobuf/CodedInputStream.d.ts'
import type { ExtensionRegistryLite } from '../../../../../../kotlin/reflect/jvm/internal/impl/protobuf/ExtensionRegistryLite.d.ts'
import type { GeneratedMessageLite$Builder } from '../../../../../../kotlin/reflect/jvm/internal/impl/protobuf/GeneratedMessageLite$Builder.d.ts'
export class ProtoBuf$Contract$Builder extends GeneratedMessageLite$Builder<ProtoBuf$Contract, ProtoBuf$Contract$Builder> implements ProtoBuf$ContractOrBuilder {
    private constructor()
    // private bitField0_: number;
    // private effect_: ProtoBuf$Effect[];
    build(): ProtoBuf$Contract;
    buildPartial(): ProtoBuf$Contract;
    clone(): ProtoBuf$Contract$Builder;
    // private ensureEffectIsMutable(): void;
    getDefaultInstanceForType(): ProtoBuf$Contract;
    getEffect(arg0: number): ProtoBuf$Effect;
    getEffectCount(): number;
    isInitialized(): boolean;
    // private maybeForceBuilderInitialization(): void;
    mergeFrom(arg0: ProtoBuf$Contract): ProtoBuf$Contract$Builder;
    mergeFrom(arg0: CodedInputStream, arg1: ExtensionRegistryLite): ProtoBuf$Contract$Builder;
}