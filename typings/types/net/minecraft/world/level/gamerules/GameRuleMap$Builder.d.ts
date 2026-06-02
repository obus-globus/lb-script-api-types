import type { Object } from '../../../../../java/lang/Object.d.ts'
import type { GameRule } from '../../../../../net/minecraft/world/level/gamerules/GameRule.d.ts'
import type { GameRuleMap } from '../../../../../net/minecraft/world/level/gamerules/GameRuleMap.d.ts'
export class GameRuleMap$Builder extends Object {
    constructor()
    // private map: Map<GameRule<Object>, Object>;
    build(): GameRuleMap;
    set<T extends Object | number | string | boolean>(gameRule: GameRule<T>, value: T): GameRuleMap$Builder;
}