import type { Object } from '../../../../../java/lang/Object.d.ts'
import type { Event } from '../../../../../net/fabricmc/fabric/api/event/Event.d.ts'
import type { GameRuleEvents$ValueUpdate } from '../../../../../net/fabricmc/fabric/api/gamerule/v1/GameRuleEvents$ValueUpdate.d.ts'
import type { MinecraftServer } from '../../../../../net/minecraft/server/MinecraftServer.d.ts'
import type { GameRule } from '../../../../../net/minecraft/world/level/gamerules/GameRule.d.ts'
export class GameRuleEventsImpl extends Object {
    static changeCallback<T extends unknown>(paramarg0: GameRule<T>): Event<(param0: T, param1: MinecraftServer) => void>;
    static getValueUpdate<T extends unknown>(paramarg0: GameRule<T>): Event<(param0: T, param1: MinecraftServer) => void>;
    private constructor()
}