import type { Object } from '../../../../../java/lang/Object.d.ts'
import type { MinecraftApi } from '../../../../../net/minecraft/server/jsonrpc/internalapi/MinecraftApi.d.ts'
import type { ClientInfo } from '../../../../../net/minecraft/server/jsonrpc/methods/ClientInfo.d.ts'
import type { GameRulesService$GameRuleUpdate } from '../../../../../net/minecraft/server/jsonrpc/methods/GameRulesService$GameRuleUpdate.d.ts'
import type { GameRule } from '../../../../../net/minecraft/world/level/gamerules/GameRule.d.ts'
export class GameRulesService extends Object {
    static get(paramminecraftApi: MinecraftApi): GameRulesService$GameRuleUpdate<Object>[];
    static getTypedRule<T extends unknown>(paramminecraftApi: MinecraftApi, paramgameRule: GameRule<T>, paramvalue: T): GameRulesService$GameRuleUpdate<T>;
    static update<T extends unknown>(paramminecraftApi: MinecraftApi, paramupdate: GameRulesService$GameRuleUpdate<T>, paramclientInfo: ClientInfo): GameRulesService$GameRuleUpdate<T>;
    constructor()
}