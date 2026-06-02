import type { Object } from '../../../../../../java/lang/Object.d.ts'
import type { AbstractGameRulesScreen$RuleEntry } from '../../../../../../net/minecraft/client/gui/screens/worldselection/AbstractGameRulesScreen$RuleEntry.d.ts'
import type { GameRules } from '../../../../../../net/minecraft/world/level/gamerules/GameRules.d.ts'
export interface AbstractGameRulesScreenAccessor extends Object{
    callClearInvalid(arg0: AbstractGameRulesScreen$RuleEntry): void;
    callMarkInvalid(arg0: AbstractGameRulesScreen$RuleEntry): void;
    getGameRules(): GameRules;
}