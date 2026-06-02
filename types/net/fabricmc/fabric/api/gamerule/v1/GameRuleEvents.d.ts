import type { Object } from '../../../../../../java/lang/Object.d.ts'
import type { Event } from '../../../../../../net/fabricmc/fabric/api/event/Event.d.ts'
import type { GameRule } from '../../../../../../net/minecraft/world/level/gamerules/GameRule.d.ts'
export class GameRuleEvents extends Object {
    static changeCallback(paramarg0: GameRule<Object>): Event<Object>;
    private constructor()
}