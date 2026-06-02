import type { Object } from '../../../../../java/lang/Object.d.ts'
import type { MinecraftApi } from '../../../../../net/minecraft/server/jsonrpc/internalapi/MinecraftApi.d.ts'
import type { ClientInfo } from '../../../../../net/minecraft/server/jsonrpc/methods/ClientInfo.d.ts'
import type { GameRulesService$GameRuleUpdate } from '../../../../../net/minecraft/server/jsonrpc/methods/GameRulesService$GameRuleUpdate.d.ts'
import type { GameRule } from '../../../../../net/minecraft/world/level/gamerules/GameRule.d.ts'
export class GameRulesService extends Object {
    static get(paramminecraftApi: MinecraftApi): (Object | null)[];
    static getTypedRule(paramminecraftApi: MinecraftApi, paramgameRule: GameRule<Object>, paramvalue: Object | null): GameRulesService$GameRuleUpdate<Object>;
    static update(paramminecraftApi: MinecraftApi, paramupdate: GameRulesService$GameRuleUpdate<Object>, paramclientInfo: ClientInfo): GameRulesService$GameRuleUpdate<Object>;
    constructor()
}