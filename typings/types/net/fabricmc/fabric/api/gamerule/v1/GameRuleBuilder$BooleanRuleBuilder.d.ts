import type { ArgumentType } from '../../../../../../com/mojang/brigadier/arguments/ArgumentType.d.ts'
import type { Codec } from '../../../../../../com/mojang/serialization/Codec.d.ts'
import type { ToIntFunction } from '../../../../../../java/util/function/ToIntFunction.d.ts'
import type { Enum } from '../../../../../../java/lang/Enum.d.ts'
import type { GameRuleBuilder } from '../../../../../../net/fabricmc/fabric/api/gamerule/v1/GameRuleBuilder.d.ts'
import type { GameRuleBuilder$DoubleRuleBuilder } from '../../../../../../net/fabricmc/fabric/api/gamerule/v1/GameRuleBuilder$DoubleRuleBuilder.d.ts'
import type { GameRuleBuilder$EnumRuleBuilder } from '../../../../../../net/fabricmc/fabric/api/gamerule/v1/GameRuleBuilder$EnumRuleBuilder.d.ts'
import type { GameRuleBuilder$IntegerRuleBuilder } from '../../../../../../net/fabricmc/fabric/api/gamerule/v1/GameRuleBuilder$IntegerRuleBuilder.d.ts'
import type { FeatureFlagSet } from '../../../../../../net/minecraft/world/flag/FeatureFlagSet.d.ts'
import type { GameRuleCategory } from '../../../../../../net/minecraft/world/level/gamerules/GameRuleCategory.d.ts'
export class GameRuleBuilder$BooleanRuleBuilder extends GameRuleBuilder<boolean> {
    static forBoolean(paramarg0: boolean): GameRuleBuilder$BooleanRuleBuilder;
    static forDouble(paramarg0: number): GameRuleBuilder$DoubleRuleBuilder;
    static forEnum<E extends Enum<E>>(paramarg0: E): GameRuleBuilder$EnumRuleBuilder<E>;
    static forInteger(paramarg0: number): GameRuleBuilder$IntegerRuleBuilder;
    constructor(arg0: boolean)
    argumentType(arg0: ArgumentType<boolean>): GameRuleBuilder$BooleanRuleBuilder;
    category(arg0: GameRuleCategory): GameRuleBuilder$BooleanRuleBuilder;
    codec(arg0: Codec<boolean>): GameRuleBuilder$BooleanRuleBuilder;
    commandResultSupplier(arg0: (param0: boolean) => number): GameRuleBuilder$BooleanRuleBuilder;
    requiredFeatures(arg0: FeatureFlagSet): GameRuleBuilder$BooleanRuleBuilder;
}