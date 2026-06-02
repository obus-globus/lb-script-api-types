import type { ProtoBuf$ExpressionOrBuilder } from '../../../../../../kotlin/reflect/jvm/internal/impl/metadata/ProtoBuf$ExpressionOrBuilder.d.ts'
import type { ProtoBuf$Expression } from '../../../../../../kotlin/reflect/jvm/internal/impl/metadata/ProtoBuf$Expression.d.ts'
import type { ProtoBuf$Expression$ConstantValue } from '../../../../../../kotlin/reflect/jvm/internal/impl/metadata/ProtoBuf$Expression$ConstantValue.d.ts'
import type { ProtoBuf$Type } from '../../../../../../kotlin/reflect/jvm/internal/impl/metadata/ProtoBuf$Type.d.ts'
import type { CodedInputStream } from '../../../../../../kotlin/reflect/jvm/internal/impl/protobuf/CodedInputStream.d.ts'
import type { ExtensionRegistryLite } from '../../../../../../kotlin/reflect/jvm/internal/impl/protobuf/ExtensionRegistryLite.d.ts'
import type { GeneratedMessageLite$Builder } from '../../../../../../kotlin/reflect/jvm/internal/impl/protobuf/GeneratedMessageLite$Builder.d.ts'
export class ProtoBuf$Expression$Builder extends GeneratedMessageLite$Builder<ProtoBuf$Expression, ProtoBuf$Expression$Builder> implements ProtoBuf$ExpressionOrBuilder {
    private constructor()
    // private andArgument_: ProtoBuf$Expression[];
    // private bitField0_: number;
    // private constantValue_: ProtoBuf$Expression$ConstantValue;
    // private flags_: number;
    // private isInstanceTypeId_: number;
    // private isInstanceType_: ProtoBuf$Type;
    // private orArgument_: ProtoBuf$Expression[];
    // private valueParameterReference_: number;
    build(): ProtoBuf$Expression;
    buildPartial(): ProtoBuf$Expression;
    clone(): ProtoBuf$Expression$Builder;
    // private ensureAndArgumentIsMutable(): void;
    // private ensureOrArgumentIsMutable(): void;
    getAndArgument(arg0: number): ProtoBuf$Expression;
    getAndArgumentCount(): number;
    getDefaultInstanceForType(): ProtoBuf$Expression;
    getIsInstanceType(): ProtoBuf$Type;
    getOrArgument(arg0: number): ProtoBuf$Expression;
    getOrArgumentCount(): number;
    hasIsInstanceType(): boolean;
    isInitialized(): boolean;
    // private maybeForceBuilderInitialization(): void;
    mergeFrom(arg0: ProtoBuf$Expression): ProtoBuf$Expression$Builder;
    mergeFrom(arg0: CodedInputStream, arg1: ExtensionRegistryLite): ProtoBuf$Expression$Builder;
    mergeIsInstanceType(arg0: ProtoBuf$Type): ProtoBuf$Expression$Builder;
    setConstantValue(arg0: ProtoBuf$Expression$ConstantValue): ProtoBuf$Expression$Builder;
    setFlags(arg0: number): ProtoBuf$Expression$Builder;
    setIsInstanceTypeId(arg0: number): ProtoBuf$Expression$Builder;
    setValueParameterReference(arg0: number): ProtoBuf$Expression$Builder;
}