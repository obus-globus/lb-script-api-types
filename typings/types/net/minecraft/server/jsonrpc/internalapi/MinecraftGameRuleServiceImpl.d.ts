import type { Stream } from '../../../../../java/util/stream/Stream.d.ts'
import type { Object } from '../../../../../java/lang/Object.d.ts'
import type { DedicatedServer } from '../../../../../net/minecraft/server/dedicated/DedicatedServer.d.ts'
import type { JsonRpcLogger } from '../../../../../net/minecraft/server/jsonrpc/JsonRpcLogger.d.ts'
import type { MinecraftGameRuleService } from '../../../../../net/minecraft/server/jsonrpc/internalapi/MinecraftGameRuleService.d.ts'
import type { ClientInfo } from '../../../../../net/minecraft/server/jsonrpc/methods/ClientInfo.d.ts'
import type { GameRulesService$GameRuleUpdate } from '../../../../../net/minecraft/server/jsonrpc/methods/GameRulesService$GameRuleUpdate.d.ts'
import type { GameRule } from '../../../../../net/minecraft/world/level/gamerules/GameRule.d.ts'
import type { GameRules } from '../../../../../net/minecraft/world/level/gamerules/GameRules.d.ts'
export class MinecraftGameRuleServiceImpl extends Object implements MinecraftGameRuleService {
    constructor(server: DedicatedServer, jsonrpcLogger: JsonRpcLogger)
    // private gameRules: GameRules;
    // private jsonrpcLogger: JsonRpcLogger;
    // private server: DedicatedServer;
    getAvailableGameRules(): Stream<GameRule<Object>>;
    getRuleValue<T extends unknown>(gameRule: GameRule<T>): T;
    getTypedRule<T extends unknown>(gameRule: GameRule<T>, value: T): GameRulesService$GameRuleUpdate<T>;
    updateGameRule<T extends unknown>(update: GameRulesService$GameRuleUpdate<T>, clientInfo: ClientInfo): GameRulesService$GameRuleUpdate<T>;
}