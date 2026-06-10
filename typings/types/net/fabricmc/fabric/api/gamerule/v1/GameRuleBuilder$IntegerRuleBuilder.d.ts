import type { ArgumentType } from '../../../../../../com/mojang/brigadier/arguments/ArgumentType.d.ts'
import type { Codec } from '../../../../../../com/mojang/serialization/Codec.d.ts'
import type { ToIntFunction } from '../../../../../../java/util/function/ToIntFunction.d.ts'
import type { Object } from '../../../../../../java/lang/Object.d.ts'
import type { GameRuleBuilder$BooleanRuleBuilder } from '../../../../../../net/fabricmc/fabric/api/gamerule/v1/GameRuleBuilder$BooleanRuleBuilder.d.ts'
import type { GameRuleBuilder$DoubleRuleBuilder } from '../../../../../../net/fabricmc/fabric/api/gamerule/v1/GameRuleBuilder$DoubleRuleBuilder.d.ts'
import type { GameRuleBuilder$EnumRuleBuilder } from '../../../../../../net/fabricmc/fabric/api/gamerule/v1/GameRuleBuilder$EnumRuleBuilder.d.ts'
import type { GameRuleBuilder$NumberRuleBuilder } from '../../../../../../net/fabricmc/fabric/api/gamerule/v1/GameRuleBuilder$NumberRuleBuilder.d.ts'
import type { FeatureFlagSet } from '../../../../../../net/minecraft/world/flag/FeatureFlagSet.d.ts'
import type { GameRuleCategory } from '../../../../../../net/minecraft/world/level/gamerules/GameRuleCategory.d.ts'
export class GameRuleBuilder$IntegerRuleBuilder extends GameRuleBuilder$NumberRuleBuilder<number> {
    static forBoolean(paramarg0: boolean): GameRuleBuilder$BooleanRuleBuilder;
    static forDouble(paramarg0: number): GameRuleBuilder$DoubleRuleBuilder;
    static forEnum(paramarg0: Object | null): GameRuleBuilder$EnumRuleBuilder<Object>;
    static forInteger(paramarg0: number): GameRuleBuilder$IntegerRuleBuilder;
    constructor(arg0: number)
    argumentType(arg0: ArgumentType<number>): GameRuleBuilder$IntegerRuleBuilder;
    category(arg0: GameRuleCategory): GameRuleBuilder$IntegerRuleBuilder;
    codec(arg0: Codec<number>): GameRuleBuilder$IntegerRuleBuilder;
    commandResultSupplier(arg0: (param0: number) => number): GameRuleBuilder$IntegerRuleBuilder;
    minValue(arg0: number): GameRuleBuilder$IntegerRuleBuilder;
    range(arg0: number, arg1: number): GameRuleBuilder$IntegerRuleBuilder;
    requiredFeatures(arg0: FeatureFlagSet): GameRuleBuilder$IntegerRuleBuilder;
}