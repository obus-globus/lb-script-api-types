import type { Object } from '../../../../../java/lang/Object.d.ts'
import type { GameRule } from '../../../../../net/minecraft/world/level/gamerules/GameRule.d.ts'
export interface GameRuleTypeVisitor extends Object{
    visit<T extends Object | number | string | boolean>(gameRule: GameRule<T>): void;
    visitBoolean(gameRule: GameRule<boolean>): void;
    visitInteger(gameRule: GameRule<number>): void;
}