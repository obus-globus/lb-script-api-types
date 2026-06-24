import type { Stream } from '../../../../../java/util/stream/Stream.d.ts'
import type { Object } from '../../../../../java/lang/Object.d.ts'
import type { DedicatedServer } from '../../../../../net/minecraft/server/dedicated/DedicatedServer.d.ts'
import type { JsonRpcLogger } from '../../../../../net/minecraft/server/jsonrpc/JsonRpcLogger.d.ts'
import type { MinecraftGameRuleService } from '../../../../../net/minecraft/server/jsonrpc/internalapi/MinecraftGameRuleService.d.ts'
import type { ClientInfo } from '../../../../../net/minecraft/server/jsonrpc/methods/ClientInfo.d.ts'
import type { GameRulesService$GameRuleUpdate } from '../../../../../net/minecraft/server/jsonrpc/methods/GameRulesService$GameRuleUpdate.d.ts'
import type { NotificationManager } from '../../../../../net/minecraft/server/notifications/NotificationManager.d.ts'
import type { GameRule } from '../../../../../net/minecraft/world/level/gamerules/GameRule.d.ts'
export class MinecraftGameRuleServiceImpl extends Object implements MinecraftGameRuleService {
    constructor(notificationManager: NotificationManager, jsonrpcLogger: JsonRpcLogger)
    // private jsonrpcLogger: JsonRpcLogger;
    // private notificationManager: NotificationManager;
    getAvailableGameRules(): Stream<GameRule<Object>>;
    getRuleValue<T extends unknown>(gameRule: GameRule<T>): T;
    getTypedRule<T extends unknown>(gameRule: GameRule<T>, value: T): GameRulesService$GameRuleUpdate<T>;
    // private server(): DedicatedServer;
    updateGameRule<T extends unknown>(update: GameRulesService$GameRuleUpdate<T>, clientInfo: ClientInfo): GameRulesService$GameRuleUpdate<T>;
}