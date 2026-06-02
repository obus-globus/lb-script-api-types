import type { Object } from '../../../../../java/lang/Object.d.ts'
import type { GameRule } from '../../../../../net/minecraft/world/level/gamerules/GameRule.d.ts'
import type { GameRuleTypeVisitor } from '../../../../../net/minecraft/world/level/gamerules/GameRuleTypeVisitor.d.ts'
export interface GameRules$VisitorCaller<T extends Object | number | string | boolean> extends Object{
    call(visitor: GameRuleTypeVisitor, key: GameRule<T>): void;
}