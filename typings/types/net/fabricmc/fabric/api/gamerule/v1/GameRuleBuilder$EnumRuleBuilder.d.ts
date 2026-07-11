import type { ArgumentType } from '../../../../../../com/mojang/brigadier/arguments/ArgumentType.d.ts'
import type { Codec } from '../../../../../../com/mojang/serialization/Codec.d.ts'
import type { ToIntFunction } from '../../../../../../java/util/function/ToIntFunction.d.ts'
import type { Object } from '../../../../../../java/lang/Object.d.ts'
import type { Enum } from '../../../../../../java/lang/Enum.d.ts'
import type { GameRuleBuilder } from '../../../../../../net/fabricmc/fabric/api/gamerule/v1/GameRuleBuilder.d.ts'
import type { GameRuleBuilder$BooleanRuleBuilder } from '../../../../../../net/fabricmc/fabric/api/gamerule/v1/GameRuleBuilder$BooleanRuleBuilder.d.ts'
import type { GameRuleBuilder$DoubleRuleBuilder } from '../../../../../../net/fabricmc/fabric/api/gamerule/v1/GameRuleBuilder$DoubleRuleBuilder.d.ts'
import type { GameRuleBuilder$IntegerRuleBuilder } from '../../../../../../net/fabricmc/fabric/api/gamerule/v1/GameRuleBuilder$IntegerRuleBuilder.d.ts'
import type { FeatureFlagSet } from '../../../../../../net/minecraft/world/flag/FeatureFlagSet.d.ts'
import type { GameRule } from '../../../../../../net/minecraft/world/level/gamerules/GameRule.d.ts'
import type { GameRuleCategory } from '../../../../../../net/minecraft/world/level/gamerules/GameRuleCategory.d.ts'
export class GameRuleBuilder$EnumRuleBuilder<E extends Enum<E>> extends GameRuleBuilder<E> {
    static forBoolean(paramarg0: boolean): GameRuleBuilder$BooleanRuleBuilder;
    static forDouble(paramarg0: number): GameRuleBuilder$DoubleRuleBuilder;
    static forEnum(paramarg0: Object | null): GameRuleBuilder$EnumRuleBuilder<any>;
    static forInteger(paramarg0: number): GameRuleBuilder$IntegerRuleBuilder;
    constructor(arg0: E)
    // private supportedValues: E[];
    argumentType(arg0: ArgumentType<E>): GameRuleBuilder$EnumRuleBuilder<E>;
    build(): GameRule<E>;
    category(arg0: GameRuleCategory): GameRuleBuilder$EnumRuleBuilder<E>;
    codec(arg0: Codec<E>): GameRuleBuilder$EnumRuleBuilder<E>;
    commandResultSupplier(arg0: (param0: E) => number): GameRuleBuilder$EnumRuleBuilder<E>;
    requiredFeatures(arg0: FeatureFlagSet): GameRuleBuilder$EnumRuleBuilder<E>;
    supportedValues(...arg0: E[]): GameRuleBuilder$EnumRuleBuilder<E>;
}