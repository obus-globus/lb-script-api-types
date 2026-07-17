import type { Class } from '../../../../../../java/lang/Class.d.ts'
import type { Object } from '../../../../../../java/lang/Object.d.ts'
import type { ProtoBuf$EffectOrBuilder } from '../../../../../../kotlin/reflect/jvm/internal/impl/metadata/ProtoBuf$EffectOrBuilder.d.ts'
import type { ProtoBuf$Effect$Builder } from '../../../../../../kotlin/reflect/jvm/internal/impl/metadata/ProtoBuf$Effect$Builder.d.ts'
import type { ProtoBuf$Effect$EffectConditionKind } from '../../../../../../kotlin/reflect/jvm/internal/impl/metadata/ProtoBuf$Effect$EffectConditionKind.d.ts'
import type { ProtoBuf$Effect$EffectType } from '../../../../../../kotlin/reflect/jvm/internal/impl/metadata/ProtoBuf$Effect$EffectType.d.ts'
import type { ProtoBuf$Effect$InvocationKind } from '../../../../../../kotlin/reflect/jvm/internal/impl/metadata/ProtoBuf$Effect$InvocationKind.d.ts'
import type { ProtoBuf$Expression } from '../../../../../../kotlin/reflect/jvm/internal/impl/metadata/ProtoBuf$Expression.d.ts'
import type { CodedInputStream } from '../../../../../../kotlin/reflect/jvm/internal/impl/protobuf/CodedInputStream.d.ts'
import type { CodedOutputStream } from '../../../../../../kotlin/reflect/jvm/internal/impl/protobuf/CodedOutputStream.d.ts'
import type { ExtensionRegistryLite } from '../../../../../../kotlin/reflect/jvm/internal/impl/protobuf/ExtensionRegistryLite.d.ts'
import type { GeneratedMessageLite } from '../../../../../../kotlin/reflect/jvm/internal/impl/protobuf/GeneratedMessageLite.d.ts'
import type { GeneratedMessageLite$Builder } from '../../../../../../kotlin/reflect/jvm/internal/impl/protobuf/GeneratedMessageLite$Builder.d.ts'
import type { GeneratedMessageLite$GeneratedExtension } from '../../../../../../kotlin/reflect/jvm/internal/impl/protobuf/GeneratedMessageLite$GeneratedExtension.d.ts'
import type { Internal$EnumLiteMap } from '../../../../../../kotlin/reflect/jvm/internal/impl/protobuf/Internal$EnumLiteMap.d.ts'
import type { MessageLite } from '../../../../../../kotlin/reflect/jvm/internal/impl/protobuf/MessageLite.d.ts'
import type { Parser } from '../../../../../../kotlin/reflect/jvm/internal/impl/protobuf/Parser.d.ts'
import type { WireFormat$FieldType } from '../../../../../../kotlin/reflect/jvm/internal/impl/protobuf/WireFormat$FieldType.d.ts'
export class ProtoBuf$Effect extends GeneratedMessageLite implements ProtoBuf$EffectOrBuilder {
    static PARSER: Parser<ProtoBuf$Effect>;
    static getDefaultInstance(): ProtoBuf$Effect;
    static newBuilder(): ProtoBuf$Effect$Builder;
    static newBuilder(paramarg0: ProtoBuf$Effect): ProtoBuf$Effect$Builder;
    static newRepeatedGeneratedExtension<ContainingType extends MessageLite, Type extends unknown>(paramarg0: ContainingType, paramarg1: MessageLite, paramarg2: Internal$EnumLiteMap<any>, paramarg3: number, paramarg4: WireFormat$FieldType, paramarg5: boolean, paramarg6: Class<Object>): GeneratedMessageLite$GeneratedExtension<ContainingType, Type>;
    static newSingularGeneratedExtension<ContainingType extends MessageLite, Type extends unknown>(paramarg0: ContainingType, paramarg1: Type, paramarg2: MessageLite, paramarg3: Internal$EnumLiteMap<any>, paramarg4: number, paramarg5: WireFormat$FieldType, paramarg6: Class<Object>): GeneratedMessageLite$GeneratedExtension<ContainingType, Type>;
    private constructor(arg0: boolean)
    private constructor(arg0: CodedInputStream, arg1: ExtensionRegistryLite)
    private constructor(arg0: GeneratedMessageLite$Builder<GeneratedMessageLite, GeneratedMessageLite$Builder<any, any>>)
    // private bitField0_: number;
    // private conclusionOfConditionalEffect_: ProtoBuf$Expression;
    // private conditionKind_: ProtoBuf$Effect$EffectConditionKind;
    // private effectConstructorArgument_: ProtoBuf$Expression[];
    // private effectType_: ProtoBuf$Effect$EffectType;
    // private kind_: ProtoBuf$Effect$InvocationKind;
    // private memoizedIsInitialized: number;
    // private memoizedSerializedSize: number;
    // private unknownFields: number[];
    getConclusionOfConditionalEffect(): ProtoBuf$Expression;
    getConditionKind(): ProtoBuf$Effect$EffectConditionKind;
    getDefaultInstanceForType(): ProtoBuf$Effect;
    getEffectConstructorArgument(arg0: number): ProtoBuf$Expression;
    getEffectConstructorArgumentCount(): number;
    getEffectConstructorArgumentList(): ProtoBuf$Expression[];
    getEffectType(): ProtoBuf$Effect$EffectType;
    getKind(): ProtoBuf$Effect$InvocationKind;
    getParserForType(): Parser<ProtoBuf$Effect>;
    getSerializedSize(): number;
    hasConclusionOfConditionalEffect(): boolean;
    hasConditionKind(): boolean;
    hasEffectType(): boolean;
    hasKind(): boolean;
    // private initFields(): void;
    isInitialized(): boolean;
    newBuilderForType(): ProtoBuf$Effect$Builder;
    toBuilder(): ProtoBuf$Effect$Builder;
    writeTo(arg0: CodedOutputStream): void;
}