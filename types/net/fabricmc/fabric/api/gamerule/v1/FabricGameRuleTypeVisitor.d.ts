import type { Object } from '../../../../../../java/lang/Object.d.ts'
import type { GameRule } from '../../../../../../net/minecraft/world/level/gamerules/GameRule.d.ts'
import type { GameRuleTypeVisitor } from '../../../../../../net/minecraft/world/level/gamerules/GameRuleTypeVisitor.d.ts'
export interface FabricGameRuleTypeVisitor extends Object, GameRuleTypeVisitor{
    visit(gameRule: GameRule<T>): void;
    visitBoolean(gameRule: GameRule<boolean>): void;
    visitDouble(arg0: GameRule<number>): void;
    visitEnum(arg0: GameRule<E>): void;
    visitInteger(gameRule: GameRule<number>): void;
}