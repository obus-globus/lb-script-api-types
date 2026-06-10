import type { ArgumentType } from '../../../../../../com/mojang/brigadier/arguments/ArgumentType.d.ts'
import type { Codec } from '../../../../../../com/mojang/serialization/Codec.d.ts'
import type { ToIntFunction } from '../../../../../../java/util/function/ToIntFunction.d.ts'
import type { Object } from '../../../../../../java/lang/Object.d.ts'
import type { GameRuleBuilder$BooleanRuleBuilder } from '../../../../../../net/fabricmc/fabric/api/gamerule/v1/GameRuleBuilder$BooleanRuleBuilder.d.ts'
import type { GameRuleBuilder$DoubleRuleBuilder } from '../../../../../../net/fabricmc/fabric/api/gamerule/v1/GameRuleBuilder$DoubleRuleBuilder.d.ts'
import type { GameRuleBuilder$EnumRuleBuilder } from '../../../../../../net/fabricmc/fabric/api/gamerule/v1/GameRuleBuilder$EnumRuleBuilder.d.ts'
import type { GameRuleBuilder$IntegerRuleBuilder } from '../../../../../../net/fabricmc/fabric/api/gamerule/v1/GameRuleBuilder$IntegerRuleBuilder.d.ts'
import type { FabricGameRuleType } from '../../../../../../net/fabricmc/fabric/impl/gamerule/rpc/FabricGameRuleType.d.ts'
import type { Identifier } from '../../../../../../net/minecraft/resources/Identifier.d.ts'
import type { FeatureFlagSet } from '../../../../../../net/minecraft/world/flag/FeatureFlagSet.d.ts'
import type { GameRule } from '../../../../../../net/minecraft/world/level/gamerules/GameRule.d.ts'
import type { GameRuleCategory } from '../../../../../../net/minecraft/world/level/gamerules/GameRuleCategory.d.ts'
import type { GameRuleType } from '../../../../../../net/minecraft/world/level/gamerules/GameRuleType.d.ts'
import type { GameRules$VisitorCaller } from '../../../../../../net/minecraft/world/level/gamerules/GameRules$VisitorCaller.d.ts'
export class GameRuleBuilder<T extends Object | number | string | boolean> extends Object {
    static forBoolean(paramarg0: boolean): GameRuleBuilder$BooleanRuleBuilder;
    static forDouble(paramarg0: number): GameRuleBuilder$DoubleRuleBuilder;
    static forEnum(paramarg0: Object | null): GameRuleBuilder$EnumRuleBuilder<Object>;
    static forInteger(paramarg0: number): GameRuleBuilder$IntegerRuleBuilder;
    constructor(arg0: T)
    // private acceptor: GameRules$VisitorCaller<T>;
    // private argumentType: ArgumentType<T>;
    // private category: GameRuleCategory;
    // private codec: Codec<T>;
    // private commandResultSupplier: (param0: T) => number;
    // private defaultValue: T;
    // private fabricType: FabricGameRuleType;
    // private requiredFeatures: FeatureFlagSet;
    // private type: GameRuleType;
    argumentType(arg0: ArgumentType<T>): GameRuleBuilder<T>;
    build(): GameRule<T>;
    buildAndRegister(arg0: Identifier): GameRule<T>;
    category(arg0: GameRuleCategory): GameRuleBuilder<T>;
    codec(arg0: Codec<T>): GameRuleBuilder<T>;
    commandResultSupplier(arg0: (param0: T) => number): GameRuleBuilder<T>;
    requiredFeatures(arg0: FeatureFlagSet): GameRuleBuilder<T>;
}