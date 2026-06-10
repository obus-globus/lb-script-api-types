import type { Object } from '../../../../../../java/lang/Object.d.ts'
import type { Event } from '../../../../../../net/fabricmc/fabric/api/event/Event.d.ts'
import type { GameRuleEvents$ValueUpdate } from '../../../../../../net/fabricmc/fabric/api/gamerule/v1/GameRuleEvents$ValueUpdate.d.ts'
import type { MinecraftServer } from '../../../../../../net/minecraft/server/MinecraftServer.d.ts'
import type { GameRule } from '../../../../../../net/minecraft/world/level/gamerules/GameRule.d.ts'
export class GameRuleEvents extends Object {
    static changeCallback(paramarg0: GameRule<Object>): Event<(param0: Object | null, param1: MinecraftServer) => void>;
    private constructor()
}