import type { Codec } from '../../../../../com/mojang/serialization/Codec.d.ts'
import type { Record } from '../../../../../java/lang/Record.d.ts'
import type { Object } from '../../../../../java/lang/Object.d.ts'
import type { FabricGameRuleType } from '../../../../../net/fabricmc/fabric/impl/gamerule/rpc/FabricGameRuleType.d.ts'
import type { FabricTypedRule } from '../../../../../net/fabricmc/fabric/impl/gamerule/rpc/FabricTypedRule.d.ts'
import type { GameRule } from '../../../../../net/minecraft/world/level/gamerules/GameRule.d.ts'
export class GameRulesService$GameRuleUpdate<T extends Object | number | string | boolean> extends Record implements FabricTypedRule {
    static CODEC: Codec<Object>;
    static TYPED_CODEC: Codec<Object>;
    constructor(gameRule: GameRule<T>, value: T)
    // private fabricGameRuleType: FabricGameRuleType;
    // private gameRule: GameRule<T>;
    // private value: T;
    equals(o: Object | null): boolean;
    gameRule(): GameRule<T>;
    getFabricType(): FabricGameRuleType;
    hashCode(): number;
    setFabricType(arg0: FabricGameRuleType): void;
    toString(): string;
    value(): T;
}