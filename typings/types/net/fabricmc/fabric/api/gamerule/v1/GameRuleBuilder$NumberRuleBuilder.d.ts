import type { Enum } from '../../../../../../java/lang/Enum.d.ts'
import type { Number } from '../../../../../../java/lang/Number.d.ts'
import type { GameRuleBuilder } from '../../../../../../net/fabricmc/fabric/api/gamerule/v1/GameRuleBuilder.d.ts'
import type { GameRuleBuilder$BooleanRuleBuilder } from '../../../../../../net/fabricmc/fabric/api/gamerule/v1/GameRuleBuilder$BooleanRuleBuilder.d.ts'
import type { GameRuleBuilder$DoubleRuleBuilder } from '../../../../../../net/fabricmc/fabric/api/gamerule/v1/GameRuleBuilder$DoubleRuleBuilder.d.ts'
import type { GameRuleBuilder$EnumRuleBuilder } from '../../../../../../net/fabricmc/fabric/api/gamerule/v1/GameRuleBuilder$EnumRuleBuilder.d.ts'
import type { GameRuleBuilder$IntegerRuleBuilder } from '../../../../../../net/fabricmc/fabric/api/gamerule/v1/GameRuleBuilder$IntegerRuleBuilder.d.ts'
export abstract class GameRuleBuilder$NumberRuleBuilder<T extends Number> extends GameRuleBuilder<T> {
    static forBoolean(paramarg0: boolean): GameRuleBuilder$BooleanRuleBuilder;
    static forDouble(paramarg0: number): GameRuleBuilder$DoubleRuleBuilder;
    static forEnum<E extends Enum<E>>(paramarg0: E): GameRuleBuilder$EnumRuleBuilder<E>;
    static forInteger(paramarg0: number): GameRuleBuilder$IntegerRuleBuilder;
    constructor(arg0: T)
    minValue(arg0: T): GameRuleBuilder$NumberRuleBuilder<T>;
    range(arg0: T, arg1: T): GameRuleBuilder$NumberRuleBuilder<T>;
}