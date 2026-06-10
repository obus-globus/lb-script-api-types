import type { ArgumentType } from '../../../../../com/mojang/brigadier/arguments/ArgumentType.d.ts'
import type { Codec } from '../../../../../com/mojang/serialization/Codec.d.ts'
import type { DataResult } from '../../../../../com/mojang/serialization/DataResult.d.ts'
import type { Class } from '../../../../../java/lang/Class.d.ts'
import type { ToIntFunction } from '../../../../../java/util/function/ToIntFunction.d.ts'
import type { Object } from '../../../../../java/lang/Object.d.ts'
import type { Enum } from '../../../../../java/lang/Enum.d.ts'
import type { RuleTypeExtensions } from '../../../../../net/fabricmc/fabric/impl/gamerule/RuleTypeExtensions.d.ts'
import type { FabricGameRuleType } from '../../../../../net/fabricmc/fabric/impl/gamerule/rpc/FabricGameRuleType.d.ts'
import type { Identifier } from '../../../../../net/minecraft/resources/Identifier.d.ts'
import type { ResourceKey } from '../../../../../net/minecraft/resources/ResourceKey.d.ts'
import type { FeatureElement } from '../../../../../net/minecraft/world/flag/FeatureElement.d.ts'
import type { FeatureFlagSet } from '../../../../../net/minecraft/world/flag/FeatureFlagSet.d.ts'
import type { GameRuleCategory } from '../../../../../net/minecraft/world/level/gamerules/GameRuleCategory.d.ts'
import type { GameRuleType } from '../../../../../net/minecraft/world/level/gamerules/GameRuleType.d.ts'
import type { GameRuleTypeVisitor } from '../../../../../net/minecraft/world/level/gamerules/GameRuleTypeVisitor.d.ts'
import type { GameRules$VisitorCaller } from '../../../../../net/minecraft/world/level/gamerules/GameRules$VisitorCaller.d.ts'
export class GameRule<T extends Object | number | string | boolean> extends Object implements RuleTypeExtensions, FeatureElement {
    static FILTERED_REGISTRIES: ResourceKey<FeatureElement[]>[];
    constructor(category: GameRuleCategory, gameRuleType: GameRuleType, argument: ArgumentType<T>, visitorCaller: GameRules$VisitorCaller<T>, valueCodec: Codec<T>, commandResultFunction: (param0: T) => number, defaultValue: T, requiredFeatures: FeatureFlagSet)
    // private argument: ArgumentType<T>;
    // private category: GameRuleCategory;
    // private commandResultFunction: (param0: T) => number;
    // private defaultValue: T;
    // private enumSupportedValues: (Object | null)[];
    // private fabricGameRuleType: FabricGameRuleType;
    // private gameRuleType: GameRuleType;
    // private requiredFeatures: FeatureFlagSet;
    // private valueCodec: Codec<T>;
    // private visitorCaller: GameRules$VisitorCaller<T>;
    argument(): ArgumentType<T>;
    callVisitor(visitor: GameRuleTypeVisitor): void;
    category(): GameRuleCategory;
    defaultValue(): T;
    deserialize(value: string): DataResult<T>;
    // private deserialize$mixinextras$wrapped$27(arg0: string): DataResult<Object>;
    fabric_enumCycle<E extends Enum<E>>(arg0: E): E;
    fabric_enumCycle(arg0: Enum<Object>): Enum<Object>;
    fabric_getSupportedEnumValues<E extends Enum<E>>(): E[];
    fabric_getSupportedEnumValues(): (Object | null)[];
    fabric_getType(): FabricGameRuleType;
    fabric_setSupportedEnumValues<E extends Enum<E>>(arg0: E[]): void;
    fabric_setSupportedEnumValues(arg0: Enum<Object>[]): void;
    fabric_setType(arg0: FabricGameRuleType): void;
    gameRuleType(): GameRuleType;
    getCommandResult(value: T): number;
    getDescriptionId(): string;
    getIdentifier(): Identifier;
    getIdentifierWithFallback(): Identifier;
    id(): string;
    isEnabled(enabledFeatures: FeatureFlagSet): boolean;
    requiredFeatures(): FeatureFlagSet;
    serialize(value: T): string;
    toString(): string;
    valueClass(): Class<T>;
    valueCodec(): Codec<T>;
}